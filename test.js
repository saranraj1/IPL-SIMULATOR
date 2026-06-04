
const TM={CSK:{name:'Chennai Super Kings',c:'#f5c518',l:'🦁'},MI:{name:'Mumbai Indians',c:'#004ba0',l:'🔵'},RCB:{name:'Royal Challengers Bengaluru',c:'#e8392a',l:'🔴'},KKR:{name:'Kolkata Knight Riders',c:'#4b0082',l:'🟣'},SRH:{name:'Sunrisers Hyderabad',c:'#ff6b00',l:'🟠'},DC:{name:'Delhi Capitals',c:'#1a56db',l:'🔷'},GT:{name:'Gujarat Titans',c:'#1d4ed8',l:'💎'},LSG:{name:'Lucknow Super Giants',c:'#00c4ff',l:'🩵'},RR:{name:'Rajasthan Royals',c:'#ff4fa3',l:'🩷'},PBKS:{name:'Punjab Kings',c:'#dc2626',l:'❤️'}};
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
  stats:{runs:0,wkts:0,sixes:0},playoffs:{q1:null,e:null,q2:null,final:null},currentMatch:null,tradeCache:[],injuries:{},captains:{},currentSchIdx:undefined},
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
openModal(t){document.getElementById('modal-'+t).style.display='flex';if(t==='create')this.renderTeamSel()},
renderTeamSel(){document.getElementById('team-sel').innerHTML=this.config.teams.map(t=>'<div class="team-badge'+(this.state.teamId===t?' sel':'')+'" style="background:'+TM[t].c+'" onclick="app.pickTeam(\''+t+'\')">'+TM[t].l+' '+t+'</div>').join('')},
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
  this.state.injuries={};this.state.captains={};this.state.currentSchIdx=undefined;
  this.state.auction={inProgress:false,idx:0,currentBid:0,leadTeam:null,timer:this.state.auction.timerMax,status:'WAITING',timerMax:this.state.auction.timerMax};
  document.getElementById('modal-create').style.display='none';
  this.go('retention');this.save();this.toast('Room <b>'+code+'</b> created! Retain players first.','success');
},
joinRoom(){this.state.roomCode=document.getElementById('jr-code').value.toUpperCase();this.state.userName=document.getElementById('jr-name').value||'Guest';this.state.isHost=false;document.getElementById('modal-join').style.display='none';this.load();this.go('lobby')},
soloPlay(){
  this.state.roomCode='SOLO';this.state.isHost=true;this.state.userName='You';
  this.state.teamId=this.state.teamId||'CSK';
  this.state.players['You']={team:this.state.teamId,isHost:true};
  this.config.teams.forEach(t=>{this.state.teams[t]={id:t,purse:12000,squad:[],overseas:0}});
  this.state.retentionDone=false;this.state.auctionHistory=[];this.state.schedule=[];this.state.played=0;
  this.state.playoffs={q1:null,e:null,q2:null,final:null};this.state.stats={runs:0,wkts:0,sixes:0};
  this.state.injuries={};this.state.captains={};this.state.currentSchIdx=undefined;
  this.state.auction={inProgress:false,idx:0,currentBid:0,leadTeam:null,timer:15,status:'WAITING',timerMax:15};
  this.state.playerDataset=[];// force regen
  this.genPlayers();
  this.save();this.go('retention');this.toast('Pick your retentions!','success');
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
      html+='<div style="background:'+(isRet?'rgba(0,230,118,.1)':'var(--bg3)')+';border:1px solid '+(isRet?'var(--green)':'var(--border)')+';border-radius:8px;padding:8px 12px;display:flex;align-items:center;gap:6px;cursor:pointer" onclick="app.toggleRetain(\''+t+'\',\''+p.id+'\','+p.retAmt+')"><img src="'+p.img+'" style="width:28px;height:28px;border-radius:50%"><div><div style="font-size:.8rem;font-weight:600">'+p.name+'</div><div style="font-size:.68rem;color:var(--text2)">'+p.role+' · ₹'+(p.retAmt/100).toFixed(1)+' Cr</div></div>'+(isRet?'<span style="color:var(--green);font-size:.75rem">✅</span>':'')+'</div>';
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
  if(!confirm('Auto-fill all teams?'))return;clearInterval(this._ti);
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
  // Innings 1
  const i1=this.runInn(t1Data.p11,t2Data.p11,sk(t1Data.p11),sk(t2Data.p11),Infinity,t1Data.bench,t2Data.bench,false);
  // Innings 2 - chasing
  const i2=this.runInn(t2Data.p11,t1Data.p11,sk(t2Data.p11),sk(t1Data.p11),i1.t+1,t2Data.bench,t1Data.bench,true);
  
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
    if(!p._formHistory)p._formHistory=[];
    p._formHistory.push(p.form);
    if(p._formHistory.length>10)p._formHistory.shift();
  });
  
  this.state.stats.runs+=i1.t+i2.t;this.state.stats.wkts+=i1.w+i2.w;this.state.stats.sixes+=i1.s+i2.s;
  
  // Try generating a trade if user is involved
  if((m.t1===this.state.teamId||m.t2===this.state.teamId)&&Math.random()<0.1)this.generateTradeOffer(this.state.teamId);
},
runInn(batTeam,bowlTeam,bS,oS,tgt,batBench,bowlBench,isChasing){
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
    
    const batFormMod=(batsman?.form-50)/5;
    const bowlFormMod=(bowler?.form-50)/5;
    const bowlFatigueMod=-(bowler?.fatigue||0)/10;
    
    const bR=(Math.max(0,Math.min(100,(batsman?.batRating||30)+batFormMod+batCapBoost)))/100;
    const wR=(Math.max(0,Math.min(100,(bowler?.bowlRating||30)+bowlFormMod+bowlFatigueMod+bowlCapBoost)))/100;
    
    const d=(bR-wR);
    const r=Math.random();
    
    const wP=Math.max(.015,0.06-d*0.06+wR*0.02);
    const sP=Math.min(.20,0.05+bR*0.18);
    const fP=Math.min(.30,0.10+bR*0.15);
    const runP=0.25+d*0.05;
    
    if(r<wP){w++;if(bowler){bowler.tWkts++;bowler.fp+=25;}bi++}
    else if(r<wP+sP){t+=6;s6++;if(batsman){batsman.tRuns+=6;batsman.t6s++;batsman.tBalls++;batsman.fp+=8}}
    else if(r<wP+sP+fP){t+=4;if(batsman){batsman.tRuns+=4;batsman.tBalls++;batsman.fp+=5}}
    else if(r<wP+sP+fP+runP){const runs=Math.random()>.55?2:1;t+=runs;if(batsman){batsman.tRuns+=runs;batsman.tBalls++;batsman.fp+=runs}if(runs%2===1)bi++}
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
  document.getElementById('pm-form').innerHTML=(p.form>70?'<span class="form-hot">🔥 HOT FORM ('+p.form+')</span>':p.form<30?'<span class="form-cold">❄️ COLD FORM ('+p.form+')</span>':'<span style="font-size:.75rem;color:var(--text3)">Form: '+p.form+'</span>')+(p.fatigue>50?' <span class="form-cold">🥵 FATIGUED</span>':'');
  document.getElementById('pm-runs').innerText=p.tRuns;
  document.getElementById('pm-wkts').innerText=p.tWkts;
  document.getElementById('pm-6s').innerText=p.t6s;
  document.getElementById('pm-fp').innerText=p.fp;
  const tmId=Object.keys(this.state.teams).find(t=>this.state.teams[t].squad.includes(pid));
  const tc=document.getElementById('pm-trade-container');
  if(tc){if(tmId&&tmId!==this.state.teamId&&this.state.teamId){tc.style.display='block';tc.innerHTML='<button class="btn btn-outline" style="border-color:var(--blue);color:var(--blue)" onclick="app.openUserTradeModal(\''+pid+'\',\''+tmId+'\')">🔀 Propose Trade</button>'}else tc.style.display='none'}
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
  document.getElementById('ut-squad-list').innerHTML=mySq.map(p=>'<div class="sq-card" style="cursor:pointer" onclick="app.proposeUserTrade(\''+targetPid+'\',\''+targetTeam+'\',\''+p.id+'\')"><div class="sq-av"><img src="'+p.img+'"></div><div style="flex:1"><div style="font-weight:600;font-size:.82rem">'+p.name+'</div><div style="font-size:.7rem;color:var(--text2)">'+p.role+' <span class="badge '+(p.nation==='IND'?'badge-india':'badge-overseas')+'">'+p.nation+'</span></div></div><div style="color:var(--blue)">Select 🔀</div></div>').join('');
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
  document.getElementById('dr-squad-list').innerHTML=sq.map(p=>{const sel=this._drSel.includes(p);return '<div class="sq-card" style="cursor:pointer;border:'+(sel?'2px solid var(--gold)':'1px solid var(--border)')+';background:'+(sel?'rgba(245,166,35,0.1)':'var(--glass2)')+'" onclick="app.toggleDrPlayer(\''+p.id+'\')"><div class="sq-av"><img src="'+p.img+'"></div><div style="flex:1"><div style="font-weight:600;font-size:.82rem">'+p.name+'</div><div style="font-size:.7rem;color:var(--text2)">'+p.role+' <span class="badge '+(p.nation==='IND'?'badge-india':'badge-overseas')+'">'+p.nation+'</span></div></div>'+(sel?'<div style="color:var(--gold)">✅</div>':'')+'</div>'}).join('');
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
  const d=(bS-oS)/100,r=Math.random();const wP=Math.max(.015,.06-d*.06),sP=Math.min(.2,.05+(bS/100)*.18),fP=Math.min(.3,.1+(bS/100)*.15);
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
renderRooms(rooms){const el=document.getElementById('room-list');if(!el)return;if(!rooms.length){el.innerHTML='<p style="color:var(--text3);font-size:.85rem">No active rooms. Create one!</p>';return}el.innerHTML=rooms.map(r=>'<div class="room-card" onclick="document.getElementById(\'jr-code\').value=\''+r.code+'\';app.openModal(\'join\')"><div><span style="font-weight:700;color:var(--gold)">'+r.code+'</span> <span style="color:var(--text2);font-size:.82rem">by '+(r.host_name||'?')+'</span></div><div><span class="badge badge-india">'+(r.mode||'mock')+'</span></div></div>').join('')},

// SELECTIVE AUCTION UI
updateAuctionUI(){
  if(this.state.auction.status==='COMPLETED'){const sp=document.querySelector('.spotlight');if(sp)sp.innerHTML='<div style="text-align:center;padding:40px"><div style="font-size:4rem;margin-bottom:16px">🎉</div><h2 class="raj" style="color:var(--gold);margin-bottom:12px">AUCTION COMPLETE</h2><p style="color:var(--text2);margin-bottom:24px">All players have been auctioned successfully!</p><div style="display:flex;gap:12px;justify-content:center"><button class="btn" onclick="app.go(\'teams\')">View Squads</button><button class="btn btn-outline" onclick="app.go(\'dashboard\')">Dashboard</button></div></div>';return}
  if(!this.state.auction.inProgress||!this.curPlayer())return;const p=this.curPlayer();
  const av=document.getElementById('spot-avatar');if(av)av.querySelector('img').src=p.img;
  const sn=document.getElementById('spot-name');if(sn)sn.innerText=p.name;
  const sr=document.getElementById('spot-role');if(sr)sr.innerText=p.role+' | TIER '+p.tier;
  const ss=document.getElementById('spot-stats');if(ss)ss.innerText='BAT: '+(p.batRating||0)+'/100 | BOWL: '+(p.bowlRating||0)+'/100';
  const sp=document.getElementById('spot-prev');if(sp)sp.innerText=p.prevTeam?'Previously: '+TM[p.prevTeam]?.l+' '+p.prevTeam:'New to auction';
  const snat=document.getElementById('spot-nation');if(snat){snat.className='badge '+(p.nation==='IND'?'badge-india':'badge-overseas');snat.innerText=p.nation==='IND'?'🇮🇳 IND':'🌍 OS'}
  const sb=document.getElementById('spot-bid');if(sb)sb.innerText='₹'+((this.state.auction.currentBid||p.base)/100).toFixed(2)+' Cr';
  const sbs=document.getElementById('spot-base');if(sbs)sbs.innerText='BASE: ₹'+(p.base/100).toFixed(2)+' Cr';
  const sl=document.getElementById('spot-leader');if(sl)sl.innerHTML=this.state.auction.leadTeam?'<span style="color:'+TM[this.state.auction.leadTeam]?.c+'">'+TM[this.state.auction.leadTeam]?.l+' '+this.state.auction.leadTeam+'</span>':'<span style="color:var(--text3)">OPENING BID</span>';
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
  document.getElementById('nav-room').innerText=this.state.roomCode||'NO ROOM';
  if(this.state.roomCode){
    const lc=document.getElementById('lobby-code');if(lc)lc.innerText=this.state.roomCode;
    const lp=document.getElementById('lobby-players');if(lp)lp.innerHTML=Object.entries(this.state.players).map(([n,d])=>'<div style="padding:8px 0;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:8px"><img src="'+pImg(n)+'" style="width:28px;height:28px;border-radius:50%"> <span style="font-weight:600">'+n+'</span> <span class="badge badge-india">'+(d.team||'?')+'</span></div>').join('');
    const ls=document.getElementById('lobby-settings');if(ls)ls.innerHTML='Mode: '+(this.state.mode==='mega'?'Mega':'Mock')+'<br>Timer: '+(this.state.auction.timerMax||15)+'s<br>AI: Smart Bidding';
    if(this.state.isHost){const sb=document.getElementById('start-btn');if(sb)sb.style.display='inline-block';const wm=document.getElementById('wait-msg');if(wm)wm.style.display='none'}
  }
  this.updateAuctionUI();this.renderRetention();
  const dr=document.getElementById('d-runs');if(dr)dr.innerText=this.state.stats.runs.toLocaleString();
  const dw=document.getElementById('d-wkts');if(dw)dw.innerText=this.state.stats.wkts;
  const d6=document.getElementById('d-6s');if(d6)d6.innerText=this.state.stats.sixes;
  const dm=document.getElementById('d-matches');if(dm)dm.innerText=this.state.played;
  this.renderStandings('d-standings');this.renderStandings('t-table');this.renderCaps();this.renderSchedule();this.renderTeamPage();this.renderHistory();this.renderPlayoffs();this.renderMCSetup();this.renderSpendChart();this.renderAuctionSummary();this.renderTradeWindow();
},

renderStandings(id){const el=document.getElementById(id);if(!el)return;const sorted=this.getStandings();el.innerHTML='<table class="standings-tbl"><thead><tr><th>#</th><th>TEAM</th><th>P</th><th>W</th><th>L</th><th>PTS</th><th>NRR</th></tr></thead><tbody>'+sorted.map((s,i)=>'<tr class="'+(i<4?'q':'')+'"><td>'+(i+1)+'</td><td style="font-weight:700"><span style="color:'+TM[s.team]?.c+'">'+TM[s.team]?.l+'</span> '+s.team+'</td><td>'+s.p+'</td><td style="color:var(--green)">'+s.w+'</td><td style="color:#ff6b6b">'+s.l+'</td><td style="font-weight:700;color:var(--gold)">'+s.pts+'</td><td>'+s.nrr.toFixed(3)+'</td></tr>').join('')+'</tbody></table>'},
renderCaps(){
  // ORANGE CAP: only BAT, WK, AR (batting role) - sorted by runs
  const batsmen=[...this.state.playerDataset].filter(p=>['BAT','WK','AR'].includes(p.role)&&p.tRuns>0).sort((a,b)=>b.tRuns-a.tRuns).slice(0,5);
  // PURPLE CAP: only BWL, AR (bowling role) - sorted by wickets
  const bowlers=[...this.state.playerDataset].filter(p=>['BWL','AR'].includes(p.role)&&p.tWkts>0).sort((a,b)=>b.tWkts-a.tWkts).slice(0,5);
  // MOST SIXES: any role
  const by6=[...this.state.playerDataset].sort((a,b)=>(b.t6s||0)-(a.t6s||0)).filter(p=>(p.t6s||0)>0).slice(0,5);
  const rl=(els,stat,color)=>els.length?els.map((p,i)=>'<div class="cap-row" style="cursor:pointer" onclick="app.openPlayerModal(\''+p.id+'\')"><div style="width:20px;font-weight:700;color:'+(i===0?'var(--gold)':'var(--text3)')+';">'+(i+1)+'</div><img src="'+p.img+'" style="width:32px;height:32px;border-radius:50%"><div style="flex:1;font-size:.82rem;font-weight:600">'+p.name+'<span style="font-size:.65rem;color:var(--text3);margin-left:4px">'+p.role+'</span></div><div style="font-size:1rem;font-weight:700;color:'+color+'">'+p[stat]+'</div></div>').join(''):'<p style="color:var(--text3);font-size:.82rem">No data</p>';
  ['d-orange','t-orange'].forEach(id=>{const e=document.getElementById(id);if(e)e.innerHTML=rl(batsmen,'tRuns','orange')});
  ['d-purple','t-purple'].forEach(id=>{const e=document.getElementById(id);if(e)e.innerHTML=rl(bowlers,'tWkts','#9b59b6')});
  const s6=document.getElementById('t-sixes');if(s6)s6.innerHTML=rl(by6,'t6s','var(--gold)');
},
renderSchedule(){const el=document.getElementById('t-schedule');if(!el)return;if(!this.state.schedule.length){el.innerHTML='<p style="color:var(--text3)">No matches</p>';return}el.innerHTML=this.state.schedule.slice(0,60).map((m,i)=>'<div class="match-card"><div style="display:flex;align-items:center;gap:6px"><span style="font-size:.68rem;color:var(--text3);width:24px">#'+(i+1)+'</span><span style="font-weight:700;color:'+TM[m.t1]?.c+'">'+m.t1+'</span><span style="color:var(--text3);font-size:.7rem">v</span><span style="font-weight:700;color:'+TM[m.t2]?.c+'">'+m.t2+'</span></div><div style="text-align:right">'+(m.result&&m.result!=='ABD'?'<div style="font-size:.8rem;font-weight:700">'+m.s1+'/'+m.w1+' v '+m.s2+'/'+m.w2+'</div><div style="font-size:.7rem;color:var(--green)">'+TM[m.result]?.l+' won</div>':'<button class="btn btn-sm" style="font-size:.65rem;padding:4px 8px" onclick="app.simSingleMatch('+i+')">⚡ Sim</button> <button class="btn btn-outline btn-sm" style="font-size:.65rem;padding:4px 8px" onclick="app.playSelectedMatch('+i+')">📺 Play</button>')+'</div></div>').join('')},
renderPlayoffs(){const el=document.getElementById('playoffs-bracket');if(!el)return;const po=this.state.playoffs;if(!po||!po.q1){const s=this.getStandings();el.innerHTML=s[0].p>0?'<p style="color:var(--text2)">Top 4: '+s.slice(0,4).map(x=>'<b style="color:'+TM[x.team]?.c+'">'+x.team+'</b>').join(', ')+'</p>':'<p style="color:var(--text3)">Complete league first</p>';return}const mc=(l,m)=>'<div class="bracket-match"><h4 class="raj" style="font-size:.8rem;color:var(--text3)">'+l+'</h4><div style="font-weight:700"><span style="color:'+TM[m.t1]?.c+'">'+TM[m.t1]?.l+' '+m.t1+'</span> '+m.s1+'/'+m.w1+'</div><div style="font-weight:700"><span style="color:'+TM[m.t2]?.c+'">'+TM[m.t2]?.l+' '+m.t2+'</span> '+m.s2+'/'+m.w2+'</div><div style="margin-top:6px;color:var(--green);font-weight:700">🏆 '+TM[m.result]?.l+'</div></div>';el.innerHTML=mc('Q1',po.q1)+'<span class="bracket-arrow">→</span>'+mc('ELIM',po.elim)+'<span class="bracket-arrow">→</span>'+mc('Q2',po.q2)+'<span class="bracket-arrow">→</span>'+mc('FINAL',po.final)},
renderTeamPage(){const tabs=document.getElementById('team-tabs'),detail=document.getElementById('team-detail');if(!tabs||!detail)return;tabs.innerHTML=this.config.teams.map(t=>'<button class="btn btn-sm '+(this._selTeam===t?'':'btn-outline')+'" style="'+(this._selTeam===t?'background:'+TM[t].c:'border-color:'+TM[t].c+';color:'+TM[t].c)+'" onclick="app._selTeam=\''+t+'\';app.ui()">'+TM[t].l+' '+t+'</button>').join('');const tm=this.state.teams[this._selTeam];if(!tm){detail.innerHTML='<p style="color:var(--text3)">No data</p>';return}let squad=(tm.squad||[]).map(sid=>this.state.playerDataset.find(p=>p.id===sid)).filter(Boolean);const search=(document.getElementById('team-search')?.value||'').toLowerCase();if(search)squad=squad.filter(p=>p.name.toLowerCase().includes(search));if(this._roleFilter&&this._roleFilter!=='all')squad=squad.filter(p=>p.role===this._roleFilter);const rf=document.getElementById('role-filters');if(rf)rf.innerHTML=['all','BAT','BWL','AR','WK'].map(r=>'<button class="filter-btn'+(this._roleFilter===r||(!this._roleFilter&&r==='all')?' active':'')+'" onclick="app._roleFilter=\''+r+'\';app.ui()">'+r+'</button>').join('');const allSq=(tm.squad||[]).map(sid=>this.state.playerDataset.find(p=>p.id===sid)).filter(Boolean);  const rc={BAT:0,BWL:0,AR:0,WK:0};allSq.forEach(p=>rc[p.role]=(rc[p.role]||0)+1);const isCapT=allSq.some(p=>['MS Dhoni','Rohit Sharma','Pat Cummins','Hardik Pandya'].includes(p.name)||(this.state.captains&&this.state.captains[this._selTeam]===p.id));const total=allSq.length||1;const cb='<div class="comp-bar"><div style="width:'+(rc.BAT/total*100)+'%;background:#f5a623"></div><div style="width:'+(rc.BWL/total*100)+'%;background:#e8392a"></div><div style="width:'+(rc.AR/total*100)+'%;background:#00c4ff"></div><div style="width:'+(rc.WK/total*100)+'%;background:#00e676"></div></div><div style="display:flex;gap:12px;font-size:.7rem;color:var(--text2);margin-top:4px"><span>🟡BAT:'+rc.BAT+'</span><span>🔴BWL:'+rc.BWL+'</span><span>🔵AR:'+rc.AR+'</span><span>🟢WK:'+rc.WK+'</span></div>';detail.innerHTML='<div style="display:flex;align-items:center;gap:16px;margin-bottom:16px"><div style="font-size:2.5rem">'+TM[this._selTeam].l+'</div><div><h2 class="raj" style="color:'+TM[this._selTeam].c+'">'+TM[this._selTeam].name+'</h2><div style="font-size:.85rem;color:var(--text2)">₹'+(tm.purse/100).toFixed(1)+' Cr | '+allSq.length+' players | '+tm.overseas+' OS '+(isCapT?'<span class="cap-boost">👑 Captaincy Boost Active</span>':'')+'</div>'+cb+'</div></div>'+(squad.length?'<div class="squad-grid">'+squad.map(p=>{
  const inj=this.state.injuries&&this.state.injuries[p.id];
  const cap=this.state.captains&&this.state.captains[this._selTeam]===p.id?' <span style="color:var(--gold);font-size:.65rem">👑 CAP</span>':'';
  const spark=this.getFormSparkline(p);
  return '<div class="sq-card" style="cursor:pointer'+(inj?';opacity:0.6;border-color:var(--red)':'')+'" onclick="app.openPlayerModal(\''+p.id+'\')"><div class="sq-av"><img src="'+p.img+'"></div><div style="flex:1"><div style="font-weight:600;font-size:.82rem">'+p.name+(p.isRetained&&tm.squad.includes(p.id)?' <span style="color:var(--green);font-size:.65rem">RET</span>':'')+cap+'</div><div style="font-size:.7rem;color:var(--text2)">'+p.role+' <span class="badge '+(p.nation==='IND'?'badge-india':'badge-overseas')+'">'+p.nation+'</span>'+(p.form>70?' <span class="form-hot">🔥</span>':p.form<30?' <span class="form-cold">❄️</span>':'')+(p._impact?' <span class="impact-badge" style="font-size:.55rem">IMP</span>':'')+spark+'</div>'+(inj?'<div style="font-size:.65rem;color:var(--red);font-weight:700">🤕 '+inj.type+' ('+inj.matches+' match)</div>':'')+(p.tRuns||p.tWkts?'<div style="font-size:.68rem;color:var(--gold)">'+p.tRuns+'r · '+p.tWkts+'w</div>':'')+'</div><div onclick="event.stopPropagation();app.setCaptain(\''+this._selTeam+'\',\''+p.id+'\')" style="font-size:1.2rem;opacity:0.3;transition:0.2s" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.3">👑</div></div>'}).join('')+'</div>':'<p style="color:var(--text3)">No players</p>')},
renderHistory(){const el=document.getElementById('history-list');if(!el)return;let h=this.state.auctionHistory;const s=(document.getElementById('hist-search')?.value||'').toLowerCase();if(s)h=h.filter(x=>x.name.toLowerCase().includes(s)||(x.team||'').toLowerCase().includes(s));if(this.histFilter&&this.histFilter!=='all')h=h.filter(x=>x.status===this.histFilter);if(!h.length){el.innerHTML='<p style="color:var(--text3)">No records</p>';return}el.innerHTML='<table style="width:100%;border-collapse:collapse"><thead><tr style="border-bottom:1px solid var(--border)"><th style="text-align:left;padding:6px;font-size:.7rem;color:var(--text3)">#</th><th style="text-align:left;padding:6px;font-size:.7rem;color:var(--text3)">PLAYER</th><th style="text-align:left;padding:6px;font-size:.7rem;color:var(--text3)">ROLE</th><th style="text-align:left;padding:6px;font-size:.7rem;color:var(--text3)">TEAM</th><th style="text-align:left;padding:6px;font-size:.7rem;color:var(--text3)">₹</th><th style="text-align:left;padding:6px;font-size:.7rem;color:var(--text3)">STATUS</th></tr></thead><tbody>'+h.map((x,i)=>'<tr style="border-bottom:1px solid rgba(255,255,255,.03)"><td style="padding:6px;font-size:.78rem">'+(i+1)+'</td><td style="padding:6px"><div style="display:flex;align-items:center;gap:6px"><img src="'+x.img+'" style="width:24px;height:24px;border-radius:50%"><span style="font-size:.8rem;font-weight:600">'+x.name+'</span></div></td><td style="padding:6px;font-size:.78rem">'+x.role+'</td><td style="padding:6px;font-weight:700;color:'+(x.team?TM[x.team]?.c:'var(--text3)')+'">'+(x.team?TM[x.team]?.l+' '+x.team:'-')+'</td><td style="padding:6px;font-size:.8rem;color:var(--gold)">₹'+(x.amount/100).toFixed(2)+'</td><td style="padding:6px"><span class="badge '+(x.status==='SOLD'?'badge-india':x.status==='RETAINED'?'badge-india':'badge-overseas')+'" style="'+(x.status==='RETAINED'?'background:rgba(245,166,35,.2);color:var(--gold)':'')+'">'+x.status+'</span></td></tr>').join('')+'</tbody></table>'},
renderAuctionSummary(){const el=document.getElementById('auction-summary');if(!el)return;const h=this.state.auctionHistory;if(!h.length){el.innerHTML='';return}const sold=h.filter(x=>x.status==='SOLD');const unsold=h.filter(x=>x.status==='UNSOLD');const retained=h.filter(x=>x.status==='RETAINED');const most=sold.length?[...sold].sort((a,b)=>b.amount-a.amount)[0]:null;const cheap=sold.length?[...sold].sort((a,b)=>a.amount-b.amount)[0]:null;el.innerHTML='<div class="grid-4" style="margin-top:12px"><div class="stat-card"><div class="stat-val" style="color:var(--gold)">'+retained.length+'</div><div class="stat-lbl">RETAINED</div></div><div class="stat-card"><div class="stat-val" style="color:var(--green)">'+sold.length+'</div><div class="stat-lbl">SOLD</div></div><div class="stat-card"><div class="stat-val" style="color:#ff6b6b">'+unsold.length+'</div><div class="stat-lbl">UNSOLD</div></div><div class="stat-card"><div class="stat-val" style="color:var(--gold)">'+(most?'₹'+(most.amount/100).toFixed(1):'--')+'</div><div class="stat-lbl">'+(most?most.name:'TOP BUY')+'</div></div></div>'},
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
  const html='<div style="text-align:center;margin-bottom:20px"><h3 style="font-family:Outfit;color:var(--gold)">⚔️ PLAYER COMPARISON</h3></div><div style="display:flex;justify-content:space-around;margin-bottom:16px"><div style="text-align:center"><img src="'+p1.img+'" style="width:60px;height:60px;border-radius:50%;border:2px solid var(--gold)"><div style="font-weight:700;margin-top:6px">'+p1.name+'</div><div style="font-size:.75rem;color:var(--text2)">'+p1.role+'</div></div><div style="font-size:2rem;color:var(--text3);align-self:center">VS</div><div style="text-align:center"><img src="'+p2.img+'" style="width:60px;height:60px;border-radius:50%;border:2px solid var(--blue)"><div style="font-weight:700;margin-top:6px">'+p2.name+'</div><div style="font-size:.75rem;color:var(--text2)">'+p2.role+'</div></div></div><table style="width:100%;border-collapse:collapse">'+mk('BATTING',p1.batRating,p2.batRating)+mk('BOWLING',p1.bowlRating,p2.bowlRating)+mk('RUNS',p1.tRuns,p2.tRuns)+mk('WICKETS',p1.tWkts,p2.tWkts)+mk('SIXES',p1.t6s,p2.t6s)+mk('FORM',p1.form,p2.form)+mk('SKILL',p1.skill,p2.skill)+'</table><div style="text-align:center;margin-top:16px"><button class="btn btn-outline btn-sm" onclick="document.getElementById(\'modal-player\').style.display=\'none\'">Close</button></div>';
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
  if(el){const pc=document.querySelector('.player-modal-header');if(pc)pc.style.display='none';const pg=document.querySelector('.player-stat-grid');if(pg)pg.style.display='none';const rc=document.querySelector('.radar-container');if(rc)rc.innerHTML=html;const tc=document.getElementById('pm-trade-container');if(tc)tc.innerHTML='<button class="btn btn-outline btn-sm" onclick="document.getElementById(\'modal-player\').style.display=\'none\'">Close</button>';el.style.display='flex';}
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
