module.exports = function () {
  return `
// === TOURNAMENT ===
genSchedule(){const t=Object.keys(this.state.teams);this.state.schedule=[];for(let i=0;i<t.length;i++)for(let j=i+1;j<t.length;j++){this.state.schedule.push({t1:t[i],t2:t[j],result:null,s1:0,w1:0,s2:0,w2:0});this.state.schedule.push({t1:t[j],t2:t[i],result:null,s1:0,w1:0,s2:0,w2:0})}this.save()},
simTournament(){if(!this.state.schedule.length)this.genSchedule();let idx=0;const iv=setInterval(()=>{while(idx<this.state.schedule.length&&this.state.schedule[idx].result)idx++;if(idx>=this.state.schedule.length){clearInterval(iv);this.toast('🏆 League Complete!','success');this.save();this.ui();return}this.simMatch(this.state.schedule[idx]);this.state.played=this.state.schedule.filter(m=>m.result).length;idx++;if(this.state.played%5===0)this.ui()},30)},
simSingleMatch(idx){if(!this.state.schedule||!this.state.schedule[idx]||this.state.schedule[idx].result)return;this.simMatch(this.state.schedule[idx]);this.state.played=this.state.schedule.filter(m=>m.result).length;this.toast('✅ Simulated Match #'+(idx+1),'success');this.save();this.ui();},
playSelectedMatch(idx){if(!this.state.schedule||!this.state.schedule[idx]||this.state.schedule[idx].result)return;const m=this.state.schedule[idx];document.getElementById('mc-team1').value=m.t1;document.getElementById('mc-team2').value=m.t2;this.state.currentSchIdx=idx;this.save();this.go('match');setTimeout(()=>this.renderMCSetup(),100);this.toast('Match queued in Match Centre!','info');},
simMatch(m){
  const tID1=m.t1,tID2=m.t2;
  const gSq=id=>(this.state.teams[id]?.squad||[]).map(sid=>this.state.playerDataset.find(p=>p.id===sid)).filter(Boolean);
  let s1=gSq(tID1),s2=gSq(tID2);
  if(!s1.length||!s2.length){m.result='ABD';return}
  // Fatigue logic: if playing too many matches, BWL get fatigue
  [...s1,...s2].forEach(p=>{if(p.role==='BWL'&&Math.random()<0.3)p.fatigue=Math.min(100,p.fatigue+20);else p.fatigue=Math.max(0,p.fatigue-10)});
  
  // Structured Playing XI selection (max 4 OS, role balance, sorted by batting order)
  const xi=sq=>{const sorted=[...sq].sort((a,b)=>b.skill-a.skill);let os=0;const p11=[],bench=[];const needs={BAT:4,WK:1,AR:3,BWL:3};
    sorted.forEach(p=>{if(p11.length<11&&needs[p.role]>0&&(p.nation==='IND'||os<4)){p11.push(p);needs[p.role]--;if(p.nation!=='IND')os++;}else bench.push(p)});
    bench.forEach(p=>{if(p11.length<11&&!p11.includes(p)&&(p.nation==='IND'||os<4)){p11.push(p);if(p.nation!=='IND')os++;}});
    const order={'BAT':1,'WK':2,'AR':3,'BWL':4};p11.sort((a,b)=>order[a.role]-order[b.role]||b.skill-a.skill);
    return{p11,bench:bench.filter(b=>!p11.includes(b))};
  };
  const t1Data=xi(s1),t2Data=xi(s2);

  const sk=sq=>sq.reduce((a,p)=>a+p.skill,0)/sq.length;
  const pitch=TM[m.t1]?.pitch||'flat';
  // Innings 1
  const i1=this.runInn(t1Data.p11,t2Data.p11,sk(t1Data.p11),sk(t2Data.p11),Infinity,t1Data.bench,t2Data.bench,false,pitch);
  // Innings 2 - chasing
  const i2=this.runInn(t2Data.p11,t1Data.p11,sk(t2Data.p11),sk(t1Data.p11),i1.t+1,t2Data.bench,t1Data.bench,true,pitch);

  
  m.s1=i1.t;m.w1=i1.w;m.s2=i2.t;m.w2=i2.w;
  m.result=m.s1>m.s2?m.t1:(m.s2>m.s1?m.t2:'TIE');
  if(m.result==='TIE')this.runSuperOver(m);
  this.checkInjuries();
  
  // Update Form
  [...s1,...s2].forEach(p=>{
    if(p.tRuns>30){p.form=Math.min(100,p.form+15);p.fp+=p.tRuns}
    else if(p.tRuns<5&&p.role==='BAT')p.form=Math.max(0,p.form-10);
    if(p.tWkts>=2){p.form=Math.min(100,p.form+20);p.fp+=p.tWkts*25}
    else if(p.tWkts===0&&p.role==='BWL')p.form=Math.max(0,p.form-5);
    if(p.form>=80)p.morale='🔥 ON FIRE';else if(p.form<=25)p.morale='❄️ COLD';else p.morale='NORMAL';
    if(!p._formHistory)p._formHistory=[];
    p._formHistory.push(p.form);
    if(p._formHistory.length>10)p._formHistory.shift();
  });
  
  this.state.stats.runs+=i1.t+i2.t;this.state.stats.wkts+=i1.w+i2.w;this.state.stats.sixes+=i1.s+i2.s;
  
  // Try generating a trade if user is involved
  if((m.t1===this.state.teamId||m.t2===this.state.teamId)&&Math.random()<0.1)this.generateTradeOffer(this.state.teamId);
},
runInn(batTeam,bowlTeam,bS,oS,tgt,batBench,bowlBench,isChasing,pitch='flat'){
  let t=0,w=0,b=0,s6=0,bi=0;
  
  const isCap=p=>['MS Dhoni','Rohit Sharma','Pat Cummins','Hardik Pandya'].includes(p.name);
  const batCapBoost=batTeam.some(isCap)?5:0;
  const bowlCapBoost=bowlTeam.some(isCap)?5:0;

  let impactSubUsedBat=false;
  
  // Designate bowlers and track overs safely
  let bowStats = bowlTeam.map((p,i)=>({p,i,o:0}));
  let mainBowlers = bowStats.filter(x=>x.p.role==='BWL'||x.p.role==='AR');
  if(!mainBowlers.length) mainBowlers=bowStats;
  let currB=mainBowlers[Math.floor(Math.random()*mainBowlers.length)];

  while(b<120&&w<10&&t<=tgt){
    if(isChasing&&w>=3&&b<60&&!impactSubUsedBat&&batBench.length){
      const newBat=batBench.sort((x,y)=>y.batRating-x.batRating)[0];
      if(newBat&&newBat.role==='BAT'){batTeam.push(newBat);impactSubUsedBat=true;newBat._impact=true;}
    }
    
    const batsman=batTeam[bi%batTeam.length];
    const bowler=currB.p;
    
    const teamBatRating = (bS / 100);
    const teamBowlRating = (oS / 100);
    
    const batFormMod=(batsman?.form-50)/5;
    const bowlFormMod=(bowler?.form-50)/5;
    const bowlFatigueMod=-(bowler?.fatigue||0)/10;
    
    let bBst=0,wBst=0;
    if(pitch==='flat')bBst=15;
    else if(pitch==='spin'&&(bowler?.role==='BWL'||bowler?.role==='AR')&&b>36)wBst=15;
    else if(pitch==='green'&&b<36&&(bowler?.role==='BWL'||bowler?.role==='AR'))wBst=15;
    
    const batSkill = ((batsman?.batRating||30) + batFormMod + batCapBoost + bBst) / 100;
    const bowlSkill = ((bowler?.bowlRating||30) + bowlFormMod + bowlFatigueMod + bowlCapBoost + wBst) / 100;
    
    const diff = (batSkill - bowlSkill);
    const r = Math.random();
    
    // Wicket probability: Balanced for 180-200 avg scores
    const wP = Math.max(.015, 0.045 - diff*0.04 + teamBowlRating*0.02);
    
    // RATING-BASED SCALING for scoring probabilities (180-200 average)
    const scaleFactor = (teamBatRating * (1.3 - teamBowlRating / 2)); 
    
    const baseSixP = 0.055 + (batSkill * 0.16);
    const sP = Math.min(0.25, baseSixP * scaleFactor); 
    
    const baseFourP = 0.11 + (batSkill * 0.20);
    const fP = Math.min(0.35, baseFourP * scaleFactor);
    
    const runP = 0.30 + diff*0.06;
    
    if(r < wP){w++; if(bowler){bowler.tWkts++; bowler.fp+=25;} bi++}
    else if(r < wP + sP){t+=6; s6++; if(batsman){batsman.tRuns+=6; batsman.t6s++; batsman.tBalls++; batsman.fp+=8}}
    else if(r < wP + sP + fP){t+=4; if(batsman){batsman.tRuns+=4; batsman.tBalls++; batsman.fp+=5}}
    else if(r < wP + sP + fP + runP){
      const bigRun = (batSkill > 0.8 && r < 0.05) ? 3 : (Math.random() > .6 ? 2 : 1);
      t+=bigRun; if(batsman){batsman.tRuns+=bigRun; batsman.tBalls++; batsman.fp+=bigRun} if(bigRun%2===1)bi++
    }
    else{if(batsman)batsman.tBalls++}
    
    b++;
    if(b%6===0){
      currB.o++;
      let valid = mainBowlers.filter(x=>x.i!==currB.i && x.o<4);
      if(!valid.length) valid = bowStats.filter(x=>x.i!==currB.i); // use anyone if out of valid options
      if(valid.length) currB = valid[Math.floor(Math.random()*valid.length)];
    }
  }
  return{t,w,b,s:s6};
},
generateTradeOffer(userTeam){
  if(this.state.tradeCache.length>0) return; // one trade per time
  const myTm=this.state.teams[userTeam];
  const otherTms=Object.values(this.state.teams).filter(x=>x.id!==userTeam&&x.squad.length>10);
  if(!myTm||myTm.squad.length<10||!otherTms.length) return;
  const oppTm=otherTms[Math.floor(Math.random()*otherTms.length)];
  const myP=this.state.playerDataset.find(x=>x.id===myTm.squad[Math.floor(Math.random()*myTm.squad.length)]);
  const theirP=this.state.playerDataset.find(x=>x.id===oppTm.squad[Math.floor(Math.random()*oppTm.squad.length)]);
  if(!myP||!theirP||myP.id===theirP.id) return;
  // Make fair trade if ratings are within 15 points
  if(Math.abs(myP.skill-theirP.skill)>15) return;
  this.state.tradeCache=[{give:myP.id,get:theirP.id,from:oppTm.id,to:userTeam}];
  const m=document.getElementById('toast-box');if(m)this.toast('🚨 TRADE OFFER RECEIVED! Check Dashboard.','success');
  this.save();
},
resolveTrade(accept){
  const t=this.state.tradeCache[0];if(!t)return;
  if(accept){
    const tm1=this.state.teams[t.from],tm2=this.state.teams[t.to];
    tm1.squad=tm1.squad.filter(x=>x!==t.get);tm1.squad.push(t.give);
    tm2.squad=tm2.squad.filter(x=>x!==t.give);tm2.squad.push(t.get);
    this.toast('✅ Trade Accepted!','success');
  }else{
    this.toast('❌ Trade Rejected','error');
  }
  this.state.tradeCache=[];this.save();this.ui();
},
renderTradeWindow(){
  const tc=document.getElementById('trade-container');if(!tc)return;
  if(!this.state.tradeCache.length){tc.innerHTML='';return}
  const t=this.state.tradeCache[0];
  const pg=this.state.playerDataset.find(x=>x.id===t.give);
  const pt=this.state.playerDataset.find(x=>x.id===t.get);
  tc.innerHTML='<div class="trade-card"><div><div style="font-size:.75rem;color:var(--text3);margin-bottom:4px">🚨 '+TM[t.from].name+' proposed a trade</div><div style="display:flex;align-items:center;gap:12px"><div style="text-align:center"><img src="'+pt.img+'" style="width:40px;border-radius:50%;border:2px solid var(--green)"><div style="font-size:.8rem;font-weight:700">Receive '+pt.name+'</div></div><span style="font-size:1.5rem;color:var(--text3)">⇄</span><div style="text-align:center"><img src="'+pg.img+'" style="width:40px;border-radius:50%;border:2px solid var(--red)"><div style="font-size:.8rem;font-weight:700">Give '+pg.name+'</div></div></div></div><div style="display:flex;flex-direction:column;gap:8px"><button class="btn btn-sm" onclick="app.resolveTrade(true)">✔️ Accept</button><button class="btn btn-outline btn-sm" style="border-color:var(--red);color:var(--red)" onclick="app.resolveTrade(false)">❌ Reject</button></div></div>';
},
openPlayerModal(pid){
  const p=this.state.playerDataset.find(x=>x.id===pid);if(!p)return;
  document.getElementById('pm-img').src=p.img;
  document.getElementById('pm-name').innerText=p.name;
  document.getElementById('pm-role').innerText=p.role+' | '+(p.nation==='IND'?'🇮🇳 IND':'🌍 OS')+(p._impact?'<span class="impact-badge">IMPACT</span>':'');
  document.getElementById('pm-form').innerHTML=(p.form>70?'<span class="form-hot">🔥 HOT FORM ('+p.form+')</span>':p.form<30?'<span class="form-cold">❄️ COLD FORM ('+p.form+')</span>':'<span style="font-size:.75rem;color:var(--text3)">Form: '+p.form+'</span>')+(p.fatigue>50?' <span class="form-cold">🥵 FATIGUED</span>':'')+' <span style="font-size:.75rem;margin-left:8px;color:var(--gold)">'+(p.morale||'')+'</span>';
  document.getElementById('pm-runs').innerText=p.tRuns;
  document.getElementById('pm-wkts').innerText=p.tWkts;
  document.getElementById('pm-6s').innerText=p.t6s;
  document.getElementById('pm-fp').innerText=p.fp;
  const tmId=Object.keys(this.state.teams).find(t=>this.state.teams[t].squad.includes(pid));
  const tc=document.getElementById('pm-trade-container');
  if(tc){if(tmId&&tmId!==this.state.teamId&&this.state.teamId){tc.style.display='block';tc.innerHTML='<button class="btn btn-outline" style="border-color:var(--blue);color:var(--blue)" onclick="app.openUserTradeModal(\\''+pid+'\\',\\''+tmId+'\\')">🔀 Propose Trade</button>'}else tc.style.display='none'}
  document.getElementById('modal-player').style.display='flex';
  const ctx=document.getElementById('playerRadar');
  if(this.charts.radar)this.charts.radar.destroy();
  this.charts.radar=new Chart(ctx,{type:'radar',data:{labels:['Batting','Bowling','Form','Consistency','Impact'],datasets:[{label:p.name,data:[p.batRating,p.bowlRating,p.form,Math.max(10,100-(p.fatigue||0)),p.skill],backgroundColor:'rgba(245, 166, 35, 0.2)',borderColor:'#f5a623',pointBackgroundColor:'#f5a623',pointBorderColor:'#fff',pointHoverBackgroundColor:'#fff',pointHoverBorderColor:'#f5a623'}]},options:{scales:{r:{angleLines:{color:'rgba(255,255,255,0.1)'},grid:{color:'rgba(255,255,255,0.1)'},pointLabels:{color:'#8892aa',font:{size:11}},ticks:{display:false,min:0,max:100}}},plugins:{legend:{display:false}}}});
},
openUserTradeModal(targetPid, targetTeam){
  const pt=this.state.playerDataset.find(x=>x.id===targetPid);if(!pt)return;
  document.getElementById('modal-player').style.display='none';
  document.getElementById('ut-target-img').innerHTML='<img src="'+pt.img+'" style="width:60px;height:60px;border-radius:50%;border:2px solid var(--green)"><div style="font-size:.8rem;font-weight:700">Receive '+pt.name+'</div>';
  const myTm=this.state.teams[this.state.teamId];if(!myTm)return;
  const mySq=myTm.squad.map(sid=>this.state.playerDataset.find(p=>p.id===sid)).filter(Boolean).sort((a,b)=>b.skill-a.skill);
  document.getElementById('ut-squad-list').innerHTML=mySq.map(p=>'<div class="sq-card" style="cursor:pointer" onclick="app.proposeUserTrade(\\''+targetPid+'\\',\\''+targetTeam+'\\',\\''+p.id+'\\')"><div class="sq-av"><img src="'+p.img+'"></div><div style="flex:1"><div style="font-weight:600;font-size:.82rem">'+p.name+'</div><div style="font-size:.7rem;color:var(--text2)">'+p.role+' <span class="badge '+(p.nation==='IND'?'badge-india':'badge-overseas')+'">'+p.nation+'</span></div></div><div style="color:var(--blue)">Select 🔀</div></div>').join('');
  document.getElementById('modal-user-trade').style.display='flex';
},
proposeUserTrade(targetPid, targetTeam, myPid){
  const pt=this.state.playerDataset.find(x=>x.id===targetPid);
  const pm=this.state.playerDataset.find(x=>x.id===myPid);
  if(!pt||!pm)return;
  document.getElementById('modal-user-trade').style.display='none';
  // AI Logic: Will they accept?
  // 1. Skill difference less than 15
  const diff=pm.skill-pt.skill;
  const targetTm=this.state.teams[targetTeam];
  let accept=false;
  if(diff>=-5){accept=true;}// if we give them someone equal or better
  else if(diff>=-15){
    // if slightly worse, check if it fills a role limit
    const sq=(targetTm.squad||[]).map(sid=>this.state.playerDataset.find(p=>p.id===sid)).filter(Boolean);
    const rc={BAT:0,BWL:0,AR:0,WK:0};sq.forEach(x=>rc[x.role]++);
    if(pm.role!==pt.role && rc[pm.role]<=4) accept=true; // fills a gap
    if(Math.random()>0.7) accept=true; // tiny random chance
  }
  // Verify Overseas rule
  if(accept && pm.nation!=='IND' && pt.nation==='IND' && targetTm.overseas>=8) {accept=false;this.toast(targetTeam+' rejects: Overseas limit reached.','error');return;}
  
  if(accept){
    this.toast('✅ '+targetTeam+' accepted your trade for '+pt.name+'!','success');
    SND.play('sold');
    const myTm=this.state.teams[this.state.teamId];
    myTm.squad=myTm.squad.filter(x=>x!==myPid);myTm.squad.push(targetPid);
    if(pm.nation!=='IND')myTm.overseas--;if(pt.nation!=='IND')myTm.overseas++;
    targetTm.squad=targetTm.squad.filter(x=>x!==targetPid);targetTm.squad.push(myPid);
    if(pt.nation!=='IND')targetTm.overseas--;if(pm.nation!=='IND')targetTm.overseas++;
    this.save();this.ui();
  }else{
    this.toast('❌ '+targetTeam+' rejects the offer. Try a better player!','error');
  }
},

// PLAYOFFS
getStandings(){const stats={};this.config.teams.forEach(t=>stats[t]={team:t,p:0,w:0,l:0,pts:0,nrr:0,rf:0,rb:0,af:0,ab:0});this.state.schedule.forEach(m=>{if(!m.result||m.result==='ABD'||m.result==='TIE')return;stats[m.t1].p++;stats[m.t2].p++;if(m.result===m.t1){stats[m.t1].w++;stats[m.t1].pts+=2;stats[m.t2].l++}else{stats[m.t2].w++;stats[m.t2].pts+=2;stats[m.t1].l++}stats[m.t1].rf+=m.s1;stats[m.t1].rb+=120;stats[m.t1].af+=m.s2;stats[m.t1].ab+=120;stats[m.t2].rf+=m.s2;stats[m.t2].rb+=120;stats[m.t2].af+=m.s1;stats[m.t2].ab+=120});Object.values(stats).forEach(s=>{s.nrr=s.rb&&s.ab?((s.rf/s.rb)-(s.af/s.ab))*6:0});return Object.values(stats).sort((a,b)=>b.pts-a.pts||b.nrr-a.nrr)},
runPlayoffs(){const s=this.getStandings();if(s[0].p===0){this.toast('Play league first!','error');return}const sim=(t1,t2)=>{const m={t1,t2,result:null,s1:0,w1:0,s2:0,w2:0};this.simMatch(m);return m};const q1=sim(s[0].team,s[1].team);const elim=sim(s[2].team,s[3].team);const q2=sim(q1.result===q1.t1?q1.t2:q1.t1,elim.result);const final=sim(q1.result,q2.result);this.state.playoffs={q1,elim,q2,final};this.save();this.ui();confetti();this.toast('🏆 '+TM[final.result]?.l+' '+final.result+' WINS IPL 2026!','success');SND.play('sold')},

// MATCH CENTRE
renderMCSetup(){const t1=document.getElementById('mc-team1'),t2=document.getElementById('mc-team2');if(!t1||!t1.options.length){this.config.teams.forEach(t=>{t1.add(new Option(TM[t].l+' '+t,t));t2.add(new Option(TM[t].l+' '+t,t))});t2.selectedIndex=1}const gSq=id=>(this.state.teams[id]?.squad||[]).map(sid=>this.state.playerDataset.find(p=>p.id===sid)).filter(Boolean);const xi=(sq,elId)=>{const el=document.getElementById(elId);if(!el)return;el.innerHTML=sq.slice(0,11).map(p=>'<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--border)"><img src="'+p.img+'" style="width:28px;height:28px;border-radius:50%"><span style="font-size:.82rem;font-weight:600">'+p.name+'</span><span class="badge '+(p.nation==='IND'?'badge-india':'badge-overseas')+'">'+p.role+'</span></div>').join('')||'<p style="color:var(--text3)">No squad</p>'};document.getElementById('mc-t1-name').innerText=TM[t1.value]?.l+' '+t1.value;document.getElementById('mc-t2-name').innerText=TM[t2.value]?.l+' '+t2.value;xi(gSq(t1.value),'mc-t1-xi');xi(gSq(t2.value),'mc-t2-xi');
const h2h=this.getH2H(t1.value,t2.value);
const h2hEl=document.getElementById('mc-h2h');if(h2hEl)h2hEl.innerHTML='<b>H2H:</b> '+t1.value+' ('+h2h.t1w+') - '+t2.value+' ('+h2h.t2w+') | Total: '+h2h.total;
},
preMatchCheck(){
  const t1=document.getElementById('mc-team1').value,t2=document.getElementById('mc-team2').value;
  if(t1===this.state.teamId||t2===this.state.teamId){this._drTeam=t1===this.state.teamId?t1:t2;this._drSel=[];this.renderDr();document.getElementById('modal-dressing').style.display='flex'}
  else this.startBBB(null);
},
renderDr(){
  document.getElementById('dr-team-name').innerText=TM[this._drTeam].l+' '+this._drTeam;
  const sq=this.state.teams[this._drTeam].squad.map(sid=>this.state.playerDataset.find(p=>p.id===sid)).filter(Boolean).sort((a,b)=>b.skill-a.skill);
  let os=0,wk=0;this._drSel.forEach(p=>{if(p.nation!=='IND')os++;if(p.role==='WK')wk++;});
  document.getElementById('dr-count').innerText=this._drSel.length+'/11';document.getElementById('dr-os-count').innerText=os;document.getElementById('dr-os-count').style.color=os>4?'#ff6b6b':'inherit';
  document.getElementById('dr-wk-count').innerText=wk;document.getElementById('dr-wk-count').style.color=wk<1?'#ff6b6b':'inherit';
  document.getElementById('dr-start-btn').disabled=!(this._drSel.length===11&&os<=4&&wk>=1);
  document.getElementById('dr-squad-list').innerHTML=sq.map(p=>{const sel=this._drSel.includes(p);return '<div class="sq-card" style="cursor:pointer;border:'+(sel?'2px solid var(--gold)':'1px solid var(--border)')+';background:'+(sel?'rgba(245,166,35,0.1)':'var(--glass2)')+'" onclick="app.toggleDrPlayer(\\''+p.id+'\\')"><div class="sq-av"><img src="'+p.img+'"></div><div style="flex:1"><div style="font-weight:600;font-size:.82rem">'+p.name+'</div><div style="font-size:.7rem;color:var(--text2)">'+p.role+' <span class="badge '+(p.nation==='IND'?'badge-india':'badge-overseas')+'">'+p.nation+'</span></div></div>'+(sel?'<div style="color:var(--gold)">✅</div>':'')+'</div>'}).join('');
},
toggleDrPlayer(pid){const p=this.state.playerDataset.find(x=>x.id===pid);if(!p)return;const idx=this._drSel.indexOf(p);if(idx>-1)this._drSel.splice(idx,1);else if(this._drSel.length<11)this._drSel.push(p);else this.toast('11 players max!','error');this.renderDr()},
finalizeUserXI(){document.getElementById('modal-dressing').style.display='none';const order={'BAT':1,'WK':2,'AR':3,'BWL':4};const finalXi=[...this._drSel].sort((a,b)=>order[a.role]-order[b.role]||b.skill-a.skill);this.startBBB(finalXi)},
startBBB(userXi){const t1=document.getElementById('mc-team1').value,t2=document.getElementById('mc-team2').value;
  const gSq=id=>(this.state.teams[id]?.squad||[]).map(sid=>this.state.playerDataset.find(p=>p.id===sid)).filter(Boolean);
  const xi=sq=>{const sorted=[...sq].sort((a,b)=>b.skill-a.skill);let os=0;const p11=[];const needs={BAT:4,WK:1,AR:3,BWL:3};
    sorted.forEach(p=>{if(p11.length<11&&needs[p.role]>0&&(p.nation==='IND'||os<4)){p11.push(p);needs[p.role]--;if(p.nation!=='IND')os++;}});
    sorted.forEach(p=>{if(p11.length<11&&!p11.includes(p)&&(p.nation==='IND'||os<4)){p11.push(p);if(p.nation!=='IND')os++;}});
    const order={'BAT':1,'WK':2,'AR':3,'BWL':4};p11.sort((a,b)=>order[a.role]-order[b.role]||b.skill-a.skill);return p11;
  };
  const batSq=userXi&&(t1===this.state.teamId)?userXi:xi(gSq(t1));
  const bowlSq=userXi&&(t2===this.state.teamId)?userXi:xi(gSq(t2));
  const bs=sq=>sq.map(p=>({id:p.id,name:p.name,r:0,b:0,four:0,six:0,out:false}));
  const bows=sq=>sq.map(p=>({id:p.id,name:p.name,o:0,m:0,r:0,w:0,role:p.role}));
  let maxO=20; let rain=Math.random()<0.03; if(rain)maxO=10+Math.floor(Math.random()*5);
  
  this.state.currentMatch={t1,t2,bat:batSq,bowl:bowlSq,batS:bs(batSq),bowlS:bows(bowlSq),score:0,wkts:0,balls:0,innings:1,target:Infinity,s1:0,w1:0,comm:[],overs:[],striker:0,nonStriker:1,currBowler:10,isPaused:false,fow:[],maxOvers:maxO,maxBowlO:Math.ceil(maxO/5)};
  document.getElementById('mc-setup').style.display='none';document.getElementById('mc-live').style.display='block';
  if(rain)this.toast('🌧️ DLS INTERRUPT: Match reduced to '+maxO+' overs!','error');
  this.updateMCUI();
},
nextBall(){const m=this.state.currentMatch;if(!m||m.isPaused)return;
  const striker=m.bat[m.striker]||m.bat[0];const currB=m.bowl[m.currBowler]||m.bowl[0];
  const bS=striker.batRating||30;const oS=currB.bowlRating||30;
  const d=(bS-oS)/100,r=Math.random();const wP=Math.max(.015,.055-d*.06),sP=Math.min(.22,.06+(bS/100)*.19),fP=Math.min(.32,.12+(bS/100)*.16);
  let outcome,runs=0,txt='',cls='';
  const sStat=m.batS[m.striker];const bStat=m.bowlS[m.currBowler];
  
  if(r<wP){
    outcome='W';
    if(Math.random()<0.03){
      m.isPaused=true;SND.play('warn');
      const dsOverlay=document.getElementById('drs-overlay');const dsStatus=document.getElementById('drs-status');const dsRes=document.getElementById('drs-result');
      if(dsOverlay){
         dsOverlay.style.display='flex';dsStatus.innerText='Reviewing ball tracking...';dsRes.style.display='none';
         setTimeout(()=>{
            const overturned=Math.random()>0.5;dsStatus.innerText='Decision made on-field:';dsRes.style.display='block';
            if(overturned){
               dsRes.innerText='NOT OUT';dsRes.style.color='var(--green)';
               if(app.soundOn!==false&&window.speechSynthesis)window.speechSynthesis.speak(new SpeechSynthesisUtterance('Decision overturned. Not out!'));
               setTimeout(()=>{dsOverlay.style.display='none';m.isPaused=false;m.comm.unshift('<span style="color:var(--green)">❌ DRS: Decision overturned! Batsman survives!</span>');this._applyOutcome(m,'0',0,'Dot ball. Batsman survives on review','',striker,currB,sStat,bStat)},3000);
            }else{
               dsRes.innerText='OUT!';dsRes.style.color='var(--red)';
               if(app.soundOn!==false&&window.speechSynthesis)window.speechSynthesis.speak(new SpeechSynthesisUtterance('Original decision stands. Out!'));
               setTimeout(()=>{dsOverlay.style.display='none';m.isPaused=false;m.wkts++;sStat.out=true;bStat.w++;m.fow.push({r:m.score,w:m.wkts,n:striker.name,ov:Math.floor((m.balls+1)/6)+'.'+((m.balls+1)%6)});m.striker=Math.max(m.striker,m.nonStriker)+1;this._applyOutcome(m,'W',0,'DRS confirms OUT! '+striker.name+' departs!','wk',striker,currB,sStat,bStat)},3000);
            }
         },2500);
      }
      return;
    }
    m.wkts++;SND.play('wicket');txt='OUT! '+striker.name+' departs!';cls='wk';sStat.out=true;bStat.w++;m.fow.push({r:m.score,w:m.wkts,n:striker.name,ov:Math.floor((m.balls+1)/6)+'.'+((m.balls+1)%6)});m.striker=Math.max(m.striker,m.nonStriker)+1;
    this._applyOutcome(m,outcome,runs,txt,cls,striker,currB,sStat,bStat);this.checkBowlerMilestones(bStat,currB);
  }
  else if(r<wP+sP){outcome='6';runs=6;SND.play('six');txt='SIX! '+striker.name+' clears the ropes!';cls='bnd';sStat.r+=6;sStat.b++;sStat.six++;bStat.r+=6;this._applyOutcome(m,outcome,runs,txt,cls,striker,currB,sStat,bStat);this.checkMilestones(m,sStat,striker);}
  else if(r<wP+sP+fP){outcome='4';runs=4;SND.play('four');txt='FOUR! Pierces the gap!';cls='bnd';sStat.r+=4;sStat.b++;sStat.four++;bStat.r+=4;this._applyOutcome(m,outcome,runs,txt,cls,striker,currB,sStat,bStat);}
  else if(r<.65+d*.1){runs=Math.random()>.6?2:1;outcome=String(runs);txt=runs+' run(s)';sStat.r+=runs;sStat.b++;bStat.r+=runs;if(runs%2===1){let t=m.striker;m.striker=m.nonStriker;m.nonStriker=t;}this._applyOutcome(m,outcome,runs,txt,cls,striker,currB,sStat,bStat);}
  else{outcome='0';txt='Dot ball from '+currB.name;sStat.b++;this._applyOutcome(m,outcome,runs,txt,cls,striker,currB,sStat,bStat);}
},
_applyOutcome(m, outcome, runs, txt, cls, striker, currB, sStat, bStat){
  if(app.soundOn!==false&&window.speechSynthesis){window.speechSynthesis.cancel();window.speechSynthesis.speak(new SpeechSynthesisUtterance(txt));}
  m.score+=runs;m.balls++;
  if(m.balls%6===0){
    bStat.o++;
    let t=m.striker;m.striker=m.nonStriker;m.nonStriker=t;
    // select next bowler who hasn't exceeded limits
    let valid=m.bowlS.map((s,i)=>({s,i})).filter(x=>x.i!==m.currBowler&&x.s.o<m.maxBowlO&&(x.s.role==='BWL'||x.s.role==='AR'));
    if(!valid.length)valid=m.bowlS.map((s,i)=>({s,i})).filter(x=>x.i!==m.currBowler&&x.s.o<m.maxBowlO);
    m.currBowler=valid.length?valid[Math.floor(Math.random()*valid.length)].i:(m.currBowler+1)%11;
  }
  
  const bEl=document.getElementById('mc-balls');const bd=document.createElement('div');bd.className='ball ball-'+outcome;bd.innerText=outcome;bEl.appendChild(bd);if(m.balls%6===0)bEl.innerHTML='';
  const phase=this.getPhase(m.balls);
  m.comm.unshift('<span style="font-weight:700" class="'+cls+'">'+outcome+'</span> '+txt+' <span style="font-size:.65rem;color:'+phase.color+'">'+phase.icon+' '+phase.name+'</span>');
  const stM=document.getElementById('mc-subtitle');if(stM){stM.className='mc-subtitle '+cls+' slide';stM.innerText=txt;setTimeout(()=>stM.className='mc-subtitle',300)}
  // Strategic timeout at 6th and 13th over
  if((m.balls===36||m.balls===78)&&!m.isPaused)this.strategicTimeout();
  if(outcome==='6')confetti();
  
  if(m.wkts>=10||m.balls>=(m.maxOvers*6)||(m.innings===2&&m.score>m.target)){
    m.isPaused=true;
    if(m.innings===1){m.target=m.score;m.s1=m.score;m.w1=m.wkts;m.comm.unshift('--- END OF 1ST INNINGS ---');this.showScorecard(1);}
    else{
      const w=m.score>m.target?m.t2:m.t1;m.comm.unshift('🏆 '+TM[w]?.l+' WINS!');confetti();SND.play('sold');this.toast(TM[w]?.l+' wins!','success');
      // Update linked schedule match if present
      if(this.state.currentSchIdx!==undefined){
         const sm=this.state.schedule[this.state.currentSchIdx];
         if(sm&&!sm.result){
            sm.s1=m.s1;sm.w1=m.w1;sm.s2=m.score;sm.w2=m.wkts;sm.result=w;
            this.state.played=this.state.schedule.filter(x=>x.result).length;
            this.state.currentSchIdx=undefined;
         }
      }
      this.showScorecard(2);
    }
  }
  this.save();this.updateMCUI();
},
showScorecard(inn){const m=this.state.currentMatch;if(!m)return;document.getElementById('modal-scorecard').style.display='flex';
  document.getElementById('sc-title').innerText=inn===1?'END OF 1ST INNINGS':'MATCH FINAL SCORECARD';
  document.getElementById('sc-teams-summary').innerHTML='<div class="card" style="text-align:center"><h4 class="raj" style="color:'+TM[m.t1].c+'">'+TM[m.t1].l+'</h4><div style="font-size:1.8rem;font-weight:700">'+(inn===1?m.score+'/'+m.wkts:m.s1+'/'+m.w1)+'</div><div style="color:var(--text3);font-size:.75rem">'+(inn===1?Math.floor(m.balls/6)+'.'+(m.balls%6):'20.0')+' Ov</div></div><div class="card" style="text-align:center"><h4 class="raj" style="color:'+TM[m.t2].c+'">'+TM[m.t2].l+'</h4><div style="font-size:1.8rem;font-weight:700">'+(inn===1?'Yet to bat':m.score+'/'+m.wkts)+'</div>'+(inn===2?'<div style="color:var(--text3);font-size:.75rem">'+Math.floor(m.balls/6)+'.'+(m.balls%6)+' Ov</div>':'')+'</div>';
  const sr=(r,b)=>b>0?((r/b)*100).toFixed(1):'0.0';const ec=(r,o)=>o>0?(r/o).toFixed(1):'0.0';
  const ftext=m.fow.length?'<div style="font-size:.75rem;color:var(--text2);margin-top:8px;border-top:1px solid rgba(255,255,255,0.05);padding-top:8px"><b>Fall of Wickets:</b> '+m.fow.map(f=>f.r+'-'+f.w+' ('+f.n+', '+f.ov+' ov)').join(', ')+'</div>':'';
  document.getElementById('sc-batt').innerHTML='<tr><th>BATSMAN</th><th>R</th><th>B</th><th>4s</th><th>6s</th><th>SR</th></tr>'+m.batS.filter(s=>s.b>0||s.out).map(s=>'<tr><td style="font-weight:600">'+s.name+(s.out?' <span style="color:#ff6b6b;font-size:.6rem">(out)</span>':' <span style="color:var(--gold);font-size:.6rem">*</span>')+'</td><td>'+s.r+'</td><td>'+s.b+'</td><td>'+s.four+'</td><td>'+s.six+'</td><td>'+sr(s.r,s.b)+'</td></tr>').join('')+ftext;
  document.getElementById('sc-bowl').innerHTML='<tr><th>BOWLER</th><th>O</th><th>R</th><th>W</th><th>ECON</th></tr>'+m.bowlS.filter(s=>s.o>0||s.r>0).map(s=>'<tr><td style="font-weight:600">'+s.name+'</td><td>'+s.o+'</td><td>'+s.r+'</td><td style="font-weight:700;color:var(--gold)">'+s.w+'</td><td>'+ec(s.r,s.o)+'</td></tr>').join('');
  
  if(inn===2){
    const hls=this.getHighlights(m);
    if(hls.length){
      const hCont=document.createElement('div');hCont.id='sc-highlights';
      hCont.innerHTML='<h4 class="raj" style="margin-top:20px;margin-bottom:8px">🎬 MATCH HIGHLIGHTS</h4><div style="font-size:.8rem;color:var(--text2);background:rgba(255,255,255,.02);padding:12px;border-radius:8px">'+hls.join('<br>')+'</div>';
      const existing=document.getElementById('sc-highlights');if(existing)existing.remove();
      document.getElementById('sc-bowl-cont').appendChild(hCont);
    }
  }

  const btn=document.getElementById('sc-next-btn');
  if(inn===1){btn.innerText='Start 2nd Innings';btn.style.display='inline-block'}else{btn.innerText='Exit Match';btn.style.display='none'} // user can just click away to exit
},
continueMatch(){const m=this.state.currentMatch;if(!m)return;document.getElementById('modal-scorecard').style.display='none';
  if(m.innings===1){m.score=0;m.wkts=0;m.balls=0;m.innings=2;m.striker=0;m.nonStriker=1;m.currBowler=10;m.isPaused=false;m.fow=[];
    const bs=sq=>sq.map(p=>({id:p.id,name:p.name,r:0,b:0,four:0,six:0,out:false}));
    const bows=sq=>sq.map(p=>({id:p.id,name:p.name,o:0,m:0,r:0,w:0,role:p.role}));
    const tb=m.bat;m.bat=m.bowl;m.bowl=tb;
    m.batS=bs(m.bat);m.bowlS=bows(m.bowl);
    document.getElementById('mc-balls').innerHTML='';this.updateMCUI();
  }
},
simOver(){const m=this.state.currentMatch;if(!m||m.isPaused)return;const tgt=Math.ceil((m.balls+1)/6)*6;while(m.balls<tgt&&m.wkts<10&&!(m.innings===2&&m.score>m.target)&&!m.isPaused)this.nextBall()},
simRestMatch(){const m=this.state.currentMatch;if(!m||m.isPaused)return;while(m.wkts<10&&m.balls<(m.maxOvers*6)&&!(m.innings===2&&m.score>m.target)&&!m.isPaused)this.nextBall()},
updateMCUI(){const m=this.state.currentMatch;if(!m)return;document.getElementById('mc-score').innerText=m.score+'/'+m.wkts;document.getElementById('mc-overs').innerText=Math.floor(m.balls/6)+'.'+(m.balls%6)+' / '+(m.maxOvers||20)+' ov';document.getElementById('mc-innings-label').innerText=m.innings===1?'1ST INNINGS':'2ND INNINGS';document.getElementById('mc-bat-name').innerText=m.innings===1?TM[m.t1]?.l+' '+m.t1:TM[m.t2]?.l+' '+m.t2;document.getElementById('mc-target').innerText=m.innings===2?'TARGET: '+(m.target+1):'--';const crr=m.balls>0?(m.score/(m.balls/6)).toFixed(2):'0.00';const rrr=m.innings===2&&m.balls<(m.maxOvers*6)?((m.target+1-m.score)/((m.maxOvers*6-m.balls)/6)).toFixed(2):'--';document.getElementById('mc-crr').innerText='CRR: '+crr+(m.innings===2?' | RRR: '+rrr:'');const comm=document.getElementById('mc-comm');if(comm)comm.innerHTML=m.comm.slice(0,30).map(c=>'<div style="padding:4px 0;border-bottom:1px solid var(--border)">'+c+'</div>').join('')},

// ROOMS
async pollRooms(){try{const r=await fetch('/api/rooms');if(r.ok){const rooms=await r.json();this.renderRooms(rooms)}}catch(e){}setTimeout(()=>this.pollRooms(),15000)},
renderRooms(rooms){const el=document.getElementById('room-list');if(!el)return;if(!rooms.length){el.innerHTML='<p style="color:var(--text3);font-size:.85rem">No active rooms. Create one!</p>';return}el.innerHTML=rooms.map(r=>'<div class="room-card" onclick="document.getElementById(\\'jr-code\\').value=\\''+r.code+'\\';app.openModal(\\'join\\')"><div><span style="font-weight:700;color:var(--gold)">'+r.code+'</span> <span style="color:var(--text2);font-size:.82rem">by '+(r.host_name||'?')+'</span></div><div><span class="badge badge-india">'+(r.mode||'mock')+'</span></div></div>').join('')},

// SELECTIVE AUCTION UI
updateAuctionUI(){
  if(this.state.auction.status==='COMPLETED'){const sp=document.querySelector('.spotlight');if(sp)sp.innerHTML='<div style="text-align:center;padding:40px"><div style="font-size:4rem;margin-bottom:16px">\ud83c\udf89</div><h2 class="raj" style="color:var(--gold);margin-bottom:12px">AUCTION COMPLETE</h2><p style="color:var(--text2);margin-bottom:24px">All players have been auctioned successfully!</p><div style="display:flex;gap:12px;justify-content:center"><button class="btn" onclick="app.go(\\'teams\\')">View Squads</button><button class="btn btn-outline" onclick="app.go(\\'dashboard\\')">Dashboard</button></div></div>';return}
  if(!this.state.auction.inProgress||!this.curPlayer())return;const p=this.curPlayer();
  const av=document.getElementById('spot-avatar');if(av)av.querySelector('img').src=p.img;
  const sn=document.getElementById('spot-name');if(sn)sn.innerText=p.name;
  const sr=document.getElementById('spot-role');if(sr)sr.innerText=p.role+' | TIER '+p.tier;
  const ss=document.getElementById('spot-stats');if(ss)ss.innerText='BAT: '+(p.batRating||0)+'/100 | BOWL: '+(p.bowlRating||0)+'/100';
  const sp=document.getElementById('spot-prev');if(sp)sp.innerText=p.prevTeam?'Previously: '+TM[p.prevTeam]?.l+' '+p.prevTeam:'New to auction';
  const snat=document.getElementById('spot-nation');if(snat){snat.className='badge '+(p.nation==='IND'?'badge-india':'badge-overseas');snat.innerText=p.nation==='IND'?'🇮🇳 IND':'🌍 OS'}
  const sb=document.getElementById('spot-bid');if(sb)sb.innerText='₹'+((this.state.auction.currentBid||p.base)/100).toFixed(2)+' Cr';
  const sbs=document.getElementById('spot-base');if(sbs)sbs.innerText='BASE: ₹'+(p.base/100).toFixed(2)+' Cr';
  const adv=document.getElementById('spot-advisor');if(adv)adv.innerText=this.getStrategyAdvice();
  
  let leaderTxt = this.state.auction.leadTeam?'<span style="color:'+TM[this.state.auction.leadTeam]?.c+'">'+TM[this.state.auction.leadTeam]?.l+' '+this.state.auction.leadTeam+'</span>':'<span style="color:var(--text3)">OPENING BID</span>';
  if(this.state.auction.leadTeam){
     if(this.state.auction.timer===3) leaderTxt += ' <span style="color:var(--gold);font-weight:800;margin-left:8px;animation:pulse 0.5s">Going once...</span>';
     if(this.state.auction.timer===2) leaderTxt += ' <span style="color:var(--gold);font-weight:800;margin-left:8px;animation:pulse 0.5s">Going twice...</span>';
     if(this.state.auction.timer===1) leaderTxt += ' <span style="color:var(--red);font-weight:800;margin-left:8px;animation:pulse 0.5s">ALMOST GONE!</span>';
  }
  const sl=document.getElementById('spot-leader');if(sl)sl.innerHTML=leaderTxt;

  const cs=document.getElementById('cur-set');if(cs)cs.innerText=p.set;
  const tn=document.getElementById('timer-num');if(tn){tn.innerText=this.state.auction.timer;tn.className='timer-num'+(this.state.auction.timer<=5?' urgent':'')}
  const tp=document.getElementById('timer-prog');if(tp){const pct=this.state.auction.timer/(this.state.auction.timerMax||15);tp.setAttribute('stroke-dashoffset',226*(1-pct));tp.className='prog'+(this.state.auction.timer<=5?' urgent':'')}
  const totalP=this.totalAuctionPlayers();
  const ap=document.getElementById('auc-progress');if(ap)ap.innerText=(this.state.auction.idx+1)+'/'+totalP;
  const ab=document.getElementById('auc-bar');if(ab)ab.style.width=(((this.state.auction.idx+1)/totalP)*100)+'%';
  const at=document.getElementById('auction-teams');
  if(at)at.innerHTML=this.config.teams.map(t=>{const tm=this.state.teams[t];if(!tm)return'';const ld=this.state.auction.leadTeam===t;return '<div class="team-strip'+(ld?' lead':'')+'" style="border-left-color:'+TM[t].c+'"><div class="team-dot" style="background:'+TM[t].c+'"></div><div style="flex:1"><div style="font-weight:600;font-size:.85rem">'+TM[t].l+' '+t+'</div><div style="font-size:.72rem;color:var(--text2)">'+tm.squad.length+' players · '+tm.overseas+' OS</div></div><div style="text-align:right"><div style="font-size:.9rem;font-weight:700;color:var(--gold)">₹'+(tm.purse/100).toFixed(1)+'</div><div style="font-size:.68rem;color:var(--text3)">Cr</div></div></div>'}).join('')
},

// FULL UI
ui(){
  const clr=TM[this._selTeam]?.c||'#f5a623';
  document.documentElement.style.setProperty('--gold',clr);
  document.getElementById('nav-room').innerText=this.state.roomCode||'NO ROOM';
  if(this.state.roomCode){
    const lc=document.getElementById('lobby-code');if(lc)lc.innerText=this.state.roomCode;
    const lp=document.getElementById('lobby-players');if(lp)lp.innerHTML=Object.entries(this.state.players).map(([n,d])=>'<div style="padding:8px 0;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:8px"><img src="'+pImg(n)+'" style="width:28px;height:28px;border-radius:50%"> <span style="font-weight:600">'+n+'</span> <span class="badge badge-india">'+(d.team||'?')+'</span></div>').join('');
    const ls=document.getElementById('lobby-settings');if(ls)ls.innerHTML='Mode: '+(this.state.mode==='mega'?'Mega':'Mock')+'<br>Timer: '+(this.state.auction.timerMax||15)+'s<br>AI: Smart Bidding';
    if(this.state.isHost){const sb=document.getElementById('start-btn');if(sb)sb.style.display='inline-block';const wm=document.getElementById('wait-msg');if(wm)wm.style.display='none'}
  }
  this.updateAuctionUI();this.renderRetention();
  if (this.state.roomCode === 'SOLO' && !this.state.teamId) { 
    this.openModal('solo'); 
    setTimeout(()=>this.openSoloSelection(),100);
  }
  const dr=document.getElementById('d-runs');if(dr)dr.innerText=this.state.stats.runs.toLocaleString();
  const dw=document.getElementById('d-wkts');if(dw)dw.innerText=this.state.stats.wkts;
  const d6=document.getElementById('d-6s');if(d6)d6.innerText=this.state.stats.sixes;
  const dm=document.getElementById('d-matches');if(dm)dm.innerText=this.state.played;
  this.renderStandings('d-standings');this.renderStandings('t-table');this.renderCaps();this.renderSchedule();this.renderTeamPage();this.renderHistory();this.renderPlayoffs();this.renderMCSetup();this.renderSpendChart();this.renderAuctionSummary();this.renderTradeWindow();this.renderHallOfFame();
},
openSoloSelection(){
  const el=document.getElementById('solo-team-sel');if(!el)return;
  if(!this._soloSelTeam) this._soloSelTeam='CSK';
  let html='';
  this.config.teams.forEach(t=>{
    const active=this._soloSelTeam===t?' active':'';
    html+='<div class="team-card-small'+active+'" style="border-left:4px solid '+TM[t].c+'" data-team="'+t+'"><div style="font-size:1.2rem">'+TM[t].l+'</div><div style="font-weight:700;font-size:.75rem">'+t+'</div></div>';
  });
  el.innerHTML=html;
  el.querySelectorAll('.team-card-small').forEach(card=>{
    card.onclick=function(){app._soloSelTeam=this.getAttribute('data-team');app.openSoloSelection();};
  });
},

renderStandings(id){const el=document.getElementById(id);if(!el)return;const sorted=this.getStandings();el.innerHTML='<table class="standings-tbl"><thead><tr><th>#</th><th>TEAM</th><th>P</th><th>W</th><th>L</th><th>PTS</th><th>NRR</th></tr></thead><tbody>'+sorted.map((s,i)=>'<tr class="'+(i<4?'q':'')+'"><td>'+(i+1)+'</td><td style="font-weight:700"><span style="color:'+TM[s.team]?.c+'">'+TM[s.team]?.l+'</span> '+s.team+'</td><td>'+s.p+'</td><td style="color:var(--green)">'+s.w+'</td><td style="color:#ff6b6b">'+s.l+'</td><td style="font-weight:700;color:var(--gold)">'+s.pts+'</td><td>'+s.nrr.toFixed(3)+'</td></tr>').join('')+'</tbody></table>'},
renderCaps(){
  // ORANGE CAP: only BAT, WK, AR (batting role) - sorted by runs
  const batsmen=[...this.state.playerDataset].filter(p=>['BAT','WK','AR'].includes(p.role)&&p.tRuns>0).sort((a,b)=>b.tRuns-a.tRuns).slice(0,5);
  // PURPLE CAP: only BWL, AR (bowling role) - sorted by wickets
  const bowlers=[...this.state.playerDataset].filter(p=>['BWL','AR'].includes(p.role)&&p.tWkts>0).sort((a,b)=>b.tWkts-a.tWkts).slice(0,5);
  // MOST SIXES: any role
  const by6=[...this.state.playerDataset].sort((a,b)=>(b.t6s||0)-(a.t6s||0)).filter(p=>(p.t6s||0)>0).slice(0,5);
  const rl=(els,stat,color)=>els.length?els.map((p,i)=>'<div class="cap-row" style="cursor:pointer" onclick="app.openPlayerModal(\\''+p.id+'\\')"><div style="width:20px;font-weight:700;color:'+(i===0?'var(--gold)':'var(--text3)')+';">'+(i+1)+'</div><img src="'+p.img+'" style="width:32px;height:32px;border-radius:50%"><div style="flex:1;font-size:.82rem;font-weight:600">'+p.name+'<span style="font-size:.65rem;color:var(--text3);margin-left:4px">'+p.role+'</span></div><div style="font-size:1rem;font-weight:700;color:'+color+'">'+p[stat]+'</div></div>').join(''):'<p style="color:var(--text3);font-size:.82rem">No data</p>';
  ['d-orange','t-orange'].forEach(id=>{const e=document.getElementById(id);if(e)e.innerHTML=rl(batsmen,'tRuns','orange')});
  ['d-purple','t-purple'].forEach(id=>{const e=document.getElementById(id);if(e)e.innerHTML=rl(bowlers,'tWkts','#9b59b6')});
  const s6=document.getElementById('t-sixes');if(s6)s6.innerHTML=rl(by6,'t6s','var(--gold)');
},
renderSchedule(){const el=document.getElementById('t-schedule');if(!el)return;if(!this.state.schedule.length){el.innerHTML='<p style="color:var(--text3)">No matches</p>';return}el.innerHTML=this.state.schedule.slice(0,60).map((m,i)=>'<div class="match-card"><div style="display:flex;align-items:center;gap:6px"><span style="font-size:.68rem;color:var(--text3);width:24px">#'+(i+1)+'</span><span style="font-weight:700;color:'+TM[m.t1]?.c+'">'+m.t1+'</span><span style="color:var(--text3);font-size:.7rem">v</span><span style="font-weight:700;color:'+TM[m.t2]?.c+'">'+m.t2+'</span></div><div style="text-align:right">'+(m.result&&m.result!=='ABD'?'<div style="font-size:.8rem;font-weight:700">'+m.s1+'/'+m.w1+' v '+m.s2+'/'+m.w2+'</div><div style="font-size:.7rem;color:var(--green)">'+TM[m.result]?.l+' won</div>':'<button class="btn btn-sm" style="font-size:.65rem;padding:4px 8px" onclick="app.simSingleMatch('+i+')">⚡ Sim</button> <button class="btn btn-outline btn-sm" style="font-size:.65rem;padding:4px 8px" onclick="app.playSelectedMatch('+i+')">📺 Play</button>')+'</div></div>').join('')},
renderPlayoffs(){const el=document.getElementById('playoffs-bracket');if(!el)return;const po=this.state.playoffs;if(!po||!po.q1){const s=this.getStandings();el.innerHTML=s[0].p>0?'<p style="color:var(--text2)">Top 4: '+s.slice(0,4).map(x=>'<b style="color:'+TM[x.team]?.c+'">'+x.team+'</b>').join(', ')+'</p>':'<p style="color:var(--text3)">Complete league first</p>';return}const mc=(l,m)=>'<div class="bracket-match"><h4 class="raj" style="font-size:.8rem;color:var(--text3)">'+l+'</h4><div style="font-weight:700"><span style="color:'+TM[m.t1]?.c+'">'+TM[m.t1]?.l+' '+m.t1+'</span> '+m.s1+'/'+m.w1+'</div><div style="font-weight:700"><span style="color:'+TM[m.t2]?.c+'">'+TM[m.t2]?.l+' '+m.t2+'</span> '+m.s2+'/'+m.w2+'</div><div style="margin-top:6px;color:var(--green);font-weight:700">🏆 '+TM[m.result]?.l+'</div></div>';el.innerHTML=mc('Q1',po.q1)+'<span class="bracket-arrow">→</span>'+mc('ELIM',po.elim)+'<span class="bracket-arrow">→</span>'+mc('Q2',po.q2)+'<span class="bracket-arrow">→</span>'+mc('FINAL',po.final)},
renderTeamPage(){const tabs=document.getElementById('team-tabs'),detail=document.getElementById('team-detail');if(!tabs||!detail)return;tabs.innerHTML=this.config.teams.map(t=>'<button class="btn btn-sm '+(this._selTeam===t?'':'btn-outline')+'" style="'+(this._selTeam===t?'background:'+TM[t].c:'border-color:'+TM[t].c+';color:'+TM[t].c)+'" onclick="app._selTeam=\\''+t+'\\';app.ui()">'+TM[t].l+' '+t+'</button>').join('');const tm=this.state.teams[this._selTeam];if(!tm){detail.innerHTML='<p style="color:var(--text3)">No data</p>';return}let squad=(tm.squad||[]).map(sid=>this.state.playerDataset.find(p=>p.id===sid)).filter(Boolean);const search=(document.getElementById('team-search')?.value||'').toLowerCase();if(search)squad=squad.filter(p=>p.name.toLowerCase().includes(search));if(this._roleFilter&&this._roleFilter!=='all')squad=squad.filter(p=>p.role===this._roleFilter);const rf=document.getElementById('role-filters');if(rf)rf.innerHTML=['all','BAT','BWL','AR','WK'].map(r=>'<button class="filter-btn'+(this._roleFilter===r||(!this._roleFilter&&r==='all')?' active':'')+'" onclick="app._roleFilter=\\''+r+'\\';app.ui()">'+r+'</button>').join('');const allSq=(tm.squad||[]).map(sid=>this.state.playerDataset.find(p=>p.id===sid)).filter(Boolean);  const rc={BAT:0,BWL:0,AR:0,WK:0};allSq.forEach(p=>rc[p.role]=(rc[p.role]||0)+1);const isCapT=allSq.some(p=>['MS Dhoni','Rohit Sharma','Pat Cummins','Hardik Pandya'].includes(p.name)||(this.state.captains&&this.state.captains[this._selTeam]===p.id));const total=allSq.length||1;const cb='<div class="comp-bar"><div style="width:'+(rc.BAT/total*100)+'%;background:#f5a623"></div><div style="width:'+(rc.BWL/total*100)+'%;background:#e8392a"></div><div style="width:'+(rc.AR/total*100)+'%;background:#00c4ff"></div><div style="width:'+(rc.WK/total*100)+'%;background:#00e676"></div></div><div style="display:flex;gap:12px;font-size:.7rem;color:var(--text2);margin-top:4px"><span>🟡BAT:'+rc.BAT+'</span><span>🔴BWL:'+rc.BWL+'</span><span>🔵AR:'+rc.AR+'</span><span>🟢WK:'+rc.WK+'</span></div>';detail.innerHTML='<div style="display:flex;align-items:center;gap:16px;margin-bottom:16px"><div style="font-size:2.5rem">'+TM[this._selTeam].l+'</div><div><h2 class="raj" style="color:'+TM[this._selTeam].c+'">'+TM[this._selTeam].name+'</h2><div style="font-size:.85rem;color:var(--text2)">₹'+(tm.purse/100).toFixed(1)+' Cr | '+allSq.length+' players | '+tm.overseas+' OS '+(isCapT?'<span class="cap-boost">👑 Captaincy Boost Active</span>':'')+'</div>'+cb+'</div></div>'+(squad.length?'<div class="squad-grid">'+squad.map(p=>{
  const inj=this.state.injuries&&this.state.injuries[p.id];
  const cap=this.state.captains&&this.state.captains[this._selTeam]===p.id?' <span style="color:var(--gold);font-size:.65rem">👑 CAP</span>':'';
  const spark=this.getFormSparkline(p);
  const rtm=app.getRTMValue?app.getRTMValue(p.name):null;
  const rtmB=rtm?' <span style="margin-left:4px;font-size:.55rem;font-weight:700;padding:2px 4px;border-radius:4px;background:rgba(255,255,255,.1);color:'+(rtm.overpaid?'var(--red)':'var(--green)')+'">'+(rtm.overpaid?'💸 OVP':'🏷️ STL')+'</span>':'';
  return '<div class="sq-card" style="cursor:pointer'+(inj?';opacity:0.6;border-color:var(--red)':'')+'" onclick="app.openPlayerModal(\\''+p.id+'\\')"><div class="sq-av"><img src="'+p.img+'"></div><div style="flex:1"><div style="font-weight:600;font-size:.82rem">'+p.name+(p.isRetained&&tm.squad.includes(p.id)?' <span style="color:var(--green);font-size:.65rem">RET</span>':'')+cap+rtmB+'</div><div style="font-size:.7rem;color:var(--text2)">'+p.role+' <span class="badge '+(p.nation==='IND'?'badge-india':'badge-overseas')+'">'+p.nation+'</span>'+(p.form>70?' <span class="form-hot">🔥</span>':p.form<30?' <span class="form-cold">❄️</span>':'')+(p._impact?' <span class="impact-badge" style="font-size:.55rem">IMP</span>':'')+spark+'</div>'+(inj?'<div style="font-size:.65rem;color:var(--red);font-weight:700">🤕 '+inj.type+' ('+inj.matches+' match)</div>':'')+(p.tRuns||p.tWkts?'<div style="font-size:.68rem;color:var(--gold)">'+p.tRuns+'r · '+p.tWkts+'w</div>':'')+'</div><div onclick="event.stopPropagation();app.setCaptain(\\''+this._selTeam+'\\',\\''+p.id+'\\')" style="font-size:1.2rem;opacity:0.3;transition:0.2s" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.3">👑</div></div>'}).join('')+'</div>':'<p style="color:var(--text3)">No players</p>')},
renderHistory(){const el=document.getElementById('history-list');if(!el)return;let h=this.state.auctionHistory;const s=(document.getElementById('hist-search')?.value||'').toLowerCase();if(s)h=h.filter(x=>x.name.toLowerCase().includes(s)||(x.team||'').toLowerCase().includes(s));if(this.histFilter&&this.histFilter!=='all')h=h.filter(x=>x.status===this.histFilter);if(!h.length){el.innerHTML='<p style="color:var(--text3)">No records</p>';return}el.innerHTML='<table style="width:100%;border-collapse:collapse"><thead><tr style="border-bottom:1px solid var(--border)"><th style="text-align:left;padding:6px;font-size:.7rem;color:var(--text3)">#</th><th style="text-align:left;padding:6px;font-size:.7rem;color:var(--text3)">PLAYER</th><th style="text-align:left;padding:6px;font-size:.7rem;color:var(--text3)">ROLE</th><th style="text-align:left;padding:6px;font-size:.7rem;color:var(--text3)">TEAM</th><th style="text-align:left;padding:6px;font-size:.7rem;color:var(--text3)">₹</th><th style="text-align:left;padding:6px;font-size:.7rem;color:var(--text3)">STATUS</th></tr></thead><tbody>'+h.map((x,i)=>'<tr style="border-bottom:1px solid rgba(255,255,255,.03)"><td style="padding:6px;font-size:.78rem">'+(i+1)+'</td><td style="padding:6px"><div style="display:flex;align-items:center;gap:6px"><img src="'+x.img+'" style="width:24px;height:24px;border-radius:50%"><span style="font-size:.8rem;font-weight:600">'+x.name+'</span></div></td><td style="padding:6px;font-size:.78rem">'+x.role+'</td><td style="padding:6px;font-weight:700;color:'+(x.team?TM[x.team]?.c:'var(--text3)')+'">'+(x.team?TM[x.team]?.l+' '+x.team:'-')+'</td><td style="padding:6px;font-size:.8rem;color:var(--gold)">₹'+(x.amount/100).toFixed(2)+'</td><td style="padding:6px"><span class="badge '+(x.status==='SOLD'?'badge-india':x.status==='RETAINED'?'badge-india':'badge-overseas')+'" style="'+(x.status==='RETAINED'?'background:rgba(245,166,35,.2);color:var(--gold)':'')+'">'+x.status+'</span></td></tr>').join('')+'</tbody></table>'},
renderAuctionSummary(){const el=document.getElementById('auction-summary');if(!el)return;const h=this.state.auctionHistory;if(!h.length){el.innerHTML='';return}const sold=h.filter(x=>x.status==='SOLD');const unsold=h.filter(x=>x.status==='UNSOLD');const retained=h.filter(x=>x.status==='RETAINED');const most=sold.length?[...sold].sort((a,b)=>b.amount-a.amount)[0]:null;const cheap=sold.length?[...sold].sort((a,b)=>a.amount-b.amount)[0]:null;el.innerHTML='<div class="grid-4" style="margin-top:12px"><div class="stat-card"><div class="stat-val" style="color:var(--gold)">'+retained.length+'</div><div class="stat-lbl">RETAINED</div></div><div class="stat-card"><div class="stat-val" style="color:var(--green)">'+sold.length+'</div><div class="stat-lbl">SOLD</div></div><div class="stat-card"><div class="stat-val" style="color:#ff6b6b">'+unsold.length+'</div><div class="stat-lbl">UNSOLD</div></div><div class="stat-card"><div class="stat-val" style="color:var(--gold)">'+(most?'₹'+(most.amount/100).toFixed(1):'--')+'</div><div class="stat-lbl">'+(most?most.name:'TOP BUY')+'</div></div></div>'},
renderHallOfFame(){const el=document.getElementById('d-hof');if(!el)return;const h=this.state.hallOfFame||[];if(!h.length){el.innerHTML='<p style="color:var(--text3);font-size:.8rem">Complete a season to see Hall of Fame.</p>';return}el.innerHTML=h.map(x=>'<div style="padding:12px;border-bottom:1px solid rgba(255,255,255,.05);background:rgba(255,255,255,.02);border-radius:12px;margin-bottom:8px"><div><span style="color:var(--gold);font-weight:800;font-size:1.1rem">IPL '+x.yr+'</span></div><div style="font-size:.85rem;margin-top:4px"><span style="color:var(--green)"><b>🏆 Winner:</b> '+(TM[x.winner]?.l||'')+' '+x.winner+'</span></div><div style="font-size:.8rem;color:var(--text2);margin-top:4px">🧡 Orange Cap: <b>'+x.orangeCap+'</b></div><div style="font-size:.8rem;color:var(--text2)">💜 Purple Cap: <b>'+x.purpleCap+'</b></div></div>').reverse().join('')},
renderSpendChart(){const canvas=document.getElementById('spendChart');if(!canvas)return;const ctx=canvas.getContext('2d');if(this.charts.spend)this.charts.spend.destroy();const labels=[],dBAT=[],dBWL=[],dAR=[],dWK=[];this.config.teams.forEach(t=>{labels.push(t);const spent=this.state.auctionHistory.filter(h=>h.team===t&&h.status!=='RETAINED');const byRole=r=>spent.filter(h=>h.role===r).reduce((a,h)=>a+h.amount,0)/100;dBAT.push(byRole('BAT'));dBWL.push(byRole('BWL'));dAR.push(byRole('AR'));dWK.push(byRole('WK'))});this.charts.spend=new Chart(ctx,{type:'bar',data:{labels,datasets:[{label:'BAT',data:dBAT,backgroundColor:'#f5a623'},{label:'BWL',data:dBWL,backgroundColor:'#e8392a'},{label:'AR',data:dAR,backgroundColor:'#00c4ff'},{label:'WK',data:dWK,backgroundColor:'#00e676'}]},options:{responsive:true,maintainAspectRatio:false,scales:{x:{stacked:true,ticks:{color:'#8892aa'}},y:{stacked:true,ticks:{color:'#8892aa',callback:v=>v+'Cr'},grid:{color:'rgba(255,255,255,.05)'}}},plugins:{legend:{labels:{color:'#eef0f8'}}}}})},

exportState(){const b=new Blob([JSON.stringify(this.state,null,2)],{type:'application/json'});const u=URL.createObjectURL(b);const a=document.createElement('a');a.href=u;a.download='ipl2026_state.json';a.click()},
reset(){if(confirm('Clear all data?')){localStorage.clear();location.reload()}},

// === SUPER OVER ===
runSuperOver(m){
  const soT1=m.t1,soT2=m.t2;
  const bat1=m.bat.slice(0,3),bowl1=m.bowl.slice(0,3);
  const bat2=m.bowl.slice(0,3),bowl2=m.bat.slice(0,3);
  let s1=0,s2=0;
  // Team 1 bats 6 balls
  for(let i=0;i<6;i++){const r=Math.random();if(r<.08)continue;else if(r<.18){s1+=6}else if(r<.32){s1+=4}else if(r<.6){s1+=Math.random()>.5?2:1}};
  // Team 2 bats 6 balls
  for(let i=0;i<6;i++){const r=Math.random();if(r<.08)continue;else if(r<.18){s2+=6}else if(r<.32){s2+=4}else if(r<.6){s2+=Math.random()>.5?2:1}};
  const winner=s1>s2?soT1:(s2>s1?soT2:(Math.random()>.5?soT1:soT2));
  m.result=winner;m.superOver={s1,s2,winner};
  return winner;
},

// === CAPTAIN SYSTEM ===
setCaptain(teamId,playerId){
  if(!this.state.captains)this.state.captains={};
  this.state.captains[teamId]=playerId;
  const p=this.state.playerDataset.find(x=>x.id===playerId);
  this.toast('👑 '+p.name+' is now captain of '+teamId+'!','success');
  this.save();this.ui();
},

// === INJURY SYSTEM ===
checkInjuries(){
  if(!this.state.injuries)this.state.injuries={};
  this.state.playerDataset.forEach(p=>{
    if(p.fatigue>70&&Math.random()<0.05){
      this.state.injuries[p.id]={name:p.name,matches:1+Math.floor(Math.random()*3),type:['Hamstring','Shoulder','Back','Knee','Groin'][Math.floor(Math.random()*5)]};
      this.toast('🤕 INJURY: '+p.name+' out with '+this.state.injuries[p.id].type+' issue for '+this.state.injuries[p.id].matches+' matches!','error');
    }
  });
  // Decrement injury counters
  Object.keys(this.state.injuries).forEach(pid=>{
    this.state.injuries[pid].matches--;
    if(this.state.injuries[pid].matches<=0){
      this.toast('💪 '+this.state.injuries[pid].name+' has recovered!','success');
      delete this.state.injuries[pid];
    }
  });
  this.save();
},

// === PLAYER COMPARISON ===
openCompare(p1id,p2id){
  if(!p1id){this._cmp1=null;this._cmp2=null;this.toast('Click two players to compare','info');return}
  if(!this._cmp1){this._cmp1=p1id;this.toast('Now click a second player to compare','info');return}
  this._cmp2=p1id;
  const p1=this.state.playerDataset.find(x=>x.id===this._cmp1);
  const p2=this.state.playerDataset.find(x=>x.id===this._cmp2);
  if(!p1||!p2||p1.id===p2.id){this._cmp1=null;this._cmp2=null;return}
  const mk=(l,v1,v2)=>'<tr><td style="text-align:right;padding:6px;font-weight:'+(v1>v2?'700':'400')+';color:'+(v1>v2?'var(--gold)':'var(--text2)')+'">'+v1+'</td><td style="text-align:center;padding:6px;color:var(--text3);font-size:.75rem">'+l+'</td><td style="padding:6px;font-weight:'+(v2>v1?'700':'400')+';color:'+(v2>v1?'var(--gold)':'var(--text2)')+'">'+v2+'</td></tr>';
  const html='<div style="text-align:center;margin-bottom:20px"><h3 style="font-family:Outfit;color:var(--gold)">⚔️ PLAYER COMPARISON</h3></div><div style="display:flex;justify-content:space-around;margin-bottom:16px"><div style="text-align:center"><img src="'+p1.img+'" style="width:60px;height:60px;border-radius:50%;border:2px solid var(--gold)"><div style="font-weight:700;margin-top:6px">'+p1.name+'</div><div style="font-size:.75rem;color:var(--text2)">'+p1.role+'</div></div><div style="font-size:2rem;color:var(--text3);align-self:center">VS</div><div style="text-align:center"><img src="'+p2.img+'" style="width:60px;height:60px;border-radius:50%;border:2px solid var(--blue)"><div style="font-weight:700;margin-top:6px">'+p2.name+'</div><div style="font-size:.75rem;color:var(--text2)">'+p2.role+'</div></div></div><table style="width:100%;border-collapse:collapse">'+mk('BATTING',p1.batRating,p2.batRating)+mk('BOWLING',p1.bowlRating,p2.bowlRating)+mk('RUNS',p1.tRuns,p2.tRuns)+mk('WICKETS',p1.tWkts,p2.tWkts)+mk('SIXES',p1.t6s,p2.t6s)+mk('FORM',p1.form,p2.form)+mk('SKILL',p1.skill,p2.skill)+'</table><div style="text-align:center;margin-top:16px"><button class="btn btn-outline btn-sm" onclick="document.getElementById(\\'modal-player\\').style.display=\\'none\\'">Close</button></div>';
  document.getElementById('pm-img').src=p1.img;document.getElementById('pm-name').innerText='Comparison';document.getElementById('pm-role').innerText='';document.getElementById('pm-form').innerHTML='';
  document.getElementById('pm-runs').innerText='';document.getElementById('pm-wkts').innerText='';document.getElementById('pm-6s').innerText='';document.getElementById('pm-fp').innerText='';
  const pc=document.querySelector('.player-modal-header');if(pc)pc.style.display='none';
  const pg=document.querySelector('.player-stat-grid');if(pg)pg.style.display='none';
  const rc=document.querySelector('.radar-container');if(rc)rc.innerHTML=html;
  const tc=document.getElementById('pm-trade-container');if(tc)tc.style.display='none';
  document.getElementById('modal-player').style.display='flex';
  this._cmp1=null;this._cmp2=null;
},

// === MILESTONE ALERTS ===
checkMilestones(m,sStat,striker){
  if(!sStat||!striker)return;
  if(sStat.r===50&&sStat.b>0){this.toast('🌟 FIFTY! '+striker.name+' reaches 50 off '+sStat.b+' balls!','success');SND.play('six');confetti()}
  if(sStat.r===100){this.toast('💯 CENTURY! '+striker.name+' smashes 100!','success');SND.play('six');confetti();confetti()}
},
checkBowlerMilestones(bStat,bowler){
  if(!bStat||!bowler)return;
  if(bStat.w===3&&bStat._prev!==3){this.toast('🎩 HAT-TRICK ALERT! '+bowler.name+' on a roll!','success');bStat._prev=3}
  if(bStat.w===5){this.toast('🔥 5-WICKET HAUL! '+bowler.name+' destroys lineup!','success');SND.play('six');confetti()}
},

// === POWERPLAY PHASE ===
getPhase(balls){
  if(balls<36)return{name:'POWERPLAY',color:'var(--blue)',icon:'⚡'};
  if(balls<96)return{name:'MIDDLE OVERS',color:'var(--text2)',icon:'🏏'};
  return{name:'DEATH OVERS',color:'var(--red)',icon:'🔥'};
},

// === MATCH HIGHLIGHTS ===
getHighlights(m){
  if(!m||!m.comm)return[];
  return m.comm.filter(c=>c.includes('SIX')||c.includes('OUT')||c.includes('FOUR')||c.includes('FIFTY')||c.includes('DRS')).slice(0,10);
},

// === HEAD TO HEAD ===
getH2H(t1,t2){
  const matches=this.state.schedule.filter(m=>(m.t1===t1&&m.t2===t2)||(m.t1===t2&&m.t2===t1));
  const t1w=matches.filter(m=>m.result===t1).length;
  const t2w=matches.filter(m=>m.result===t2).length;
  return{total:matches.filter(m=>m.result).length,t1w,t2w};
},

// === AWARDS CEREMONY ===
showAwards(){
  const ps=this.state.playerDataset.filter(p=>p.tRuns>0||p.tWkts>0);
  if(!ps.length){this.toast('Play matches first!','error');return}
  const mvp=[...ps].sort((a,b)=>b.fp-a.fp)[0];
  const topRun=[...ps].sort((a,b)=>b.tRuns-a.tRuns)[0];
  const topWkt=[...ps].filter(p=>p.tWkts>0).sort((a,b)=>b.tWkts-a.tWkts)[0];
  const emerging=[...ps].filter(p=>p.tier==='B'&&p.fp>0).sort((a,b)=>b.fp-a.fp)[0];
  const bestBuy=[...this.state.auctionHistory].filter(x=>x.status==='SOLD').map(x=>({...x,p:ps.find(p=>p.name===x.name)})).filter(x=>x.p).sort((a,b)=>(b.p.fp/(b.amount||1))-(a.p.fp/(a.amount||1)))[0];
  const aw=(icon,title,p,stat)=>'<div class="stat-card" style="text-align:center"><div style="font-size:2rem;margin-bottom:8px">'+icon+'</div><div style="font-size:.72rem;color:var(--text3);letter-spacing:1.5px;margin-bottom:8px">'+title+'</div>'+(p?'<img src="'+p.img+'" style="width:50px;height:50px;border-radius:50%;border:2px solid var(--gold);margin-bottom:6px"><div style="font-weight:700">'+p.name+'</div><div style="font-size:.85rem;color:var(--gold)">'+stat+'</div>':'<div style="color:var(--text3)">N/A</div>')+'</div>';
  const html='<div style="text-align:center;margin-bottom:20px"><h2 style="font-family:Outfit;color:var(--gold);font-size:1.8rem">🏆 Season Awards</h2></div><div class="grid-3" style="margin-bottom:16px">'+aw('🏅','MVP',mvp,mvp?.fp+' FP')+aw('🧡','Orange Cap',topRun,topRun?.tRuns+' runs')+aw('💜','Purple Cap',topWkt,topWkt?.tWkts+' wickets')+'</div><div class="grid-2">'+aw('⭐','Emerging Player',emerging,emerging?.fp+' FP')+aw('💰','Best Value Buy',bestBuy?.p,bestBuy?'₹'+(bestBuy.amount/100).toFixed(1)+'Cr → '+bestBuy.p?.fp+'FP':'')+'</div>';
  const el=document.getElementById('modal-player');
  if(el){const pc=document.querySelector('.player-modal-header');if(pc)pc.style.display='none';const pg=document.querySelector('.player-stat-grid');if(pg)pg.style.display='none';const rc=document.querySelector('.radar-container');if(rc)rc.innerHTML=html;const tc=document.getElementById('pm-trade-container');if(tc)tc.innerHTML='<button class="btn btn-outline btn-sm" onclick="document.getElementById(\\'modal-player\\').style.display=\\'none\\'">Close</button>';el.style.display='flex';}
  confetti();SND.play('sold');
},

// === STRATEGIC TIMEOUT ===
strategicTimeout(){
  const m=this.state.currentMatch;if(!m)return;
  m.isPaused=true;
  const phase=this.getPhase(m.balls);
  const crr=m.balls>0?(m.score/(m.balls/6)).toFixed(2):'0.00';
  const proj=m.balls>0?Math.round(m.score*(m.maxOvers*6)/m.balls):0;
  this.toast('⏸️ STRATEGIC TIMEOUT','info');
  m.comm.unshift('<div style="background:rgba(245,166,35,.1);padding:8px;border-radius:8px;margin:4px 0"><b>⏸️ STRATEGIC TIMEOUT</b><br>Phase: '+phase.icon+' '+phase.name+'<br>CRR: '+crr+' | Projected: '+proj+'</div>');
  this.updateMCUI();
  setTimeout(()=>{m.isPaused=false;this.toast('▶️ Play resumes!','info')},3000);
},

// === FORM SPARKLINE ===
getFormSparkline(p){
  if(!p._formHistory)p._formHistory=[];
  const data=p._formHistory.slice(-5);
  if(data.length<2)return'';
  const max=Math.max(...data,1);const min=Math.min(...data,0);const range=max-min||1;
  const w=60,h=20;
  const pts=data.map((v,i)=>(i/(data.length-1))*w+','+(h-(v-min)/range*h)).join(' ');
  return '<svg width="'+w+'" height="'+h+'" style="vertical-align:middle;margin-left:6px"><polyline points="'+pts+'" fill="none" stroke="'+(data[data.length-1]>50?'var(--green)':'var(--red)')+'" stroke-width="1.5"/></svg>';
}
};
<\/script>
</body></html>`;
};
