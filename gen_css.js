module.exports = function () {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>IPL 2026 ULTIMATE | Mock Auction Simulator</title>
<meta name="description" content="The most advanced IPL auction simulator with real players, smart AI bidding, DRS reviews, and broadcast-quality match simulation.">
<meta http-equiv="Content-Security-Policy" content="default-src * 'unsafe-inline' 'unsafe-eval' data: blob:;">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Rajdhani:wght@500;600;700&family=Outfit:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/chart.js"><\/script>
<style>
/* ═══════════════════════════════════════════════
   IPL 2026 ULTIMATE — PREMIUM DESIGN SYSTEM
   Inspired by thenaliai.in futuristic aesthetic
   ═══════════════════════════════════════════════ */

:root{
  --bg:#020617;--bg2:#0f172a;--bg3:#1e293b;--bg4:#1a2236;
  --glass:rgba(255,255,255,.02);--glass2:rgba(255,255,255,.04);
  --gold:#f59e0b;--gold2:#fbbf24;--gold3:#d97706;
  --neon-cyan:#06b6d4;--neon-purple:#8b5cf6;--neon-pink:#ec4899;
  --red:#ef4444;--blue:#38bdf8;--green:#10b981;--purple:#a78bfa;
  --text:#f8fafc;--text2:#94a3b8;--text3:#64748b;
  --border:rgba(255,255,255,.06);
  --r:16px;--r2:24px;
  --shadow:0 25px 60px -12px rgba(0,0,0,.5);
  --glow-gold:0 0 40px rgba(245,158,11,.15),0 0 80px rgba(245,158,11,.05);
  --glow-cyan:0 0 40px rgba(6,182,212,.12),0 0 80px rgba(6,182,212,.04);
}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--text);font-family:'Inter',sans-serif;overflow-x:hidden;min-height:100vh;line-height:1.6}

/* === ANIMATED BACKGROUND === */
body::before{content:'';position:fixed;inset:0;z-index:-2;
  background:
    radial-gradient(ellipse 120% 60% at 50% -30%,rgba(139,92,246,.12),transparent 70%),
    radial-gradient(ellipse 80% 50% at 90% 90%,rgba(6,182,212,.08),transparent 60%),
    radial-gradient(ellipse 60% 40% at 5% 70%,rgba(245,158,11,.06),transparent 50%);
}
body::after{content:'';position:fixed;inset:0;z-index:-1;opacity:.03;
  background-image:linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px);
  background-size:60px 60px;
  animation:gridMove 20s linear infinite;
}
@keyframes gridMove{from{transform:translateY(0)}to{transform:translateY(60px)}}

/* TYPOGRAPHY */
h1,h2,h3,h4,.raj{font-family:'Rajdhani',sans-serif;font-weight:700;text-transform:uppercase;letter-spacing:1.5px}
.outfit{font-family:'Outfit',sans-serif}
.mono{font-family:'JetBrains Mono',monospace}

/* SCROLLBAR */
::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:rgba(139,92,246,.4);border-radius:10px}::-webkit-scrollbar-thumb:hover{background:var(--neon-purple)}

/* LAYOUT */
.container{max-width:1440px;margin:0 auto;padding:28px 24px}
.page{display:none;animation:pageIn .6s cubic-bezier(.16,1,.3,1)}.page.active{display:block}

/* KEYFRAMES */
@keyframes pageIn{from{opacity:0;transform:translateY(24px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
@keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
@keyframes glow{0%,100%{box-shadow:0 0 20px rgba(245,158,11,.2),0 0 60px rgba(245,158,11,.05)}50%{box-shadow:0 0 40px rgba(245,158,11,.4),0 0 90px rgba(245,158,11,.1)}}
@keyframes slideUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
@keyframes scaleIn{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}
@keyframes borderGlow{0%,100%{border-color:rgba(245,158,11,.15)}50%{border-color:rgba(245,158,11,.5)}}
@keyframes neonPulse{0%,100%{text-shadow:0 0 10px rgba(6,182,212,.3),0 0 40px rgba(6,182,212,.1)}50%{text-shadow:0 0 20px rgba(6,182,212,.5),0 0 60px rgba(6,182,212,.2)}}
@keyframes gradientShift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
@keyframes orb{0%,100%{transform:translate(0,0) scale(1)}25%{transform:translate(30px,-20px) scale(1.1)}50%{transform:translate(-20px,20px) scale(.95)}75%{transform:translate(20px,10px) scale(1.05)}}

/* ═══ NAV ═══ */
nav{position:sticky;top:0;z-index:999;
  background:rgba(2,6,23,.8);
  backdrop-filter:blur(32px) saturate(200%);-webkit-backdrop-filter:blur(32px) saturate(200%);
  border-bottom:1px solid rgba(139,92,246,.08);
  display:flex;align-items:center;justify-content:space-between;padding:10px 32px;transition:all .3s}
.nav-logo{font-family:'Outfit',sans-serif;font-size:1.3rem;font-weight:900;letter-spacing:4px;text-transform:uppercase;cursor:pointer;
  background:linear-gradient(135deg,#f59e0b 0%,#fbbf24 30%,#06b6d4 70%,#8b5cf6 100%);
  background-size:200% 200%;animation:gradientShift 4s ease infinite;
  -webkit-background-clip:text;-webkit-text-fill-color:transparent}
.nav-links{display:flex;gap:1px;overflow-x:auto;scrollbar-width:none}.nav-links::-webkit-scrollbar{display:none}
.nav-link{color:var(--text3);text-decoration:none;font-size:.7rem;font-weight:600;cursor:pointer;white-space:nowrap;padding:8px 14px;border-radius:10px;transition:all .25s;letter-spacing:1px;position:relative}
.nav-link:hover{color:var(--text);background:rgba(255,255,255,.04)}
.nav-link.active{color:var(--neon-cyan);background:rgba(6,182,212,.06);box-shadow:inset 0 0 0 1px rgba(6,182,212,.15);text-shadow:0 0 12px rgba(6,182,212,.3)}
.nav-badge{background:linear-gradient(135deg,var(--neon-purple),var(--neon-cyan));color:#fff;padding:5px 14px;border-radius:20px;font-size:.7rem;font-weight:700;font-family:'JetBrains Mono',monospace;letter-spacing:1.5px;box-shadow:0 4px 16px rgba(139,92,246,.3)}

/* ═══ TICKER ═══ */
.ticker{background:linear-gradient(90deg,rgba(139,92,246,.04),rgba(6,182,212,.04),rgba(139,92,246,.04));padding:7px 0;border-bottom:1px solid rgba(139,92,246,.06);overflow:hidden;white-space:nowrap}
.ticker-wrap{display:inline-block;animation:tick 90s linear infinite;font-size:.68rem;letter-spacing:2.5px;font-weight:500;opacity:.7;
  background:linear-gradient(90deg,var(--gold),var(--neon-cyan),var(--neon-purple),var(--gold));
  background-size:300% 100%;animation:tick 90s linear infinite,gradientShift 6s ease infinite;
  -webkit-background-clip:text;-webkit-text-fill-color:transparent}
@keyframes tick{from{transform:translateX(100vw)}to{transform:translateX(-100%)}}

/* ═══ CARDS ═══ */
.card{
  background:rgba(15,23,42,.6);
  backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);
  border:1px solid rgba(139,92,246,.08);border-radius:var(--r2);padding:28px;
  transition:all .4s cubic-bezier(.16,1,.3,1);
  position:relative;overflow:hidden}
.card::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;
  background:linear-gradient(90deg,transparent,rgba(139,92,246,.3),rgba(6,182,212,.2),transparent);opacity:0;transition:opacity .4s}
.card:hover{border-color:rgba(139,92,246,.15);box-shadow:0 12px 40px rgba(0,0,0,.3),0 0 0 1px rgba(139,92,246,.06)}
.card:hover::before{opacity:1}

/* ═══ BUTTONS ═══ */
.btn{
  background:linear-gradient(135deg,var(--gold),var(--gold3));color:#000;border:none;
  padding:12px 28px;border-radius:12px;font-weight:700;cursor:pointer;font-size:.82rem;
  transition:all .3s cubic-bezier(.16,1,.3,1);font-family:'Inter',sans-serif;
  position:relative;overflow:hidden;letter-spacing:.5px}
.btn::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,.25),transparent 50%);opacity:0;transition:opacity .3s}
.btn:hover::before{opacity:1}
.btn:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(245,158,11,.3),var(--glow-gold)}
.btn:active{transform:translateY(0);box-shadow:0 4px 12px rgba(245,158,11,.2)}
.btn-outline{background:transparent;border:1.5px solid rgba(139,92,246,.3);color:var(--neon-purple)}
.btn-outline::before{display:none}
.btn-outline:hover{background:rgba(139,92,246,.06);border-color:var(--neon-purple);box-shadow:0 0 30px rgba(139,92,246,.12);color:#c4b5fd}
.btn-danger{background:linear-gradient(135deg,var(--red),#f87171);color:#fff}.btn-danger:hover{box-shadow:0 12px 32px rgba(239,68,68,.3)}
.btn-sm{padding:8px 18px;font-size:.76rem;border-radius:10px}
.btn-lg{padding:16px 36px;font-size:.95rem;border-radius:14px;letter-spacing:1px}
.btn-glow{animation:glow 2.5s ease infinite}
.btn-cyber{background:linear-gradient(135deg,var(--neon-cyan),var(--neon-purple));color:#fff;border:none}
.btn-cyber:hover{box-shadow:0 12px 40px rgba(6,182,212,.3),var(--glow-cyan)}

/* ═══ INPUTS ═══ */
input,select{background:rgba(15,23,42,.6);border:1.5px solid rgba(139,92,246,.1);color:var(--text);padding:14px 18px;border-radius:12px;outline:none;width:100%;font-size:.88rem;transition:all .3s;font-family:'Inter',sans-serif}
input:focus,select:focus{border-color:var(--neon-cyan);box-shadow:0 0 0 3px rgba(6,182,212,.1),0 0 20px rgba(6,182,212,.05);background:rgba(15,23,42,.8)}
input::placeholder{color:var(--text3)}
.badge{padding:4px 10px;border-radius:6px;font-size:.66rem;font-weight:700;letter-spacing:.8px}
.badge-overseas{background:rgba(6,182,212,.1);color:var(--neon-cyan);border:1px solid rgba(6,182,212,.2)}
.badge-india{background:rgba(16,185,129,.08);color:var(--green);border:1px solid rgba(16,185,129,.2)}

/* ═══ HERO ═══ */
.hero{text-align:center;padding:120px 20px 100px;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;top:-100px;left:50%;transform:translateX(-50%);width:800px;height:800px;
  background:radial-gradient(circle,rgba(139,92,246,.08) 0%,rgba(6,182,212,.04) 40%,transparent 70%);
  pointer-events:none;z-index:-1;animation:orb 15s ease infinite}
.hero::after{content:'';position:absolute;bottom:-200px;right:-100px;width:500px;height:500px;
  background:radial-gradient(circle,rgba(245,158,11,.06),transparent 60%);
  pointer-events:none;z-index:-1;animation:orb 12s ease infinite reverse}
.hero-title{font-family:'Outfit',sans-serif;font-size:clamp(3rem,8vw,6rem);font-weight:900;letter-spacing:8px;
  background:linear-gradient(135deg,#fff 10%,var(--gold) 40%,var(--neon-cyan) 70%,var(--neon-purple) 100%);
  background-size:300% 300%;animation:gradientShift 6s ease infinite;
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:20px;text-transform:uppercase;line-height:1.1}
.hero-sub{color:var(--text2);font-size:1.05rem;margin-bottom:56px;max-width:560px;margin-left:auto;margin-right:auto;line-height:1.8;font-weight:300}
.hero-actions{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
.hero-pill{background:rgba(15,23,42,.5);border:1px solid rgba(139,92,246,.1);border-radius:100px;padding:10px 24px;font-size:.78rem;color:var(--text2);display:flex;align-items:center;gap:8px;transition:all .3s;cursor:default;backdrop-filter:blur(12px)}
.hero-pill:hover{border-color:rgba(6,182,212,.3);background:rgba(6,182,212,.04);color:var(--neon-cyan)}
.hero-pill b{color:var(--neon-cyan)}

/* ═══ TEAM GRID ═══ */
.team-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-top:12px}
.team-badge{padding:16px 8px;text-align:center;border-radius:14px;cursor:pointer;font-family:'Outfit';font-weight:700;font-size:.85rem;color:#fff;border:2px solid transparent;transition:all .3s;position:relative;overflow:hidden}
.team-badge::before{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,255,255,.12),transparent);opacity:0;transition:opacity .3s}
.team-badge:hover::before{opacity:1}
.team-badge:hover{transform:scale(1.06);box-shadow:0 8px 24px rgba(0,0,0,.3)}
.team-badge.sel{border-color:var(--neon-cyan);box-shadow:0 0 30px rgba(6,182,212,.3);animation:borderGlow 2s infinite}

/* ═══ AUCTION ═══ */
.auction-layout{display:grid;grid-template-columns:1fr 400px;gap:24px;margin-top:24px}
@media(max-width:900px){.auction-layout{grid-template-columns:1fr}}
.spotlight{text-align:center;padding:48px 28px;position:relative;min-height:580px;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden}
.spotlight::before{content:'';position:absolute;top:-60%;left:50%;transform:translateX(-50%);width:500px;height:500px;
  background:radial-gradient(circle,rgba(139,92,246,.06),rgba(6,182,212,.03),transparent);pointer-events:none;animation:orb 10s ease infinite}
.player-av{width:140px;height:140px;border-radius:50%;border:3px solid var(--neon-purple);
  box-shadow:0 0 50px rgba(139,92,246,.2),0 0 100px rgba(139,92,246,.05);
  background:var(--bg2);margin-bottom:24px;overflow:hidden;transition:all .3s;animation:float 3s ease infinite}
.player-av img{width:100%;height:100%;object-fit:cover}
.bid-amount{font-size:4.5rem;color:var(--gold);font-family:'Outfit';font-weight:900;line-height:1;transition:all .2s;
  text-shadow:0 0 60px rgba(245,158,11,.25)}.bid-amount.pop{transform:scale(1.15)}
.timer-ring{width:80px;height:80px;position:relative;margin:16px auto}
.timer-ring svg{transform:rotate(-90deg);width:80px;height:80px}
.timer-ring circle{fill:none;stroke:rgba(139,92,246,.1);stroke-width:4}
.timer-ring .prog{stroke:var(--neon-cyan);stroke-width:4;stroke-dasharray:226;stroke-dashoffset:0;transition:stroke-dashoffset 1s linear,stroke .3s;stroke-linecap:round;filter:drop-shadow(0 0 6px rgba(6,182,212,.4))}
.timer-ring .prog.urgent{stroke:var(--red);filter:drop-shadow(0 0 8px rgba(239,68,68,.5))}
.timer-num{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:1.6rem;font-weight:700;font-family:'Outfit';transition:color .3s;color:var(--neon-cyan)}.timer-num.urgent{color:var(--red)}
.bid-controls{display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-top:20px}
.team-strip{display:flex;align-items:center;gap:10px;padding:12px 14px;background:rgba(15,23,42,.4);border-radius:12px;margin-bottom:6px;border-left:3px solid transparent;transition:all .3s}
.team-strip.lead{border-left-color:var(--neon-cyan);background:rgba(6,182,212,.04);box-shadow:0 0 20px rgba(6,182,212,.05)}
.team-dot{width:10px;height:10px;border-radius:50%;flex-shrink:0}
.log-entry{padding:6px 0;border-bottom:1px solid rgba(255,255,255,.03);font-size:.76rem;color:var(--text2)}
.log-sold{color:var(--green)!important}.log-unsold{color:#fb7185!important}.log-bid{color:var(--neon-cyan)!important}

/* ═══ SQUAD ═══ */
.squad-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;margin-top:12px}
.sq-card{background:rgba(15,23,42,.5);border-radius:16px;padding:14px;display:flex;align-items:center;gap:12px;
  border:1px solid rgba(139,92,246,.06);transition:all .3s cubic-bezier(.16,1,.3,1)}
.sq-card:hover{border-color:rgba(6,182,212,.25);transform:translateY(-4px);box-shadow:0 16px 32px rgba(0,0,0,.3),var(--glow-cyan)}
.sq-av{width:42px;height:42px;border-radius:50%;border:2px solid rgba(139,92,246,.15);overflow:hidden;flex-shrink:0}.sq-av img{width:100%;height:100%;object-fit:cover}

/* ═══ TABLES ═══ */
.standings-tbl{width:100%;border-collapse:collapse}
.standings-tbl th{font-size:.66rem;padding:14px 10px;color:var(--neon-cyan);letter-spacing:2px;border-bottom:1px solid rgba(6,182,212,.1);text-align:left;font-weight:600;font-family:'JetBrains Mono',monospace}
.standings-tbl td{padding:12px 10px;font-size:.82rem;border-bottom:1px solid rgba(255,255,255,.03)}
.standings-tbl tr:hover{background:rgba(139,92,246,.03)}
.standings-tbl tr.q{background:rgba(6,182,212,.03)}

/* ═══ MATCH ═══ */
.match-card{background:rgba(15,23,42,.4);border-radius:14px;padding:14px 18px;margin-bottom:8px;display:flex;align-items:center;justify-content:space-between;border:1px solid rgba(139,92,246,.06);transition:all .3s}
.match-card:hover{background:rgba(139,92,246,.04);border-color:rgba(139,92,246,.12)}
.ball{width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:700;flex-shrink:0;transition:all .2s}
.ball-0{background:rgba(255,255,255,.03);color:var(--text3)}.ball-1{background:rgba(255,255,255,.06);color:var(--text2)}
.ball-2{background:rgba(6,182,212,.1);color:var(--neon-cyan)}.ball-3{background:rgba(139,92,246,.1);color:var(--neon-purple)}
.ball-4{background:rgba(6,182,212,.15);color:var(--neon-cyan);box-shadow:0 0 12px rgba(6,182,212,.15)}
.ball-6{background:linear-gradient(135deg,var(--gold),var(--gold3));color:#000;box-shadow:0 0 20px rgba(245,158,11,.3)}
.ball-W{background:rgba(239,68,68,.15);color:#fb7185;box-shadow:0 0 12px rgba(239,68,68,.15)}
.mc-scoreboard{background:linear-gradient(180deg,rgba(15,23,42,.8),rgba(2,6,23,.6));border-radius:var(--r2);padding:40px;text-align:center;border:1px solid rgba(139,92,246,.08);position:relative;overflow:hidden}
.mc-scoreboard::before{content:'';position:absolute;top:0;left:50%;transform:translateX(-50%);width:400px;height:250px;
  background:radial-gradient(circle,rgba(6,182,212,.06),rgba(139,92,246,.04),transparent);pointer-events:none}
.mc-score{font-size:5.5rem;font-family:'Outfit';font-weight:900;line-height:1;
  background:linear-gradient(135deg,#fff,var(--neon-cyan));-webkit-background-clip:text;-webkit-text-fill-color:transparent;
  text-shadow:none;filter:drop-shadow(0 0 30px rgba(6,182,212,.15))}
.mc-overs{color:var(--neon-purple);font-size:1rem;margin-top:8px;font-weight:600;font-family:'JetBrains Mono',monospace;letter-spacing:1px}
.mc-balls-row{display:flex;gap:8px;justify-content:center;padding:20px;flex-wrap:wrap}
.mc-subtitle{font-size:1.6rem;text-align:center;font-weight:700;font-family:'Outfit';text-transform:uppercase;margin:20px 0;padding:18px 24px;border-radius:14px;background:rgba(15,23,42,.4);border:1px solid rgba(139,92,246,.06);letter-spacing:3px;min-height:60px;transition:all .3s}
.mc-subtitle.wk{color:#fb7185;background:rgba(239,68,68,.04);border-color:rgba(239,68,68,.12);text-shadow:0 0 20px rgba(239,68,68,.25)}
.mc-subtitle.bnd{color:var(--gold);background:rgba(245,158,11,.04);border-color:rgba(245,158,11,.12);text-shadow:0 0 20px rgba(245,158,11,.25)}
.mc-subtitle.slide{animation:slideUp .3s ease}

/* ═══ STATS ═══ */
.stat-card{background:rgba(15,23,42,.5);border:1px solid rgba(139,92,246,.06);border-radius:var(--r);padding:24px;transition:all .3s;position:relative;overflow:hidden}
.stat-card::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,var(--neon-cyan),transparent);opacity:0;transition:opacity .3s}
.stat-card:hover{border-color:rgba(6,182,212,.15);transform:translateY(-3px);box-shadow:0 8px 24px rgba(0,0,0,.2)}
.stat-card:hover::after{opacity:1}
.stat-val{font-size:2.4rem;font-family:'Outfit';font-weight:900;line-height:1;background:linear-gradient(135deg,var(--text),var(--neon-cyan));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.stat-lbl{font-size:.68rem;color:var(--text3);margin-top:8px;letter-spacing:2px;text-transform:uppercase;font-family:'JetBrains Mono',monospace}

/* ═══ GRIDS ═══ */
.grid-2{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
@media(max-width:768px){.grid-2,.grid-3,.grid-4,.auction-layout{grid-template-columns:1fr}.team-grid{grid-template-columns:repeat(5,1fr)}.hero-title{font-size:2.5rem!important;letter-spacing:4px!important}}

/* ═══ TOAST ═══ */
.toast-box{position:fixed;bottom:24px;right:24px;z-index:3000}
.toast{padding:14px 24px;border-radius:14px;font-size:.84rem;background:rgba(15,23,42,.95);backdrop-filter:blur(24px);border:1px solid rgba(139,92,246,.1);box-shadow:var(--shadow);animation:toastIn .4s cubic-bezier(.16,1,.3,1);margin-top:8px;min-width:280px}
.toast.success{border-left:3px solid var(--green)}.toast.error{border-left:3px solid var(--red)}.toast.info{border-left:3px solid var(--neon-cyan)}
@keyframes toastIn{from{opacity:0;transform:translateX(40px) scale(.9)}to{opacity:1;transform:translateX(0) scale(1)}}

/* ═══ MISC ═══ */
.chart-wrap{position:relative;height:280px}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}.pulse{animation:pulse 1.5s ease infinite}
.room-card{background:rgba(15,23,42,.5);border:1px solid rgba(139,92,246,.06);border-radius:var(--r);padding:20px 24px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;transition:all .3s;margin-bottom:8px}
.room-card:hover{border-color:var(--neon-cyan);background:rgba(6,182,212,.03);transform:translateX(6px);box-shadow:var(--glow-cyan)}
.vscrll{max-height:500px;overflow-y:auto}
.sold-overlay{position:fixed;inset:0;z-index:5000;display:none;align-items:center;justify-content:center;flex-direction:column;pointer-events:none;background:rgba(2,6,23,.5)}
.sold-overlay.show{display:flex;animation:soldPop .6s cubic-bezier(.16,1,.3,1)}
.sold-text{font-size:6rem;font-family:'Outfit';font-weight:900;letter-spacing:14px;
  text-shadow:0 0 80px currentColor,0 0 120px currentColor}
.sold-sub{font-size:1.4rem;font-family:'Outfit';margin-top:10px;opacity:.8;font-weight:600}
@keyframes soldPop{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.1)}100%{opacity:1;transform:scale(1)}}
.confetti-piece{position:fixed;width:10px;height:10px;z-index:5001;pointer-events:none;animation:confettiFall 2s ease forwards}
@keyframes confettiFall{0%{opacity:1;transform:translateY(0) rotate(0deg)}100%{opacity:0;transform:translateY(100vh) rotate(720deg)}}
.search-input{background:rgba(15,23,42,.6);border:1.5px solid rgba(139,92,246,.1);color:var(--text);padding:11px 20px;border-radius:100px;outline:none;font-size:.84rem;width:100%;max-width:300px;transition:all .3s}
.search-input:focus{border-color:var(--neon-cyan);box-shadow:0 0 0 3px rgba(6,182,212,.08)}
.filter-btn{padding:6px 16px;border-radius:100px;border:1px solid rgba(139,92,246,.1);background:transparent;color:var(--text2);font-size:.73rem;cursor:pointer;transition:all .3s;font-weight:500}
.filter-btn:hover{border-color:rgba(6,182,212,.3);color:var(--neon-cyan)}
.filter-btn.active{background:linear-gradient(135deg,var(--neon-purple),var(--neon-cyan));color:#fff;border-color:transparent;box-shadow:0 4px 16px rgba(139,92,246,.25)}
.kbd{display:inline-block;padding:2px 7px;border-radius:6px;background:rgba(139,92,246,.06);border:1px solid rgba(139,92,246,.12);font-size:.6rem;color:var(--text3);margin-left:4px;font-family:'JetBrains Mono',monospace}
.bracket{display:flex;gap:30px;align-items:center;justify-content:center;flex-wrap:wrap;margin-top:20px}
.bracket-match{background:rgba(15,23,42,.5);border:1px solid rgba(139,92,246,.08);border-radius:var(--r);padding:24px;min-width:200px;text-align:center;transition:all .3s}
.bracket-match:hover{border-color:rgba(6,182,212,.2);box-shadow:var(--glow-cyan)}.bracket-arrow{font-size:2rem;color:var(--text3)}
.comp-bar{display:flex;height:8px;border-radius:4px;overflow:hidden;margin-top:8px}.comp-bar div{height:100%;transition:width .5s cubic-bezier(.16,1,.3,1)}
.cap-row{display:flex;align-items:center;gap:10px;padding:12px 0;border-bottom:1px solid rgba(139,92,246,.04)}
.radar-container{width:100%;max-width:300px;margin:10px auto;position:relative}
.player-modal-header{display:flex;align-items:center;gap:16px;margin-bottom:20px;padding-bottom:20px;border-bottom:1px solid rgba(139,92,246,.08)}
.player-stat-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:16px}
.player-stat-box{background:rgba(15,23,42,.5);border:1px solid rgba(139,92,246,.06);padding:16px;text-align:center;border-radius:12px;transition:all .3s}
.player-stat-box:hover{border-color:rgba(6,182,212,.2);box-shadow:0 0 20px rgba(6,182,212,.05)}
.trade-card{background:linear-gradient(135deg,rgba(6,182,212,.06),rgba(139,92,246,.04));border:1px solid rgba(6,182,212,.15);border-radius:var(--r);padding:24px;margin-bottom:16px;display:flex;align-items:center;justify-content:space-between;animation:pulse 2s infinite}
.impact-badge{background:linear-gradient(135deg,var(--gold),var(--gold3));color:#000;font-size:.6rem;padding:3px 8px;border-radius:6px;font-weight:700;margin-left:4px}
.form-hot{color:var(--green);font-size:.73rem;font-weight:700}
.form-cold{color:var(--red);font-size:.73rem;font-weight:700}
.cap-boost{background:rgba(245,158,11,.06);border:1px solid rgba(245,158,11,.2);padding:4px 12px;border-radius:100px;font-size:.7rem;color:var(--gold);font-weight:700;display:inline-flex;align-items:center;gap:4px}
.sc-table{width:100%;border-collapse:collapse;margin-bottom:12px;font-size:.84rem}
.sc-table th{text-align:left;padding:10px;border-bottom:1px solid rgba(139,92,246,.08);color:var(--neon-cyan);font-weight:600;font-size:.7rem;letter-spacing:1px;font-family:'JetBrains Mono',monospace}
.sc-table td{padding:10px;border-bottom:1px solid rgba(255,255,255,.02)}

/* ═══ MODE SELECTOR ═══ */
.mode-card{background:rgba(15,23,42,.5);border:2px solid rgba(139,92,246,.08);border-radius:var(--r);padding:28px;cursor:pointer;transition:all .4s;text-align:center;position:relative;overflow:hidden}
.mode-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:transparent;transition:background .3s}
.mode-card:hover{border-color:rgba(6,182,212,.25);transform:translateY(-4px);box-shadow:0 16px 40px rgba(0,0,0,.3),var(--glow-cyan)}
.mode-card.selected{border-color:var(--neon-cyan);box-shadow:0 0 40px rgba(6,182,212,.12)}
.mode-card.selected::before{background:linear-gradient(90deg,var(--neon-cyan),var(--neon-purple))}
.mode-icon{font-size:3rem;margin-bottom:12px;display:block}
.mode-title{font-family:'Outfit';font-weight:700;font-size:1.1rem;margin-bottom:6px}
.mode-desc{font-size:.78rem;color:var(--text2);line-height:1.5}

/* ═══ MODALS ═══ */
.modal-backdrop{position:fixed;inset:0;z-index:2000;background:rgba(2,6,23,.8);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);display:none;align-items:center;justify-content:center}
.modal-content{animation:scaleIn .4s cubic-bezier(.16,1,.3,1);max-height:90vh;overflow-y:auto}
.close-btn{position:absolute;top:16px;right:16px;background:rgba(139,92,246,.08);border:1px solid rgba(139,92,246,.15);color:var(--text2);width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:1.2rem;transition:all .2s;z-index:10}
.close-btn:hover{background:rgba(139,92,246,.15);color:var(--text);border-color:var(--neon-purple)}

/* ═══ SECTION HEADERS ═══ */
.section-header{display:flex;align-items:center;gap:12px;margin-bottom:24px}
.section-header h2{margin:0;font-family:'Outfit';font-weight:700;font-size:1.3rem}
.section-header .accent{width:4px;height:32px;background:linear-gradient(180deg,var(--neon-cyan),var(--neon-purple),transparent);border-radius:2px}

/* SOLO TEAM SELECTION */
.team-card-small{background:rgba(15,23,42,.5);padding:12px;border-radius:10px;cursor:pointer;transition:all .25s;border:1px solid rgba(139,92,246,.06);text-align:center}
.team-card-small:hover{background:rgba(6,182,212,.04);border-color:rgba(6,182,212,.2);transform:translateY(-2px)}
.team-card-small.active{background:rgba(6,182,212,.08);border-color:var(--neon-cyan);box-shadow:0 0 24px rgba(6,182,212,.12)}
</style>
</head>`;
};
