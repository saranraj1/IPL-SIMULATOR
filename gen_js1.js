module.exports = function () {
  return `<script>
const TM={
  CSK:{name:'Chennai Super Kings',c:'#f5c518',l:'🦁',logo:'https://upload.wikimedia.org/wikipedia/en/2/2b/Chennai_Super_Kings_Logo.svg',home:'Chennai',pitch:'flat'},
  MI:{name:'Mumbai Indians',c:'#004ba0',l:'🔵',logo:'https://upload.wikimedia.org/wikipedia/en/c/cd/Mumbai_Indians_Logo.svg',home:'Mumbai',pitch:'flat'},
  RCB:{name:'Royal Challengers Bengaluru',c:'#e8392a',l:'🔴',logo:'https://upload.wikimedia.org/wikipedia/en/2/2a/Royal_Challengers_Bangalore_2020.svg',home:'Bangalore',pitch:'batting'},
  KKR:{name:'Kolkata Knight Riders',c:'#4b0082',l:'🟣',logo:'https://upload.wikimedia.org/wikipedia/en/4/44/Kolkata_Knight_Riders_Logo.svg',home:'Kolkata',pitch:'spin'},
  SRH:{name:'Sunrisers Hyderabad',c:'#ff6b00',l:'🟠',logo:'https://upload.wikimedia.org/wikipedia/en/4/4c/Sunrisers_Hyderabad.svg',home:'Hyderabad',pitch:'spin'},
  DC:{name:'Delhi Capitals',c:'#1a56db',l:'🔷',logo:'https://upload.wikimedia.org/wikipedia/en/7/7c/Delhi_Capitals_Logo.svg',home:'Delhi',pitch:'green'},
  GT:{name:'Gujarat Titans',c:'#1d4ed8',l:'💎',logo:'https://upload.wikimedia.org/wikipedia/en/0/09/Gujarat_Titans_Logo.svg',home:'Ahmedabad',pitch:'flat'},
  LSG:{name:'Lucknow Super Giants',c:'#00c4ff',l:'🩵',logo:'https://upload.wikimedia.org/wikipedia/en/0/0a/Lucknow_Super_Giants_Logo.svg',home:'Lucknow',pitch:'spin'},
  RR:{name:'Rajasthan Royals',c:'#ff4fa3',l:'🩷',logo:'https://upload.wikimedia.org/wikipedia/en/6/60/Rajasthan_Royals_Logo.svg',home:'Jaipur',pitch:'green'},
  PBKS:{name:'Punjab Kings',c:'#dc2626',l:'❤️',logo:'https://upload.wikimedia.org/wikipedia/en/a/aa/Punjab_kings_new_logo_2021.svg',home:'Chandigarh',pitch:'batting'}
};
// Real player images - uses avatar API
// VERIFIED IPL 2025 PLAYERS - batR/bowlR = realistic ratings (0-100) based on career IPL stats
// batR: based on avg, SR, total runs, consistency. bowlR: based on econ, wSR, wickets taken
const RP=[
// ===== CSK (25) =====
{n:'MS Dhoni',t:'CSK',role:'WK',base:400,nat:'IND',ret:true,retAmt:400,batR:82,bowlR:0,tier:'A+'},
{n:'Ruturaj Gaikwad',t:'CSK',role:'BAT',base:1800,nat:'IND',ret:true,retAmt:1800,batR:84,bowlR:0,tier:'A+'},
{n:'Ravindra Jadeja',t:'CSK',role:'AR',base:1800,nat:'IND',ret:true,retAmt:1800,batR:62,bowlR:78,tier:'A+'},
{n:'Matheesha Pathirana',t:'CSK',role:'BWL',base:1300,nat:'OS',ret:true,retAmt:1300,batR:5,bowlR:80,tier:'A'},
{n:'Shivam Dube',t:'CSK',role:'AR',base:1200,nat:'IND',ret:true,retAmt:1200,batR:72,bowlR:30,tier:'A'},
{n:'Ravichandran Ashwin',t:'CSK',role:'AR',base:975,nat:'IND',ret:false,batR:35,bowlR:85,tier:'A'},
{n:'Devon Conway',t:'CSK',role:'BAT',base:625,nat:'OS',ret:false,batR:76,bowlR:0,tier:'A'},
{n:'Rachin Ravindra',t:'CSK',role:'AR',base:400,nat:'OS',ret:false,batR:65,bowlR:55,tier:'A'},
{n:'Sam Curran',t:'CSK',role:'AR',base:240,nat:'OS',ret:false,batR:55,bowlR:62,tier:'A'},
{n:'Noor Ahmad',t:'CSK',role:'BWL',base:1000,nat:'OS',ret:false,batR:5,bowlR:78,tier:'A'},
{n:'Rahul Tripathi',t:'CSK',role:'BAT',base:340,nat:'IND',ret:false,batR:68,bowlR:0,tier:'B'},
{n:'Deepak Hooda',t:'CSK',role:'AR',base:170,nat:'IND',ret:false,batR:58,bowlR:35,tier:'B'},
{n:'Khaleel Ahmed',t:'CSK',role:'BWL',base:480,nat:'IND',ret:false,batR:5,bowlR:65,tier:'B'},
{n:'Vijay Shankar',t:'CSK',role:'AR',base:120,nat:'IND',ret:false,batR:50,bowlR:40,tier:'B'},
{n:'Anshul Kamboj',t:'CSK',role:'AR',base:340,nat:'IND',ret:false,batR:30,bowlR:55,tier:'B'},
{n:'Nathan Ellis',t:'CSK',role:'BWL',base:200,nat:'OS',ret:false,batR:5,bowlR:62,tier:'B'},
{n:'Jamie Overton',t:'CSK',role:'AR',base:150,nat:'OS',ret:false,batR:40,bowlR:58,tier:'B'},
{n:'Shaik Rasheed',t:'CSK',role:'BAT',base:30,nat:'IND',ret:false,batR:45,bowlR:0,tier:'B'},
{n:'Shreyas Gopal',t:'CSK',role:'BWL',base:30,nat:'IND',ret:false,batR:25,bowlR:55,tier:'B'},
{n:'Gurjapneet Singh',t:'CSK',role:'BWL',base:220,nat:'IND',ret:false,batR:5,bowlR:50,tier:'B'},
{n:'Kamlesh Nagarkoti',t:'CSK',role:'BWL',base:30,nat:'IND',ret:false,batR:5,bowlR:48,tier:'B'},
{n:'Andre Siddarth',t:'CSK',role:'BAT',base:30,nat:'IND',ret:false,batR:35,bowlR:0,tier:'B'},
{n:'Mukesh Choudhary',t:'CSK',role:'BWL',base:30,nat:'IND',ret:false,batR:5,bowlR:52,tier:'B'},
{n:'Ramakrishna Ghosh',t:'CSK',role:'WK',base:30,nat:'IND',ret:false,batR:30,bowlR:0,tier:'B'},
{n:'Vansh Bedi',t:'CSK',role:'BWL',base:55,nat:'IND',ret:false,batR:5,bowlR:40,tier:'B'},
// ===== MI (25) =====
{n:'Jasprit Bumrah',t:'MI',role:'BWL',base:1800,nat:'IND',ret:true,retAmt:1800,batR:8,bowlR:98,tier:'A+'},
{n:'Suryakumar Yadav',t:'MI',role:'BAT',base:1650,nat:'IND',ret:true,retAmt:1650,batR:92,bowlR:0,tier:'A+'},
{n:'Hardik Pandya',t:'MI',role:'AR',base:1650,nat:'IND',ret:true,retAmt:1650,batR:78,bowlR:65,tier:'A+'},
{n:'Rohit Sharma',t:'MI',role:'BAT',base:1650,nat:'IND',ret:true,retAmt:1650,batR:85,bowlR:0,tier:'A+'},
{n:'Tilak Varma',t:'MI',role:'BAT',base:800,nat:'IND',ret:true,retAmt:800,batR:76,bowlR:0,tier:'A'},
{n:'Trent Boult',t:'MI',role:'BWL',base:1250,nat:'OS',ret:false,batR:5,bowlR:82,tier:'A'},
{n:'Deepak Chahar',t:'MI',role:'BWL',base:925,nat:'IND',ret:false,batR:15,bowlR:72,tier:'A'},
{n:'Will Jacks',t:'MI',role:'AR',base:525,nat:'OS',ret:false,batR:72,bowlR:45,tier:'A'},
{n:'Naman Dhir',t:'MI',role:'AR',base:525,nat:'IND',ret:false,batR:55,bowlR:30,tier:'B'},
{n:'Allah Ghazanfar',t:'MI',role:'BWL',base:480,nat:'OS',ret:false,batR:5,bowlR:70,tier:'B'},
{n:'Mitchell Santner',t:'MI',role:'AR',base:200,nat:'OS',ret:false,batR:40,bowlR:65,tier:'B'},
{n:'Ryan Rickelton',t:'MI',role:'WK',base:100,nat:'OS',ret:false,batR:60,bowlR:0,tier:'B'},
{n:'Reece Topley',t:'MI',role:'BWL',base:75,nat:'OS',ret:false,batR:5,bowlR:62,tier:'B'},
{n:'Robin Minz',t:'MI',role:'WK',base:65,nat:'IND',ret:false,batR:40,bowlR:0,tier:'B'},
{n:'Karn Sharma',t:'MI',role:'BWL',base:50,nat:'IND',ret:false,batR:15,bowlR:55,tier:'B'},
{n:'Raj Angad Bawa',t:'MI',role:'AR',base:30,nat:'IND',ret:false,batR:30,bowlR:40,tier:'B'},
{n:'Lizaad Williams',t:'MI',role:'BWL',base:75,nat:'OS',ret:false,batR:5,bowlR:55,tier:'B'},
{n:'Bevon Jacobs',t:'MI',role:'BAT',base:30,nat:'IND',ret:false,batR:35,bowlR:0,tier:'B'},
{n:'Arjun Tendulkar',t:'MI',role:'BWL',base:30,nat:'IND',ret:false,batR:10,bowlR:42,tier:'B'},
{n:'Satyanarayana Raju',t:'MI',role:'BWL',base:30,nat:'IND',ret:false,batR:5,bowlR:45,tier:'B'},
{n:'Vignesh Puthur',t:'MI',role:'AR',base:30,nat:'IND',ret:false,batR:20,bowlR:35,tier:'B'},
{n:'Shrijith Krishnan',t:'MI',role:'WK',base:30,nat:'IND',ret:false,batR:35,bowlR:0,tier:'B'},
{n:'Ashwani Kumar',t:'MI',role:'BAT',base:30,nat:'IND',ret:false,batR:30,bowlR:0,tier:'B'},
{n:'Mayank Markande',t:'MI',role:'BWL',base:30,nat:'IND',ret:false,batR:5,bowlR:50,tier:'B'},
{n:'Shardul Thakur',t:'MI',role:'AR',base:300,nat:'IND',ret:false,batR:30,bowlR:65,tier:'B'},
// ===== RCB (22) =====
{n:'Virat Kohli',t:'RCB',role:'BAT',base:2100,nat:'IND',ret:true,retAmt:2100,batR:97,bowlR:0,tier:'A+'},
{n:'Rajat Patidar',t:'RCB',role:'BAT',base:1100,nat:'IND',ret:true,retAmt:1100,batR:80,bowlR:0,tier:'A'},
{n:'Yash Dayal',t:'RCB',role:'BWL',base:500,nat:'IND',ret:true,retAmt:500,batR:5,bowlR:68,tier:'A'},
{n:'Liam Livingstone',t:'RCB',role:'AR',base:875,nat:'OS',ret:false,batR:75,bowlR:40,tier:'A'},
{n:'Phil Salt',t:'RCB',role:'WK',base:1175,nat:'OS',ret:false,batR:82,bowlR:0,tier:'A'},
{n:'Jitesh Sharma',t:'RCB',role:'WK',base:1100,nat:'IND',ret:false,batR:65,bowlR:0,tier:'B'},
{n:'Josh Hazlewood',t:'RCB',role:'BWL',base:1225,nat:'OS',ret:false,batR:5,bowlR:82,tier:'A'},
{n:'Rasikh Dar',t:'RCB',role:'BWL',base:600,nat:'IND',ret:false,batR:5,bowlR:62,tier:'B'},
{n:'Krunal Pandya',t:'RCB',role:'AR',base:575,nat:'IND',ret:false,batR:50,bowlR:65,tier:'B'},
{n:'Bhuvneshwar Kumar',t:'RCB',role:'BWL',base:1075,nat:'IND',ret:false,batR:10,bowlR:84,tier:'A'},
{n:'Tim David',t:'RCB',role:'BAT',base:300,nat:'OS',ret:false,batR:72,bowlR:0,tier:'B'},
{n:'Romario Shepherd',t:'RCB',role:'AR',base:150,nat:'OS',ret:false,batR:40,bowlR:60,tier:'B'},
{n:'Jacob Bethell',t:'RCB',role:'AR',base:260,nat:'OS',ret:false,batR:62,bowlR:40,tier:'B'},
{n:'Devdutt Padikkal',t:'RCB',role:'BAT',base:200,nat:'IND',ret:false,batR:68,bowlR:0,tier:'B'},
{n:'Suyash Sharma',t:'RCB',role:'BWL',base:30,nat:'IND',ret:false,batR:5,bowlR:48,tier:'B'},
{n:'Swapnil Singh',t:'RCB',role:'AR',base:50,nat:'IND',ret:false,batR:25,bowlR:45,tier:'B'},
{n:'Nuwan Thushara',t:'RCB',role:'BWL',base:100,nat:'OS',ret:false,batR:5,bowlR:58,tier:'B'},
{n:'Manoj Bhandage',t:'RCB',role:'AR',base:30,nat:'IND',ret:false,batR:30,bowlR:35,tier:'B'},
{n:'Lungi Ngidi',t:'RCB',role:'BWL',base:200,nat:'OS',ret:false,batR:5,bowlR:72,tier:'B'},
{n:'Swastik Chikkara',t:'RCB',role:'BAT',base:30,nat:'IND',ret:false,batR:30,bowlR:0,tier:'B'},
{n:'Abhinandan Singh',t:'RCB',role:'AR',base:30,nat:'IND',ret:false,batR:20,bowlR:30,tier:'B'},
{n:'Mohit Rathee',t:'RCB',role:'BWL',base:30,nat:'IND',ret:false,batR:5,bowlR:38,tier:'B'},
// ===== KKR (21) =====
{n:'Rinku Singh',t:'KKR',role:'BAT',base:1300,nat:'IND',ret:true,retAmt:1300,batR:78,bowlR:0,tier:'A'},
{n:'Varun Chakaravarthy',t:'KKR',role:'BWL',base:1200,nat:'IND',ret:true,retAmt:1200,batR:5,bowlR:82,tier:'A'},
{n:'Sunil Narine',t:'KKR',role:'AR',base:1200,nat:'OS',ret:true,retAmt:1200,batR:75,bowlR:88,tier:'A+'},
{n:'Andre Russell',t:'KKR',role:'AR',base:1200,nat:'OS',ret:true,retAmt:1200,batR:88,bowlR:60,tier:'A+'},
{n:'Harshit Rana',t:'KKR',role:'BWL',base:400,nat:'IND',ret:true,retAmt:400,batR:10,bowlR:62,tier:'B'},
{n:'Ramandeep Singh',t:'KKR',role:'AR',base:400,nat:'IND',ret:true,retAmt:400,batR:45,bowlR:35,tier:'B'},
{n:'Venkatesh Iyer',t:'KKR',role:'AR',base:2375,nat:'IND',ret:false,batR:65,bowlR:25,tier:'A'},
{n:'Quinton de Kock',t:'KKR',role:'WK',base:360,nat:'OS',ret:false,batR:80,bowlR:0,tier:'A'},
{n:'Anrich Nortje',t:'KKR',role:'BWL',base:650,nat:'OS',ret:false,batR:5,bowlR:78,tier:'A'},
{n:'Angkrish Raghuvanshi',t:'KKR',role:'BAT',base:300,nat:'IND',ret:false,batR:50,bowlR:0,tier:'B'},
{n:'Moeen Ali',t:'KKR',role:'AR',base:200,nat:'OS',ret:false,batR:68,bowlR:60,tier:'A'},
{n:'Ajinkya Rahane',t:'KKR',role:'BAT',base:150,nat:'IND',ret:false,batR:70,bowlR:0,tier:'B'},
{n:'Spencer Johnson',t:'KKR',role:'BWL',base:280,nat:'OS',ret:false,batR:5,bowlR:62,tier:'B'},
{n:'Rovman Powell',t:'KKR',role:'BAT',base:150,nat:'OS',ret:false,batR:65,bowlR:0,tier:'B'},
{n:'Manish Pandey',t:'KKR',role:'BAT',base:75,nat:'IND',ret:false,batR:62,bowlR:0,tier:'B'},
{n:'Vaibhav Arora',t:'KKR',role:'BWL',base:180,nat:'IND',ret:false,batR:5,bowlR:55,tier:'B'},
{n:'Rahmanullah Gurbaz',t:'KKR',role:'WK',base:200,nat:'OS',ret:false,batR:72,bowlR:0,tier:'B'},
{n:'Luvnith Sisodia',t:'KKR',role:'WK',base:30,nat:'IND',ret:false,batR:30,bowlR:0,tier:'B'},
{n:'Anukul Roy',t:'KKR',role:'AR',base:40,nat:'IND',ret:false,batR:25,bowlR:45,tier:'B'},
{n:'Umran Malik',t:'KKR',role:'BWL',base:75,nat:'IND',ret:false,batR:5,bowlR:60,tier:'B'},
{n:'Mayank Markande',t:'KKR',role:'BWL',base:30,nat:'IND',ret:false,batR:5,bowlR:50,tier:'B'},
// ===== SRH (21) =====
{n:'Heinrich Klaasen',t:'SRH',role:'WK',base:2300,nat:'OS',ret:true,retAmt:2300,batR:90,bowlR:0,tier:'A+'},
{n:'Pat Cummins',t:'SRH',role:'BWL',base:1800,nat:'OS',ret:true,retAmt:1800,batR:30,bowlR:83,tier:'A+'},
{n:'Abhishek Sharma',t:'SRH',role:'AR',base:1400,nat:'IND',ret:true,retAmt:1400,batR:78,bowlR:35,tier:'A'},
{n:'Travis Head',t:'SRH',role:'BAT',base:1400,nat:'OS',ret:true,retAmt:1400,batR:85,bowlR:0,tier:'A'},
{n:'Nitish Kumar Reddy',t:'SRH',role:'AR',base:600,nat:'IND',ret:true,retAmt:600,batR:65,bowlR:42,tier:'B'},
{n:'Mohammed Shami',t:'SRH',role:'BWL',base:1000,nat:'IND',ret:false,batR:5,bowlR:82,tier:'A'},
{n:'Ishan Kishan',t:'SRH',role:'WK',base:1125,nat:'IND',ret:false,batR:74,bowlR:0,tier:'A'},
{n:'Harshal Patel',t:'SRH',role:'AR',base:900,nat:'IND',ret:false,batR:20,bowlR:75,tier:'A'},
{n:'Rahul Chahar',t:'SRH',role:'BWL',base:320,nat:'IND',ret:false,batR:5,bowlR:65,tier:'B'},
{n:'Adam Zampa',t:'SRH',role:'BWL',base:240,nat:'OS',ret:false,batR:5,bowlR:72,tier:'B'},
{n:'Abhinav Manohar',t:'SRH',role:'BAT',base:320,nat:'IND',ret:false,batR:55,bowlR:0,tier:'B'},
{n:'Simarjeet Singh',t:'SRH',role:'BWL',base:150,nat:'IND',ret:false,batR:5,bowlR:50,tier:'B'},
{n:'Jaydev Unadkat',t:'SRH',role:'BWL',base:100,nat:'IND',ret:false,batR:10,bowlR:62,tier:'B'},
{n:'Brydon Carse',t:'SRH',role:'BWL',base:100,nat:'OS',ret:false,batR:15,bowlR:65,tier:'B'},
{n:'Kamindu Mendis',t:'SRH',role:'AR',base:75,nat:'OS',ret:false,batR:58,bowlR:45,tier:'B'},
{n:'Atharva Taide',t:'SRH',role:'BAT',base:30,nat:'IND',ret:false,batR:35,bowlR:0,tier:'B'},
{n:'Zeeshan Ansari',t:'SRH',role:'BWL',base:40,nat:'IND',ret:false,batR:5,bowlR:40,tier:'B'},
{n:'Aniket Verma',t:'SRH',role:'BAT',base:30,nat:'IND',ret:false,batR:30,bowlR:0,tier:'B'},
{n:'Eshan Malinga',t:'SRH',role:'BWL',base:120,nat:'IND',ret:false,batR:5,bowlR:48,tier:'B'},
// ===== DC (25) =====
{n:'Axar Patel',t:'DC',role:'AR',base:1650,nat:'IND',ret:true,retAmt:1650,batR:62,bowlR:75,tier:'A'},
{n:'Kuldeep Yadav',t:'DC',role:'BWL',base:1350,nat:'IND',ret:true,retAmt:1350,batR:8,bowlR:80,tier:'A'},
{n:'Tristan Stubbs',t:'DC',role:'WK',base:600,nat:'OS',ret:true,retAmt:600,batR:60,bowlR:0,tier:'B'},
{n:'Abishek Porel',t:'DC',role:'WK',base:400,nat:'IND',ret:true,retAmt:400,batR:55,bowlR:0,tier:'B'},
{n:'KL Rahul',t:'DC',role:'WK',base:1400,nat:'IND',ret:false,batR:90,bowlR:0,tier:'A+'},
{n:'Mitchell Starc',t:'DC',role:'BWL',base:1175,nat:'OS',ret:false,batR:8,bowlR:85,tier:'A+'},
{n:'Faf du Plessis',t:'DC',role:'BAT',base:200,nat:'OS',ret:false,batR:82,bowlR:0,tier:'A'},
{n:'Jake Fraser-McGurk',t:'DC',role:'BAT',base:900,nat:'OS',ret:false,batR:72,bowlR:0,tier:'A'},
{n:'Harry Brook',t:'DC',role:'BAT',base:675,nat:'OS',ret:false,batR:78,bowlR:0,tier:'A'},
{n:'Karun Nair',t:'DC',role:'BAT',base:500,nat:'IND',ret:false,batR:68,bowlR:0,tier:'B'},
{n:'T Natarajan',t:'DC',role:'BWL',base:400,nat:'IND',ret:false,batR:5,bowlR:70,tier:'B'},
{n:'Mukesh Kumar',t:'DC',role:'BWL',base:800,nat:'IND',ret:false,batR:5,bowlR:62,tier:'B'},
{n:'Ashutosh Sharma',t:'DC',role:'BAT',base:380,nat:'IND',ret:false,batR:58,bowlR:10,tier:'B'},
{n:'Sameer Rizvi',t:'DC',role:'BAT',base:200,nat:'IND',ret:false,batR:45,bowlR:0,tier:'B'},
{n:'Mohit Sharma',t:'DC',role:'BWL',base:200,nat:'IND',ret:false,batR:5,bowlR:62,tier:'B'},
{n:'Dushmantha Chameera',t:'DC',role:'BWL',base:75,nat:'OS',ret:false,batR:5,bowlR:58,tier:'B'},
{n:'Vipraj Nigam',t:'DC',role:'AR',base:50,nat:'IND',ret:false,batR:30,bowlR:35,tier:'B'},
{n:'Manvanth Kumar',t:'DC',role:'AR',base:30,nat:'IND',ret:false,batR:25,bowlR:30,tier:'B'},
{n:'Ajay Mandal',t:'DC',role:'AR',base:30,nat:'IND',ret:false,batR:20,bowlR:30,tier:'B'},
{n:'Tripurana Vijay',t:'DC',role:'AR',base:30,nat:'IND',ret:false,batR:25,bowlR:28,tier:'B'},
{n:'Madhav Tiwari',t:'DC',role:'AR',base:30,nat:'IND',ret:false,batR:22,bowlR:25,tier:'B'},
{n:'Darshan Nalkande',t:'DC',role:'BWL',base:30,nat:'IND',ret:false,batR:5,bowlR:45,tier:'B'},
{n:'Donovan Ferreira',t:'DC',role:'WK',base:75,nat:'OS',ret:false,batR:50,bowlR:0,tier:'B'},
{n:'Sediqullah Atal',t:'DC',role:'BAT',base:30,nat:'OS',ret:false,batR:42,bowlR:0,tier:'B'},
{n:'Nitish Rana',t:'DC',role:'BAT',base:75,nat:'IND',ret:false,batR:65,bowlR:15,tier:'B'},
// ===== GT (26) =====
{n:'Rashid Khan',t:'GT',role:'BWL',base:1800,nat:'OS',ret:true,retAmt:1800,batR:42,bowlR:92,tier:'A+'},
{n:'Shubman Gill',t:'GT',role:'BAT',base:1650,nat:'IND',ret:true,retAmt:1650,batR:86,bowlR:0,tier:'A+'},
{n:'Sai Sudharsan',t:'GT',role:'BAT',base:850,nat:'IND',ret:true,retAmt:850,batR:75,bowlR:0,tier:'A'},
{n:'Rahul Tewatia',t:'GT',role:'AR',base:400,nat:'IND',ret:true,retAmt:400,batR:58,bowlR:50,tier:'B'},
{n:'Shahrukh Khan',t:'GT',role:'BAT',base:240,nat:'IND',ret:true,retAmt:240,batR:60,bowlR:0,tier:'B'},
{n:'Jos Buttler',t:'GT',role:'WK',base:1575,nat:'OS',ret:false,batR:88,bowlR:0,tier:'A+'},
{n:'Kagiso Rabada',t:'GT',role:'BWL',base:1075,nat:'OS',ret:false,batR:8,bowlR:83,tier:'A'},
{n:'Mohammed Siraj',t:'GT',role:'BWL',base:1225,nat:'IND',ret:false,batR:5,bowlR:72,tier:'A'},
{n:'Washington Sundar',t:'GT',role:'AR',base:325,nat:'IND',ret:false,batR:45,bowlR:65,tier:'B'},
{n:'Prasidh Krishna',t:'GT',role:'BWL',base:300,nat:'IND',ret:false,batR:5,bowlR:68,tier:'B'},
{n:'Gerald Coetzee',t:'GT',role:'BWL',base:250,nat:'OS',ret:false,batR:15,bowlR:65,tier:'B'},
{n:'Glenn Phillips',t:'GT',role:'WK',base:200,nat:'OS',ret:false,batR:70,bowlR:35,tier:'B'},
{n:'Mahipal Lomror',t:'GT',role:'AR',base:150,nat:'IND',ret:false,batR:50,bowlR:40,tier:'B'},
{n:'Kumar Kushagra',t:'GT',role:'WK',base:100,nat:'IND',ret:false,batR:40,bowlR:0,tier:'B'},
{n:'Anuj Rawat',t:'GT',role:'WK',base:75,nat:'IND',ret:false,batR:42,bowlR:0,tier:'B'},
{n:'Manav Suthar',t:'GT',role:'BWL',base:100,nat:'IND',ret:false,batR:10,bowlR:55,tier:'B'},
{n:'Nishant Sindhu',t:'GT',role:'AR',base:50,nat:'IND',ret:false,batR:30,bowlR:35,tier:'B'},
{n:'Ishant Sharma',t:'GT',role:'BWL',base:75,nat:'IND',ret:false,batR:5,bowlR:62,tier:'B'},
{n:'Jayant Yadav',t:'GT',role:'AR',base:75,nat:'IND',ret:false,batR:30,bowlR:55,tier:'B'},
{n:'Karim Janat',t:'GT',role:'AR',base:75,nat:'OS',ret:false,batR:42,bowlR:40,tier:'B'},
{n:'Arshad Khan',t:'GT',role:'AR',base:30,nat:'IND',ret:false,batR:25,bowlR:30,tier:'B'},
{n:'Sai Kishore',t:'GT',role:'BWL',base:200,nat:'IND',ret:false,batR:10,bowlR:55,tier:'B'},
{n:'Kulwant Khejroliya',t:'GT',role:'BWL',base:30,nat:'IND',ret:false,batR:5,bowlR:40,tier:'B'},
{n:'Sherfane Rutherford',t:'GT',role:'BAT',base:150,nat:'OS',ret:false,batR:62,bowlR:0,tier:'B'},
{n:'Gurnoor Brar',t:'GT',role:'AR',base:30,nat:'IND',ret:false,batR:20,bowlR:35,tier:'B'},
// ===== LSG (25) =====
{n:'Nicholas Pooran',t:'LSG',role:'WK',base:2100,nat:'OS',ret:true,retAmt:2100,batR:80,bowlR:0,tier:'A+'},
{n:'Mayank Yadav',t:'LSG',role:'BWL',base:1100,nat:'IND',ret:true,retAmt:1100,batR:5,bowlR:78,tier:'A'},
{n:'Ravi Bishnoi',t:'LSG',role:'BWL',base:1100,nat:'IND',ret:true,retAmt:1100,batR:5,bowlR:76,tier:'A'},
{n:'Mohsin Khan',t:'LSG',role:'BWL',base:400,nat:'IND',ret:true,retAmt:400,batR:5,bowlR:62,tier:'B'},
{n:'Ayush Badoni',t:'LSG',role:'BAT',base:400,nat:'IND',ret:true,retAmt:400,batR:62,bowlR:15,tier:'B'},
{n:'Rishabh Pant',t:'LSG',role:'WK',base:2700,nat:'IND',ret:false,batR:84,bowlR:0,tier:'A+'},
{n:'David Miller',t:'LSG',role:'BAT',base:750,nat:'OS',ret:false,batR:78,bowlR:0,tier:'A'},
{n:'Avesh Khan',t:'LSG',role:'BWL',base:975,nat:'IND',ret:false,batR:8,bowlR:65,tier:'B'},
{n:'Akash Deep',t:'LSG',role:'BWL',base:800,nat:'IND',ret:false,batR:8,bowlR:65,tier:'B'},
{n:'Mitchell Marsh',t:'LSG',role:'AR',base:340,nat:'OS',ret:false,batR:68,bowlR:50,tier:'A'},
{n:'Aiden Markram',t:'LSG',role:'BAT',base:200,nat:'OS',ret:false,batR:65,bowlR:30,tier:'B'},
{n:'Abdul Samad',t:'LSG',role:'BAT',base:420,nat:'IND',ret:false,batR:60,bowlR:10,tier:'B'},
{n:'Shahbaz Ahmed',t:'LSG',role:'AR',base:240,nat:'IND',ret:false,batR:50,bowlR:55,tier:'B'},
{n:'Shamar Joseph',t:'LSG',role:'BWL',base:75,nat:'OS',ret:false,batR:5,bowlR:62,tier:'B'},
{n:'Matthew Breetzke',t:'LSG',role:'BAT',base:75,nat:'OS',ret:false,batR:45,bowlR:0,tier:'B'},
{n:'Himmat Singh',t:'LSG',role:'BAT',base:30,nat:'IND',ret:false,batR:40,bowlR:0,tier:'B'},
{n:'M Siddharth',t:'LSG',role:'BWL',base:75,nat:'IND',ret:false,batR:5,bowlR:52,tier:'B'},
{n:'Aryan Juyal',t:'LSG',role:'WK',base:30,nat:'IND',ret:false,batR:35,bowlR:0,tier:'B'},
{n:'Arshin Kulkarni',t:'LSG',role:'AR',base:30,nat:'IND',ret:false,batR:30,bowlR:25,tier:'B'},
{n:'Rajvardhan Hangargekar',t:'LSG',role:'AR',base:30,nat:'IND',ret:false,batR:20,bowlR:45,tier:'B'},
{n:'Akash Singh',t:'LSG',role:'BWL',base:30,nat:'IND',ret:false,batR:5,bowlR:42,tier:'B'},
{n:'Digvesh Singh',t:'LSG',role:'BWL',base:30,nat:'IND',ret:false,batR:5,bowlR:38,tier:'B'},
{n:'Prince Yadav',t:'LSG',role:'BWL',base:30,nat:'IND',ret:false,batR:5,bowlR:35,tier:'B'},
{n:'Yuvraj Chaudhary',t:'LSG',role:'BWL',base:30,nat:'IND',ret:false,batR:5,bowlR:32,tier:'B'},
// ===== RR (22) =====
{n:'Sanju Samson',t:'RR',role:'WK',base:1800,nat:'IND',ret:true,retAmt:1800,batR:78,bowlR:0,tier:'A'},
{n:'Yashasvi Jaiswal',t:'RR',role:'BAT',base:1800,nat:'IND',ret:true,retAmt:1800,batR:88,bowlR:0,tier:'A+'},
{n:'Riyan Parag',t:'RR',role:'AR',base:1400,nat:'IND',ret:true,retAmt:1400,batR:72,bowlR:30,tier:'A'},
{n:'Dhruv Jurel',t:'RR',role:'WK',base:1400,nat:'IND',ret:true,retAmt:1400,batR:70,bowlR:0,tier:'A'},
{n:'Shimron Hetmyer',t:'RR',role:'BAT',base:1100,nat:'OS',ret:true,retAmt:1100,batR:74,bowlR:0,tier:'A'},
{n:'Sandeep Sharma',t:'RR',role:'BWL',base:400,nat:'IND',ret:true,retAmt:400,batR:5,bowlR:62,tier:'B'},
{n:'Jofra Archer',t:'RR',role:'BWL',base:1250,nat:'OS',ret:false,batR:15,bowlR:90,tier:'A+'},
{n:'Wanindu Hasaranga',t:'RR',role:'AR',base:650,nat:'OS',ret:false,batR:40,bowlR:78,tier:'A'},
{n:'Maheesh Theekshana',t:'RR',role:'BWL',base:475,nat:'OS',ret:false,batR:5,bowlR:72,tier:'B'},
{n:'Tushar Deshpande',t:'RR',role:'BWL',base:600,nat:'IND',ret:false,batR:5,bowlR:58,tier:'B'},
{n:'Akash Madhwal',t:'RR',role:'BWL',base:200,nat:'IND',ret:false,batR:5,bowlR:56,tier:'B'},
{n:'Kumar Kartikeya',t:'RR',role:'BWL',base:150,nat:'IND',ret:false,batR:5,bowlR:55,tier:'B'},
{n:'Nitish Rana',t:'RR',role:'BAT',base:75,nat:'IND',ret:false,batR:65,bowlR:15,tier:'B'},
{n:'Shubham Dubey',t:'RR',role:'BAT',base:80,nat:'IND',ret:false,batR:48,bowlR:0,tier:'B'},
{n:'Fazalhaq Farooqi',t:'RR',role:'BWL',base:200,nat:'OS',ret:false,batR:5,bowlR:72,tier:'B'},
{n:'Vaibhav Suryavanshi',t:'RR',role:'BAT',base:110,nat:'IND',ret:false,batR:52,bowlR:0,tier:'B'},
{n:'Kwena Maphaka',t:'RR',role:'BWL',base:150,nat:'OS',ret:false,batR:5,bowlR:55,tier:'B'},
{n:'Yudhvir Singh',t:'RR',role:'AR',base:30,nat:'IND',ret:false,batR:25,bowlR:30,tier:'B'},
{n:'Kunal Rathore',t:'RR',role:'WK',base:30,nat:'IND',ret:false,batR:28,bowlR:0,tier:'B'},
{n:'Ashok Sharma',t:'RR',role:'BWL',base:30,nat:'IND',ret:false,batR:5,bowlR:35,tier:'B'},
// ===== PBKS (25) =====
{n:'Shashank Singh',t:'PBKS',role:'BAT',base:550,nat:'IND',ret:true,retAmt:550,batR:62,bowlR:10,tier:'B'},
{n:'Prabhsimran Singh',t:'PBKS',role:'WK',base:400,nat:'IND',ret:true,retAmt:400,batR:55,bowlR:0,tier:'B'},
{n:'Shreyas Iyer',t:'PBKS',role:'BAT',base:2675,nat:'IND',ret:false,batR:82,bowlR:0,tier:'A+'},
{n:'Arshdeep Singh',t:'PBKS',role:'BWL',base:1800,nat:'IND',ret:false,batR:5,bowlR:76,tier:'A'},
{n:'Yuzvendra Chahal',t:'PBKS',role:'BWL',base:1800,nat:'IND',ret:false,batR:5,bowlR:90,tier:'A'},
{n:'Marcus Stoinis',t:'PBKS',role:'AR',base:1100,nat:'OS',ret:false,batR:72,bowlR:55,tier:'A'},
{n:'Marco Jansen',t:'PBKS',role:'AR',base:700,nat:'OS',ret:false,batR:40,bowlR:72,tier:'A'},
{n:'Glenn Maxwell',t:'PBKS',role:'AR',base:425,nat:'OS',ret:false,batR:76,bowlR:55,tier:'A'},
{n:'Lockie Ferguson',t:'PBKS',role:'BWL',base:200,nat:'OS',ret:false,batR:5,bowlR:80,tier:'A'},
{n:'Josh Inglis',t:'PBKS',role:'WK',base:260,nat:'OS',ret:false,batR:65,bowlR:0,tier:'B'},
{n:'Azmatullah Omarzai',t:'PBKS',role:'AR',base:240,nat:'OS',ret:false,batR:55,bowlR:58,tier:'B'},
{n:'Nehal Wadhera',t:'PBKS',role:'BAT',base:420,nat:'IND',ret:false,batR:55,bowlR:0,tier:'B'},
{n:'Priyansh Arya',t:'PBKS',role:'BAT',base:380,nat:'IND',ret:false,batR:58,bowlR:0,tier:'B'},
{n:'Harpreet Brar',t:'PBKS',role:'AR',base:150,nat:'IND',ret:false,batR:35,bowlR:55,tier:'B'},
{n:'Vyshak Vijay Kumar',t:'PBKS',role:'BWL',base:180,nat:'IND',ret:false,batR:5,bowlR:55,tier:'B'},
{n:'Yash Thakur',t:'PBKS',role:'BWL',base:160,nat:'IND',ret:false,batR:5,bowlR:52,tier:'B'},
{n:'Aaron Hardie',t:'PBKS',role:'AR',base:125,nat:'OS',ret:false,batR:45,bowlR:45,tier:'B'},
{n:'Vishnu Vinod',t:'PBKS',role:'WK',base:95,nat:'IND',ret:false,batR:42,bowlR:0,tier:'B'},
{n:'Kuldeep Sen',t:'PBKS',role:'BWL',base:80,nat:'IND',ret:false,batR:5,bowlR:55,tier:'B'},
{n:'Suryansh Shedge',t:'PBKS',role:'AR',base:30,nat:'IND',ret:false,batR:30,bowlR:25,tier:'B'},
{n:'Musheer Khan',t:'PBKS',role:'BAT',base:30,nat:'IND',ret:false,batR:48,bowlR:15,tier:'B'},
{n:'Harnoor Pannu',t:'PBKS',role:'BAT',base:30,nat:'IND',ret:false,batR:35,bowlR:0,tier:'B'},
{n:'Pyla Avinash',t:'PBKS',role:'BAT',base:30,nat:'IND',ret:false,batR:30,bowlR:0,tier:'B'},
{n:'Xavier Bartlett',t:'PBKS',role:'BWL',base:75,nat:'OS',ret:false,batR:5,bowlR:58,tier:'B'},
{n:'Pravin Dubey',t:'PBKS',role:'BWL',base:30,nat:'IND',ret:false,batR:10,bowlR:48,tier:'B'}
];
function pImg(n){return 'https://ui-avatars.com/api/?name='+encodeURIComponent(n)+'&background=1a2236&color=f5a623&size=128&bold=true&format=svg'}

// SOUND ENGINE
const SND={ctx:null,init(){try{this.ctx=new(window.AudioContext||window.webkitAudioContext)()}catch(e){}},
play(type){if(!this.ctx||!app.soundOn)return;const o=this.ctx.createOscillator(),g=this.ctx.createGain();o.connect(g);g.connect(this.ctx.destination);
if(type==='bid'){o.frequency.value=600;g.gain.value=0.15;o.type='sine';o.start();o.stop(this.ctx.currentTime+0.08)}
else if(type==='sold'){o.frequency.value=800;g.gain.value=0.2;o.type='sine';o.start();g.gain.exponentialRampToValueAtTime(0.01,this.ctx.currentTime+0.5);o.stop(this.ctx.currentTime+0.5)}
else if(type==='unsold'){o.frequency.value=200;g.gain.value=0.15;o.type='sawtooth';o.start();o.stop(this.ctx.currentTime+0.3)}
else if(type==='tick'){o.frequency.value=1000;g.gain.value=0.08;o.type='sine';o.start();o.stop(this.ctx.currentTime+0.05)}
else if(type==='warn'){o.frequency.value=400;g.gain.value=0.12;o.type='square';o.start();o.stop(this.ctx.currentTime+0.15)}
else if(type==='six'){o.frequency.value=900;g.gain.value=0.2;o.type='sine';o.start();g.gain.exponentialRampToValueAtTime(0.01,this.ctx.currentTime+0.4);o.stop(this.ctx.currentTime+0.4)}
else if(type==='wicket'){o.frequency.value=150;g.gain.value=0.15;o.type='sawtooth';o.start();o.stop(this.ctx.currentTime+0.25)}
else if(type==='four'){o.frequency.value=700;g.gain.value=0.12;o.type='triangle';o.start();o.stop(this.ctx.currentTime+0.1)}}};

function confetti(){const colors=['#f5a623','#ffd700','#00c4ff','#00e676','#ff4fa3','#e8392a'];for(let i=0;i<40;i++){const c=document.createElement('div');c.className='confetti-piece';c.style.cssText='left:'+Math.random()*100+'vw;top:-10px;background:'+colors[Math.floor(Math.random()*colors.length)]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';width:'+(6+Math.random()*8)+'px;height:'+(6+Math.random()*8)+'px;animation-duration:'+(1.5+Math.random()*1.5)+'s;animation-delay:'+Math.random()*0.5+'s';document.body.appendChild(c);setTimeout(()=>c.remove(),3500)}}
function showSoldOverlay(text,sub,color){const o=document.getElementById('sold-overlay'),t=document.getElementById('sold-overlay-text'),s=document.getElementById('sold-overlay-sub');t.innerText=text;t.style.color=color;s.innerText=sub;s.style.color=color;o.style.background=text==='SOLD!'?'rgba(0,230,118,.08)':'rgba(232,57,42,.08)';o.classList.add('show');setTimeout(()=>o.classList.remove('show'),1500)}

const app={
state:{roomCode:null,userName:'Player',teamId:null,isHost:false,players:{},mode:'mock',
  auction:{inProgress:false,idx:-1,currentBid:0,leadTeam:null,timer:15,status:'WAITING',timerMax:15},
  teams:{},playerDataset:[],auctionPool:[],schedule:[],played:0,auctionHistory:[],retentionDone:false,
  stats:{runs:0,wkts:0,sixes:0},playoffs:{q1:null,e:null,q2:null,final:null},currentMatch:null,tradeCache:[],injuries:{},captains:{},currentSchIdx:undefined,hallOfFame:[]},
soundOn:true,histFilter:'all',_selTeam:'CSK',_roleFilter:'all',charts:{},_aiBidCooldown:0,
config:{teams:Object.keys(TM),bidIncr:v=>{if(v<100)return 5;if(v<200)return 10;if(v<500)return 25;if(v<1000)return 50;return 100}},

init(){this.load();this.genPlayers();this.pollRooms();SND.init();
  document.addEventListener('keydown',e=>{if(e.target.tagName==='INPUT'||e.target.tagName==='SELECT')return;
    if(e.key==='b'||e.key==='B')this.bid('bid',1);else if(e.key==='5')this.bid('bid',5);else if(e.key==='p'||e.key==='P')this.bid('pass');else if(e.key===' '){e.preventDefault();this.nextBall()}});
  this.ui()},

genPlayers(){
  if(this.state.playerDataset.length>0)return;
  const ds=[];
  RP.forEach((p,i)=>{
    ds.push({id:'P'+i,name:p.n,nation:p.nat==='OS'?'Overseas':'IND',role:p.role,base:p.base,tier:p.tier,set:p.t+' SQUAD',skill:0,batRating:p.batR||10,bowlRating:p.bowlR||10,tRuns:0,tWkts:0,t6s:0,tBalls:0,img:pImg(p.n),prevTeam:p.t,isRetained:p.ret||false,retAmt:p.retAmt||p.base,form:50,fatigue:0,fp:0});
  });
  // Fill extra auction-pool players (no team)
  const fn=['Aarush','Vihaan','Reyan','Arjun','Dhruv','Kabir','Lakshya','Manan','Nikhil','Pranav','Rudra','Samar','Tejas','Yash','Vivaan','Zain','Ankit','Dev','Parth','Rohan','Sid','Tanay'];
  const ln=['Singh','Kumar','Sharma','Patel','Gupta','Yadav','Verma','Das','Nair','Reddy','Joshi','Shah','Rao','Mishra'];
  const roles=['BAT','BWL','AR','WK'],nats=['IND','IND','IND','Overseas'];
  for(let i=ds.length;i<300;i++){
    const nm=fn[Math.floor(Math.random()*fn.length)]+' '+ln[Math.floor(Math.random()*ln.length)];
    const rl=roles[Math.floor(Math.random()*4)];
    const bR=rl==='BAT'||rl==='WK'?20+Math.floor(Math.random()*35):(rl==='AR'?15+Math.floor(Math.random()*25):5);
    const wR=rl==='BWL'?25+Math.floor(Math.random()*35):(rl==='AR'?15+Math.floor(Math.random()*25):3);
    ds.push({id:'P'+i,name:nm,nation:nats[Math.floor(Math.random()*nats.length)],role:rl,base:[20,30,50,75,100][Math.floor(Math.random()*5)],tier:'B',set:'SET '+Math.floor(i/10+1),skill:0,batRating:bR,bowlRating:wR,tRuns:0,tWkts:0,t6s:0,tBalls:0,img:pImg(nm),prevTeam:null,isRetained:false,retAmt:0,form:50,fatigue:0,fp:0});
  }
  ds.forEach(p=>{p.skill=Math.max(p.batRating,p.bowlRating)});
  this.state.playerDataset=ds;this.save();
},

save(){localStorage.setItem('ipl_v7',JSON.stringify(this.state));if(this.state.roomCode)fetch('/api/rooms',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({code:this.state.roomCode,state:this.state})}).catch(()=>{})},
load(){const d=localStorage.getItem('ipl_v7');if(d)try{this.state=JSON.parse(d)}catch(e){}
  if(!this.state.injuries)this.state.injuries={};
  if(!this.state.captains)this.state.captains={};
  if(this.state.currentSchIdx===null)this.state.currentSchIdx=undefined;
},
toast(m,t='info'){const b=document.getElementById('toast-box');const d=document.createElement('div');d.className='toast '+t;d.innerHTML=m;b.appendChild(d);setTimeout(()=>d.remove(),3500)},
go(id){document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));const e=document.getElementById('page-'+id);if(e)e.classList.add('active');document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));const n=document.getElementById('nav-'+id);if(n)n.classList.add('active');this.ui()},
openModal(t){const m=document.getElementById('modal-'+t);if(m)m.style.display='flex';if(t==='create')this.renderTeamSel()},
renderTeamSel(){document.getElementById('team-sel').innerHTML=this.config.teams.map(t=>'<div class="team-badge'+(this.state.teamId===t?' sel':'')+'" style="background:'+TM[t].c+'" onclick="app.pickTeam(\\''+t+'\\')">'+TM[t].l+' '+t+'</div>').join('')},
pickTeam(t){this.state.teamId=t;this.renderTeamSel()},

createRoom(){
  const code=Math.random().toString(36).substring(2,8).toUpperCase();
  this.state.roomCode=code;this.state.isHost=true;
  this.state.userName=document.getElementById('cr-name').value||'Host';
  this.state.mode=document.getElementById('cr-mode').value;
  this.state.auction.timerMax=parseInt(document.getElementById('cr-timer').value);
  this.state.players[this.state.userName]={team:this.state.teamId,isHost:true};
  this.config.teams.forEach(t=>{this.state.teams[t]={id:t,purse:12000,squad:[],overseas:0}});
  this.state.retentionDone=false;this.state.auctionHistory=[];this.state.schedule=[];this.state.played=0;
  this.state.playoffs={q1:null,e:null,q2:null,final:null};this.state.stats={runs:0,wkts:0,sixes:0};
  this.state.injuries={};this.state.captains={};this.state.currentSchIdx=undefined;this.state.hallOfFame=[];
  this.state.auction={inProgress:false,idx:0,currentBid:0,leadTeam:null,timer:this.state.auction.timerMax,status:'WAITING',timerMax:this.state.auction.timerMax};
  document.getElementById('modal-create').style.display='none';
  this.go('retention');this.save();this.toast('Room <b>'+code+'</b> created! Retain players first.','success');
},
joinRoom(){this.state.roomCode=document.getElementById('jr-code').value.toUpperCase();this.state.userName=document.getElementById('jr-name').value||'Guest';this.state.isHost=false;document.getElementById('modal-join').style.display='none';this.load();this.go('lobby')},
soloPlay(){ 
  this.state.roomCode='SOLO'; 
  this.state.teamId=null; 
  this.openModal('solo'); 
  setTimeout(()=>this.openSoloSelection(),100);
},
soloStart(){
  const tId=this._soloSelTeam||'CSK';
  const mode=document.getElementById('solo-mode').value;
  this.state.roomCode='SOLO';this.state.isHost=true;this.state.userName='You';
  this.state.teamId=tId;this.state.mode=mode;
  this.state.players['You']={team:tId,isHost:true};
  this.config.teams.forEach(t=>{this.state.teams[t]={id:t,purse:12000,squad:[],overseas:0,rtm:0}});
  this.state.retentionDone=false;this.state.auctionHistory=[];this.state.schedule=[];this.state.played=0;
  this.state.playoffs={q1:null,e:null,q2:null,final:null};this.state.stats={runs:0,wkts:0,sixes:0};
  this.state.injuries={};this.state.captains={};this.state.currentSchIdx=undefined;this.state.hallOfFame=[];
  this.state.auction={inProgress:false,idx:0,currentBid:0,leadTeam:null,timer:15,status:'WAITING',timerMax:15};
  this.state.playerDataset=[];this.genPlayers();
  this.config.teams.forEach(t=>{ if(t!==tId) this.autoRetain(t); });
  const modalSolo = document.getElementById('modal-solo');
  if(modalSolo) modalSolo.style.display='none';
  this.save();this.go('retention');this.toast('Pick your retentions!','success');
},
autoRetain(tId){
  const available=this.state.playerDataset.filter(p=>p.prevTeam===tId).sort((a,b)=>b.skill-a.skill);
  const tm=this.state.teams[tId];
  const limit=this.state.mode==='mega'?6:18;
  available.slice(0,limit).forEach(p=>{
    if(tm.purse>=p.retAmt && (p.nation==='IND' || tm.overseas<8)){
       tm.squad.push(p.id);tm.purse-=p.retAmt;if(p.nation!=='IND')tm.overseas++;
    }
  });
},

// === RETENTION SYSTEM ===
renderRetention(){
  const el=document.getElementById('retention-content');if(!el)return;
  if(this.state.retentionDone){el.innerHTML='<p style="color:var(--green)">✅ Retentions complete! Proceed to auction.</p><button class="btn btn-lg" style="margin-top:16px" onclick="app.startAuction()">🏏 Start Auction</button>';return}
  const isMega=this.state.mode==='mega';const maxR=isMega?6:25;
  let html='<p style="color:var(--text2);margin-bottom:16px">'+(isMega?'Each team can retain up to 6 players.':'Mini Auction mode: you can retain as many as you want.')+' Retained players cost deducted from purse.</p>';
  this.config.teams.forEach(t=>{
    const available=this.state.playerDataset.filter(p=>p.prevTeam===t);
    const tm=this.state.teams[t];if(!tm)return;
    const retained=tm.squad.map(sid=>this.state.playerDataset.find(p=>p.id===sid)).filter(Boolean);
    html+='<div class="card" style="margin-bottom:12px"><div style="display:flex;align-items:center;gap:8px;margin-bottom:10px"><span style="font-size:1.5rem">'+TM[t].l+'</span><h4 class="raj" style="color:'+TM[t].c+'">'+t+' ('+retained.length+'/'+maxR+')</h4><span style="font-size:.8rem;color:var(--text2)">Purse: ₹'+(tm.purse/100).toFixed(1)+' Cr</span></div>';
    html+='<div style="display:flex;gap:6px;flex-wrap:wrap">';
    available.forEach(p=>{
      const isRet=tm.squad.includes(p.id);
      html+='<div style="background:'+(isRet?'rgba(0,230,118,.1)':'var(--bg3)')+';border:1px solid '+(isRet?'var(--green)':'var(--border)')+';border-radius:8px;padding:8px 12px;display:flex;align-items:center;gap:6px;cursor:pointer" onclick="app.toggleRetain(\\''+t+'\\',\\''+p.id+'\\','+p.retAmt+')"><img src="'+p.img+'" style="width:28px;height:28px;border-radius:50%"><div><div style="font-size:.8rem;font-weight:600">'+p.name+'</div><div style="font-size:.68rem;color:var(--text2)">'+p.role+' · ₹'+(p.retAmt/100).toFixed(1)+' Cr</div></div>'+(isRet?'<span style="color:var(--green);font-size:.75rem">✅</span>':'')+'</div>';
    });
    html+='</div></div>';
  });
  html+='<button class="btn btn-lg" style="margin-top:16px" onclick="app.confirmRetentions()">✅ Confirm All Retentions & Start Auction</button>';
  el.innerHTML=html;
},
toggleRetain(teamId,playerId,retAmt){
  const tm=this.state.teams[teamId];if(!tm)return;
  const idx=tm.squad.indexOf(playerId);
  const isMega=this.state.mode==='mega';const limit=isMega?6:25;
  if(idx>=0){tm.squad.splice(idx,1);tm.purse+=retAmt;const p=this.state.playerDataset.find(x=>x.id===playerId);if(p&&p.nation!=='IND')tm.overseas--}
  else{if(tm.squad.length>=limit){this.toast('Max '+limit+' retentions!','error');return}
    if(tm.purse<retAmt){this.toast('Not enough purse!','error');return}
    const p=this.state.playerDataset.find(x=>x.id===playerId);
    if(p&&p.nation!=='IND'&&tm.overseas>=8){this.toast('Max 8 overseas retentions!','error');return}
    tm.squad.push(playerId);tm.purse-=retAmt;if(p&&p.nation!=='IND')tm.overseas++}
  this.save();this.renderRetention();
},
confirmRetentions(){
  this.state.retentionDone=true;
  // Assign RTM cards (6 - number of retained players)
  Object.values(this.state.teams).forEach(tm=>{ tm.rtm = Math.max(0, 6 - tm.squad.length); });
  // Build auction pool: all players NOT retained
  const retainedIds=new Set();
  Object.values(this.state.teams).forEach(t=>t.squad.forEach(id=>retainedIds.add(id)));
  this.state.auctionPool=this.state.playerDataset.filter(p=>!retainedIds.has(p.id)).map(p=>p.id);
  // Log retentions
  Object.entries(this.state.teams).forEach(([tid,tm])=>{
    tm.squad.forEach(sid=>{
      const p=this.state.playerDataset.find(x=>x.id===sid);
      if(p)this.state.auctionHistory.push({name:p.name,team:tid,amount:p.retAmt||0,status:'RETAINED',role:p.role,nation:p.nation,img:p.img});
    });
  });
  this.save();this.toast('Retentions locked! Auction starting...','success');
  setTimeout(()=>this.startAuction(),500);
},

// === AUCTION WITH SMART AI ===
startAuction(){if(this.state.auction.status==='COMPLETED'){this.go('auction');return}this.state.auction.inProgress=true;this.state.auction.idx=0;this.state.auction.status='BIDDING';this.go('auction');this.save();this.startTimer()},
startTimer(){
  if(this._ti)clearInterval(this._ti);
  this.state.auction.timer=this.state.auction.timerMax||15;this._aiBidCooldown=0;
  this._ti=setInterval(()=>{
    this.state.auction.timer--;this._aiBidCooldown--;
    const t=this.state.auction.timer;
    if(t<=0){this.soldItem();return}
    if(t<=3)SND.play('warn');else if(t<=5)SND.play('tick');
    // SMART AI: only bid if cooldown expired (2-3s gap)
    if(this._aiBidCooldown<=0&&t>3)this.smartAiBid();
    this.updateAuctionUI();
  },1000);
},
curPlayer(){
  const pool=this.state.auctionPool;
  if(!pool||!pool.length)return this.state.playerDataset[this.state.auction.idx];
  const pid=pool[this.state.auction.idx];
  return this.state.playerDataset.find(p=>p.id===pid);
},
totalAuctionPlayers(){return(this.state.auctionPool&&this.state.auctionPool.length)||this.state.playerDataset.length},

// INTELLIGENT AI BIDDING
smartAiBid(){
  const p=this.curPlayer();if(!p)return;
  const curBid=this.state.auction.currentBid||p.base;
  const inc=this.config.bidIncr(curBid);
  const nextBid=curBid+inc;
  // Evaluate player value: skill-based + role scarcity
  const playerValue=p.skill*25+(p.tier==='A+'?800:p.tier==='A'?400:100);
  // Filter eligible AI teams
  const aiTeams=this.config.teams.filter(tid=>{
    if(tid===this.state.teamId)return false;
    if(tid===this.state.auction.leadTeam)return false;
    const tm=this.state.teams[tid];if(!tm)return false;
    if(tm.squad.length>=25)return false;
    if(p.nation!=='IND'&&tm.overseas>=8)return false;
    if(nextBid>tm.purse)return false;
    if(nextBid>playerValue)return false; // smart: don't overpay
    return true;
  });
  if(!aiTeams.length)return;
  // Score each team's interest
  let bestTeam=null,bestScore=-1;
  aiTeams.forEach(tid=>{
    const tm=this.state.teams[tid];
    const squadPlayers=tm.squad.map(sid=>this.state.playerDataset.find(x=>x.id===sid)).filter(Boolean);
    const roleCount=squadPlayers.filter(x=>x.role===p.role).length;
    // Needs: fewer of this role = more interested
    const roleNeed=Math.max(0,1-(roleCount/4));
    // Budget comfort: more budget = more willing
    const budgetComfort=tm.purse/12000;
    // Previous team bonus: team that had this player wants them more
    const prevTeamBonus=p.prevTeam===tid?0.4:0;
    // Player quality
    const quality=p.skill/100;
    // Random factor for variety
    const rng=Math.random()*0.2;
    const score=quality*0.3+roleNeed*0.25+budgetComfort*0.15+prevTeamBonus+rng;
    if(score>bestScore&&score>0.35){bestScore=score;bestTeam=tid}
  });
  if(!bestTeam)return;
  // AI bids
  this.state.auction.currentBid=nextBid;
  this.state.auction.leadTeam=bestTeam;
  this.state.auction.timer=Math.min(this.state.auction.timerMax||15,this.state.auction.timer+3);
  this._aiBidCooldown=2+Math.floor(Math.random()*2); // 2-3 second cooldown
  this.addLog(TM[bestTeam].l+' '+bestTeam+' bids ₹'+(nextBid/100).toFixed(2)+' Cr','bid');
  SND.play('bid');
  const el=document.getElementById('spot-bid');if(el){el.classList.add('pop');setTimeout(()=>el.classList.remove('pop'),150)}
  this.updateAuctionUI();
},

bid(type,mult=1){
  if(this.state.auction.status!=='BIDDING')return;
  SND.play('bid');
  if(type==='pass'){this.soldItem();return}
  const p=this.curPlayer();if(!p)return;
  const inc=this.config.bidIncr(this.state.auction.currentBid||p.base);
  this.state.auction.currentBid=(this.state.auction.currentBid||p.base)+(inc*mult);
  this.state.auction.leadTeam=this.state.teamId||'CSK';
  this.state.auction.timer=Math.min(this.state.auction.timerMax||15,this.state.auction.timer+5);
  this._aiBidCooldown=2+Math.floor(Math.random()*2); // AI waits 2-3s after user bids
  this.addLog(TM[this.state.auction.leadTeam]?.l+' '+this.state.auction.leadTeam+' bids ₹'+(this.state.auction.currentBid/100).toFixed(2)+' Cr','bid');
  const el=document.getElementById('spot-bid');if(el){el.classList.add('pop');setTimeout(()=>el.classList.remove('pop'),150)}
  this.save();this.updateAuctionUI();
},


soldItem(){
  clearInterval(this._ti);const p=this.curPlayer();if(!p)return;
  if(this.state.auction.leadTeam&&this.state.auction.currentBid>=p.base){
    let finalTeam = this.state.auction.leadTeam;
    // RTM LOGIC
    if(p.prevTeam && p.prevTeam!==finalTeam) {
       const prevTm = this.state.teams[p.prevTeam];
       if(prevTm && prevTm.rtm>0 && prevTm.purse>=this.state.auction.currentBid && prevTm.squad.length<25 && (p.nation==='IND' || prevTm.overseas<8)) {
          if(p.prevTeam === this.state.teamId) {
             if(confirm('Use RTM Card to match ₹'+(this.state.auction.currentBid/100).toFixed(2)+' Cr for '+p.name+'? (RTMs left: '+prevTm.rtm+')')){finalTeam=p.prevTeam;prevTm.rtm--;this.addLog('🃏 YOU USED RTM!','info')}
          } else {
             const val = p.skill*25+(p.tier==='A+'?800:p.tier==='A'?400:100);
             if(this.state.auction.currentBid <= val*1.2 && Math.random()>0.2){finalTeam=p.prevTeam;prevTm.rtm--;this.addLog('🃏 '+p.prevTeam+' USED RTM!','info');this.toast(p.prevTeam+' used RTM!','info')}
          }
       }
    }
    const tm=this.state.teams[finalTeam];
    if(tm){tm.squad.push(p.id);tm.purse-=this.state.auction.currentBid;if(p.nation!=='IND')tm.overseas++}
    this.addLog('✅ SOLD: '+p.name+' → '+finalTeam+' for ₹'+(this.state.auction.currentBid/100).toFixed(2)+' Cr','sold');
    this.state.auctionHistory.push({name:p.name,team:finalTeam,amount:this.state.auction.currentBid,status:'SOLD',role:p.role,nation:p.nation,img:p.img});
    SND.play('sold');confetti();showSoldOverlay('SOLD!',p.name+' → '+TM[finalTeam]?.l+' '+finalTeam+' ₹'+(this.state.auction.currentBid/100).toFixed(2)+' Cr','#00e676');
  }else{
    this.addLog('❌ UNSOLD: '+p.name,'unsold');
    this.state.auctionHistory.push({name:p.name,team:null,amount:0,status:'UNSOLD',role:p.role,nation:p.nation,img:p.img});
    SND.play('unsold');showSoldOverlay('UNSOLD',p.name,'#ff6b6b');
  }
  setTimeout(()=>{
    this.state.auction.idx++;
    if(this.state.auction.idx>=this.totalAuctionPlayers()){
      if(!this.state.auction.accelerated){
         const unsold = this.state.auctionHistory.filter(x=>x.status==='UNSOLD');
         if(unsold.length){
           this.state.auction.accelerated=true; this.state.auction.idx=0;
           this.state.auctionPool=unsold.map(x=>this.state.playerDataset.find(o=>o.name===x.name)).filter(Boolean).map(x=>x.id);
           this.state.auctionPool.forEach(pid=>{const o=this.state.playerDataset.find(x=>x.id===pid);if(o)o.base=Math.max(20,Math.floor(o.base/2))});
           this.state.auctionHistory=this.state.auctionHistory.filter(x=>x.status!=='UNSOLD'); // remove old unsold records
           this.toast('⚡ ACCELERATED ROUND: Unsold players return at 50% discount!','info');
           this.startTimer(); this.updateAuctionUI(); return;
         }
      }
      this.state.auction.inProgress=false;this.state.auction.status='COMPLETED';this.toast('🎉 Auction Complete!','success');this.go('dashboard')
    }
    else{this.state.auction.currentBid=0;this.state.auction.leadTeam=null;this.startTimer()}
    this.save();this.ui();
  },1200);
},
skipAuction(){
  if(!confirm('Auto-fill all teams?'))return;
  clearInterval(this._ti); this._ti = null; // FORCE CLEAR
  const pool=this.state.auctionPool&&this.state.auctionPool.length?this.state.auctionPool.slice(this.state.auction.idx):this.state.playerDataset.slice(this.state.auction.idx).map(p=>p.id);
  pool.forEach(pid=>{
    const p=this.state.playerDataset.find(x=>x.id===pid);if(!p)return;
    const candidates=Object.values(this.state.teams).filter(t=>t.squad.length<25&&t.purse>=p.base&&(p.nation==='IND'||t.overseas<8));
    if(candidates.length){const t=candidates[Math.floor(Math.random()*candidates.length)];t.squad.push(p.id);t.purse-=p.base;if(p.nation!=='IND')t.overseas++;
      this.state.auctionHistory.push({name:p.name,team:t.id,amount:p.base,status:'SOLD',role:p.role,nation:p.nation,img:p.img})}
    else this.state.auctionHistory.push({name:p.name,team:null,amount:0,status:'UNSOLD',role:p.role,nation:p.nation,img:p.img});
  });
  this.state.auction.inProgress=false;this.state.auction.status='COMPLETED';
  this.toast('⏭ Auto-completed','success');this.go('dashboard');this.save();
},
addLog(txt,type='info'){const el=document.getElementById('auction-log');if(!el)return;const d=document.createElement('div');d.className='log-entry';d.innerHTML='<span style="color:var(--text3);font-size:.7rem">'+new Date().toLocaleTimeString()+'</span> <span class="log-'+type+'">'+txt+'</span>';el.prepend(d)},

// ====== FRANCHISE MODE ======
nextSeason(doReset){
  const yr=(this.state.season||2026);
  // Save Hall of fame stats for this season
  const s=this.state.playoffs&&this.state.playoffs.final?this.state.playoffs.final.result:'None';
  const bats=[...this.state.playerDataset].sort((a,b)=>b.tRuns-a.tRuns)[0];
  const bwls=[...this.state.playerDataset].sort((a,b)=>b.tWkts-a.tWkts)[0];
  if(!this.state.hallOfFame)this.state.hallOfFame=[];
  this.state.hallOfFame.push({yr,winner:s,orangeCap:bats?.name||'N/A',purpleCap:bwls?.name||'N/A'});

  this.state.season=yr+1;
  this.state.schedule=[];this.state.played=0;
  this.state.playoffs={q1:null,e:null,q2:null,final:null};
  this.state.stats={runs:0,wkts:0,sixes:0};
  this.state.injuries={};this.state.captains={};this.state.currentSchIdx=undefined;
  this.state.auctionHistory=[];
  this.state.auction={inProgress:false,idx:0,currentBid:0,leadTeam:null,timer:15,status:'WAITING',timerMax:15};
  this.runPlayerProgression();
  if(doReset){
    this.config.teams.forEach(t=>{if(this.state.teams[t])this.state.teams[t].purse=12000});
    this.state.retentionDone=true;
    this.save();this.toast('🏏 IPL '+yr+' Season started! Squads retained.','success');this.go('dashboard');
  } else {
    this.config.teams.forEach(t=>{if(this.state.teams[t]){this.state.teams[t].squad=[];this.state.teams[t].overseas=0;this.state.teams[t].purse=12000;}});
    this.state.retentionDone=false;
    this.save();this.go('retention');this.toast('🏟️ IPL '+yr+' Mega Auction begins!','success');
  }
},

runPlayerProgression(){
  this.state.playerDataset.forEach(p=>{
    p._age=(p._age||(p.tier==='A+'?28:p.tier==='A'?25:22))+1;
    if(p.tier==='B'&&p._age<=24&&p.form>65&&Math.random()<0.25){
      p.tier='A';p.batRating=Math.min(90,p.batRating+5);p.bowlRating=Math.min(90,p.bowlRating+5);
      p.skill=Math.max(p.batRating,p.bowlRating);p.base=Math.min(Math.round(p.base*1.5),2000);
      this.toast('🌟 '+p.name+' upgraded to Tier A!','success');
    }
    if(p._age>=33){p.batRating=Math.max(30,p.batRating-Math.floor(Math.random()*5));p.bowlRating=Math.max(20,p.bowlRating-Math.floor(Math.random()*4));p.skill=Math.max(p.batRating,p.bowlRating);}
    p.tRuns=0;p.tWkts=0;p.t6s=0;p.tBalls=0;p.fp=0;p.fatigue=0;p._formHistory=[];p.form=Math.max(40,Math.min(80,p.form));
  });
},

getStrategyAdvice(){
  if(!this.state.teamId)return '';
  const tm=this.state.teams[this.state.teamId];if(!tm)return '';
  const sq=(tm.squad||[]).map(sid=>this.state.playerDataset.find(x=>x.id===sid)).filter(Boolean);
  const rc={BAT:0,BWL:0,AR:0,WK:0};sq.forEach(p=>rc[p.role]=(rc[p.role]||0)+1);
  const p=this.curPlayer();if(!p)return 'No player up';
  const parts=[];
  if(p.role==='WK'&&rc.WK<1)parts.push('🧤 NEED WK — BID HARD');
  if(p.role==='BWL'&&rc.BWL<3)parts.push('🎯 NEED BOWLER — RECOMMENDED');
  if(p.role==='BAT'&&rc.BAT<3)parts.push('🏏 NEED BAT — RECOMMENDED');
  if(sq.length>=22)parts.push('⚠️ Squad near full');
  if(tm.purse<500&&sq.length<14)parts.push('💸 Low purse — be careful');
  const bid=this.state.auction.currentBid||p.base;
  if(bid>(p.tier==='A+'?2500:p.tier==='A'?1200:500))parts.push('💰 Overbid risk');
  else if(p.tier==='A+'&&!parts.length)parts.push('⭐ Top talent — worth it');
  return parts.join(' · ')||'📊 Balanced — your call';
},

getRTMValue(playerName){
  const p=this.state.playerDataset.find(x=>x.name===playerName);if(!p)return null;
  const h=this.state.auctionHistory.find(h=>h.name===playerName&&h.status==='SOLD');if(!h)return null;
  const mv=p.tier==='A+'?2000:p.tier==='A'?900:350;
  return{paid:h.amount,market:mv,diff:h.amount-mv,overpaid:(h.amount>mv)};
},
`;
};
