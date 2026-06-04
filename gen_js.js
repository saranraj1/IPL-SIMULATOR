module.exports = function () {
    return `<script>
const TEAMS_META={CSK:{name:'Chennai Super Kings',short:'CSK',color:'#f5c518',logo:'🦁'},MI:{name:'Mumbai Indians',short:'MI',color:'#004ba0',logo:'🔵'},RCB:{name:'Royal Challengers Bengaluru',short:'RCB',color:'#e8392a',logo:'🔴'},KKR:{name:'Kolkata Knight Riders',short:'KKR',color:'#4b0082',logo:'🟣'},SRH:{name:'Sunrisers Hyderabad',short:'SRH',color:'#ff6b00',logo:'🟠'},DC:{name:'Delhi Capitals',short:'DC',color:'#1a56db',logo:'🔷'},GT:{name:'Gujarat Titans',short:'GT',color:'#1d4ed8',logo:'💎'},LSG:{name:'Lucknow Super Giants',short:'LSG',color:'#00c4ff',logo:'🩵'},RR:{name:'Rajasthan Royals',short:'RR',color:'#ff4fa3',logo:'🩷'},PBKS:{name:'Punjab Kings',short:'PBKS',color:'#dc2626',logo:'❤️'}};
const PLAYER_PHOTOS={};
const REAL_PLAYERS=[
{n:'Virat Kohli',nat:'IND',role:'BAT',base:200,tier:'A+',img:'virat+kohli',avg:37.2,sr:131.6,econ:0,wSR:0},
{n:'Jasprit Bumrah',nat:'IND',role:'BWL',base:200,tier:'A+',img:'jasprit+bumrah',avg:0,sr:0,econ:6.5,wSR:12},
{n:'Rashid Khan',nat:'OS',role:'BWL',base:200,tier:'A+',img:'rashid+khan',avg:0,sr:0,econ:6.4,wSR:13},
{n:'MS Dhoni',nat:'IND',role:'WK',base:200,tier:'A+',img:'ms+dhoni',avg:39.1,sr:136,econ:0,wSR:0},
{n:'Hardik Pandya',nat:'IND',role:'AR',base:200,tier:'A+',img:'hardik+pandya',avg:29,sr:152,econ:8.8,wSR:22},
{n:'Rishabh Pant',nat:'IND',role:'WK',base:200,tier:'A+',img:'rishabh+pant',avg:35,sr:148,econ:0,wSR:0},
{n:'KL Rahul',nat:'IND',role:'BAT',base:200,tier:'A+',img:'kl+rahul',avg:44.5,sr:134,econ:0,wSR:0},
{n:'Suryakumar Yadav',nat:'IND',role:'BAT',base:200,tier:'A+',img:'suryakumar+yadav',avg:31,sr:167,econ:0,wSR:0},
{n:'Shubman Gill',nat:'IND',role:'BAT',base:150,tier:'A',img:'shubman+gill',avg:34,sr:133,econ:0,wSR:0},
{n:'Ravindra Jadeja',nat:'IND',role:'AR',base:150,tier:'A',img:'ravindra+jadeja',avg:27,sr:128,econ:7.6,wSR:18},
{n:'Rohit Sharma',nat:'IND',role:'BAT',base:200,tier:'A+',img:'rohit+sharma',avg:30,sr:131,econ:0,wSR:0},
{n:'Pat Cummins',nat:'OS',role:'BWL',base:200,tier:'A+',img:'pat+cummins',avg:0,sr:0,econ:8.2,wSR:14},
{n:'Mitchell Starc',nat:'OS',role:'BWL',base:200,tier:'A+',img:'mitchell+starc',avg:0,sr:0,econ:8.5,wSR:13},
{n:'David Miller',nat:'OS',role:'BAT',base:150,tier:'A',img:'david+miller',avg:33,sr:141,econ:0,wSR:0},
{n:'Glenn Maxwell',nat:'OS',role:'AR',base:150,tier:'A',img:'glenn+maxwell',avg:22,sr:155,econ:7.9,wSR:20},
{n:'Faf du Plessis',nat:'OS',role:'BAT',base:100,tier:'A',img:'faf+du+plessis',avg:35,sr:138,econ:0,wSR:0},
{n:'Quinton de Kock',nat:'OS',role:'WK',base:150,tier:'A',img:'quinton+de+kock',avg:30,sr:137,econ:0,wSR:0},
{n:'Kagiso Rabada',nat:'OS',role:'BWL',base:150,tier:'A',img:'kagiso+rabada',avg:0,sr:0,econ:8.1,wSR:14},
{n:'Jos Buttler',nat:'OS',role:'WK',base:200,tier:'A+',img:'jos+buttler',avg:38,sr:150,econ:0,wSR:0},
{n:'Sanju Samson',nat:'IND',role:'WK',base:150,tier:'A',img:'sanju+samson',avg:28,sr:137,econ:0,wSR:0},
{n:'Andre Russell',nat:'OS',role:'AR',base:200,tier:'A+',img:'andre+russell',avg:30,sr:177,econ:9,wSR:22},
{n:'Travis Head',nat:'OS',role:'BAT',base:150,tier:'A',img:'travis+head',avg:35,sr:158,econ:0,wSR:0},
{n:'Heinrich Klaasen',nat:'OS',role:'WK',base:200,tier:'A+',img:'heinrich+klaasen',avg:42,sr:171,econ:0,wSR:0},
{n:'Abhishek Sharma',nat:'IND',role:'AR',base:100,tier:'A',img:'abhishek+sharma',avg:28,sr:162,econ:8.5,wSR:25},
{n:'Yuzvendra Chahal',nat:'IND',role:'BWL',base:100,tier:'A',img:'yuzvendra+chahal',avg:0,sr:0,econ:7.6,wSR:14},
{n:'Kuldeep Yadav',nat:'IND',role:'BWL',base:100,tier:'A',img:'kuldeep+yadav',avg:0,sr:0,econ:7.7,wSR:15},
{n:'Arshdeep Singh',nat:'IND',role:'BWL',base:100,tier:'A',img:'arshdeep+singh',avg:0,sr:0,econ:8.9,wSR:16},
{n:'Axar Patel',nat:'IND',role:'AR',base:100,tier:'A',img:'axar+patel',avg:22,sr:140,econ:7.2,wSR:19},
{n:'Rinku Singh',nat:'IND',role:'BAT',base:75,tier:'A',img:'rinku+singh',avg:28,sr:149,econ:0,wSR:0},
{n:'Shreyas Iyer',nat:'IND',role:'BAT',base:150,tier:'A',img:'shreyas+iyer',avg:33,sr:125,econ:0,wSR:0},
{n:'Noor Ahmad',nat:'OS',role:'BWL',base:75,tier:'A',img:'noor+ahmad',avg:0,sr:0,econ:7.2,wSR:15},
{n:'Sai Sudarshan',nat:'IND',role:'BAT',base:75,tier:'A',img:'sai+sudarshan',avg:36,sr:128,econ:0,wSR:0}
];

function getPlayerImg(name){
  return 'https://ui-avatars.com/api/?name='+encodeURIComponent(name)+'&background=1a2236&color=f5a623&size=128&bold=true&format=svg';
}

const app={
state:{roomCode:null,userName:'Player',teamId:null,isHost:false,players:{},mode:'mock',
  auction:{inProgress:false,idx:-1,currentBid:0,leadTeam:null,timer:15,status:'WAITING',timerMax:15},
  teams:{},playerDataset:[],schedule:[],played:0,auctionHistory:[],
  stats:{runs:0,wkts:0,sixes:0},leaderboards:{orange:[],purple:[]}},

config:{teams:Object.keys(TEAMS_META),bidIncr:v=>{if(v<100)return 5;if(v<200)return 10;if(v<500)return 25;if(v<1000)return 50;return 100}},

init(){this.load();this.genPlayers();this.pollRooms();this.ui();console.log('IPL 2026 ULTIMATE loaded')},

// PLAYER DATA
genPlayers(){
  if(this.state.playerDataset.length>0)return;
  const ds=[];
  REAL_PLAYERS.forEach((p,i)=>{
    const setN=Math.floor(i/10)+1;
    let sn=setN===1?'MARQUEE PLAYERS':setN===2?'CAPPED BATTERS':setN===3?'CAPPED ALL-ROUNDERS':'CAPPED BOWLERS';
    ds.push({id:'P'+i,name:p.n,nation:p.nat==='OS'?'Overseas':'IND',role:p.role,base:p.base,tier:p.tier,set:sn,skill:0,tRuns:0,tWkts:0,t6s:0,img:getPlayerImg(p.n),career:{avg:p.avg||20+Math.random()*25,sr:p.sr||110+Math.random()*60,econ:p.econ||7+Math.random()*4,wSR:p.wSR||15+Math.random()*15}});
  });
  const roles=['BAT','BWL','AR','WK'];const nations=['IND','IND','IND','IND','Overseas','Overseas'];
  const fnames=['Aarush','Vihaan','Reyan','Arjun','Dhruv','Ishan','Kabir','Lakshya','Manan','Nikhil','Pranav','Rudra','Samar','Tejas','Yash','Vivaan','Zain','Ankit','Bhavish','Chirag','Dev','Eshan','Farhan','Gaurav','Harsh','Jai','Karan','Luv','Manav','Nav','Ojas','Parth','Rohan','Sid','Tanay','Uday'];
  const lnames=['Singh','Kumar','Sharma','Patel','Gupta','Yadav','Chauhan','Verma','Das','Khan','Ali','Nair','Reddy','Joshi','Mehta','Shah','Rao','Mishra'];
  for(let i=ds.length;i<350;i++){
    const nat=nations[Math.floor(Math.random()*nations.length)];
    const role=roles[Math.floor(Math.random()*4)];
    const base=[20,30,50,75,100,150,200][Math.floor(Math.random()*7)];
    const nm=fnames[Math.floor(Math.random()*fnames.length)]+' '+lnames[Math.floor(Math.random()*lnames.length)];
    const setN=Math.floor(i/10)+1;
    ds.push({id:'P'+i,name:nm,nation:nat,role:role,base:base,tier:i<50?'A':'B',set:'SET '+setN,skill:0,tRuns:0,tWkts:0,t6s:0,img:getPlayerImg(nm),career:{avg:20+Math.random()*25,sr:110+Math.random()*60,econ:7+Math.random()*4,wSR:15+Math.random()*15}});
  }
  ds.forEach(p=>{p.skill=Math.min(100,Math.round((p.career.avg/45)*50+(p.career.sr/170)*50))});
  this.state.playerDataset=ds;
  this.save();
},

// PERSISTENCE
save(){
  localStorage.setItem('ipl_v2',JSON.stringify(this.state));
  if(this.state.roomCode){
    fetch('http://localhost:3000/api/rooms',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({code:this.state.roomCode,state:this.state})}).catch(()=>{});
  }
},
load(){const d=localStorage.getItem('ipl_v2');if(d)try{this.state=JSON.parse(d)}catch(e){}},

// TOAST
toast(msg,type='info'){
  const box=document.getElementById('toast-box');
  const t=document.createElement('div');
  t.className='toast '+type;
  t.innerHTML=msg;
  box.appendChild(t);
  setTimeout(()=>t.remove(),3500);
},

// NAVIGATION
go(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const el=document.getElementById('page-'+id);
  if(el)el.classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
  const nl=document.getElementById('nav-'+id);
  if(nl)nl.classList.add('active');
  this.ui();
},

// MODALS
openModal(type){document.getElementById('modal-'+type).style.display='flex';if(type==='create')this.renderTeamSel()},

// TEAM SELECTOR
renderTeamSel(){
  const el=document.getElementById('team-sel');
  el.innerHTML=this.config.teams.map(t=>'<div class="team-badge'+(this.state.teamId===t?' sel':'')+'" style="background:'+TEAMS_META[t].color+'" onclick="app.pickTeam(\\''+t+'\\')">'+TEAMS_META[t].logo+' '+t+'</div>').join('');
},
pickTeam(t){this.state.teamId=t;this.renderTeamSel()},

// ROOM MANAGEMENT
createRoom(){
  const code=Math.random().toString(36).substring(2,8).toUpperCase();
  this.state.roomCode=code;
  this.state.isHost=true;
  this.state.userName=document.getElementById('cr-name').value||'Host';
  this.state.mode=document.getElementById('cr-mode').value;
  this.state.auction.timerMax=parseInt(document.getElementById('cr-timer').value);
  this.state.players[this.state.userName]={team:this.state.teamId,isHost:true};
  this.config.teams.forEach(t=>{this.state.teams[t]={id:t,purse:12000,squad:[],overseas:0}});
  document.getElementById('modal-create').style.display='none';
  this.go('lobby');
  this.save();
  this.toast('Room <b>'+code+'</b> created!','success');
},
joinRoom(){
  this.state.roomCode=document.getElementById('jr-code').value.toUpperCase();
  this.state.userName=document.getElementById('jr-name').value||'Guest';
  this.state.isHost=false;
  document.getElementById('modal-join').style.display='none';
  this.load();
  this.go('lobby');
},
soloPlay(){
  this.state.roomCode='SOLO';this.state.isHost=true;this.state.userName='You';
  this.state.teamId=this.state.teamId||'CSK';
  this.state.players['You']={team:this.state.teamId,isHost:true};
  this.config.teams.forEach(t=>{this.state.teams[t]={id:t,purse:12000,squad:[],overseas:0}});
  this.save();this.toast('Solo mode started!','success');this.startAuction();
},

// AUCTION
startAuction(){
  this.state.auction.inProgress=true;
  this.state.auction.idx=0;
  this.state.auction.status='BIDDING';
  this.go('auction');
  this.save();
  this.startTimer();
},
startTimer(){
  if(this._ti)clearInterval(this._ti);
  this.state.auction.timer=this.state.auction.timerMax||15;
  this._ti=setInterval(()=>{
    this.state.auction.timer--;
    if(this.state.auction.timer<=0)this.soldItem();
    this.ui();
  },1000);
},
curPlayer(){return this.state.playerDataset[this.state.auction.idx]},
bid(type,mult=1){
  if(this.state.auction.status!=='BIDDING')return;
  if(type==='pass'){this.soldItem();return}
  const p=this.curPlayer();
  const inc=this.config.bidIncr(this.state.auction.currentBid||p.base);
  this.state.auction.currentBid=(this.state.auction.currentBid||p.base)+(inc*mult);
  this.state.auction.leadTeam=this.state.teamId||this.config.teams[Math.floor(Math.random()*10)];
  this.state.auction.timer=Math.min(this.state.auction.timerMax||15,this.state.auction.timer+5);
  this.addLog(this.state.auction.leadTeam+' bids ₹'+(this.state.auction.currentBid/100).toFixed(2)+' Cr for '+p.name,'bid');
  this.save();this.ui();
},
soldItem(){
  clearInterval(this._ti);
  const p=this.curPlayer();
  if(!p)return;
  if(this.state.auction.leadTeam&&this.state.auction.currentBid>=p.base){
    const tm=this.state.teams[this.state.auction.leadTeam];
    if(tm){tm.squad.push(p.id);tm.purse-=this.state.auction.currentBid;if(p.nation!=='IND')tm.overseas++}
    this.addLog('✅ SOLD: '+p.name+' → '+this.state.auction.leadTeam+' for ₹'+(this.state.auction.currentBid/100).toFixed(2)+' Cr','sold');
    this.state.auctionHistory.push({name:p.name,team:this.state.auction.leadTeam,amount:this.state.auction.currentBid,status:'SOLD',role:p.role,nation:p.nation,img:p.img});
    fetch('http://localhost:3000/api/auction/sold',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({room_code:this.state.roomCode,player_name:p.name,player_id:p.id,team:this.state.auction.leadTeam,amount:this.state.auction.currentBid})}).catch(()=>{});
  }else{
    this.addLog('❌ UNSOLD: '+p.name,'unsold');
    this.state.auctionHistory.push({name:p.name,team:null,amount:0,status:'UNSOLD',role:p.role,nation:p.nation,img:p.img});
  }
  setTimeout(()=>{
    this.state.auction.idx++;
    if(this.state.auction.idx>=this.state.playerDataset.length){
      this.state.auction.inProgress=false;this.state.auction.status='COMPLETED';
      this.toast('🎉 Auction Complete!','success');this.go('dashboard');
    }else{
      this.state.auction.currentBid=0;this.state.auction.leadTeam=null;this.startTimer();
    }
    this.save();this.ui();
  },800);
},
skipAuction(){
  if(!confirm('Auto-fill all teams?'))return;
  clearInterval(this._ti);
  const rem=this.state.playerDataset.slice(this.state.auction.idx);
  const tms=Object.values(this.state.teams);
  rem.forEach(p=>{
    let done=false;
    const candidates=tms.filter(t=>t.squad.length<25&&t.purse>=p.base&&(p.nation==='IND'||t.overseas<8));
    if(candidates.length){const t=candidates[Math.floor(Math.random()*candidates.length)];t.squad.push(p.id);t.purse-=p.base;if(p.nation!=='IND')t.overseas++;
      this.state.auctionHistory.push({name:p.name,team:t.id,amount:p.base,status:'SOLD',role:p.role,nation:p.nation,img:p.img});done=true}
    if(!done)this.state.auctionHistory.push({name:p.name,team:null,amount:0,status:'UNSOLD',role:p.role,nation:p.nation,img:p.img});
  });
  this.state.auction.inProgress=false;this.state.auction.status='COMPLETED';
  this.toast('⏭ Auction auto-completed','success');this.go('dashboard');this.save();
},

// AUCTION LOG
addLog(txt,type='info'){
  const el=document.getElementById('auction-log');if(!el)return;
  const d=document.createElement('div');d.className='log-entry';
  d.innerHTML='<span class="log-time">'+new Date().toLocaleTimeString()+'</span> <span class="log-'+type+'">'+txt+'</span>';
  el.prepend(d);
},

// TOURNAMENT
genSchedule(){
  const tms=Object.keys(this.state.teams);this.state.schedule=[];
  for(let i=0;i<tms.length;i++)for(let j=i+1;j<tms.length;j++){
    this.state.schedule.push({t1:tms[i],t2:tms[j],result:null,s1:0,w1:0,s2:0,w2:0});
  }
  this.save();
},
simTournament(){
  if(!this.state.schedule.length)this.genSchedule();
  let idx=this.state.played;
  const iv=setInterval(()=>{
    if(idx>=this.state.schedule.length){clearInterval(iv);this.toast('🏆 Tournament Complete!','success');this.save();this.ui();return}
    this.simMatch(this.state.schedule[idx]);this.state.played=idx+1;idx++;this.ui();
  },50);
},
simMatch(m){
  const gSq=id=>(this.state.teams[id]?.squad||[]).map(sid=>this.state.playerDataset.find(p=>p.id===sid)).filter(Boolean);
  const s1=gSq(m.t1),s2=gSq(m.t2);
  if(!s1.length||!s2.length){m.result='ABD';return}
  const sk=sq=>sq.reduce((a,p)=>a+p.skill,0)/sq.length;
  const i1=this.runInn(s1,s2,sk(s1),sk(s2),Infinity);
  const i2=this.runInn(s2,s1,sk(s2),sk(s1),i1.t+1);
  m.s1=i1.t;m.w1=i1.w;m.s2=i2.t;m.w2=i2.w;
  m.result=m.s1>m.s2?m.t1:(m.s2>m.s1?m.t2:'TIE');
  this.state.stats.runs+=i1.t+i2.t;this.state.stats.wkts+=i1.w+i2.w;this.state.stats.sixes+=i1.s+i2.s;
  fetch('http://localhost:3000/api/matches',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({room_code:this.state.roomCode,team1:m.t1,team2:m.t2,score1:m.s1,wk1:m.w1,score2:m.s2,wk2:m.w2,winner:m.result,match_num:this.state.played})}).catch(()=>{});
},
runInn(bat,bowl,bS,oS,tgt){
  let t=0,w=0,b=0,s6=0,bi=0;
  while(b<120&&w<10&&t<=tgt){
    const d=(bS-oS)/200;const r=Math.random();
    const wP=Math.max(.02,.05-d*.05),sP=Math.min(.3,.15+d*.1),fP=Math.min(.4,.2+d*.05);
    if(r<wP){w++;const bw=bowl[Math.floor(b/6)%bowl.length];if(bw)bw.tWkts++}
    else if(r<wP+sP){t+=6;s6++;const bt=bat[bi%bat.length];if(bt){bt.tRuns+=6;bt.t6s++}}
    else if(r<wP+sP+fP){t+=4;const bt=bat[bi%bat.length];if(bt)bt.tRuns+=4}
    else if(r<.7+d*.1){t+=1;const bt=bat[bi%bat.length];if(bt)bt.tRuns+=1;bi++}
    else{/* dot */}
    b++;
  }
  return{t,w,b,s:s6};
},

// ROOMS POLLING
async pollRooms(){
  try{const r=await fetch('http://localhost:3000/api/rooms');if(r.ok){const rooms=await r.json();this.renderRooms(rooms)}}catch(e){}
  setTimeout(()=>this.pollRooms(),15000);
},
renderRooms(rooms){
  const el=document.getElementById('room-list');if(!el)return;
  if(!rooms.length){el.innerHTML='<p style="color:var(--text3);font-size:.85rem">No active rooms. Create one to get started!</p>';return}
  el.innerHTML=rooms.map(r=>'<div class="room-card" onclick="document.getElementById(\\'jr-code\\').value=\\''+r.code+'\\';app.openModal(\\'join\\')"><div><span style="font-weight:700;color:var(--gold)">'+r.code+'</span> <span style="color:var(--text2);font-size:.82rem">by '+r.host_name+'</span></div><div style="display:flex;gap:8px;align-items:center"><span class="badge badge-india">'+r.mode+'</span><span style="font-size:.75rem;color:var(--text3)">'+r.status+'</span></div></div>').join('');
},

// RENDER UI
ui(){
  document.getElementById('nav-room').innerText=this.state.roomCode||'NO ROOM';
  // LOBBY
  if(this.state.roomCode){
    const lc=document.getElementById('lobby-code');if(lc)lc.innerText=this.state.roomCode;
    const lp=document.getElementById('lobby-players');
    if(lp)lp.innerHTML=Object.entries(this.state.players).map(([n,d])=>'<div style="padding:8px 0;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:8px"><img src="'+getPlayerImg(n)+'" style="width:28px;height:28px;border-radius:50%"> <span style="font-weight:600">'+n+'</span> <span class="badge badge-india">'+d.team+'</span>'+(d.isHost?' <span style="color:var(--gold);font-size:.72rem">HOST</span>':'')+'</div>').join('');
    const ls=document.getElementById('lobby-settings');if(ls)ls.innerHTML='Mode: '+(this.state.mode==='mega'?'Mega':'Mock')+' Auction<br>Timer: '+(this.state.auction.timerMax||15)+'s<br>Players: '+this.state.playerDataset.length;
    if(this.state.isHost){const sb=document.getElementById('start-btn');if(sb)sb.style.display='inline-block';const wm=document.getElementById('wait-msg');if(wm)wm.style.display='none'}
  }
  // AUCTION
  if(this.state.auction.inProgress&&this.curPlayer()){
    const p=this.curPlayer();
    const av=document.getElementById('spot-avatar');if(av)av.querySelector('img').src=p.img;
    const sn=document.getElementById('spot-name');if(sn)sn.innerText=p.name;
    const sr=document.getElementById('spot-role');if(sr)sr.innerText=p.role+' | TIER '+p.tier;
    const ss=document.getElementById('spot-stats');if(ss)ss.innerText='AVG: '+p.career.avg.toFixed(1)+' | SR: '+p.career.sr.toFixed(1)+(p.career.econ?' | ECON: '+p.career.econ.toFixed(1):'');
    const snat=document.getElementById('spot-nation');if(snat){snat.className='badge '+(p.nation==='IND'?'badge-india':'badge-overseas');snat.innerText=p.nation==='IND'?'🇮🇳 INDIA':'🌍 OVERSEAS'}
    const sb=document.getElementById('spot-bid');if(sb)sb.innerText='₹'+((this.state.auction.currentBid||p.base)/100).toFixed(2)+' Cr';
    const sbs=document.getElementById('spot-base');if(sbs)sbs.innerText='BASE: ₹'+(p.base/100).toFixed(2)+' Cr';
    const sl=document.getElementById('spot-leader');if(sl)sl.innerHTML=this.state.auction.leadTeam?('<span style="color:'+TEAMS_META[this.state.auction.leadTeam]?.color+'">'+TEAMS_META[this.state.auction.leadTeam]?.logo+' '+this.state.auction.leadTeam+'</span>'):'<span style="color:var(--text3)">OPENING BID</span>';
    const cs=document.getElementById('cur-set');if(cs)cs.innerText=p.set;
    const tn=document.getElementById('timer-num');if(tn)tn.innerText=this.state.auction.timer;
    const tp=document.getElementById('timer-prog');
    if(tp){const pct=this.state.auction.timer/(this.state.auction.timerMax||15);tp.setAttribute('stroke-dashoffset',226*(1-pct))}
    const ap=document.getElementById('auc-progress');if(ap)ap.innerText=(this.state.auction.idx+1)+'/'+this.state.playerDataset.length;
    const ab=document.getElementById('auc-bar');if(ab)ab.style.width=(((this.state.auction.idx+1)/this.state.playerDataset.length)*100)+'%';
  }
  // TEAMS TRACKER IN AUCTION
  const at=document.getElementById('auction-teams');
  if(at)at.innerHTML=this.config.teams.map(t=>{
    const tm=this.state.teams[t];if(!tm)return'';
    const leading=this.state.auction.leadTeam===t;
    return '<div class="team-strip'+(leading?' lead':'')+'" style="border-left-color:'+TEAMS_META[t].color+'"><div class="team-dot" style="background:'+TEAMS_META[t].color+'"></div><div style="flex:1"><div style="font-weight:600;font-size:.85rem">'+TEAMS_META[t].logo+' '+t+'</div><div style="font-size:.72rem;color:var(--text2)">'+tm.squad.length+' players · '+tm.overseas+' OS</div></div><div style="text-align:right"><div style="font-size:.9rem;font-weight:700;color:var(--gold)">₹'+(tm.purse/100).toFixed(1)+'</div><div style="font-size:.68rem;color:var(--text3)">Cr left</div></div></div>';
  }).join('');

  // DASHBOARD
  const dr=document.getElementById('d-runs');if(dr)dr.innerText=this.state.stats.runs.toLocaleString();
  const dw=document.getElementById('d-wkts');if(dw)dw.innerText=this.state.stats.wkts;
  const d6=document.getElementById('d-6s');if(d6)d6.innerText=this.state.stats.sixes;

  // STANDINGS
  this.renderStandings('d-standings');
  this.renderStandings('t-table');
  this.renderCaps();
  this.renderSchedule();
  this.renderTeamPage();
  this.renderHistory();
},

renderStandings(targetId){
  const el=document.getElementById(targetId);if(!el)return;
  const stats={};
  this.config.teams.forEach(t=>stats[t]={team:t,p:0,w:0,l:0,pts:0,nrr:0,rf:0,rb:0,af:0,ab:0});
  this.state.schedule.forEach(m=>{
    if(!m.result||m.result==='ABD')return;
    stats[m.t1].p++;stats[m.t2].p++;
    if(m.result===m.t1){stats[m.t1].w++;stats[m.t1].pts+=2;stats[m.t2].l++}
    else if(m.result===m.t2){stats[m.t2].w++;stats[m.t2].pts+=2;stats[m.t1].l++}
    stats[m.t1].rf+=m.s1;stats[m.t1].rb+=120;stats[m.t1].af+=m.s2;stats[m.t1].ab+=120;
    stats[m.t2].rf+=m.s2;stats[m.t2].rb+=120;stats[m.t2].af+=m.s1;stats[m.t2].ab+=120;
  });
  Object.values(stats).forEach(s=>{s.nrr=s.rb&&s.ab?((s.rf/s.rb)-(s.af/s.ab))*6:0});
  const sorted=Object.values(stats).sort((a,b)=>b.pts-a.pts||b.nrr-a.nrr);
  el.innerHTML='<table class="standings-tbl"><thead><tr><th>#</th><th>TEAM</th><th>P</th><th>W</th><th>L</th><th>PTS</th><th>NRR</th></tr></thead><tbody>'+sorted.map((s,i)=>'<tr class="'+(i<4?'q':'')+'"><td><div style="width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;background:'+(i<4?'rgba(245,166,35,.2)':'var(--bg4)')+';color:'+(i<4?'var(--gold)':'var(--text3)')+'">'+( i+1)+'</div></td><td style="font-weight:700"><span style="color:'+TEAMS_META[s.team]?.color+'">'+TEAMS_META[s.team]?.logo+'</span> '+s.team+'</td><td>'+s.p+'</td><td style="color:var(--green)">'+s.w+'</td><td style="color:#ff6b6b">'+s.l+'</td><td style="font-weight:700;color:var(--gold)">'+s.pts+'</td><td>'+s.nrr.toFixed(3)+'</td></tr>').join('')+'</tbody></table>';
},

renderCaps(){
  const byRuns=[...this.state.playerDataset].sort((a,b)=>b.tRuns-a.tRuns).filter(p=>p.tRuns>0).slice(0,5);
  const byWkts=[...this.state.playerDataset].sort((a,b)=>b.tWkts-a.tWkts).filter(p=>p.tWkts>0).slice(0,5);
  const by6s=[...this.state.playerDataset].sort((a,b)=>(b.t6s||0)-(a.t6s||0)).filter(p=>(p.t6s||0)>0).slice(0,5);
  const renderList=(els,stat,color)=>els.length?els.map((p,i)=>'<div class="cap-row"><div style="width:20px;font-weight:700;color:'+(i===0?'var(--gold)':'var(--text3)')+';">'+(i+1)+'</div><img src="'+p.img+'" style="width:32px;height:32px;border-radius:50%"><div style="flex:1"><div style="font-size:.82rem;font-weight:600">'+p.name+'</div></div><div style="font-size:1rem;font-weight:700;color:'+color+'">'+p[stat]+'</div></div>').join(''):'<p style="color:var(--text3);font-size:.82rem">No data yet</p>';
  ['d-orange','t-orange'].forEach(id=>{const el=document.getElementById(id);if(el)el.innerHTML=renderList(byRuns,'tRuns','orange')});
  ['d-purple','t-purple'].forEach(id=>{const el=document.getElementById(id);if(el)el.innerHTML=renderList(byWkts,'tWkts','#9b59b6')});
  const s6=document.getElementById('t-sixes');if(s6)s6.innerHTML=renderList(by6s,'t6s','var(--gold)');
},

renderSchedule(){
  const el=document.getElementById('t-schedule');if(!el)return;
  if(!this.state.schedule.length){el.innerHTML='<p style="color:var(--text3)">No matches scheduled yet</p>';return}
  el.innerHTML=this.state.schedule.slice(0,50).map((m,i)=>'<div class="match-card"><div style="display:flex;align-items:center;gap:8px"><span style="font-size:.7rem;color:var(--text3);width:28px">#'+(i+1)+'</span><span style="font-weight:700;color:'+TEAMS_META[m.t1]?.color+'">'+m.t1+'</span><span style="color:var(--text3);font-size:.72rem">vs</span><span style="font-weight:700;color:'+TEAMS_META[m.t2]?.color+'">'+m.t2+'</span></div><div style="text-align:right">'+(m.result?'<div style="font-size:.82rem;font-weight:700">'+m.s1+'/'+m.w1+' vs '+m.s2+'/'+m.w2+'</div><div style="font-size:.72rem;color:var(--green)">'+m.result+' won</div>':'<span style="font-size:.72rem;color:var(--text3)">Upcoming</span>')+'</div></div>').join('');
},

renderTeamPage(){
  const tabs=document.getElementById('team-tabs');
  const detail=document.getElementById('team-detail');
  if(!tabs||!detail)return;
  if(!this._selTeam)this._selTeam=this.config.teams[0];
  tabs.innerHTML=this.config.teams.map(t=>'<button class="btn btn-sm '+(this._selTeam===t?'':'btn-outline')+'" style="'+(this._selTeam===t?'background:'+TEAMS_META[t].color:'border-color:'+TEAMS_META[t].color+';color:'+TEAMS_META[t].color)+'" onclick="app._selTeam=\\''+t+'\\';app.ui()">'+TEAMS_META[t].logo+' '+t+'</button>').join('');
  const tm=this.state.teams[this._selTeam];
  if(!tm){detail.innerHTML='<p style="color:var(--text3)">No data</p>';return}
  const squad=(tm.squad||[]).map(sid=>this.state.playerDataset.find(p=>p.id===sid)).filter(Boolean);
  detail.innerHTML='<div style="display:flex;align-items:center;gap:16px;margin-bottom:20px"><div style="font-size:2.5rem">'+TEAMS_META[this._selTeam].logo+'</div><div><h2 class="raj" style="color:'+TEAMS_META[this._selTeam].color+'">'+TEAMS_META[this._selTeam].name+'</h2><div style="font-size:.85rem;color:var(--text2)">Budget: ₹'+(tm.purse/100).toFixed(1)+' Cr | Squad: '+squad.length+' | Overseas: '+tm.overseas+'</div></div></div>'+
    (squad.length?'<div class="squad-grid">'+squad.map(p=>'<div class="sq-card"><div class="sq-av"><img src="'+p.img+'" alt="'+p.name+'"></div><div><div style="font-weight:600;font-size:.82rem">'+p.name+'</div><div style="font-size:.7rem;color:var(--text2)">'+p.role+' <span class="badge '+(p.nation==='IND'?'badge-india':'badge-overseas')+'">'+p.nation+'</span></div>'+(p.tRuns?'<div style="font-size:.68rem;color:var(--gold);margin-top:2px">'+p.tRuns+' runs · '+p.tWkts+' wkts</div>':'')+'</div></div>').join('')+'</div>':'<p style="color:var(--text3)">No players in squad yet</p>');
},

renderHistory(){
  const el=document.getElementById('history-list');if(!el)return;
  if(!this.state.auctionHistory.length){el.innerHTML='<p style="color:var(--text3)">No auction history yet</p>';return}
  el.innerHTML='<table style="width:100%;border-collapse:collapse"><thead><tr style="border-bottom:1px solid var(--border)"><th style="text-align:left;padding:8px;font-size:.72rem;color:var(--text3)">#</th><th style="text-align:left;padding:8px;font-size:.72rem;color:var(--text3)">PLAYER</th><th style="text-align:left;padding:8px;font-size:.72rem;color:var(--text3)">ROLE</th><th style="text-align:left;padding:8px;font-size:.72rem;color:var(--text3)">TEAM</th><th style="text-align:left;padding:8px;font-size:.72rem;color:var(--text3)">AMOUNT</th><th style="text-align:left;padding:8px;font-size:.72rem;color:var(--text3)">STATUS</th></tr></thead><tbody>'+
    this.state.auctionHistory.map((h,i)=>'<tr style="border-bottom:1px solid rgba(255,255,255,.03)"><td style="padding:8px;font-size:.78rem">'+(i+1)+'</td><td style="padding:8px;display:flex;align-items:center;gap:8px"><img src="'+h.img+'" style="width:28px;height:28px;border-radius:50%"><span style="font-weight:600;font-size:.82rem">'+h.name+'</span></td><td style="padding:8px;font-size:.78rem">'+h.role+'</td><td style="padding:8px;font-weight:700;color:'+(h.team?TEAMS_META[h.team]?.color:'var(--text3)')+'">'+( h.team||'-')+'</td><td style="padding:8px;font-size:.82rem;color:var(--gold)">₹'+(h.amount/100).toFixed(2)+' Cr</td><td style="padding:8px"><span class="badge '+(h.status==='SOLD'?'badge-india':'badge-overseas')+'">'+h.status+'</span></td></tr>').join('')+
    '</tbody></table>';
},

// UTILS
exportState(){
  const blob=new Blob([JSON.stringify(this.state,null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='ipl2026_state.json';a.click();
},
reset(){if(confirm('Clear all data?')){localStorage.clear();location.reload()}}
};
<\/script>
</body></html>`;
};
