const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 5500;

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));

// Permissive CSP to allow inline scripts/styles and external CDN resources
app.use((req, res, next) => {
    res.setHeader(
        'Content-Security-Policy',
        [
            "default-src *",
            "script-src * 'unsafe-inline' 'unsafe-eval'",
            "style-src * 'unsafe-inline'",
            "font-src * data:",
            "img-src * data: blob:",
            "connect-src *",
            "media-src *",
            "object-src 'none'",
        ].join('; ')
    );
    next();
});

app.use(express.static(path.join(__dirname)));

// Initialize SQLite database
const db = new sqlite3.Database('./ipl_sim.db', (err) => {
    if (err) console.error('Error opening database', err);
    else console.log('Connected to SQLite database.');
});

// Create tables
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS rooms (
        code TEXT PRIMARY KEY,
        state TEXT,
        host_name TEXT,
        mode TEXT DEFAULT 'mock',
        status TEXT DEFAULT 'LOBBY',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS auction_history (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        room_code TEXT,
        player_name TEXT,
        player_id TEXT,
        team TEXT,
        amount REAL,
        status TEXT,
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS match_results (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        room_code TEXT,
        team1 TEXT,
        team2 TEXT,
        score1 INTEGER,
        wk1 INTEGER,
        score2 INTEGER,
        wk2 INTEGER,
        winner TEXT,
        match_num INTEGER,
        played_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`);
});

// ── ROOM ENDPOINTS ──────────────────────────────────────────────────────────

// Create or update room
app.post('/api/rooms', (req, res) => {
    const { code, state } = req.body;
    const jsonState = JSON.stringify(state);
    db.run(
        `INSERT INTO rooms (code, state, host_name, mode, status, updated_at)
         VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
         ON CONFLICT(code) DO UPDATE SET state = excluded.state, status = excluded.status, updated_at = CURRENT_TIMESTAMP`,
        [code, jsonState, state.userName || 'Host', state.mode || 'mock', state.auction?.status || 'WAITING'],
        function (err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Room sync successful', code });
        }
    );
});

// Get room state
app.get('/api/rooms/:code', (req, res) => {
    const code = req.params.code.toUpperCase();
    db.get(`SELECT * FROM rooms WHERE code = ?`, [code], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!row) return res.status(404).json({ error: 'Room not found' });
        const state = JSON.parse(row.state);
        res.json(state);
    });
});

// List all active rooms
app.get('/api/rooms', (req, res) => {
    db.all(
        `SELECT code, host_name, mode, status, created_at, updated_at FROM rooms ORDER BY updated_at DESC LIMIT 20`,
        [],
        (err, rows) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(rows || []);
        }
    );
});

// Delete room
app.delete('/api/rooms/:code', (req, res) => {
    db.run(`DELETE FROM rooms WHERE code = ?`, [req.params.code], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Room deleted' });
    });
});

// ── AUCTION HISTORY ────────────────────────────────────────────────────────

app.post('/api/auction/sold', (req, res) => {
    const { room_code, player_name, player_id, team, amount } = req.body;
    db.run(
        `INSERT INTO auction_history (room_code, player_name, player_id, team, amount, status) VALUES (?, ?, ?, ?, ?, 'SOLD')`,
        [room_code, player_name, player_id, team, amount],
        function (err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ id: this.lastID });
        }
    );
});

app.post('/api/auction/unsold', (req, res) => {
    const { room_code, player_name, player_id } = req.body;
    db.run(
        `INSERT INTO auction_history (room_code, player_name, player_id, team, amount, status) VALUES (?, ?, ?, NULL, 0, 'UNSOLD')`,
        [room_code, player_name, player_id],
        function (err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ id: this.lastID });
        }
    );
});

app.get('/api/auction/history/:code', (req, res) => {
    db.all(
        `SELECT * FROM auction_history WHERE room_code = ? ORDER BY timestamp DESC`,
        [req.params.code],
        (err, rows) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(rows || []);
        }
    );
});

// ── MATCH RESULTS ────────────────────────────────────────────────────────

app.post('/api/matches', (req, res) => {
    const { room_code, team1, team2, score1, wk1, score2, wk2, winner, match_num } = req.body;
    db.run(
        `INSERT INTO match_results (room_code, team1, team2, score1, wk1, score2, wk2, winner, match_num) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [room_code, team1, team2, score1, wk1, score2, wk2, winner, match_num],
        function (err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ id: this.lastID });
        }
    );
});

app.get('/api/matches/:code', (req, res) => {
    db.all(
        `SELECT * FROM match_results WHERE room_code = ? ORDER BY match_num`,
        [req.params.code],
        (err, rows) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(rows || []);
        }
    );
});

// ── STATS ENDPOINT ───────────────────────────────────────────────────────

app.get('/api/stats/:code', (req, res) => {
    const code = req.params.code;
    db.get(
        `SELECT COUNT(*) as total_matches, SUM(score1 + score2) as total_runs FROM match_results WHERE room_code = ?`,
        [code],
        (err, row) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(row || { total_matches: 0, total_runs: 0 });
        }
    );
});

// ── SERVER ──────────────────────────────────────────────────────────────

app.listen(port, () => {
    console.log(`\n🏏 IPL 2026 ULTIMATE Backend running at http://localhost:${port}`);
    console.log(`   Open: http://localhost:${port}/ipl2026_ultimate.html\n`);
});
