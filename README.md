# 🏏 IPL 2026 ULTIMATE — Full-Stack IPL Simulator

A feature-rich, browser-based **Indian Premier League simulator** with real 2025 squad data, live auction, ball-by-ball match engine, tournaments, playoffs, fantasy points, and multiplayer room support.

---

## 📸 Features at a Glance

| Module | Features |
|--------|----------|
| 🔨 **Auction** | Live timer, AI bidding, RTM cards, bid increments, sound effects |
| 🏟️ **Match Centre** | Ball-by-ball engine, bowling order picker, free hits, no-balls, wides, DLS rain |
| 🏆 **Tournament** | Round-robin schedule, NRR, points table, playoff bracket simulator |
| 👥 **Squads** | Full squad view, role filters, player cards, injury tracking, form sparklines |
| 🌟 **Fantasy** | Per-match fantasy points, leaderboard, Orange/Purple Cap tracking |
| 📊 **Dashboard** | Spend chart, team comparison, auction summary, Hall of Fame |
| 🎮 **Game Mode** | SOLO vs AI — pick your franchise, choose Mini or Mega auction format |
| 🔁 **Multi-Season** | Start new season, carry Hall of Fame records, player development |

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone or download the project
cd "Ipl auction"

# 2. Install dependencies
npm install

# 3. Start the server
npm start
```

### Open in Browser
```
http://localhost:5500/ipl2026_ultimate.html
```

---

## 🗂️ Project Structure

```
Ipl auction/
├── ipl2026_ultimate.html   # Main app — entire frontend (HTML + CSS + JS)
├── server.js               # Express backend — rooms, auction, match APIs
├── ipl_sim.db              # SQLite database (auto-created on first run)
├── package.json            # Node.js dependencies
├── build.js                # Build helper script
├── gen_body.js             # HTML body generator (build tool)
├── gen_css.js              # CSS generator (build tool)
├── gen_js.js               # JS generator (build tool)
├── gen_js1.js              # JS generator part 1
├── gen_js2.js              # JS generator part 2
└── test.js                 # Test suite
```

> **Note:** The entire game runs from `ipl2026_ultimate.html` — a single self-contained file (~290KB). The backend (`server.js`) handles room sync and persistence.

---

## 🏏 All 10 IPL Teams

| Code | Team | Home Ground |
|------|------|-------------|
| CSK | Chennai Super Kings | Chennai |
| MI | Mumbai Indians | Mumbai |
| RCB | Royal Challengers Bengaluru | Bengaluru |
| KKR | Kolkata Knight Riders | Kolkata |
| SRH | Sunrisers Hyderabad | Hyderabad |
| DC | Delhi Capitals | Delhi |
| GT | Gujarat Titans | Ahmedabad |
| LSG | Lucknow Super Giants | Lucknow |
| RR | Rajasthan Royals | Jaipur |
| PBKS | Punjab Kings | Mohali |

---

## 🎮 How to Play

### 1. Start a Solo Career

- Click **⚡ Solo Career** on the home page
- Pick your favourite franchise from all 10 IPL teams
- Choose your auction format: **Mini** (retain full squad, fill gaps) or **Mega** (max 6 retentions, full rebuild)
- Hit **Start Career** to begin!

### 2. Retention Phase

- Retain up to 6 players (Mega) or 18 (Mock/Mini)
- AI teams auto-retain their best players

### 3. Auction

- Players go up for bid one by one
- Use **BID** / **PASS** buttons (or keyboard: `B` to bid, `P` to pass)
- AI teams bid strategically based on team needs and purse
- Timer counts down — last bidder wins the player
- **Auto-complete** button simulates the full auction instantly

### 4. XI Setup

- Go to **XI SETUP** tab to set your playing 11 for each team
- Choose batting order and bowling assignments
- Saved XI is used automatically in Match Centre

### 5. Play Matches

**Tournament Tab:**
- Generate Schedule → 90 league matches (each team plays 9 home + 9 away)
- Click ⚡ **Sim** to auto-simulate any match
- Click 📺 **Play** to open the match in Match Centre for live BBB play

**Match Centre:**
- Select two teams from the dropdown
- Click **▶ Start Match**
- Watch the pre-match preview (H2H, form, pitch type, team ratings)
- Play ball by ball — tap **Next Ball** or press `Space`

### 6. Playoffs

- After all league matches, go to **Tournament → Playoffs**
- Click **Simulate Playoffs** — runs Q1, Eliminator, Q2, and Final
- Confetti + champion announcement! 🎉

---

## ⚙️ Match Engine Details

The ball-by-ball simulator models realistic T20 cricket:

| Feature | Detail |
|---------|--------|
| **Outcomes** | 0, 1, 2, 3, 4, 6, Wide, No-ball, Wicket |
| **No-balls** | 2% chance → free hit next delivery (no wicket) |
| **Wides** | 4% chance → extra run, ball retaken |
| **DLS** | 10% chance of rain reducing match to 12–18 overs |
| **Home advantage** | +3 bat/bowl rating for team playing at home ground |
| **Pitch types** | Flat, Spin-friendly, Green top, High-scoring |
| **Team ratings** | Overall, batting, bowling ratings influence outcomes |
| **Player form** | Hot/Cold streaks affect individual performance |
| **Injuries** | Random injuries bench players for 1–3 matches |
| **Impact sub** | One super-sub per innings allowed |
| **Super over** | Tied matches go to a 1-over Super Over |
| **Milestones** | 50s, 100s, 3-fors, 5-fors trigger animated popups |
| **POTM** | Player of the Match awarded per game |

---

## 📡 Backend API

The Express server exposes these REST endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/rooms` | Create / sync room state |
| `GET` | `/api/rooms` | List all active rooms |
| `GET` | `/api/rooms/:code` | Get room state by code |
| `DELETE` | `/api/rooms/:code` | Delete a room |
| `POST` | `/api/auction/sold` | Record a sold player |
| `POST` | `/api/auction/unsold` | Record an unsold player |
| `GET` | `/api/auction/history/:code` | Get auction history for room |
| `POST` | `/api/matches` | Record match result |
| `GET` | `/api/matches/:code` | Get all match results for room |
| `GET` | `/api/stats/:code` | Get aggregate stats for room |

---

## 🗄️ Database Schema

SQLite database (`ipl_sim.db`) with 3 tables:

```sql
-- Multiplayer room state
rooms (code, state, host_name, mode, status, created_at, updated_at)

-- Auction transaction log
auction_history (id, room_code, player_name, player_id, team, amount, status, timestamp)

-- Match results archive
match_results (id, room_code, team1, team2, score1, wk1, score2, wk2, winner, match_num, played_at)
```

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` | Next ball (Match Centre) |
| `B` | Place bid (Auction) |
| `5` | Bid +5 (Auction) |
| `P` | Pass / skip bid (Auction) |

---

## 🧩 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla HTML5 + CSS3 + JavaScript (ES2022) |
| Charts | Chart.js (CDN) |
| Animations | CSS keyframes + `confetti.js` (CDN) |
| Fonts | Google Fonts — Rajdhani, Inter |
| Backend | Node.js + Express 5 |
| Database | SQLite3 |
| State | `localStorage` (client) + SQLite (server sync) |

---

## 🔧 Configuration

All game config lives inside `ipl2026_ultimate.html` in the `app.config` object:

```js
config: {
  teams: Object.keys(TM),          // All 10 IPL teams
  bidIncr: (v) => { ... }          // Bid increment ladder
}
```

Team metadata (ratings, home ground, pitch type) is in the `TM` constant:

```js
const TM = {
  CSK: { name: 'Chennai Super Kings', c: '#f5c518', home: 'Chennai', pitch: 'spin', batRating: 88, bowlRating: 85 },
  MI:  { name: 'Mumbai Indians',      c: '#004ba0', home: 'Mumbai',  pitch: 'flat', batRating: 87, bowlRating: 86 },
  // ...
}
```

---

## 🐛 Known Limitations

- Player images are generated programmatically (initials-based avatars)
- Fantasy leaderboard only populates after matches are played
- Schedule generates 90 league matches (9 home + 9 away per team)

---

## 📝 License

MIT — free to use, modify, and distribute.

---

## 🙌 Credits

- IPL squad data based on **verified IPL 2025 squads** (230+ real players)
- Built with ❤️ for cricket fans who wanted to run their own IPL
