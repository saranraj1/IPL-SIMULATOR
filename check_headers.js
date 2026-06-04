const http = require('http');

http.get('http://localhost:3000/ipl2026_ultimate.html', (res) => {
  console.log('Headers:', res.headers);
  res.on('data', () => {});
}).on('error', (err) => {
  console.error('Error:', err.message);
});
