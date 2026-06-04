module.exports = function () {
  return `<body onload="app.init()">
<div class="ticker"><div class="ticker-wrap">🏏 IPL 2026 MEGA AUCTION · VERIFIED IPL 2025 SQUADS · 230+ REAL PLAYERS · AI SMART BIDDING · RETENTION PHASE · DRS REVIEWS · BALL-BY-BALL SIMULATION · KEYBOARD [B]id [P]ass [Space] Next Ball · 🏆 PLAYOFFS</div></div>
<nav>
  <div class="nav-logo" onclick="app.go('home')">IPL 2026 <span style="opacity:.6;font-weight:500">ULTIMATE</span></div>
  <div class="nav-links">
    <a class="nav-link" id="nav-home" onclick="app.go('home')">HOME</a>
    <a class="nav-link" id="nav-retention" onclick="app.go('retention')">RETENTION</a>
    <a class="nav-link" id="nav-auction" onclick="app.go('auction')">AUCTION</a>
    <a class="nav-link" id="nav-teams" onclick="app.go('teams')">SQUADS</a>
    <a class="nav-link" id="nav-dashboard" onclick="app.go('dashboard')">DASHBOARD</a>
    <a class="nav-link" id="nav-tournament" onclick="app.go('tournament')">TOURNAMENT</a>
    <a class="nav-link" id="nav-match" onclick="app.go('match')">MATCH CENTRE</a>
    <a class="nav-link" id="nav-history" onclick="app.go('history')">HISTORY</a>
    <a class="nav-link" id="nav-settings" onclick="app.go('settings')">⚙️</a>
  </div>
  <div class="nav-badge" id="nav-room">NO ROOM</div>
</nav>
<div class="container">

<!-- HOME -->
<div id="page-home" class="page active">
  <div class="hero">
    <div style="display:inline-block;padding:6px 20px;border-radius:100px;border:1px solid rgba(139,92,246,.2);background:rgba(139,92,246,.04);font-size:.68rem;color:var(--neon-purple);font-weight:600;letter-spacing:3px;margin-bottom:28px;font-family:'JetBrains Mono',monospace;backdrop-filter:blur(12px)">🏏 SEASON 2026 · LIVE</div>
    <h1 class="hero-title">IPL 2026<br>ULTIMATE</h1>
    <p class="hero-sub">The most advanced IPL auction simulator — verified squads, neural AI bidding, DRS reviews, and broadcast-quality ball-by-ball match engine.</p>
    <div class="hero-actions">
      <button class="btn btn-lg btn-glow" onclick="app.openModal('create')" style="font-size:1rem;padding:18px 44px;letter-spacing:1px">🏟️ Create Room</button>
      <button class="btn btn-cyber btn-lg" onclick="app.openModal('join')">🔗 Join Room</button>
      <button class="btn btn-outline btn-lg" onclick="app.soloPlay()">⚡ Solo Career</button>
    </div>
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:56px">
      <div class="hero-pill">✅ <b>230+</b> Real Players</div>
      <div class="hero-pill">🤖 <b>Neural AI</b> Bidding</div>
      <div class="hero-pill">📋 <b>Mega/Mini</b> Auction</div>
      <div class="hero-pill">🏆 <b>Playoffs</b> &amp; Finals</div>
      <div class="hero-pill">🎤 <b>Voice</b> Commentary</div>
      <div class="hero-pill">⚖️ <b>DRS</b> Reviews</div>
    </div>
  </div>
  <div style="margin-top:48px"><div class="section-header"><div class="accent"></div><h2>Active Rooms</h2></div><div id="room-list"></div></div>
</div>

<!-- RETENTION PAGE -->
<div id="page-retention" class="page">
  <div class="section-header"><div class="accent"></div><h2>📋 Player Retention Phase</h2></div>
  <div id="retention-content"></div>
</div>

<!-- LOBBY -->
<div id="page-lobby" class="page">
  <div class="card" style="text-align:center;max-width:700px;margin:40px auto">
    <h1 class="raj" id="lobby-code" style="font-size:4rem;color:var(--gold);letter-spacing:10px">------</h1>
    <p style="color:var(--text2)">Share this code with friends to join</p>
    <div class="grid-2" style="margin-top:30px;text-align:left">
      <div><h4 class="raj">Managers</h4><div id="lobby-players" style="margin-top:10px"></div></div>
      <div><h4 class="raj">Settings</h4><div id="lobby-settings" style="margin-top:10px;color:var(--text2);font-size:.85rem"></div></div>
    </div>
    <div style="margin-top:30px">
      <button class="btn btn-lg" id="start-btn" onclick="app.startAuction()" style="display:none">🏏 Start Auction</button>
      <p id="wait-msg" style="color:var(--text3)">Waiting for host...</p>
    </div>
  </div>
</div>

<!-- AUCTION -->
<div id="page-auction" class="page">
  <div class="auction-layout">
    <div class="card spotlight" style="position:relative">
      <div style="position:absolute;top:16px;left:20px;font-size:.7rem;color:var(--text3);letter-spacing:2px;font-weight:600" id="cur-set">SET 1</div>
      <div class="player-av" id="spot-avatar"><img src="" alt="player"></div>
      <h1 style="font-family:'Outfit';font-size:2.8rem;font-weight:800;letter-spacing:2px" id="spot-name">WAITING...</h1>
      <div style="display:flex;gap:8px;align-items:center;justify-content:center;margin:8px 0">
        <span class="badge badge-india" id="spot-nation">IND</span>
        <span style="font-size:.85rem;color:var(--text2)" id="spot-role">BAT | TIER A</span>
      </div>
      <div style="font-size:.78rem;color:var(--text3);margin-bottom:4px" id="spot-stats">AVG: -- | SR: --</div>
      <div style="font-size:.72rem;color:var(--text3);margin-bottom:12px" id="spot-prev">Previously: --</div>
      <div class="bid-amount" id="spot-bid">₹0.00 Cr</div>
      <div style="font-size:.75rem;color:var(--text3);letter-spacing:2px;margin-top:6px" id="spot-base">BASE: ₹0.20 Cr</div>
      <div id="spot-advisor" style="margin-top:12px;background:rgba(56,189,248,.1);color:var(--blue);padding:6px 14px;border-radius:100px;font-size:.7rem;font-weight:700;display:inline-block;border:1px solid rgba(56,189,248,.2);letter-spacing:1px"></div>
      <div style="font-size:.9rem;font-weight:600;margin:10px 0 16px;color:var(--text2)" id="spot-leader">OPENING BID</div>
      <div class="timer-ring"><svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="36"/><circle class="prog" id="timer-prog" cx="40" cy="40" r="36"/></svg><div class="timer-num" id="timer-num">15</div></div>
      <div class="bid-controls">
        <button class="btn btn-outline btn-sm" onclick="app.bid('pass')">❌ PASS <span class="kbd">P</span></button>
        <button class="btn btn-sm" onclick="app.bid('bid',1)">💰 BID +X <span class="kbd">B</span></button>
        <button class="btn btn-sm" onclick="app.bid('bid',5)">🔥 BID +5X <span class="kbd">5</span></button>
        <button class="btn btn-outline btn-sm" onclick="app.skipAuction()">⏭️ SKIP ALL</button>
      </div>
      <div style="margin-top:20px;display:flex;align-items:center;justify-content:center;gap:8px;font-size:.78rem;color:var(--text3)">
        <span id="auc-progress">0/0</span> players
        <div style="background:rgba(255,255,255,.06);border-radius:10px;height:6px;width:200px;overflow:hidden"><div id="auc-bar" style="height:100%;background:linear-gradient(90deg,var(--gold),#ff8c00);width:0%;transition:width .5s cubic-bezier(.16,1,.3,1);border-radius:10px"></div></div>
      </div>
    </div>
    <div>
      <div class="card" style="margin-bottom:16px;max-height:360px;overflow-y:auto"><h4 class="raj">📊 Teams Tracker</h4><div id="auction-teams" style="margin-top:10px"></div></div>
      <div class="card" style="max-height:360px;display:flex;flex-direction:column"><h4 class="raj">📜 Live Log</h4><div id="auction-log" style="margin-top:8px;overflow-y:auto;flex:1"></div></div>
    </div>
  </div>
</div>

<!-- TEAMS -->
<div id="page-teams" class="page">
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;flex-wrap:wrap">
    <div class="section-header" style="margin-bottom:0"><div class="accent"></div><h2>Squads</h2></div>
    <input class="search-input" id="team-search" placeholder="🔍 Search players..." oninput="app.ui()">
    <div style="display:flex;gap:4px" id="role-filters"></div>
    <button class="btn btn-outline btn-sm" onclick="app.openCompare()">⚔️ Compare Players</button>
  </div>
  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:20px" id="team-tabs"></div>
  <div class="card" id="team-detail"></div>
</div>

<!-- DASHBOARD -->
<div id="page-dashboard" class="page">
  <div class="grid-2">
    <div class="card">
      <div class="section-header" style="margin-bottom:16px"><div class="accent"></div><h2>Season Overview</h2></div>
      <div class="grid-4" style="margin-top:16px">
        <div class="stat-card"><div class="stat-val" style="color:var(--gold)" id="d-matches">0</div><div class="stat-lbl">MATCHES</div></div>
        <div class="stat-card"><div class="stat-val" style="color:var(--blue)" id="d-runs">0</div><div class="stat-lbl">RUNS</div></div>
        <div class="stat-card"><div class="stat-val" style="color:var(--red)" id="d-wkts">0</div><div class="stat-lbl">WICKETS</div></div>
        <div class="stat-card"><div class="stat-val" style="color:var(--gold)" id="d-6s">0</div><div class="stat-lbl">SIXES</div></div>
      </div>
      <div class="grid-2" style="margin-top:20px">
        <div class="stat-card"><h4 class="raj" style="color:orange">🧡 Orange Cap</h4><div id="d-orange" style="margin-top:8px">No data</div></div>
        <div class="stat-card"><h4 class="raj" style="color:var(--purple)">💜 Purple Cap</h4><div id="d-purple" style="margin-top:8px">No data</div></div>
      </div>
      <button class="btn" style="margin-top:20px;width:100%" onclick="app.simTournament()">⚡ Simulate League</button>
      <div class="grid-2" style="margin-top:12px">
        <button class="btn btn-outline" style="border-color:var(--purple);color:var(--purple)" onclick="if(confirm('Start next season with same squads?'))app.nextSeason(true)">🔄 Next Season (Retain All)</button>
        <button class="btn btn-outline" style="border-color:var(--red);color:var(--red)" onclick="if(confirm('Start Next Season Mega Auction?'))app.nextSeason(false)">🔥 Next Season (Mega)</button>
      </div>
    </div>
    <div class="card">
      <h4 class="raj">🏆 Standings</h4><div id="d-standings" style="margin-top:12px"></div>
      <button class="btn btn-outline" style="width:100%;margin-top:12px" onclick="app.go('tournament')">Full Standings →</button>
    </div>
  </div>
  <div class="grid-2" style="margin-top:20px">
    <div class="card"><h4 class="raj">📊 Team Spend</h4><div class="chart-wrap"><canvas id="spendChart"></canvas></div></div>
    <div class="card"><h4 class="raj">🏛️ Hall of Fame</h4><div id="d-hof" style="margin-top:12px;max-height:300px;overflow-y:auto"></div></div>
  </div>
  <div id="trade-container" style="margin-top:20px"></div>
</div>

<!-- TOURNAMENT -->
<div id="page-tournament" class="page">
  <div class="grid-2">
    <div class="card"><div class="section-header" style="margin-bottom:16px"><div class="accent"></div><h2>Points Table</h2></div><div id="t-table"></div></div>
    <div class="card"><div class="section-header" style="margin-bottom:16px"><div class="accent"></div><h2>Schedule</h2></div><div id="t-schedule" class="vscrll"></div></div>
  </div>
  <div class="grid-3" style="margin-top:20px">
    <div class="card"><h4 class="raj" style="color:orange">Orange Cap</h4><div id="t-orange" style="margin-top:10px"></div></div>
    <div class="card"><h4 class="raj" style="color:var(--purple)">Purple Cap</h4><div id="t-purple" style="margin-top:10px"></div></div>
    <div class="card"><h4 class="raj" style="color:var(--gold)">Most Sixes</h4><div id="t-sixes" style="margin-top:10px"></div></div>
  </div>
  <div class="card" style="margin-top:20px"><div class="section-header" style="margin-bottom:16px"><div class="accent"></div><h2>Playoffs</h2></div><div id="playoffs-bracket" class="bracket"></div><div style="display:flex;gap:12px;margin-top:16px;flex-wrap:wrap"><button class="btn" onclick="app.runPlayoffs()">▶ Simulate Playoffs</button><button class="btn btn-outline" onclick="app.showAwards()">🏆 Season Awards</button></div></div>
</div>

<!-- MATCH CENTRE -->
<div id="page-match" class="page">
  <div id="mc-setup">
    <div class="section-header" style="margin-bottom:20px"><div class="accent"></div><h2>Match Centre</h2></div>
    <div class="grid-2">
      <div class="card"><h4 class="raj" id="mc-t1-name">TEAM 1</h4><div id="mc-t1-xi" class="vscrll" style="margin-top:10px"></div></div>
      <div class="card"><h4 class="raj" id="mc-t2-name">TEAM 2</h4><div id="mc-t2-xi" class="vscrll" style="margin-top:10px"></div></div>
    </div>
    <div style="text-align:center;margin-top:24px">
      <select id="mc-team1" style="width:220px;display:inline-block" onchange="app.renderMCSetup()"></select>
      <span style="margin:0 16px;color:var(--text3);font-size:1.2rem;font-weight:700">VS</span>
      <select id="mc-team2" style="width:220px;display:inline-block" onchange="app.renderMCSetup()"></select>
      <br><div id="mc-h2h" style="margin-top:12px;font-size:.85rem;color:var(--text2)"></div>
      <br><button class="btn btn-lg" style="margin-top:12px" onclick="app.preMatchCheck()">▶ Start Match <span class="kbd">Space</span></button>
    </div>
  </div>
  <div id="mc-live" style="display:none">
    <div class="mc-scoreboard">
      <div style="font-size:.72rem;color:var(--text3);letter-spacing:3px;font-weight:600" id="mc-innings-label">1ST INNINGS</div>
      <div style="display:flex;justify-content:space-around;align-items:center;margin:24px 0">
        <div><h2 style="font-family:'Outfit';font-weight:700;color:var(--gold)" id="mc-bat-name">TEAM</h2><div class="mc-score" id="mc-score">0/0</div><div class="mc-overs" id="mc-overs">0.0 overs</div></div>
        <div><div style="font-size:1.3rem;color:var(--gold);font-family:'Outfit';font-weight:700" id="mc-target">TARGET: --</div><div style="font-size:.9rem;color:var(--text2)" id="mc-crr">CRR: 0.00</div></div>
      </div>
      <div class="mc-balls-row" id="mc-balls"></div>
      <div id="mc-subtitle" class="mc-subtitle">READY TO PLAY!</div>
    </div>
    <div class="grid-2" style="margin-top:20px">
      <div class="card"><h4 class="raj">📊 Win Probability</h4><div class="chart-wrap"><canvas id="wpChart"></canvas></div></div>
      <div class="card" style="display:flex;flex-direction:column"><h4 class="raj">💬 Commentary</h4><div id="mc-comm" class="vscrll" style="flex:1;margin-top:8px;font-size:.85rem;line-height:1.7"></div>
        <div style="display:flex;gap:8px;margin-top:16px;flex-wrap:wrap"><button class="btn btn-outline btn-sm" onclick="app.nextBall()">Next Ball <span class="kbd">Space</span></button><button class="btn btn-sm" onclick="app.simOver()">Sim Over</button><button class="btn btn-sm" onclick="app.simRestMatch()">Instant</button><button class="btn btn-outline btn-sm" style="border-color:var(--blue);color:var(--blue)" onclick="app.strategicTimeout()">⏸️ Timeout</button></div>
      </div>
    </div>
  </div>
</div>

<!-- HISTORY -->
<div id="page-history" class="page">
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;flex-wrap:wrap">
    <div class="section-header" style="margin-bottom:0"><div class="accent"></div><h2>History</h2></div>
    <input class="search-input" id="hist-search" placeholder="🔍 Search..." oninput="app.renderHistory()">
    <div style="display:flex;gap:4px">
      <button class="filter-btn active" onclick="app.histFilter='all';app.renderHistory();this.parentElement.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));this.classList.add('active')">All</button>
      <button class="filter-btn" onclick="app.histFilter='RETAINED';app.renderHistory();this.parentElement.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));this.classList.add('active')">Retained</button>
      <button class="filter-btn" onclick="app.histFilter='SOLD';app.renderHistory();this.parentElement.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));this.classList.add('active')">Sold</button>
      <button class="filter-btn" onclick="app.histFilter='UNSOLD';app.renderHistory();this.parentElement.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));this.classList.add('active')">Unsold</button>
    </div>
  </div>
  <div class="card"><div id="history-list" class="vscrll"></div></div>
  <div class="card" style="margin-top:20px"><h4 class="raj">📊 Summary</h4><div id="auction-summary"></div></div>
</div>

<!-- SETTINGS -->
<div id="page-settings" class="page">
  <div class="section-header"><div class="accent"></div><h2>Settings</h2></div>
  <div class="card" style="max-width:520px">
    <div style="display:flex;flex-direction:column;gap:20px">
      <div><p style="margin-bottom:8px;font-weight:600">🔊 Sound Effects</p><label style="display:flex;align-items:center;gap:8px;cursor:pointer"><input type="checkbox" id="snd-toggle" checked onchange="app.soundOn=this.checked"> Enable Sounds</label></div>
      <div><p style="margin-bottom:8px;font-weight:600">Export</p><button class="btn btn-outline" onclick="app.exportState()">📥 Download JSON</button></div>
      <div><p style="margin-bottom:8px;font-weight:600">Reset</p><button class="btn btn-danger" onclick="app.reset()">🗑️ Clear All Data</button></div>
      <div style="font-size:.75rem;color:var(--text3);border-top:1px solid rgba(255,255,255,.06);padding-top:16px"><b>Shortcuts:</b> <span class="kbd">B</span> Bid · <span class="kbd">5</span> Bid 5x · <span class="kbd">P</span> Pass · <span class="kbd">Space</span> Next Ball</div>
    </div>
  </div>
</div>

</div>
<div class="sold-overlay" id="sold-overlay"><div class="sold-text" id="sold-overlay-text">SOLD!</div><div class="sold-sub" id="sold-overlay-sub"></div></div>

<!-- CREATE ROOM MODAL -->
<div id="modal-create" class="modal-backdrop" onclick="if(event.target===this)this.style.display='none'">
<div class="card modal-content" style="width:90%;max-width:640px;padding:36px;position:relative">
  <button class="close-btn" onclick="document.getElementById('modal-create').style.display='none'">×</button>
  <div style="text-align:center;margin-bottom:28px"><div style="font-size:.72rem;color:var(--neon-cyan);letter-spacing:4px;margin-bottom:8px;font-weight:700;font-family:'JetBrains Mono',monospace">INITIALIZE</div><h2 style="font-family:'Outfit';font-weight:900;font-size:2rem">Auction Room</h2></div>
  <div style="display:grid;gap:16px">
    <input id="cr-name" placeholder="Your Name" style="text-align:center;font-size:1rem">
    <div><p style="font-size:.82rem;margin-bottom:10px;color:var(--text2);font-weight:600">Pick Your Franchise</p><div class="team-grid" id="team-sel"></div></div>
    <div><p style="font-size:.82rem;margin-bottom:10px;color:var(--text2);font-weight:600">Auction Format</p>
      <div class="grid-2" style="gap:12px">
        <div class="mode-card selected" id="mode-mini" onclick="document.getElementById('cr-mode').value='mock';document.querySelectorAll('.mode-card').forEach(c=>c.classList.remove('selected'));this.classList.add('selected')">
          <span class="mode-icon">⚡</span><div class="mode-title">Mini Auction</div><div class="mode-desc">Retain your entire squad. Auction only fills gaps.</div>
        </div>
        <div class="mode-card" id="mode-mega" onclick="document.getElementById('cr-mode').value='mega';document.querySelectorAll('.mode-card').forEach(c=>c.classList.remove('selected'));this.classList.add('selected')">
          <span class="mode-icon">🏟️</span><div class="mode-title">Mega Auction</div><div class="mode-desc">Max 6 retentions per team. Full squad rebuild.</div>
        </div>
      </div>
      <select id="cr-mode" style="display:none"><option value="mock">Mock</option><option value="mega">Mega</option></select>
    </div>
    <div><p style="font-size:.82rem;margin-bottom:8px;color:var(--text2);font-weight:600">Bid Timer</p>
      <select id="cr-timer"><option value="10">⏱️ 10 seconds (Fast)</option><option value="15" selected>⏱️ 15 seconds (Normal)</option><option value="30">⏱️ 30 seconds (Relaxed)</option></select>
    </div>
    <button class="btn btn-cyber btn-lg btn-glow" onclick="app.createRoom()" style="font-size:1rem;margin-top:12px;letter-spacing:1px">🚀 Launch Auction</button>
  </div>
</div></div>

<!-- SOLO PLAY MODAL -->
<div id="modal-solo" class="modal-backdrop" onclick="if(event.target===this)this.style.display='none'">
<div class="card modal-content" style="width:90%;max-width:550px;padding:36px;position:relative">
  <button class="close-btn" onclick="document.getElementById('modal-solo').style.display='none'">×</button>
  <div style="text-align:center;margin-bottom:28px"><div style="font-size:.72rem;color:var(--neon-purple);letter-spacing:4px;margin-bottom:8px;font-weight:700;font-family:'JetBrains Mono',monospace">SOLO PROTOCOL</div><h2 style="font-family:'Outfit';font-weight:900;font-size:2rem">Pick Your Team</h2></div>
  <div style="display:grid;gap:16px">
    <div style="max-height:200px;overflow-y:auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:8px" id="solo-team-sel"></div>
    <div><p style="font-size:.82rem;margin-bottom:10px;color:var(--text2);font-weight:600">Auction Format</p>
      <div class="grid-2" style="gap:12px">
        <div class="mode-card selected" id="smode-mini" onclick="document.getElementById('solo-mode').value='mock';document.querySelectorAll('#modal-solo .mode-card').forEach(c=>c.classList.remove('selected'));this.classList.add('selected')">
          <span class="mode-icon" style="font-size:1.5rem">⚡</span><div class="mode-title">Mini</div>
        </div>
        <div class="mode-card" id="smode-mega" onclick="document.getElementById('solo-mode').value='mega';document.querySelectorAll('#modal-solo .mode-card').forEach(c=>c.classList.remove('selected'));this.classList.add('selected')">
          <span class="mode-icon" style="font-size:1.5rem">🏟️</span><div class="mode-title">Mega</div>
        </div>
      </div>
      <select id="solo-mode" style="display:none"><option value="mock">Mock</option><option value="mega">Mega</option></select>
    </div>
    <button class="btn btn-cyber btn-lg btn-glow" onclick="app.soloStart()" style="margin-top:12px;letter-spacing:1px">🚀 Start Career</button>
  </div>
</div></div>


<!-- JOIN ROOM MODAL -->
<div id="modal-join" class="modal-backdrop" onclick="if(event.target===this)this.style.display='none'">
<div class="card modal-content" style="width:90%;max-width:420px;padding:36px;text-align:center;position:relative">
  <button class="close-btn" onclick="document.getElementById('modal-join').style.display='none'">×</button>
  <div style="font-size:.72rem;color:var(--neon-cyan);letter-spacing:4px;margin-bottom:8px;font-weight:700;font-family:'JetBrains Mono',monospace">NETWORK</div>
  <h2 style="font-family:'Outfit';font-weight:900;font-size:2rem;margin-bottom:24px">Join Room</h2>
  <div style="display:grid;gap:16px"><input id="jr-code" placeholder="ROOM CODE" maxlength="6" style="text-align:center;font-size:2rem;letter-spacing:8px;font-family:'Outfit';font-weight:900"><input id="jr-name" placeholder="Your Name" style="text-align:center"><button class="btn btn-cyber btn-lg" style="letter-spacing:1px" onclick="app.joinRoom()">Connect →</button></div>
</div></div>

<!-- PLAYER ANALYTICS MODAL -->
<div id="modal-player" class="modal-backdrop" style="z-index:3000" onclick="if(event.target===this)this.style.display='none'">
  <div class="card modal-content" style="width:90%;max-width:500px;padding:28px;position:relative">
    <button class="close-btn" onclick="document.getElementById('modal-player').style.display='none'">×</button>
    <div class="player-modal-header">
      <img id="pm-img" src="" style="width:80px;height:80px;border-radius:50%;border:2px solid var(--gold)">
      <div>
        <h2 style="font-family:'Outfit';font-weight:800;margin-bottom:4px;color:var(--gold)" id="pm-name">Player Name</h2>
        <div style="font-size:.85rem;color:var(--text2)" id="pm-role">BAT | IND</div>
        <div id="pm-form" style="margin-top:4px"></div>
      </div>
    </div>
    <div class="player-stat-grid">
      <div class="player-stat-box"><div style="font-size:.68rem;color:var(--text3);letter-spacing:1px">RUNS</div><div style="font-size:1.6rem;font-weight:800;font-family:'Outfit'" id="pm-runs">0</div></div>
      <div class="player-stat-box"><div style="font-size:.68rem;color:var(--text3);letter-spacing:1px">WICKETS</div><div style="font-size:1.6rem;font-weight:800;font-family:'Outfit'" id="pm-wkts">0</div></div>
      <div class="player-stat-box"><div style="font-size:.68rem;color:var(--text3);letter-spacing:1px">SIXES</div><div style="font-size:1.6rem;font-weight:800;font-family:'Outfit'" id="pm-6s">0</div></div>
      <div class="player-stat-box"><div style="font-size:.68rem;color:var(--text3);letter-spacing:1px">FANTASY PTS</div><div style="font-size:1.6rem;font-weight:800;font-family:'Outfit'" id="pm-fp">0</div></div>
    </div>
    <div class="radar-container"><canvas id="playerRadar"></canvas></div>
    <div style="text-align:center;margin-top:16px" id="pm-trade-container"></div>
  </div>
</div>

<!-- MATCH SCORECARD MODAL -->
<div id="modal-scorecard" class="modal-backdrop" style="z-index:3000">
  <div class="card modal-content" style="width:90%;max-width:750px;padding:28px;position:relative;max-height:90vh;overflow-y:auto">
    <h2 style="font-family:'Outfit';font-weight:800;text-align:center;color:var(--gold);margin-bottom:20px;font-size:1.6rem" id="sc-title">END OF INNINGS</h2>
    <div class="grid-2" style="margin-bottom:16px" id="sc-teams-summary"></div>
    <div id="sc-batt-cont"><h4 class="raj" style="margin-bottom:8px">BATTING</h4><table class="sc-table" id="sc-batt"></table></div>
    <div id="sc-bowl-cont" style="margin-top:20px"><h4 class="raj" style="margin-bottom:8px">BOWLING</h4><table class="sc-table" id="sc-bowl"></table></div>
    <div style="text-align:center;margin-top:28px">
      <button class="btn btn-lg" id="sc-next-btn" onclick="app.continueMatch()">Start 2nd Innings →</button>
    </div>
  </div>
</div>

<!-- DRESSING ROOM MODAL -->
<div id="modal-dressing" class="modal-backdrop" style="z-index:3000">
  <div class="card modal-content" style="width:90%;max-width:800px;padding:28px;position:relative;max-height:90vh;overflow-y:auto">
    <h2 style="font-family:'Outfit';font-weight:800;text-align:center;color:var(--gold);margin-bottom:8px">🏏 DRESSING ROOM</h2>
    <p style="text-align:center;color:var(--text2);font-size:.85rem;margin-bottom:24px">Select your starting 11 for <span id="dr-team-name" style="font-weight:700;color:#fff"></span></p>
    <div style="display:flex;justify-content:space-between;margin-bottom:14px;font-size:.85rem">
      <div><span id="dr-count" style="font-weight:700;color:var(--gold)">0/11</span> Selected</div>
      <div>Overseas: <span id="dr-os-count">0</span>/4 | WK: <span id="dr-wk-count">0</span></div>
    </div>
    <div class="squad-grid" id="dr-squad-list" style="margin-bottom:20px;max-height:50vh;overflow-y:auto;padding-right:8px"></div>
    <div style="text-align:center;border-top:1px solid rgba(255,255,255,.06);padding-top:20px">
      <button class="btn btn-lg" id="dr-start-btn" onclick="app.finalizeUserXI()" disabled>Enter Field →</button>
    </div>
  </div>
</div>

<!-- USER TRADE MODAL -->
<div id="modal-user-trade" class="modal-backdrop" style="z-index:3500">
  <div class="card modal-content" style="width:90%;max-width:600px;padding:28px;position:relative;max-height:80vh;overflow-y:auto">
    <button class="close-btn" onclick="document.getElementById('modal-user-trade').style.display='none'">×</button>
    <h3 style="font-family:'Outfit';font-weight:800;text-align:center;color:var(--blue);margin-bottom:20px;font-size:1.4rem">🔀 Propose a Trade</h3>
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:24px;justify-content:center">
       <div id="ut-target-img" style="text-align:center"></div>
       <div style="font-size:2rem;color:var(--text3)">⇄</div>
       <div style="text-align:center"><div style="width:60px;height:60px;border-radius:50%;border:2px dashed var(--text3);display:flex;align-items:center;justify-content:center;font-size:2rem">?</div><div style="font-size:.8rem;font-weight:700;color:var(--text2);margin-top:4px">Giving</div></div>
    </div>
    <p style="font-size:.85rem;color:var(--text2);text-align:center;margin-bottom:16px">Select a player from your squad to offer:</p>
    <div class="squad-grid" id="ut-squad-list" style="max-height:40vh;overflow-y:auto;margin-bottom:16px"></div>
  </div>
</div>

<!-- DRS OVERLAY -->
<div id="drs-overlay" style="position:fixed;inset:0;z-index:4000;background:rgba(0,0,0,.92);display:none;flex-direction:column;align-items:center;justify-content:center;font-family:'Outfit'">
   <div style="font-size:6rem;color:#f5a623;animation:pulse 1s infinite;font-weight:800;text-shadow:0 0 60px rgba(245,166,35,.4)">T</div>
   <div style="font-size:2rem;color:#fff;letter-spacing:6px;font-weight:700;margin-top:8px">DECISION REVIEW</div>
   <div id="drs-status" style="margin-top:24px;font-size:1.3rem;color:var(--text2)">Reviewing ball tracking...</div>
   <div id="drs-result" style="margin-top:32px;font-size:4rem;font-weight:800;display:none;text-shadow:0 0 40px currentColor">NOT OUT</div>
</div>

<div class="toast-box" id="toast-box"></div>
`;
};
