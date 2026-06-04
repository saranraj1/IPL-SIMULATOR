const fs = require('fs');
const getCss = require('./gen_css');
const getBody = require('./gen_body');
const getJs1 = require('./gen_js1');
const getJs2 = require('./gen_js2');
const html = getCss() + getBody() + getJs1() + getJs2();
fs.writeFileSync('ipl2026_ultimate.html', html, 'utf8');
console.log('Built ipl2026_ultimate.html (' + html.length + ' bytes)');
