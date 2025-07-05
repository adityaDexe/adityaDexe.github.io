
/*


let currentQuestion = 0;
let timerInterval;
const questions = Array.from({ length: 200 }, (_, i) => ({
  q: `Question ${i + 1} content here...`,
  options: [`Option A`, `Option B`, `Option C`, `Option D`]
}));

function showLogin() {
  document.getElementById('paper-selection').classList.add('hidden');
  document.getElementById('login-section').classList.remove('hidden');
}

function showInstructions() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if (user && pass) {
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('instruction-section').classList.remove('hidden');
  } else {
    alert("Please enter username and password");
  }
}

function startExam() {
  if (!document.getElementById('agree').checked) {
    alert("Please accept instructions to proceed");
    return;
  }
  document.getElementById('instruction-section').classList.add('hidden');
  document.getElementById('exam-section').classList.remove('hidden');
  showQuestion();
  startTimer(7200);
}

function startTimer(duration) {
  let timer = duration;
  timerInterval = setInterval(() => {
    const hours = String(Math.floor(timer / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((timer % 3600) / 60)).padStart(2, '0');
    const seconds = String(timer % 60).padStart(2, '0');
    document.getElementById("timer").textContent = `${hours}:${minutes}:${seconds}`;
    if (--timer < 0) {
      clearInterval(timerInterval);
      alert("Time's up! Exam ended.");
    }
  }, 1000);
}

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("questionNum").textContent = currentQuestion + 1;
  document.getElementById("questionText").textContent = q.q;
  document.getElementById("label1").textContent = q.options[0];
  document.getElementById("label2").textContent = q.options[1];
  document.getElementById("label3").textContent = q.options[2];
  document.getElementById("label4").textContent = q.options[3];
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
}

*/



/*

let currentQuestion = 0;
let timerInterval;

// Generate 200 sample questions
const questions = Array.from({ length: 200 }, (_, i) => ({
  q: `Question ${i + 1} content here...`,
  options: [`Option A`, `Option B`, `Option C`, `Option D`]
}));

function showLogin() {
  document.getElementById('paper-selection').classList.add('hidden');
  document.getElementById('login-section').classList.remove('hidden');
}

function showInstructions() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if (user && pass) {
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('instruction-section').classList.remove('hidden');
  } else {
    alert("Please enter username and password");
  }
}

// Modified: Start exam now shows language selection first
function startExam() {
  if (!document.getElementById('agree').checked) {
    alert("Please accept instructions to proceed");
    return;
  }
  document.getElementById('instruction-section').classList.add('hidden');
  document.getElementById('language-selection').classList.remove('hidden');
}

// NEW: Launch actual exam after selecting language
function launchExam() {
  const selectedLang = document.getElementById("languageDropdown").value;
  localStorage.setItem("examLanguage", selectedLang);  // Save selected language if needed
  document.getElementById('language-selection').classList.add('hidden');
  document.getElementById('exam-section').classList.remove('hidden');
  showQuestion();
  startTimer(7200); // 2 hours = 7200 seconds
}

// Timer function
function startTimer(duration) {
  let timer = duration;
  timerInterval = setInterval(() => {
    const hours = String(Math.floor(timer / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((timer % 3600) / 60)).padStart(2, '0');
    const seconds = String(timer % 60).padStart(2, '0');
    document.getElementById("timer").textContent = `${hours}:${minutes}:${seconds}`;
    if (--timer < 0) {
      clearInterval(timerInterval);
      alert("Time's up! Exam ended.");
    }
  }, 1000);
}

// Load question onto the page
function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("questionNum").textContent = currentQuestion + 1;
  document.getElementById("questionText").textContent = q.q;
  document.getElementById("label1").textContent = q.options[0];
  document.getElementById("label2").textContent = q.options[1];
  document.getElementById("label3").textContent = q.options[2];
  document.getElementById("label4").textContent = q.options[3];
}

// Navigation buttons
function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
}

*/


let currentQuestion = 0;
let timerInterval;
let selectedPaper = "";
let questions = []; // <- ✅ This is your dynamic question list

// Track question status: 'not-visited', 'not-answered', 'answered', 'review', 'review-answered'
let questionStatus = Array(100).fill('not-visited');

// Generate 200 sample questions
//const questions = Array.from({ length: 200 }, (_, i) => ({
//  q: `Question ${i + 1} content here...`,
//  options: [`Option A`, `Option B`, `Option C`, `Option D`],
//  answer: null,
//  markedForReview: false
//}));



/*
const questions = [
  
  {
    q: "What is the output of 2 + 2?",
    options: ["3", "4", "5", "22"],
    "correct": 1,
    markedForReview: false,
    answer: null, // 👈 add this
  },
  {
    q: "Which language is used for web apps?",
    options: ["Python", "Java", "JavaScript", "C++"],
    "correct": 0,
    markedForReview: false,
    answer: null, // 👈 add this
  },
  // ... repeat this for all 200 questions
];
*/



const questionBank = {
  "Computer Science - Paper 2 - Jul 2010": [
    
    { q: 'What is the output of 2 + 2 ? <br><img src="images/2010_june/img1.jpg" width="600">', options: ["3", "4", "5", "22"], correct: 1, markedForReview: false, answer: null},
    { q: 'Which language is used for web apps ?<br><img src="images/2024_D/img1.jpg" width="200">', options: ["Python", "Java", "JavaScript", "C++"], correct: 0, markedForReview: false, answer: null},
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
        { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null }


  ],

  "Computer Science - Paper 2 - Dec 2010": [
    { q: "Which language is used for web apps ?", options: ["Python", "Java", "JavaScript", "C++"], correct: 0, markedForReview: false, answer: null},
    { q: "What is the output of 2 + 2 ?", options: ["3", "4", "5", "22"], correct: 1, markedForReview: false, answer: null},
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null }

  ],


    "Computer Science - Paper 2 - Jul 2011": [
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null }
  ],


  "Computer Science - Paper 2 - Dec 2011": [
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null }
  ],


  "Computer Science - Paper 2 - Jul 2012": [
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null }

  ],


  "Computer Science - Paper 2 - Dec 2012": [
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null }
  ],


  "Computer Science - Paper 2 - Jul 2013": [
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null }
  ],


  "Computer Science - Paper 2 - Dec 2013": [
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null }
  ],


  "Computer Science - Paper 2 - Jul 2014": [
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null }
  ],


  "Computer Science - Paper 2 - Dec 2014": [
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null }
  ],


  "Computer Science - Paper 2 - Jul 2015": [
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null }
  ],


  "Computer Science - Paper 2 - Dec 2015": [
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null }
  ],


  "Computer Science - Paper 2 - Jul 2016": [
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null }
  ],


  "Computer Science - Paper 2 - Dec 2016": [
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null }
  ],


  "Computer Science - Paper 2 - Jul 2017": [
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null }
  ],


  "Computer Science - Paper 2 - Dec 2017": [
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null }
  ],


  "Computer Science - Paper 2 - Jul 2018": [

    { q: '#1 Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#2 Consider the following question below ? <br><img src="images/2018_J/img2.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#3 Consider the following question below ? <br><img src="images/2018_J/img3.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#4 Consider the following question below ? <br><img src="images/2018_J/img4.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#5 Consider the following question below ? <br><img src="images/2018_J/img5.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#6 Consider the following question below ? <br><img src="images/2018_J/img6.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#7 Consider the following question below ? <br><img src="images/2018_J/img7.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#8 Consider the following question below ? <br><img src="images/2018_J/img8.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#9 Consider the following question below ? <br><img src="images/2018_J/img9.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#10 Consider the following question below ? <br><img src="images/2018_J/img10.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#11 Consider the following question below ? <br><img src="images/2018_J/img11.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#12 Consider the following question below ? <br><img src="images/2018_J/img12.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#13 Consider the following question below ? <br><img src="images/2018_J/img13.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#14 Consider the following question below ? <br><img src="images/2018_J/img14.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#15 Consider the following question below ? <br><img src="images/2018_J/img15.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#16 Consider the following question below ? <br><img src="images/2018_J/img16.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#17 Consider the following question below ? <br><img src="images/2018_J/img17.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#18 Consider the following question below ? <br><img src="images/2018_J/img18.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#19 Consider the following question below ? <br><img src="images/2018_J/img19.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#20 Consider the following question below ? <br><img src="images/2018_J/img20.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#21 Consider the following question below ? <br><img src="images/2018_J/img21.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#22 Consider the following question below ? <br><img src="images/2018_J/img22.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#23 Consider the following question below ? <br><img src="images/2018_J/img23.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#24 Consider the following question below ? <br><img src="images/2018_J/img24.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#25 Consider the following question below ? <br><img src="images/2018_J/img25.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#26 Consider the following question below ? <br><img src="images/2018_J/img26.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#27 Consider the following question below ? <br><img src="images/2018_J/img27.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#28 Consider the following question below ? <br><img src="images/2018_J/img28.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#29 Consider the following question below ? <br><img src="images/2018_J/img29.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#30 Consider the following question below ? <br><img src="images/2018_J/img30.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#31 Consider the following question below ? <br><img src="images/2018_J/img31.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#32 Consider the following question below ? <br><img src="images/2018_J/img32.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#33 Consider the following question below ? <br><img src="images/2018_J/img33.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#34 Consider the following question below ? <br><img src="images/2018_J/img34.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#35 Consider the following question below ? <br><img src="images/2018_J/img35.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#36 Consider the following question below ? <br><img src="images/2018_J/img36.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#37 Consider the following question below ? <br><img src="images/2018_J/img37.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#38 Consider the following question below ? <br><img src="images/2018_J/img38.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#39 Consider the following question below ? <br><img src="images/2018_J/img39.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#40 Consider the following question below ? <br><img src="images/2018_J/img40.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#41 Consider the following question below ? <br><img src="images/2018_J/img41.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#42 Consider the following question below ? <br><img src="images/2018_J/img42.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#43 Consider the following question below ? <br><img src="images/2018_J/img43.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#44 Consider the following question below ? <br><img src="images/2018_J/img44.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#45 Consider the following question below ? <br><img src="images/2018_J/img45.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#46 Consider the following question below ? <br><img src="images/2018_J/img46.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#47 Consider the following question below ? <br><img src="images/2018_J/img47.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#48 Consider the following question below ? <br><img src="images/2018_J/img48.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#49 Consider the following question below ? <br><img src="images/2018_J/img49.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#50 Consider the following question below ? <br><img src="images/2018_J/img50.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0123, markedForReview: false, answer: null },
{ q: '#51 Consider the following question below ? <br><img src="images/2018_J/img51.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0123, markedForReview: false, answer: null },
{ q: '#52 Consider the following question below ? <br><img src="images/2018_J/img52.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#53 Consider the following question below ? <br><img src="images/2018_J/img53.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#54 Consider the following question below ? <br><img src="images/2018_J/img54.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#55 Consider the following question below ? <br><img src="images/2018_J/img55.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#56 Consider the following question below ? <br><img src="images/2018_J/img56.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#57 Consider the following question below ? <br><img src="images/2018_J/img57.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#58 Consider the following question below ? <br><img src="images/2018_J/img58.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#59 Consider the following question below ? <br><img src="images/2018_J/img59.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#60 Consider the following question below ? <br><img src="images/2018_J/img60.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#61 Consider the following question below ? <br><img src="images/2018_J/img61.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#62 Consider the following question below ? <br><img src="images/2018_J/img62.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#63 Consider the following question below ? <br><img src="images/2018_J/img63.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#64 Consider the following question below ? <br><img src="images/2018_J/img64.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#65 Consider the following question below ? <br><img src="images/2018_J/img65.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#66 Consider the following question below ? <br><img src="images/2018_J/img66.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#67 Consider the following question below ? <br><img src="images/2018_J/img67.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#68 Consider the following question below ? <br><img src="images/2018_J/img68.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#69 Consider the following question below ? <br><img src="images/2018_J/img69.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#70 Consider the following question below ? <br><img src="images/2018_J/img70.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#71 Consider the following question below ? <br><img src="images/2018_J/img71.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#72 Consider the following question below ? <br><img src="images/2018_J/img72.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#73 Consider the following question below ? <br><img src="images/2018_J/img73.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#74 Consider the following question below ? <br><img src="images/2018_J/img74.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#75 Consider the following question below ? <br><img src="images/2018_J/img75.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#76 Consider the following question below ? <br><img src="images/2018_J/img76.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#77 Consider the following question below ? <br><img src="images/2018_J/img77.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#78 Consider the following question below ? <br><img src="images/2018_J/img78.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#79 Consider the following question below ? <br><img src="images/2018_J/img79.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#80 Consider the following question below ? <br><img src="images/2018_J/img80.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#81 Consider the following question below ? <br><img src="images/2018_J/img81.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0123, markedForReview: false, answer: null },
{ q: '#82 Consider the following question below ? <br><img src="images/2018_J/img82.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#83 Consider the following question below ? <br><img src="images/2018_J/img83.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#84 Consider the following question below ? <br><img src="images/2018_J/img84.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#85 Consider the following question below ? <br><img src="images/2018_J/img85.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#86 Consider the following question below ? <br><img src="images/2018_J/img86.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#87 Consider the following question below ? <br><img src="images/2018_J/img87.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#88 Consider the following question below ? <br><img src="images/2018_J/img88.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#89 Consider the following question below ? <br><img src="images/2018_J/img89.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#90 Consider the following question below ? <br><img src="images/2018_J/img90.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#91 Consider the following question below ? <br><img src="images/2018_J/img91.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#92 Consider the following question below ? <br><img src="images/2018_J/img92.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#93 Consider the following question below ? <br><img src="images/2018_J/img93.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#94 Consider the following question below ? <br><img src="images/2018_J/img94.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#95 Consider the following question below ? <br><img src="images/2018_J/img95.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#96 Consider the following question below ? <br><img src="images/2018_J/img96.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#97 Consider the following question below ? <br><img src="images/2018_J/img97.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#98 Consider the following question below ? <br><img src="images/2018_J/img98.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#99 Consider the following question below ? <br><img src="images/2018_J/img99.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 13, markedForReview: false, answer: null },
{ q: '#100 Consider the following question below ? <br><img src="images/2018_J/img100.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null }


  ],


  "Computer Science - Paper 2 - Dec 2018": [

    { q: '#1 Consider the following question below ? <br><img src="images/2018_D/img1.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#2 Consider the following question below ? <br><img src="images/2018_D/img2.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#3 Consider the following question below ? <br><img src="images/2018_D/img3.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#4 Consider the following question below ? <br><img src="images/2018_D/img4.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#5 Consider the following question below ? <br><img src="images/2018_D/img5.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#6 Consider the following question below ? <br><img src="images/2018_D/img6.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#7 Consider the following question below ? <br><img src="images/2018_D/img7.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#8 Consider the following question below ? <br><img src="images/2018_D/img8.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#9 Consider the following question below ? <br><img src="images/2018_D/img9.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#10 Consider the following question below ? <br><img src="images/2018_D/img10.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#11 Consider the following question below ? <br><img src="images/2018_D/img11.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#12 Consider the following question below ? <br><img src="images/2018_D/img12.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#13 Consider the following question below ? <br><img src="images/2018_D/img13.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#14 Consider the following question below ? <br><img src="images/2018_D/img14.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#15 Consider the following question below ? <br><img src="images/2018_D/img15.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#16 Consider the following question below ? <br><img src="images/2018_D/img16.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#17 Consider the following question below ? <br><img src="images/2018_D/img17.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#18 Consider the following question below ? <br><img src="images/2018_D/img18.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#19 Consider the following question below ? <br><img src="images/2018_D/img19.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#20 Consider the following question below ? <br><img src="images/2018_D/img20.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#21 Consider the following question below ? <br><img src="images/2018_D/img21.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#22 Consider the following question below ? <br><img src="images/2018_D/img22.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#23 Consider the following question below ? <br><img src="images/2018_D/img23.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#24 Consider the following question below ? <br><img src="images/2018_D/img24.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#25 Consider the following question below ? <br><img src="images/2018_D/img25.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#26 Consider the following question below ? <br><img src="images/2018_D/img26.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#27 Consider the following question below ? <br><img src="images/2018_D/img27.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#28 Consider the following question below ? <br><img src="images/2018_D/img28.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#29 Consider the following question below ? <br><img src="images/2018_D/img29.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#30 Consider the following question below ? <br><img src="images/2018_D/img30.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#31 Consider the following question below ? <br><img src="images/2018_D/img31.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#32 Consider the following question below ? <br><img src="images/2018_D/img32.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#33 Consider the following question below ? <br><img src="images/2018_D/img33.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#34 Consider the following question below ? <br><img src="images/2018_D/img34.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#35 Consider the following question below ? <br><img src="images/2018_D/img35.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#36 Consider the following question below ? <br><img src="images/2018_D/img36.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#37 Consider the following question below ? <br><img src="images/2018_D/img37.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#38 Consider the following question below ? <br><img src="images/2018_D/img38.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#39 Consider the following question below ? <br><img src="images/2018_D/img39.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#40 Consider the following question below ? <br><img src="images/2018_D/img40.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#41 Consider the following question below ? <br><img src="images/2018_D/img41.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#42 Consider the following question below ? <br><img src="images/2018_D/img42.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#43 Consider the following question below ? <br><img src="images/2018_D/img43.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#44 Consider the following question below ? <br><img src="images/2018_D/img44.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#45 Consider the following question below ? <br><img src="images/2018_D/img45.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#46 Consider the following question below ? <br><img src="images/2018_D/img46.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#47 Consider the following question below ? <br><img src="images/2018_D/img47.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#48 Consider the following question below ? <br><img src="images/2018_D/img48.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#49 Consider the following question below ? <br><img src="images/2018_D/img49.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#50 Consider the following question below ? <br><img src="images/2018_D/img50.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#51 Consider the following question below ? <br><img src="images/2018_D/img51.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#52 Consider the following question below ? <br><img src="images/2018_D/img52.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#53 Consider the following question below ? <br><img src="images/2018_D/img53.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#54 Consider the following question below ? <br><img src="images/2018_D/img54.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#55 Consider the following question below ? <br><img src="images/2018_D/img55.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#56 Consider the following question below ? <br><img src="images/2018_D/img56.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#57 Consider the following question below ? <br><img src="images/2018_D/img57.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#58 Consider the following question below ? <br><img src="images/2018_D/img58.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#59 Consider the following question below ? <br><img src="images/2018_D/img59.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#60 Consider the following question below ? <br><img src="images/2018_D/img60.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#61 Consider the following question below ? <br><img src="images/2018_D/img61.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#62 Consider the following question below ? <br><img src="images/2018_D/img62.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#63 Consider the following question below ? <br><img src="images/2018_D/img63.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#64 Consider the following question below ? <br><img src="images/2018_D/img64.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#65 Consider the following question below ? <br><img src="images/2018_D/img65.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#66 Consider the following question below ? <br><img src="images/2018_D/img66.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#67 Consider the following question below ? <br><img src="images/2018_D/img67.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#68 Consider the following question below ? <br><img src="images/2018_D/img68.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#69 Consider the following question below ? <br><img src="images/2018_D/img69.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#70 Consider the following question below ? <br><img src="images/2018_D/img70.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#71 Consider the following question below ? <br><img src="images/2018_D/img71.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#72 Consider the following question below ? <br><img src="images/2018_D/img72.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#73 Consider the following question below ? <br><img src="images/2018_D/img73.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#74 Consider the following question below ? <br><img src="images/2018_D/img74.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#75 Consider the following question below ? <br><img src="images/2018_D/img75.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#76 Consider the following question below ? <br><img src="images/2018_D/img76.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#77 Consider the following question below ? <br><img src="images/2018_D/img77.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#78 Consider the following question below ? <br><img src="images/2018_D/img78.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#79 Consider the following question below ? <br><img src="images/2018_D/img79.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#80 Consider the following question below ? <br><img src="images/2018_D/img80.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#81 Consider the following question below ? <br><img src="images/2018_D/img81.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#82 Consider the following question below ? <br><img src="images/2018_D/img82.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#83 Consider the following question below ? <br><img src="images/2018_D/img83.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#84 Consider the following question below ? <br><img src="images/2018_D/img84.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#85 Consider the following question below ? <br><img src="images/2018_D/img85.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#86 Consider the following question below ? <br><img src="images/2018_D/img86.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#87 Consider the following question below ? <br><img src="images/2018_D/img87.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#88 Consider the following question below ? <br><img src="images/2018_D/img88.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#89 Consider the following question below ? <br><img src="images/2018_D/img89.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#90 Consider the following question below ? <br><img src="images/2018_D/img90.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#91 Consider the following question below ? <br><img src="images/2018_D/img91.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#92 Consider the following question below ? <br><img src="images/2018_D/img92.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#93 Consider the following question below ? <br><img src="images/2018_D/img93.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#94 Consider the following question below ? <br><img src="images/2018_D/img94.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#95 Consider the following question below ? <br><img src="images/2018_D/img95.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#96 Consider the following question below ? <br><img src="images/2018_D/img96.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#97 Consider the following question below ? <br><img src="images/2018_D/img97.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0123, markedForReview: false, answer: null },
{ q: '#98 Consider the following question below ? <br><img src="images/2018_D/img98.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#99 Consider the following question below ? <br><img src="images/2018_D/img99.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#100 Consider the following question below ? <br><img src="images/2018_D/img100.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null }


  ],


  "Computer Science - Paper 2 - Jul 2019": [
    { q: '#1 Consider the following question below ? <br><img src="images/2019_J/img1.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#2 Consider the following question below ? <br><img src="images/2019_J/img2.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#3 Consider the following question below ? <br><img src="images/2019_J/img3.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#4 Consider the following question below ? <br><img src="images/2019_J/img4.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#5 Consider the following question below ? <br><img src="images/2019_J/img5.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#6 Consider the following question below ? <br><img src="images/2019_J/img6.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#7 Consider the following question below ? <br><img src="images/2019_J/img7.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#8 Consider the following question below ? <br><img src="images/2019_J/img8.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#9 Consider the following question below ? <br><img src="images/2019_J/img9.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#10 Consider the following question below ? <br><img src="images/2019_J/img10.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#11 Consider the following question below ? <br><img src="images/2019_J/img11.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#12 Consider the following question below ? <br><img src="images/2019_J/img12.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#13 Consider the following question below ? <br><img src="images/2019_J/img13.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#14 Consider the following question below ? <br><img src="images/2019_J/img14.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#15 Consider the following question below ? <br><img src="images/2019_J/img15.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#16 Consider the following question below ? <br><img src="images/2019_J/img16.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#17 Consider the following question below ? <br><img src="images/2019_J/img17.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#18 Consider the following question below ? <br><img src="images/2019_J/img18.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#19 Consider the following question below ? <br><img src="images/2019_J/img19.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#20 Consider the following question below ? <br><img src="images/2019_J/img20.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#21 Consider the following question below ? <br><img src="images/2019_J/img21.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#22 Consider the following question below ? <br><img src="images/2019_J/img22.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#23 Consider the following question below ? <br><img src="images/2019_J/img23.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#24 Consider the following question below ? <br><img src="images/2019_J/img24.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#25 Consider the following question below ? <br><img src="images/2019_J/img25.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#26 Consider the following question below ? <br><img src="images/2019_J/img26.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#27 Consider the following question below ? <br><img src="images/2019_J/img27.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#28 Consider the following question below ? <br><img src="images/2019_J/img28.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#29 Consider the following question below ? <br><img src="images/2019_J/img29.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#30 Consider the following question below ? <br><img src="images/2019_J/img30.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#31 Consider the following question below ? <br><img src="images/2019_J/img31.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#32 Consider the following question below ? <br><img src="images/2019_J/img32.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#33 Consider the following question below ? <br><img src="images/2019_J/img33.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#34 Consider the following question below ? <br><img src="images/2019_J/img34.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#35 Consider the following question below ? <br><img src="images/2019_J/img35.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#36 Consider the following question below ? <br><img src="images/2019_J/img36.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#37 Consider the following question below ? <br><img src="images/2019_J/img37.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#38 Consider the following question below ? <br><img src="images/2019_J/img38.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#39 Consider the following question below ? <br><img src="images/2019_J/img39.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#40 Consider the following question below ? <br><img src="images/2019_J/img40.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#41 Consider the following question below ? <br><img src="images/2019_J/img41.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#42 Consider the following question below ? <br><img src="images/2019_J/img42.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#43 Consider the following question below ? <br><img src="images/2019_J/img43.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#44 Consider the following question below ? <br><img src="images/2019_J/img44.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#45 Consider the following question below ? <br><img src="images/2019_J/img45.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#46 Consider the following question below ? <br><img src="images/2019_J/img46.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#47 Consider the following question below ? <br><img src="images/2019_J/img47.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#48 Consider the following question below ? <br><img src="images/2019_J/img48.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#49 Consider the following question below ? <br><img src="images/2019_J/img49.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#50 Consider the following question below ? <br><img src="images/2019_J/img50.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#51 Consider the following question below ? <br><img src="images/2019_J/img51.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#52 Consider the following question below ? <br><img src="images/2019_J/img52.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#53 Consider the following question below ? <br><img src="images/2019_J/img53.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#54 Consider the following question below ? <br><img src="images/2019_J/img54.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#55 Consider the following question below ? <br><img src="images/2019_J/img55.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#56 Consider the following question below ? <br><img src="images/2019_J/img56.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#57 Consider the following question below ? <br><img src="images/2019_J/img57.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#58 Consider the following question below ? <br><img src="images/2019_J/img58.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#59 Consider the following question below ? <br><img src="images/2019_J/img59.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#60 Consider the following question below ? <br><img src="images/2019_J/img60.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#61 Consider the following question below ? <br><img src="images/2019_J/img61.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#62 Consider the following question below ? <br><img src="images/2019_J/img62.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#63 Consider the following question below ? <br><img src="images/2019_J/img63.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#64 Consider the following question below ? <br><img src="images/2019_J/img64.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#65 Consider the following question below ? <br><img src="images/2019_J/img65.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#66 Consider the following question below ? <br><img src="images/2019_J/img66.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#67 Consider the following question below ? <br><img src="images/2019_J/img67.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#68 Consider the following question below ? <br><img src="images/2019_J/img68.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#69 Consider the following question below ? <br><img src="images/2019_J/img69.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#70 Consider the following question below ? <br><img src="images/2019_J/img70.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#71 Consider the following question below ? <br><img src="images/2019_J/img71.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#72 Consider the following question below ? <br><img src="images/2019_J/img72.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#73 Consider the following question below ? <br><img src="images/2019_J/img73.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#74 Consider the following question below ? <br><img src="images/2019_J/img74.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#75 Consider the following question below ? <br><img src="images/2019_J/img75.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#76 Consider the following question below ? <br><img src="images/2019_J/img76.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#77 Consider the following question below ? <br><img src="images/2019_J/img77.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#78 Consider the following question below ? <br><img src="images/2019_J/img78.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#79 Consider the following question below ? <br><img src="images/2019_J/img79.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#80 Consider the following question below ? <br><img src="images/2019_J/img80.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#81 Consider the following question below ? <br><img src="images/2019_J/img81.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#82 Consider the following question below ? <br><img src="images/2019_J/img82.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#83 Consider the following question below ? <br><img src="images/2019_J/img83.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#84 Consider the following question below ? <br><img src="images/2019_J/img84.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#85 Consider the following question below ? <br><img src="images/2019_J/img85.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#86 Consider the following question below ? <br><img src="images/2019_J/img86.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#87 Consider the following question below ? <br><img src="images/2019_J/img87.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#88 Consider the following question below ? <br><img src="images/2019_J/img88.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#89 Consider the following question below ? <br><img src="images/2019_J/img89.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#90 Consider the following question below ? <br><img src="images/2019_J/img90.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#91 Consider the following question below ? <br><img src="images/2019_J/img91.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#92 Consider the following question below ? <br><img src="images/2019_J/img92.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#93 Consider the following question below ? <br><img src="images/2019_J/img93.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#94 Consider the following question below ? <br><img src="images/2019_J/img94.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#95 Consider the following question below ? <br><img src="images/2019_J/img95.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#96 Consider the following question below ? <br><img src="images/2019_J/img96.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#97 Consider the following question below ? <br><img src="images/2019_J/img97.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#98 Consider the following question below ? <br><img src="images/2019_J/img98.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#99 Consider the following question below ? <br><img src="images/2019_J/img99.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#100 Consider the following question below ? <br><img src="images/2019_J/img100.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null }





  ],


  "Computer Science - Paper 2 - Dec 2019": [
    { q: '#1 Consider the following question below ? <br><img src="images/2019_D/img1.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#2 Consider the following question below ? <br><img src="images/2019_D/img2.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#3 Consider the following question below ? <br><img src="images/2019_D/img3.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#4 Consider the following question below ? <br><img src="images/2019_D/img4.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#5 Consider the following question below ? <br><img src="images/2019_D/img5.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#6 Consider the following question below ? <br><img src="images/2019_D/img6.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#7 Consider the following question below ? <br><img src="images/2019_D/img7.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#8 Consider the following question below ? <br><img src="images/2019_D/img8.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#9 Consider the following question below ? <br><img src="images/2019_D/img9.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#10 Consider the following question below ? <br><img src="images/2019_D/img10.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#11 Consider the following question below ? <br><img src="images/2019_D/img11.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#12 Consider the following question below ? <br><img src="images/2019_D/img12.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#13 Consider the following question below ? <br><img src="images/2019_D/img13.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#14 Consider the following question below ? <br><img src="images/2019_D/img14.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#15 Consider the following question below ? <br><img src="images/2019_D/img15.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#16 Consider the following question below ? <br><img src="images/2019_D/img16.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#17 Consider the following question below ? <br><img src="images/2019_D/img17.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#18 Consider the following question below ? <br><img src="images/2019_D/img18.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#19 Consider the following question below ? <br><img src="images/2019_D/img19.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#20 Consider the following question below ? <br><img src="images/2019_D/img20.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#21 Consider the following question below ? <br><img src="images/2019_D/img21.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#22 Consider the following question below ? <br><img src="images/2019_D/img22.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#23 Consider the following question below ? <br><img src="images/2019_D/img23.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#24 Consider the following question below ? <br><img src="images/2019_D/img24.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#25 Consider the following question below ? <br><img src="images/2019_D/img25.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#26 Consider the following question below ? <br><img src="images/2019_D/img26.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#27 Consider the following question below ? <br><img src="images/2019_D/img27.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#28 Consider the following question below ? <br><img src="images/2019_D/img28.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#29 Consider the following question below ? <br><img src="images/2019_D/img29.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#30 Consider the following question below ? <br><img src="images/2019_D/img30.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#31 Consider the following question below ? <br><img src="images/2019_D/img31.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#32 Consider the following question below ? <br><img src="images/2019_D/img32.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#33 Consider the following question below ? <br><img src="images/2019_D/img33.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#34 Consider the following question below ? <br><img src="images/2019_D/img34.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#35 Consider the following question below ? <br><img src="images/2019_D/img35.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#36 Consider the following question below ? <br><img src="images/2019_D/img36.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#37 Consider the following question below ? <br><img src="images/2019_D/img37.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#38 Consider the following question below ? <br><img src="images/2019_D/img38.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#39 Consider the following question below ? <br><img src="images/2019_D/img39.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#40 Consider the following question below ? <br><img src="images/2019_D/img40.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#41 Consider the following question below ? <br><img src="images/2019_D/img41.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#42 Consider the following question below ? <br><img src="images/2019_D/img42.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#43 Consider the following question below ? <br><img src="images/2019_D/img43.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#44 Consider the following question below ? <br><img src="images/2019_D/img44.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#45 Consider the following question below ? <br><img src="images/2019_D/img45.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#46 Consider the following question below ? <br><img src="images/2019_D/img46.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#47 Consider the following question below ? <br><img src="images/2019_D/img47.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#48 Consider the following question below ? <br><img src="images/2019_D/img48.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#49 Consider the following question below ? <br><img src="images/2019_D/img49.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#50 Consider the following question below ? <br><img src="images/2019_D/img50.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#51 Consider the following question below ? <br><img src="images/2019_D/img51.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#52 Consider the following question below ? <br><img src="images/2019_D/img52.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0123, markedForReview: false, answer: null },
{ q: '#53 Consider the following question below ? <br><img src="images/2019_D/img53.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#54 Consider the following question below ? <br><img src="images/2019_D/img54.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#55 Consider the following question below ? <br><img src="images/2019_D/img55.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#56 Consider the following question below ? <br><img src="images/2019_D/img56.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#57 Consider the following question below ? <br><img src="images/2019_D/img57.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#58 Consider the following question below ? <br><img src="images/2019_D/img58.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#59 Consider the following question below ? <br><img src="images/2019_D/img59.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#60 Consider the following question below ? <br><img src="images/2019_D/img60.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#61 Consider the following question below ? <br><img src="images/2019_D/img61.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#62 Consider the following question below ? <br><img src="images/2019_D/img62.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#63 Consider the following question below ? <br><img src="images/2019_D/img63.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#64 Consider the following question below ? <br><img src="images/2019_D/img64.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#65 Consider the following question below ? <br><img src="images/2019_D/img65.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#66 Consider the following question below ? <br><img src="images/2019_D/img66.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#67 Consider the following question below ? <br><img src="images/2019_D/img67.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#68 Consider the following question below ? <br><img src="images/2019_D/img68.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#69 Consider the following question below ? <br><img src="images/2019_D/img69.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#70 Consider the following question below ? <br><img src="images/2019_D/img70.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#71 Consider the following question below ? <br><img src="images/2019_D/img71.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#72 Consider the following question below ? <br><img src="images/2019_D/img72.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#73 Consider the following question below ? <br><img src="images/2019_D/img73.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#74 Consider the following question below ? <br><img src="images/2019_D/img74.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#75 Consider the following question below ? <br><img src="images/2019_D/img75.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#76 Consider the following question below ? <br><img src="images/2019_D/img76.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#77 Consider the following question below ? <br><img src="images/2019_D/img77.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#78 Consider the following question below ? <br><img src="images/2019_D/img78.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#79 Consider the following question below ? <br><img src="images/2019_D/img79.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#80 Consider the following question below ? <br><img src="images/2019_D/img80.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#81 Consider the following question below ? <br><img src="images/2019_D/img81.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#82 Consider the following question below ? <br><img src="images/2019_D/img82.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#83 Consider the following question below ? <br><img src="images/2019_D/img83.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#84 Consider the following question below ? <br><img src="images/2019_D/img84.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#85 Consider the following question below ? <br><img src="images/2019_D/img85.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#86 Consider the following question below ? <br><img src="images/2019_D/img86.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#87 Consider the following question below ? <br><img src="images/2019_D/img87.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#88 Consider the following question below ? <br><img src="images/2019_D/img88.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#89 Consider the following question below ? <br><img src="images/2019_D/img89.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#90 Consider the following question below ? <br><img src="images/2019_D/img90.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#91 Consider the following question below ? <br><img src="images/2019_D/img91.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#92 Consider the following question below ? <br><img src="images/2019_D/img92.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#93 Consider the following question below ? <br><img src="images/2019_D/img93.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#94 Consider the following question below ? <br><img src="images/2019_D/img94.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#95 Consider the following question below ? <br><img src="images/2019_D/img95.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#96 Consider the following question below ? <br><img src="images/2019_D/img96.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#97 Consider the following question below ? <br><img src="images/2019_D/img97.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#98 Consider the following question below ? <br><img src="images/2019_D/img98.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#99 Consider the following question below ? <br><img src="images/2019_D/img99.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#100 Consider the following question below ? <br><img src="images/2019_D/img100.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null }




  ],


  "Computer Science - Paper 2 - Jul 2020": [
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null }
  ],


  "Computer Science - Paper 2 - Dec 2020": [
    { q: '#1 Consider the following question below ? <br><img src="images/2020/img1.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#2 Consider the following question below ? <br><img src="images/2020/img2.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#3 Consider the following question below ? <br><img src="images/2020/img3.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#4 Consider the following question below ? <br><img src="images/2020/img4.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#5 Consider the following question below ? <br><img src="images/2020/img5.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#6 Consider the following question below ? <br><img src="images/2020/img6.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#7 Consider the following question below ? <br><img src="images/2020/img7.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#8 Consider the following question below ? <br><img src="images/2020/img8.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#9 Consider the following question below ? <br><img src="images/2020/img9.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0123, markedForReview: false, answer: null },
{ q: '#10 Consider the following question below ? <br><img src="images/2020/img10.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#11 Consider the following question below ? <br><img src="images/2020/img11.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#12 Consider the following question below ? <br><img src="images/2020/img12.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#13 Consider the following question below ? <br><img src="images/2020/img13.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#14 Consider the following question below ? <br><img src="images/2020/img14.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#15 Consider the following question below ? <br><img src="images/2020/img15.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#16 Consider the following question below ? <br><img src="images/2020/img16.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#17 Consider the following question below ? <br><img src="images/2020/img17.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#18 Consider the following question below ? <br><img src="images/2020/img18.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#19 Consider the following question below ? <br><img src="images/2020/img19.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#20 Consider the following question below ? <br><img src="images/2020/img20.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#21 Consider the following question below ? <br><img src="images/2020/img21.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#22 Consider the following question below ? <br><img src="images/2020/img22.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#23 Consider the following question below ? <br><img src="images/2020/img23.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#24 Consider the following question below ? <br><img src="images/2020/img24.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#25 Consider the following question below ? <br><img src="images/2020/img25.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#26 Consider the following question below ? <br><img src="images/2020/img26.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#27 Consider the following question below ? <br><img src="images/2020/img27.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#28 Consider the following question below ? <br><img src="images/2020/img28.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#29 Consider the following question below ? <br><img src="images/2020/img29.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#30 Consider the following question below ? <br><img src="images/2020/img30.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#31 Consider the following question below ? <br><img src="images/2020/img31.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#32 Consider the following question below ? <br><img src="images/2020/img32.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#33 Consider the following question below ? <br><img src="images/2020/img33.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#34 Consider the following question below ? <br><img src="images/2020/img34.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#35 Consider the following question below ? <br><img src="images/2020/img35.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0123, markedForReview: false, answer: null },
{ q: '#36 Consider the following question below ? <br><img src="images/2020/img36.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#37 Consider the following question below ? <br><img src="images/2020/img37.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#38 Consider the following question below ? <br><img src="images/2020/img38.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#39 Consider the following question below ? <br><img src="images/2020/img39.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#40 Consider the following question below ? <br><img src="images/2020/img40.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#41 Consider the following question below ? <br><img src="images/2020/img41.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#42 Consider the following question below ? <br><img src="images/2020/img42.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#43 Consider the following question below ? <br><img src="images/2020/img43.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#44 Consider the following question below ? <br><img src="images/2020/img44.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#45 Consider the following question below ? <br><img src="images/2020/img45.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#46 Consider the following question below ? <br><img src="images/2020/img46.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0123, markedForReview: false, answer: null },
{ q: '#47 Consider the following question below ? <br><img src="images/2020/img47.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#48 Consider the following question below ? <br><img src="images/2020/img48.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#49 Consider the following question below ? <br><img src="images/2020/img49.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#50 Consider the following question below ? <br><img src="images/2020/img50.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#51 Consider the following question below ? <br><img src="images/2020/img51.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#52 Consider the following question below ? <br><img src="images/2020/img52.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#53 Consider the following question below ? <br><img src="images/2020/img53.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#54 Consider the following question below ? <br><img src="images/2020/img54.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#55 Consider the following question below ? <br><img src="images/2020/img55.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#56 Consider the following question below ? <br><img src="images/2020/img56.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#57 Consider the following question below ? <br><img src="images/2020/img57.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#58 Consider the following question below ? <br><img src="images/2020/img58.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#59 Consider the following question below ? <br><img src="images/2020/img59.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#60 Consider the following question below ? <br><img src="images/2020/img60.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#61 Consider the following question below ? <br><img src="images/2020/img61.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#62 Consider the following question below ? <br><img src="images/2020/img62.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#63 Consider the following question below ? <br><img src="images/2020/img63.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#64 Consider the following question below ? <br><img src="images/2020/img64.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#65 Consider the following question below ? <br><img src="images/2020/img65.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#66 Consider the following question below ? <br><img src="images/2020/img66.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#67 Consider the following question below ? <br><img src="images/2020/img67.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 02, markedForReview: false, answer: null },
{ q: '#68 Consider the following question below ? <br><img src="images/2020/img68.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#69 Consider the following question below ? <br><img src="images/2020/img69.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#70 Consider the following question below ? <br><img src="images/2020/img70.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#71 Consider the following question below ? <br><img src="images/2020/img71.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#72 Consider the following question below ? <br><img src="images/2020/img72.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#73 Consider the following question below ? <br><img src="images/2020/img73.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#74 Consider the following question below ? <br><img src="images/2020/img74.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#75 Consider the following question below ? <br><img src="images/2020/img75.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#76 Consider the following question below ? <br><img src="images/2020/img76.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#77 Consider the following question below ? <br><img src="images/2020/img77.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#78 Consider the following question below ? <br><img src="images/2020/img78.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0123, markedForReview: false, answer: null },
{ q: '#79 Consider the following question below ? <br><img src="images/2020/img79.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#80 Consider the following question below ? <br><img src="images/2020/img80.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#81 Consider the following question below ? <br><img src="images/2020/img81.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#82 Consider the following question below ? <br><img src="images/2020/img82.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#83 Consider the following question below ? <br><img src="images/2020/img83.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#84 Consider the following question below ? <br><img src="images/2020/img84.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#85 Consider the following question below ? <br><img src="images/2020/img85.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#86 Consider the following question below ? <br><img src="images/2020/img86.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#87 Consider the following question below ? <br><img src="images/2020/img87.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#88 Consider the following question below ? <br><img src="images/2020/img88.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#89 Consider the following question below ? <br><img src="images/2020/img89.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#90 Consider the following question below ? <br><img src="images/2020/img90.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#91 Consider the following question below ? <br><img src="images/2020/img91.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#92 Consider the following question below ? <br><img src="images/2020/img92.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#93 Consider the following question below ? <br><img src="images/2020/img93.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#94 Consider the following question below ? <br><img src="images/2020/img94.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#95 Consider the following question below ? <br><img src="images/2020/img95.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#96 Consider the following question below ? <br><img src="images/2020/img96.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#97 Consider the following question below ? <br><img src="images/2020/img97.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#98 Consider the following question below ? <br><img src="images/2020/img98.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#99 Consider the following question below ? <br><img src="images/2020/img99.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#100 Consider the following question below ? <br><img src="images/2020/img100.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null }


  ],


  "Computer Science - Paper 2 - Jul 2021": [
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null }
  ],


  "Computer Science - Paper 2 - Dec 2021": [
    { q: '#1 Consider the following question below ? <br><img src="images/2021/img1.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#2 Consider the following question below ? <br><img src="images/2021/img2.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#3 Consider the following question below ? <br><img src="images/2021/img3.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#4 Consider the following question below ? <br><img src="images/2021/img4.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#5 Consider the following question below ? <br><img src="images/2021/img5.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#6 Consider the following question below ? <br><img src="images/2021/img6.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#7 Consider the following question below ? <br><img src="images/2021/img7.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#8 Consider the following question below ? <br><img src="images/2021/img8.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#9 Consider the following question below ? <br><img src="images/2021/img9.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#10 Consider the following question below ? <br><img src="images/2021/img10.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#11 Consider the following question below ? <br><img src="images/2021/img11.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#12 Consider the following question below ? <br><img src="images/2021/img12.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#13 Consider the following question below ? <br><img src="images/2021/img13.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#14 Consider the following question below ? <br><img src="images/2021/img14.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#15 Consider the following question below ? <br><img src="images/2021/img15.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#16 Consider the following question below ? <br><img src="images/2021/img16.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#17 Consider the following question below ? <br><img src="images/2021/img17.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#18 Consider the following question below ? <br><img src="images/2021/img18.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#19 Consider the following question below ? <br><img src="images/2021/img19.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#20 Consider the following question below ? <br><img src="images/2021/img20.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#21 Consider the following question below ? <br><img src="images/2021/img21.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#22 Consider the following question below ? <br><img src="images/2021/img22.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#23 Consider the following question below ? <br><img src="images/2021/img23.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 12, markedForReview: false, answer: null },
{ q: '#24 Consider the following question below ? <br><img src="images/2021/img24.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#25 Consider the following question below ? <br><img src="images/2021/img25.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0123, markedForReview: false, answer: null },
{ q: '#26 Consider the following question below ? <br><img src="images/2021/img26.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#27 Consider the following question below ? <br><img src="images/2021/img27.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#28 Consider the following question below ? <br><img src="images/2021/img28.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#29 Consider the following question below ? <br><img src="images/2021/img29.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#30 Consider the following question below ? <br><img src="images/2021/img30.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#31 Consider the following question below ? <br><img src="images/2021/img31.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#32 Consider the following question below ? <br><img src="images/2021/img32.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#33 Consider the following question below ? <br><img src="images/2021/img33.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0123, markedForReview: false, answer: null },
{ q: '#34 Consider the following question below ? <br><img src="images/2021/img34.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#35 Consider the following question below ? <br><img src="images/2021/img35.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#36 Consider the following question below ? <br><img src="images/2021/img36.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#37 Consider the following question below ? <br><img src="images/2021/img37.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0123, markedForReview: false, answer: null },
{ q: '#38 Consider the following question below ? <br><img src="images/2021/img38.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#39 Consider the following question below ? <br><img src="images/2021/img39.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#40 Consider the following question below ? <br><img src="images/2021/img40.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#41 Consider the following question below ? <br><img src="images/2021/img41.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#42 Consider the following question below ? <br><img src="images/2021/img42.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#43 Consider the following question below ? <br><img src="images/2021/img43.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#44 Consider the following question below ? <br><img src="images/2021/img44.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#45 Consider the following question below ? <br><img src="images/2021/img45.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#46 Consider the following question below ? <br><img src="images/2021/img46.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#47 Consider the following question below ? <br><img src="images/2021/img47.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#48 Consider the following question below ? <br><img src="images/2021/img48.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#49 Consider the following question below ? <br><img src="images/2021/img49.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#50 Consider the following question below ? <br><img src="images/2021/img50.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0123, markedForReview: false, answer: null },
{ q: '#51 Consider the following question below ? <br><img src="images/2021/img51.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#52 Consider the following question below ? <br><img src="images/2021/img52.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0123, markedForReview: false, answer: null },
{ q: '#53 Consider the following question below ? <br><img src="images/2021/img53.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#54 Consider the following question below ? <br><img src="images/2021/img54.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#55 Consider the following question below ? <br><img src="images/2021/img55.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#56 Consider the following question below ? <br><img src="images/2021/img56.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#57 Consider the following question below ? <br><img src="images/2021/img57.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#58 Consider the following question below ? <br><img src="images/2021/img58.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#59 Consider the following question below ? <br><img src="images/2021/img59.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#60 Consider the following question below ? <br><img src="images/2021/img60.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#61 Consider the following question below ? <br><img src="images/2021/img61.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#62 Consider the following question below ? <br><img src="images/2021/img62.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#63 Consider the following question below ? <br><img src="images/2021/img63.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#64 Consider the following question below ? <br><img src="images/2021/img64.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#65 Consider the following question below ? <br><img src="images/2021/img65.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#66 Consider the following question below ? <br><img src="images/2021/img66.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#67 Consider the following question below ? <br><img src="images/2021/img67.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0123, markedForReview: false, answer: null },
{ q: '#68 Consider the following question below ? <br><img src="images/2021/img68.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#69 Consider the following question below ? <br><img src="images/2021/img69.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#70 Consider the following question below ? <br><img src="images/2021/img70.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#71 Consider the following question below ? <br><img src="images/2021/img71.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#72 Consider the following question below ? <br><img src="images/2021/img72.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#73 Consider the following question below ? <br><img src="images/2021/img73.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#74 Consider the following question below ? <br><img src="images/2021/img74.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#75 Consider the following question below ? <br><img src="images/2021/img75.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#76 Consider the following question below ? <br><img src="images/2021/img76.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#77 Consider the following question below ? <br><img src="images/2021/img77.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#78 Consider the following question below ? <br><img src="images/2021/img78.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#79 Consider the following question below ? <br><img src="images/2021/img79.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#80 Consider the following question below ? <br><img src="images/2021/img80.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#81 Consider the following question below ? <br><img src="images/2021/img81.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#82 Consider the following question below ? <br><img src="images/2021/img82.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#83 Consider the following question below ? <br><img src="images/2021/img83.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#84 Consider the following question below ? <br><img src="images/2021/img84.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#85 Consider the following question below ? <br><img src="images/2021/img85.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#86 Consider the following question below ? <br><img src="images/2021/img86.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#87 Consider the following question below ? <br><img src="images/2021/img87.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#88 Consider the following question below ? <br><img src="images/2021/img88.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#89 Consider the following question below ? <br><img src="images/2021/img89.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#90 Consider the following question below ? <br><img src="images/2021/img90.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#91 Consider the following question below ? <br><img src="images/2021/img91.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#92 Consider the following question below ? <br><img src="images/2021/img92.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#93 Consider the following question below ? <br><img src="images/2021/img93.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 23, markedForReview: false, answer: null },
{ q: '#94 Consider the following question below ? <br><img src="images/2021/img94.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#95 Consider the following question below ? <br><img src="images/2021/img95.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#96 Consider the following question below ? <br><img src="images/2021/img96.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#97 Consider the following question below ? <br><img src="images/2021/img97.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#98 Consider the following question below ? <br><img src="images/2021/img98.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#99 Consider the following question below ? <br><img src="images/2021/img99.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#100 Consider the following question below ? <br><img src="images/2021/img100.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null }
    
  ],


  "Computer Science - Paper 2 - Jul 2022": [
    { q: '#1 Consider the following question below ? <br><img src="images/2022_J/img1.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#2 Consider the following question below ? <br><img src="images/2022_J/img2.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#3 Consider the following question below ? <br><img src="images/2022_J/img3.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#4 Consider the following question below ? <br><img src="images/2022_J/img4.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#5 Consider the following question below ? <br><img src="images/2022_J/img5.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#6 Consider the following question below ? <br><img src="images/2022_J/img6.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#7 Consider the following question below ? <br><img src="images/2022_J/img7.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#8 Consider the following question below ? <br><img src="images/2022_J/img8.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#9 Consider the following question below ? <br><img src="images/2022_J/img9.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#10 Consider the following question below ? <br><img src="images/2022_J/img10.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#11 Consider the following question below ? <br><img src="images/2022_J/img11.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#12 Consider the following question below ? <br><img src="images/2022_J/img12.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#13 Consider the following question below ? <br><img src="images/2022_J/img13.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#14 Consider the following question below ? <br><img src="images/2022_J/img14.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#15 Consider the following question below ? <br><img src="images/2022_J/img15.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#16 Consider the following question below ? <br><img src="images/2022_J/img16.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0123, markedForReview: false, answer: null },
{ q: '#17 Consider the following question below ? <br><img src="images/2022_J/img17.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#18 Consider the following question below ? <br><img src="images/2022_J/img18.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#19 Consider the following question below ? <br><img src="images/2022_J/img19.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#20 Consider the following question below ? <br><img src="images/2022_J/img20.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#21 Consider the following question below ? <br><img src="images/2022_J/img21.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#22 Consider the following question below ? <br><img src="images/2022_J/img22.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#23 Consider the following question below ? <br><img src="images/2022_J/img23.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#24 Consider the following question below ? <br><img src="images/2022_J/img24.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#25 Consider the following question below ? <br><img src="images/2022_J/img25.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#26 Consider the following question below ? <br><img src="images/2022_J/img26.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#27 Consider the following question below ? <br><img src="images/2022_J/img27.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#28 Consider the following question below ? <br><img src="images/2022_J/img28.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0123, markedForReview: false, answer: null },
{ q: '#29 Consider the following question below ? <br><img src="images/2022_J/img29.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#30 Consider the following question below ? <br><img src="images/2022_J/img30.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#31 Consider the following question below ? <br><img src="images/2022_J/img31.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#32 Consider the following question below ? <br><img src="images/2022_J/img32.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#33 Consider the following question below ? <br><img src="images/2022_J/img33.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#34 Consider the following question below ? <br><img src="images/2022_J/img34.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#35 Consider the following question below ? <br><img src="images/2022_J/img35.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#36 Consider the following question below ? <br><img src="images/2022_J/img36.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#37 Consider the following question below ? <br><img src="images/2022_J/img37.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#38 Consider the following question below ? <br><img src="images/2022_J/img38.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#39 Consider the following question below ? <br><img src="images/2022_J/img39.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#40 Consider the following question below ? <br><img src="images/2022_J/img40.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#41 Consider the following question below ? <br><img src="images/2022_J/img41.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#42 Consider the following question below ? <br><img src="images/2022_J/img42.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#43 Consider the following question below ? <br><img src="images/2022_J/img43.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#44 Consider the following question below ? <br><img src="images/2022_J/img44.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#45 Consider the following question below ? <br><img src="images/2022_J/img45.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#46 Consider the following question below ? <br><img src="images/2022_J/img46.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#47 Consider the following question below ? <br><img src="images/2022_J/img47.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#48 Consider the following question below ? <br><img src="images/2022_J/img48.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#49 Consider the following question below ? <br><img src="images/2022_J/img49.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#50 Consider the following question below ? <br><img src="images/2022_J/img50.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#51 Consider the following question below ? <br><img src="images/2022_J/img51.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#52 Consider the following question below ? <br><img src="images/2022_J/img52.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#53 Consider the following question below ? <br><img src="images/2022_J/img53.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#54 Consider the following question below ? <br><img src="images/2022_J/img54.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#55 Consider the following question below ? <br><img src="images/2022_J/img55.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#56 Consider the following question below ? <br><img src="images/2022_J/img56.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0123, markedForReview: false, answer: null },
{ q: '#57 Consider the following question below ? <br><img src="images/2022_J/img57.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#58 Consider the following question below ? <br><img src="images/2022_J/img58.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#59 Consider the following question below ? <br><img src="images/2022_J/img59.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#60 Consider the following question below ? <br><img src="images/2022_J/img60.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#61 Consider the following question below ? <br><img src="images/2022_J/img61.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#62 Consider the following question below ? <br><img src="images/2022_J/img62.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#63 Consider the following question below ? <br><img src="images/2022_J/img63.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#64 Consider the following question below ? <br><img src="images/2022_J/img64.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#65 Consider the following question below ? <br><img src="images/2022_J/img65.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#66 Consider the following question below ? <br><img src="images/2022_J/img66.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#67 Consider the following question below ? <br><img src="images/2022_J/img67.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#68 Consider the following question below ? <br><img src="images/2022_J/img68.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#69 Consider the following question below ? <br><img src="images/2022_J/img69.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#70 Consider the following question below ? <br><img src="images/2022_J/img70.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#71 Consider the following question below ? <br><img src="images/2022_J/img71.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#72 Consider the following question below ? <br><img src="images/2022_J/img72.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#73 Consider the following question below ? <br><img src="images/2022_J/img73.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#74 Consider the following question below ? <br><img src="images/2022_J/img74.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#75 Consider the following question below ? <br><img src="images/2022_J/img75.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#76 Consider the following question below ? <br><img src="images/2022_J/img76.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#77 Consider the following question below ? <br><img src="images/2022_J/img77.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#78 Consider the following question below ? <br><img src="images/2022_J/img78.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#79 Consider the following question below ? <br><img src="images/2022_J/img79.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#80 Consider the following question below ? <br><img src="images/2022_J/img80.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#81 Consider the following question below ? <br><img src="images/2022_J/img81.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#82 Consider the following question below ? <br><img src="images/2022_J/img82.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#83 Consider the following question below ? <br><img src="images/2022_J/img83.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#84 Consider the following question below ? <br><img src="images/2022_J/img84.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#85 Consider the following question below ? <br><img src="images/2022_J/img85.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#86 Consider the following question below ? <br><img src="images/2022_J/img86.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#87 Consider the following question below ? <br><img src="images/2022_J/img87.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#88 Consider the following question below ? <br><img src="images/2022_J/img88.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#89 Consider the following question below ? <br><img src="images/2022_J/img89.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#90 Consider the following question below ? <br><img src="images/2022_J/img90.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#91 Consider the following question below ? <br><img src="images/2022_J/img91.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#92 Consider the following question below ? <br><img src="images/2022_J/img92.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#93 Consider the following question below ? <br><img src="images/2022_J/img93.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#94 Consider the following question below ? <br><img src="images/2022_J/img94.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#95 Consider the following question below ? <br><img src="images/2022_J/img95.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#96 Consider the following question below ? <br><img src="images/2022_J/img96.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#97 Consider the following question below ? <br><img src="images/2022_J/img97.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#98 Consider the following question below ? <br><img src="images/2022_J/img98.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#99 Consider the following question below ? <br><img src="images/2022_J/img99.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#100 Consider the following question below ? <br><img src="images/2022_J/img100.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null }



  ],




  "Computer Science - Paper 2 - Dec 2022": [
    { q: '#1 Consider the following question below ? <br><img src="images/2022_D/img1.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#2 Consider the following question below ? <br><img src="images/2022_D/img2.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#3 Consider the following question below ? <br><img src="images/2022_D/img3.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#4 Consider the following question below ? <br><img src="images/2022_D/img4.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#5 Consider the following question below ? <br><img src="images/2022_D/img5.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#6 Consider the following question below ? <br><img src="images/2022_D/img6.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#7 Consider the following question below ? <br><img src="images/2022_D/img7.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#8 Consider the following question below ? <br><img src="images/2022_D/img8.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#9 Consider the following question below ? <br><img src="images/2022_D/img9.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#10 Consider the following question below ? <br><img src="images/2022_D/img10.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#11 Consider the following question below ? <br><img src="images/2022_D/img11.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#12 Consider the following question below ? <br><img src="images/2022_D/img12.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#13 Consider the following question below ? <br><img src="images/2022_D/img13.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#14 Consider the following question below ? <br><img src="images/2022_D/img14.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#15 Consider the following question below ? <br><img src="images/2022_D/img15.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#16 Consider the following question below ? <br><img src="images/2022_D/img16.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#17 Consider the following question below ? <br><img src="images/2022_D/img17.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#18 Consider the following question below ? <br><img src="images/2022_D/img18.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#19 Consider the following question below ? <br><img src="images/2022_D/img19.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#20 Consider the following question below ? <br><img src="images/2022_D/img20.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#21 Consider the following question below ? <br><img src="images/2022_D/img21.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#22 Consider the following question below ? <br><img src="images/2022_D/img22.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#23 Consider the following question below ? <br><img src="images/2022_D/img23.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#24 Consider the following question below ? <br><img src="images/2022_D/img24.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#25 Consider the following question below ? <br><img src="images/2022_D/img25.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#26 Consider the following question below ? <br><img src="images/2022_D/img26.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#27 Consider the following question below ? <br><img src="images/2022_D/img27.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#28 Consider the following question below ? <br><img src="images/2022_D/img28.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#29 Consider the following question below ? <br><img src="images/2022_D/img29.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#30 Consider the following question below ? <br><img src="images/2022_D/img30.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#31 Consider the following question below ? <br><img src="images/2022_D/img31.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#32 Consider the following question below ? <br><img src="images/2022_D/img32.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#33 Consider the following question below ? <br><img src="images/2022_D/img33.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#34 Consider the following question below ? <br><img src="images/2022_D/img34.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#35 Consider the following question below ? <br><img src="images/2022_D/img35.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#36 Consider the following question below ? <br><img src="images/2022_D/img36.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#37 Consider the following question below ? <br><img src="images/2022_D/img37.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#38 Consider the following question below ? <br><img src="images/2022_D/img38.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#39 Consider the following question below ? <br><img src="images/2022_D/img39.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#40 Consider the following question below ? <br><img src="images/2022_D/img40.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#41 Consider the following question below ? <br><img src="images/2022_D/img41.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#42 Consider the following question below ? <br><img src="images/2022_D/img42.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#43 Consider the following question below ? <br><img src="images/2022_D/img43.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#44 Consider the following question below ? <br><img src="images/2022_D/img44.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#45 Consider the following question below ? <br><img src="images/2022_D/img45.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#46 Consider the following question below ? <br><img src="images/2022_D/img46.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#47 Consider the following question below ? <br><img src="images/2022_D/img47.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#48 Consider the following question below ? <br><img src="images/2022_D/img48.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#49 Consider the following question below ? <br><img src="images/2022_D/img49.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#50 Consider the following question below ? <br><img src="images/2022_D/img50.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#51 Consider the following question below ? <br><img src="images/2022_D/img51.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#52 Consider the following question below ? <br><img src="images/2022_D/img52.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#53 Consider the following question below ? <br><img src="images/2022_D/img53.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#54 Consider the following question below ? <br><img src="images/2022_D/img54.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#55 Consider the following question below ? <br><img src="images/2022_D/img55.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#56 Consider the following question below ? <br><img src="images/2022_D/img56.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#57 Consider the following question below ? <br><img src="images/2022_D/img57.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#58 Consider the following question below ? <br><img src="images/2022_D/img58.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#59 Consider the following question below ? <br><img src="images/2022_D/img59.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#60 Consider the following question below ? <br><img src="images/2022_D/img60.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#61 Consider the following question below ? <br><img src="images/2022_D/img61.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#62 Consider the following question below ? <br><img src="images/2022_D/img62.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#63 Consider the following question below ? <br><img src="images/2022_D/img63.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#64 Consider the following question below ? <br><img src="images/2022_D/img64.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#65 Consider the following question below ? <br><img src="images/2022_D/img65.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#66 Consider the following question below ? <br><img src="images/2022_D/img66.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#67 Consider the following question below ? <br><img src="images/2022_D/img67.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#68 Consider the following question below ? <br><img src="images/2022_D/img68.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#69 Consider the following question below ? <br><img src="images/2022_D/img69.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#70 Consider the following question below ? <br><img src="images/2022_D/img70.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#71 Consider the following question below ? <br><img src="images/2022_D/img71.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#72 Consider the following question below ? <br><img src="images/2022_D/img72.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#73 Consider the following question below ? <br><img src="images/2022_D/img73.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 01, markedForReview: false, answer: null },
{ q: '#74 Consider the following question below ? <br><img src="images/2022_D/img74.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#75 Consider the following question below ? <br><img src="images/2022_D/img75.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#76 Consider the following question below ? <br><img src="images/2022_D/img76.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#77 Consider the following question below ? <br><img src="images/2022_D/img77.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#78 Consider the following question below ? <br><img src="images/2022_D/img78.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#79 Consider the following question below ? <br><img src="images/2022_D/img79.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#80 Consider the following question below ? <br><img src="images/2022_D/img80.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#81 Consider the following question below ? <br><img src="images/2022_D/img81.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#82 Consider the following question below ? <br><img src="images/2022_D/img82.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#83 Consider the following question below ? <br><img src="images/2022_D/img83.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#84 Consider the following question below ? <br><img src="images/2022_D/img84.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#85 Consider the following question below ? <br><img src="images/2022_D/img85.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#86 Consider the following question below ? <br><img src="images/2022_D/img86.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#87 Consider the following question below ? <br><img src="images/2022_D/img87.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#88 Consider the following question below ? <br><img src="images/2022_D/img88.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#89 Consider the following question below ? <br><img src="images/2022_D/img89.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#90 Consider the following question below ? <br><img src="images/2022_D/img90.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#91 Consider the following question below ? <br><img src="images/2022_D/img91.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#92 Consider the following question below ? <br><img src="images/2022_D/img92.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#93 Consider the following question below ? <br><img src="images/2022_D/img93.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#94 Consider the following question below ? <br><img src="images/2022_D/img94.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#95 Consider the following question below ? <br><img src="images/2022_D/img95.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0123, markedForReview: false, answer: null },
{ q: '#96 Consider the following question below ? <br><img src="images/2022_D/img96.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#97 Consider the following question below ? <br><img src="images/2022_D/img97.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#98 Consider the following question below ? <br><img src="images/2022_D/img98.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#99 Consider the following question below ? <br><img src="images/2022_D/img99.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0123, markedForReview: false, answer: null },
{ q: '#100 Consider the following question below ? <br><img src="images/2022_D/img100.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0123, markedForReview: false, answer: null }



  ],

  "Computer Science - Paper 2 - Jul 2023": [

    { q: '#1 Consider the following question below ? <br><img src="images/2023_J/img1.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#2 Consider the following question below ? <br><img src="images/2023_J/img2.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#3 Consider the following question below ? <br><img src="images/2023_J/img3.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#4 Consider the following question below ? <br><img src="images/2023_J/img4.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#5 Consider the following question below ? <br><img src="images/2023_J/img5.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#6 Consider the following question below ? <br><img src="images/2023_J/img6.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#7 Consider the following question below ? <br><img src="images/2023_J/img7.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#8 Consider the following question below ? <br><img src="images/2023_J/img8.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#9 Consider the following question below ? <br><img src="images/2023_J/img9.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#10 Consider the following question below ? <br><img src="images/2023_J/img10.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#11 Consider the following question below ? <br><img src="images/2023_J/img11.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#12 Consider the following question below ? <br><img src="images/2023_J/img12.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#13 Consider the following question below ? <br><img src="images/2023_J/img13.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#14 Consider the following question below ? <br><img src="images/2023_J/img14.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#15 Consider the following question below ? <br><img src="images/2023_J/img15.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#16 Consider the following question below ? <br><img src="images/2023_J/img16.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#17 Consider the following question below ? <br><img src="images/2023_J/img17.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#18 Consider the following question below ? <br><img src="images/2023_J/img18.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#19 Consider the following question below ? <br><img src="images/2023_J/img19.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#20 Consider the following question below ? <br><img src="images/2023_J/img20.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#21 Consider the following question below ? <br><img src="images/2023_J/img21.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#22 Consider the following question below ? <br><img src="images/2023_J/img22.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#23 Consider the following question below ? <br><img src="images/2023_J/img23.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#24 Consider the following question below ? <br><img src="images/2023_J/img24.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#25 Consider the following question below ? <br><img src="images/2023_J/img25.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#26 Consider the following question below ? <br><img src="images/2023_J/img26.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#27 Consider the following question below ? <br><img src="images/2023_J/img27.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#28 Consider the following question below ? <br><img src="images/2023_J/img28.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#29 Consider the following question below ? <br><img src="images/2023_J/img29.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#30 Consider the following question below ? <br><img src="images/2023_J/img30.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#31 Consider the following question below ? <br><img src="images/2023_J/img31.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#32 Consider the following question below ? <br><img src="images/2023_J/img32.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#33 Consider the following question below ? <br><img src="images/2023_J/img33.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#34 Consider the following question below ? <br><img src="images/2023_J/img34.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#35 Consider the following question below ? <br><img src="images/2023_J/img35.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#36 Consider the following question below ? <br><img src="images/2023_J/img36.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#37 Consider the following question below ? <br><img src="images/2023_J/img37.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#38 Consider the following question below ? <br><img src="images/2023_J/img38.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#39 Consider the following question below ? <br><img src="images/2023_J/img39.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#40 Consider the following question below ? <br><img src="images/2023_J/img40.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#41 Consider the following question below ? <br><img src="images/2023_J/img41.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#42 Consider the following question below ? <br><img src="images/2023_J/img42.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0123, markedForReview: false, answer: null },
{ q: '#43 Consider the following question below ? <br><img src="images/2023_J/img43.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#44 Consider the following question below ? <br><img src="images/2023_J/img44.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#45 Consider the following question below ? <br><img src="images/2023_J/img45.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#46 Consider the following question below ? <br><img src="images/2023_J/img46.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#47 Consider the following question below ? <br><img src="images/2023_J/img47.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#48 Consider the following question below ? <br><img src="images/2023_J/img48.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0123, markedForReview: false, answer: null },
{ q: '#49 Consider the following question below ? <br><img src="images/2023_J/img49.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#50 Consider the following question below ? <br><img src="images/2023_J/img50.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#51 Consider the following question below ? <br><img src="images/2023_J/img51.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#52 Consider the following question below ? <br><img src="images/2023_J/img52.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#53 Consider the following question below ? <br><img src="images/2023_J/img53.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#54 Consider the following question below ? <br><img src="images/2023_J/img54.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#55 Consider the following question below ? <br><img src="images/2023_J/img55.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#56 Consider the following question below ? <br><img src="images/2023_J/img56.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#57 Consider the following question below ? <br><img src="images/2023_J/img57.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#58 Consider the following question below ? <br><img src="images/2023_J/img58.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#59 Consider the following question below ? <br><img src="images/2023_J/img59.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#60 Consider the following question below ? <br><img src="images/2023_J/img60.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#61 Consider the following question below ? <br><img src="images/2023_J/img61.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#62 Consider the following question below ? <br><img src="images/2023_J/img62.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#63 Consider the following question below ? <br><img src="images/2023_J/img63.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#64 Consider the following question below ? <br><img src="images/2023_J/img64.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#65 Consider the following question below ? <br><img src="images/2023_J/img65.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#66 Consider the following question below ? <br><img src="images/2023_J/img66.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#67 Consider the following question below ? <br><img src="images/2023_J/img67.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#68 Consider the following question below ? <br><img src="images/2023_J/img68.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#69 Consider the following question below ? <br><img src="images/2023_J/img69.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#70 Consider the following question below ? <br><img src="images/2023_J/img70.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#71 Consider the following question below ? <br><img src="images/2023_J/img71.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#72 Consider the following question below ? <br><img src="images/2023_J/img72.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#73 Consider the following question below ? <br><img src="images/2023_J/img73.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#74 Consider the following question below ? <br><img src="images/2023_J/img74.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#75 Consider the following question below ? <br><img src="images/2023_J/img75.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#76 Consider the following question below ? <br><img src="images/2023_J/img76.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#77 Consider the following question below ? <br><img src="images/2023_J/img77.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#78 Consider the following question below ? <br><img src="images/2023_J/img78.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#79 Consider the following question below ? <br><img src="images/2023_J/img79.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#80 Consider the following question below ? <br><img src="images/2023_J/img80.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#81 Consider the following question below ? <br><img src="images/2023_J/img81.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#82 Consider the following question below ? <br><img src="images/2023_J/img82.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#83 Consider the following question below ? <br><img src="images/2023_J/img83.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#84 Consider the following question below ? <br><img src="images/2023_J/img84.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#85 Consider the following question below ? <br><img src="images/2023_J/img85.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#86 Consider the following question below ? <br><img src="images/2023_J/img86.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#87 Consider the following question below ? <br><img src="images/2023_J/img87.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#88 Consider the following question below ? <br><img src="images/2023_J/img88.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#89 Consider the following question below ? <br><img src="images/2023_J/img89.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#90 Consider the following question below ? <br><img src="images/2023_J/img90.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#91 Consider the following question below ? <br><img src="images/2023_J/img91.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#92 Consider the following question below ? <br><img src="images/2023_J/img92.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#93 Consider the following question below ? <br><img src="images/2023_J/img93.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#94 Consider the following question below ? <br><img src="images/2023_J/img94.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#95 Consider the following question below ? <br><img src="images/2023_J/img95.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
{ q: '#96 Consider the following question below ? <br><img src="images/2023_J/img96.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
{ q: '#97 Consider the following question below ? <br><img src="images/2023_J/img97.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#98 Consider the following question below ? <br><img src="images/2023_J/img98.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
{ q: '#99 Consider the following question below ? <br><img src="images/2023_J/img99.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
{ q: '#100 Consider the following question below ? <br><img src="images/2023_J/img100.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null }



  ],


  "Computer Science - Paper 2 - Dec 2023": [
    { q: '#1 Consider the following question below ? <br><img src="images/2023_D/img1.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#2 Consider the following question below ? <br><img src="images/2023_D/img2.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#3 Consider the following question below ? <br><img src="images/2023_D/img3.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#4 Consider the following question below ? <br><img src="images/2023_D/img4.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#5 Consider the following question below ? <br><img src="images/2023_D/img5.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#6 Consider the following question below ? <br><img src="images/2023_D/img6.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#7 Consider the following question below ? <br><img src="images/2023_D/img7.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#8 Consider the following question below ? <br><img src="images/2023_D/img8.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#9 Consider the following question below ? <br><img src="images/2023_D/img9.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#10 Consider the following question below ? <br><img src="images/2023_D/img10.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#11 Consider the following question below ? <br><img src="images/2023_D/img11.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#12 Consider the following question below ? <br><img src="images/2023_D/img12.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#13 Consider the following question below ? <br><img src="images/2023_D/img13.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#14 Consider the following question below ? <br><img src="images/2023_D/img14.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#15 Consider the following question below ? <br><img src="images/2023_D/img15.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#16 Consider the following question below ? <br><img src="images/2023_D/img16.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#17 Consider the following question below ? <br><img src="images/2023_D/img17.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#18 Consider the following question below ? <br><img src="images/2023_D/img18.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#19 Consider the following question below ? <br><img src="images/2023_D/img19.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#20 Consider the following question below ? <br><img src="images/2023_D/img20.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#21 Consider the following question below ? <br><img src="images/2023_D/img21.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#22 Consider the following question below ? <br><img src="images/2023_D/img22.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#23 Consider the following question below ? <br><img src="images/2023_D/img23.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#24 Consider the following question below ? <br><img src="images/2023_D/img24.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#25 Consider the following question below ? <br><img src="images/2023_D/img25.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#26 Consider the following question below ? <br><img src="images/2023_D/img26.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#27 Consider the following question below ? <br><img src="images/2023_D/img27.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#28 Consider the following question below ? <br><img src="images/2023_D/img28.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#29 Consider the following question below ? <br><img src="images/2023_D/img29.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#30 Consider the following question below ? <br><img src="images/2023_D/img30.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#31 Consider the following question below ? <br><img src="images/2023_D/img31.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#32 Consider the following question below ? <br><img src="images/2023_D/img32.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#33 Consider the following question below ? <br><img src="images/2023_D/img33.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#34 Consider the following question below ? <br><img src="images/2023_D/img34.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#35 Consider the following question below ? <br><img src="images/2023_D/img35.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#36 Consider the following question below ? <br><img src="images/2023_D/img36.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#37 Consider the following question below ? <br><img src="images/2023_D/img37.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#38 Consider the following question below ? <br><img src="images/2023_D/img38.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#39 Consider the following question below ? <br><img src="images/2023_D/img39.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#40 Consider the following question below ? <br><img src="images/2023_D/img40.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#41 Consider the following question below ? <br><img src="images/2023_D/img41.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#42 Consider the following question below ? <br><img src="images/2023_D/img42.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#43 Consider the following question below ? <br><img src="images/2023_D/img43.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#44 Consider the following question below ? <br><img src="images/2023_D/img44.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#45 Consider the following question below ? <br><img src="images/2023_D/img45.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#46 Consider the following question below ? <br><img src="images/2023_D/img46.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#47 Consider the following question below ? <br><img src="images/2023_D/img47.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#48 Consider the following question below ? <br><img src="images/2023_D/img48.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#49 Consider the following question below ? <br><img src="images/2023_D/img49.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#50 Consider the following question below ? <br><img src="images/2023_D/img50.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#51 Consider the following question below ? <br><img src="images/2023_D/img51.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#52 Consider the following question below ? <br><img src="images/2023_D/img52.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#53 Consider the following question below ? <br><img src="images/2023_D/img53.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#54 Consider the following question below ? <br><img src="images/2023_D/img54.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#55 Consider the following question below ? <br><img src="images/2023_D/img55.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#56 Consider the following question below ? <br><img src="images/2023_D/img56.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#57 Consider the following question below ? <br><img src="images/2023_D/img57.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#58 Consider the following question below ? <br><img src="images/2023_D/img58.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#59 Consider the following question below ? <br><img src="images/2023_D/img59.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#60 Consider the following question below ? <br><img src="images/2023_D/img60.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#61 Consider the following question below ? <br><img src="images/2023_D/img61.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#62 Consider the following question below ? <br><img src="images/2023_D/img62.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#63 Consider the following question below ? <br><img src="images/2023_D/img63.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#64 Consider the following question below ? <br><img src="images/2023_D/img64.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#65 Consider the following question below ? <br><img src="images/2023_D/img65.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#66 Consider the following question below ? <br><img src="images/2023_D/img66.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#67 Consider the following question below ? <br><img src="images/2023_D/img67.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#68 Consider the following question below ? <br><img src="images/2023_D/img68.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#69 Consider the following question below ? <br><img src="images/2023_D/img69.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#70 Consider the following question below ? <br><img src="images/2023_D/img70.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#71 Consider the following question below ? <br><img src="images/2023_D/img71.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#72 Consider the following question below ? <br><img src="images/2023_D/img72.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#73 Consider the following question below ? <br><img src="images/2023_D/img73.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#74 Consider the following question below ? <br><img src="images/2023_D/img74.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#75 Consider the following question below ? <br><img src="images/2023_D/img75.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#76 Consider the following question below ? <br><img src="images/2023_D/img76.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#77 Consider the following question below ? <br><img src="images/2023_D/img77.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#78 Consider the following question below ? <br><img src="images/2023_D/img78.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#79 Consider the following question below ? <br><img src="images/2023_D/img79.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#80 Consider the following question below ? <br><img src="images/2023_D/img80.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#81 Consider the following question below ? <br><img src="images/2023_D/img81.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#82 Consider the following question below ? <br><img src="images/2023_D/img82.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#83 Consider the following question below ? <br><img src="images/2023_D/img83.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#84 Consider the following question below ? <br><img src="images/2023_D/img84.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#85 Consider the following question below ? <br><img src="images/2023_D/img85.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#86 Consider the following question below ? <br><img src="images/2023_D/img86.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#87 Consider the following question below ? <br><img src="images/2023_D/img87.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#88 Consider the following question below ? <br><img src="images/2023_D/img88.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#89 Consider the following question below ? <br><img src="images/2023_D/img89.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#90 Consider the following question below ? <br><img src="images/2023_D/img90.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#91 Consider the following question below ? <br><img src="images/2023_D/img91.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#92 Consider the following question below ? <br><img src="images/2023_D/img92.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#93 Consider the following question below ? <br><img src="images/2023_D/img93.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#94 Consider the following question below ? <br><img src="images/2023_D/img94.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#95 Consider the following question below ? <br><img src="images/2023_D/img95.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#96 Consider the following question below ? <br><img src="images/2023_D/img96.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#97 Consider the following question below ? <br><img src="images/2023_D/img97.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#98 Consider the following question below ? <br><img src="images/2023_D/img98.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#99 Consider the following question below ? <br><img src="images/2023_D/img99.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#100 Consider the following question below ? <br><img src="images/2023_D/img100.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null }
  ],


  "Computer Science - Paper 2 - Jul 2024": [
    
    { q: '#1 Consider the following question below ? <br><img src="images/2024_J/img1.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#2 Consider the following question below ? <br><img src="images/2024_J/img2.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#3 Consider the following question below ? <br><img src="images/2024_J/img3.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#4 Consider the following question below ? <br><img src="images/2024_J/img4.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#5 Consider the following question below ? <br><img src="images/2024_J/img5.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#6 Consider the following question below ? <br><img src="images/2024_J/img6.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#7 Consider the following question below ? <br><img src="images/2024_J/img7.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#8 Consider the following question below ? <br><img src="images/2024_J/img8.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#9 Consider the following question below ? <br><img src="images/2024_J/img9.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#10 Consider the following question below ? <br><img src="images/2024_J/img10.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#11 Consider the following question below ? <br><img src="images/2024_J/img11.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#12 Consider the following question below ? <br><img src="images/2024_J/img12.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#13 Consider the following question below ? <br><img src="images/2024_J/img13.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 03, markedForReview: false, answer: null },
    { q: '#14 Consider the following question below ? <br><img src="images/2024_J/img14.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#15 Consider the following question below ? <br><img src="images/2024_J/img15.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#16 Consider the following question below ? <br><img src="images/2024_J/img16.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#17 Consider the following question below ? <br><img src="images/2024_J/img17.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#18 Consider the following question below ? <br><img src="images/2024_J/img18.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#19 Consider the following question below ? <br><img src="images/2024_J/img19.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#20 Consider the following question below ? <br><img src="images/2024_J/img20.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#21 Consider the following question below ? <br><img src="images/2024_J/img21.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#22 Consider the following question below ? <br><img src="images/2024_J/img22.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#23 Consider the following question below ? <br><img src="images/2024_J/img23.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#24 Consider the following question below ? <br><img src="images/2024_J/img24.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#25 Consider the following question below ? <br><img src="images/2024_J/img25.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#26 Consider the following question below ? <br><img src="images/2024_J/img26.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#27 Consider the following question below ? <br><img src="images/2024_J/img27.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#28 Consider the following question below ? <br><img src="images/2024_J/img28.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#29 Consider the following question below ? <br><img src="images/2024_J/img29.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#30 Consider the following question below ? <br><img src="images/2024_J/img30.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#31 Consider the following question below ? <br><img src="images/2024_J/img31.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#32 Consider the following question below ? <br><img src="images/2024_J/img32.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#33 Consider the following question below ? <br><img src="images/2024_J/img33.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#34 Consider the following question below ? <br><img src="images/2024_J/img34.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#35 Consider the following question below ? <br><img src="images/2024_J/img35.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#36 Consider the following question below ? <br><img src="images/2024_J/img36.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#37 Consider the following question below ? <br><img src="images/2024_J/img37.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#38 Consider the following question below ? <br><img src="images/2024_J/img38.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#39 Consider the following question below ? <br><img src="images/2024_J/img39.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#40 Consider the following question below ? <br><img src="images/2024_J/img40.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#41 Consider the following question below ? <br><img src="images/2024_J/img41.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#42 Consider the following question below ? <br><img src="images/2024_J/img42.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#43 Consider the following question below ? <br><img src="images/2024_J/img43.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#44 Consider the following question below ? <br><img src="images/2024_J/img44.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#45 Consider the following question below ? <br><img src="images/2024_J/img45.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#46 Consider the following question below ? <br><img src="images/2024_J/img46.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#47 Consider the following question below ? <br><img src="images/2024_J/img47.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#48 Consider the following question below ? <br><img src="images/2024_J/img48.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#49 Consider the following question below ? <br><img src="images/2024_J/img49.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#50 Consider the following question below ? <br><img src="images/2024_J/img50.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#51 Consider the following question below ? <br><img src="images/2024_J/img51.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#52 Consider the following question below ? <br><img src="images/2024_J/img52.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#53 Consider the following question below ? <br><img src="images/2024_J/img53.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#54 Consider the following question below ? <br><img src="images/2024_J/img54.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#55 Consider the following question below ? <br><img src="images/2024_J/img55.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#56 Consider the following question below ? <br><img src="images/2024_J/img56.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#57 Consider the following question below ? <br><img src="images/2024_J/img57.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#58 Consider the following question below ? <br><img src="images/2024_J/img58.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#59 Consider the following question below ? <br><img src="images/2024_J/img59.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#60 Consider the following question below ? <br><img src="images/2024_J/img60.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#61 Consider the following question below ? <br><img src="images/2024_J/img61.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#62 Consider the following question below ? <br><img src="images/2024_J/img62.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#63 Consider the following question below ? <br><img src="images/2024_J/img63.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#64 Consider the following question below ? <br><img src="images/2024_J/img64.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#65 Consider the following question below ? <br><img src="images/2024_J/img65.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#66 Consider the following question below ? <br><img src="images/2024_J/img66.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#67 Consider the following question below ? <br><img src="images/2024_J/img67.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#68 Consider the following question below ? <br><img src="images/2024_J/img68.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#69 Consider the following question below ? <br><img src="images/2024_J/img69.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#70 Consider the following question below ? <br><img src="images/2024_J/img70.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#71 Consider the following question below ? <br><img src="images/2024_J/img71.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#72 Consider the following question below ? <br><img src="images/2024_J/img72.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#73 Consider the following question below ? <br><img src="images/2024_J/img73.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#74 Consider the following question below ? <br><img src="images/2024_J/img74.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#75 Consider the following question below ? <br><img src="images/2024_J/img75.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#76 Consider the following question below ? <br><img src="images/2024_J/img76.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#77 Consider the following question below ? <br><img src="images/2024_J/img77.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#78 Consider the following question below ? <br><img src="images/2024_J/img78.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#79 Consider the following question below ? <br><img src="images/2024_J/img79.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#80 Consider the following question below ? <br><img src="images/2024_J/img80.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#81 Consider the following question below ? <br><img src="images/2024_J/img81.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#82 Consider the following question below ? <br><img src="images/2024_J/img82.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#83 Consider the following question below ? <br><img src="images/2024_J/img83.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#84 Consider the following question below ? <br><img src="images/2024_J/img84.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#85 Consider the following question below ? <br><img src="images/2024_J/img85.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#86 Consider the following question below ? <br><img src="images/2024_J/img86.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#87 Consider the following question below ? <br><img src="images/2024_J/img87.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#88 Consider the following question below ? <br><img src="images/2024_J/img88.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#89 Consider the following question below ? <br><img src="images/2024_J/img89.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#90 Consider the following question below ? <br><img src="images/2024_J/img90.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#91 Consider the following question below ? <br><img src="images/2024_J/img91.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#92 Consider the following question below ? <br><img src="images/2024_J/img92.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#93 Consider the following question below ? <br><img src="images/2024_J/img93.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#94 Consider the following question below ? <br><img src="images/2024_J/img94.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#95 Consider the following question below ? <br><img src="images/2024_J/img95.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#96 Consider the following question below ? <br><img src="images/2024_J/img96.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#97 Consider the following question below ? <br><img src="images/2024_J/img97.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#98 Consider the following question below ? <br><img src="images/2024_J/img98.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#99 Consider the following question below ? <br><img src="images/2024_J/img99.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#100 Consider the following question below ? <br><img src="images/2024_J/img100.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null }



  ],


  "Computer Science - Paper 2 - Dec 2024": [
    
    { q: '#1 Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#2 Consider the following question below ? <br><img src="images/2024_D/img2.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0123, markedForReview: false, answer: null },
    { q: '#3 Consider the following question below ? <br><img src="images/2024_D/img3.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#4 Consider the following question below ? <br><img src="images/2024_D/img4.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#5 Consider the following question below ? <br><img src="images/2024_D/img5.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#6 Consider the following question below ? <br><img src="images/2024_D/img6.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#7Consider the following question below ? <br><img src="images/2024_D/img7.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#8 Consider the following question below ? <br><img src="images/2024_D/img8.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#9 Consider the following question below ? <br><img src="images/2024_D/img9.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#10 Consider the following question below ? <br><img src="images/2024_D/img10.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: '#11 Consider the following question below ? <br><img src="images/2024_D/img11.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#12 Consider the following question below ? <br><img src="images/2024_D/img12.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#13 Consider the following question below ? <br><img src="images/2024_D/img13.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#14 Consider the following question below ? <br><img src="images/2024_D/img14.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#15 Consider the following question below ? <br><img src="images/2024_D/img15.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#16 Consider the following question below ? <br><img src="images/2024_D/img16.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#17 Consider the following question below ? <br><img src="images/2024_D/img17.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#18 Consider the following question below ? <br><img src="images/2024_D/img18.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#19 Consider the following question below ? <br><img src="images/2024_D/img19.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#20 Consider the following question below ? <br><img src="images/2024_D/img20.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },

    { q: '#21 Consider the following question below ? <br><img src="images/2024_D/img21.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0123, markedForReview: false, answer: null },
    { q: '#22 Consider the following question below ? <br><img src="images/2024_D/img22.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#23 Consider the following question below ? <br><img src="images/2024_D/img23.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#24 Consider the following question below ? <br><img src="images/2024_D/img24.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#25 Consider the following question below ? <br><img src="images/2024_D/img25.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#26 Consider the following question below ? <br><img src="images/2024_D/img26.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#27 Consider the following question below ? <br><img src="images/2024_D/img27.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#28 Consider the following question below ? <br><img src="images/2024_D/img28.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#29 Consider the following question below ? <br><img src="images/2024_D/img29.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#30 Consider the following question below ? <br><img src="images/2024_D/img30.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },

    { q: '#31 Consider the following question below ? <br><img src="images/2024_D/img31.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#32 Consider the following question below ? <br><img src="images/2024_D/img32.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#33 Consider the following question below ? <br><img src="images/2024_D/img33.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#34 Consider the following question below ? <br><img src="images/2024_D/img34.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#35 Consider the following question below ? <br><img src="images/2024_D/img35.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#36 Consider the following question below ? <br><img src="images/2024_D/img36.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#37 Consider the following question below ? <br><img src="images/2024_D/img37.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#38 Consider the following question below ? <br><img src="images/2024_D/img38.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#39 Consider the following question below ? <br><img src="images/2024_D/img39.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#40 Consider the following question below ? <br><img src="images/2024_D/img40.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },

    { q: '#41 Consider the following question below ? <br><img src="images/2024_D/img41.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#42 Consider the following question below ? <br><img src="images/2024_D/img42.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#43 Consider the following question below ? <br><img src="images/2024_D/img43.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#44 Consider the following question below ? <br><img src="images/2024_D/img44.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#45 Consider the following question below ? <br><img src="images/2024_D/img45.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#46 Consider the following question below ? <br><img src="images/2024_D/img46.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#47 Consider the following question below ? <br><img src="images/2024_D/img47.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#48 Consider the following question below ? <br><img src="images/2024_D/img48.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#49 Consider the following question below ? <br><img src="images/2024_D/img49.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#50 Consider the following question below ? <br><img src="images/2024_D/img50.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#51 Consider the following question below ? <br><img src="images/2024_D/img51.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#52 Consider the following question below ? <br><img src="images/2024_D/img52.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#53 Consider the following question below ? <br><img src="images/2024_D/img53.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#54 Consider the following question below ? <br><img src="images/2024_D/img54.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0123, markedForReview: false, answer: null },
    { q: '#55 Consider the following question below ? <br><img src="images/2024_D/img55.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#56 Consider the following question below ? <br><img src="images/2024_D/img56.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#57 Consider the following question below ? <br><img src="images/2024_D/img57.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#58 Consider the following question below ? <br><img src="images/2024_D/img58.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#59 Consider the following question below ? <br><img src="images/2024_D/img59.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#60 Consider the following question below ? <br><img src="images/2024_D/img60.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: '#61 Consider the following question below ? <br><img src="images/2024_D/img61.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#62 Consider the following question below ? <br><img src="images/2024_D/img62.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#63 Consider the following question below ? <br><img src="images/2024_D/img63.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#64 Consider the following question below ? <br><img src="images/2024_D/img64.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#65 Consider the following question below ? <br><img src="images/2024_D/img65.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#66 Consider the following question below ? <br><img src="images/2024_D/img66.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#67 Consider the following question below ? <br><img src="images/2024_D/img67.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#68 Consider the following question below ? <br><img src="images/2024_D/img68.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#69 Consider the following question below ? <br><img src="images/2024_D/img69.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#70 Consider the following question below ? <br><img src="images/2024_D/img70.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },

    { q: '#71 Consider the following question below ? <br><img src="images/2024_D/img71.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#72 Consider the following question below ? <br><img src="images/2024_D/img72.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#73 Consider the following question below ? <br><img src="images/2024_D/img73.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#74 Consider the following question below ? <br><img src="images/2024_D/img74.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#75 Consider the following question below ? <br><img src="images/2024_D/img75.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#76 Consider the following question below ? <br><img src="images/2024_D/img76.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#77 Consider the following question below ? <br><img src="images/2024_D/img77.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#78 Consider the following question below ? <br><img src="images/2024_D/img78.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#79 Consider the following question below ? <br><img src="images/2024_D/img79.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#80 Consider the following question below ? <br><img src="images/2024_D/img80.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },

    { q: '#81 Consider the following question below ? <br><img src="images/2024_D/img81.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#82 Consider the following question below ? <br><img src="images/2024_D/img82.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#83 Consider the following question below ? <br><img src="images/2024_D/img83.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#84 Consider the following question below ? <br><img src="images/2024_D/img84.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#85 Consider the following question below ? <br><img src="images/2024_D/img85.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#86 Consider the following question below ? <br><img src="images/2024_D/img86.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#87 Consider the following question below ? <br><img src="images/2024_D/img87.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#88 Consider the following question below ? <br><img src="images/2024_D/img88.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#89 Consider the following question below ? <br><img src="images/2024_D/img89.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#90 Consider the following question below ? <br><img src="images/2024_D/img90.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },

    { q: '#91 Consider the following question below ? <br><img src="images/2024_D/img91.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0123, markedForReview: false, answer: null },
    { q: '#92 Consider the following question below ? <br><img src="images/2024_D/img92.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#93 Consider the following question below ? <br><img src="images/2024_D/img93.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#94 Consider the following question below ? <br><img src="images/2024_D/img94.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#95 Consider the following question below ? <br><img src="images/2024_D/img95.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#96 Consider the following question below ? <br><img src="images/2024_D/img96.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 3, markedForReview: false, answer: null },
    { q: '#97 Consider the following question below ? <br><img src="images/2024_D/img97.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 0, markedForReview: false, answer: null },
    { q: '#98 Consider the following question below ? <br><img src="images/2024_D/img98.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: '#99 Consider the following question below ? <br><img src="images/2024_D/img99.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
    { q: '#100 Consider the following question below ? <br><img src="images/2024_J/img100.jpg" width="600">', options: ["A", "B", "C", "D"], correct: 2, markedForReview: false, answer: null },
  ],


  "Computer Science - Paper 2 - Jul 2025": [
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null }
  ],


  "Computer Science - Paper 2 - Dec 2025": [
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },

    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null },
    { q: 'Consider the following question below ? <br><img src="images/2024_D/img1.jpg" width="200">', options: ["A", "B", "C", "D"], correct: 1, markedForReview: false, answer: null }
  ]


  // Repeat for each paper till 2025
};























function showLogin() {
  selectedPaper = document.getElementById('paperSelect').value;
  document.getElementById('paper-selection').classList.add('hidden');
  document.getElementById('login-section').classList.remove('hidden');
}

function showInstructions() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if (user && pass) {
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('instruction-section').classList.remove('hidden');
  } else {
    alert("Please enter username and password");
  }
}

// Modified: Start exam now shows language selection first
function startExam() {
  if (!document.getElementById('agree').checked) {
    alert("Please accept instructions to proceed");
    return;
  }
  document.getElementById('instruction-section').classList.add('hidden');
  document.getElementById('language-selection').classList.remove('hidden');
}

// Launch actual exam after selecting language
function launchExam() {
  const selectedLang = document.getElementById("languageDropdown").value;
  localStorage.setItem("examLanguage", selectedLang);
  document.getElementById('language-selection').classList.add('hidden');
  document.getElementById('exam-section').classList.remove('hidden');
  // ✅ Show question status section now
  document.getElementById('question-status').classList.remove('hidden');
  if (questionBank[selectedPaper]) {
  questions = questionBank[selectedPaper];
} else {
  alert("Questions not available for the selected paper.");
  return;
}
  renderPalette();
  showQuestion();
  console.log("Starting timer...");
  startTimer(7200); // 2 hours
}








function startTimer(duration) {
  let timer = duration;
  const timerElement = document.getElementById("timer");

  timerInterval = setInterval(() => {
    const hours = String(Math.floor(timer / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((timer % 3600) / 60)).padStart(2, '0');
    const seconds = String(timer % 60).padStart(2, '0');

    console.log(`Timer tick: ${hours}:${minutes}:${seconds}`);
    document.getElementById("timer").textContent = `${hours}:${minutes}:${seconds}`;

    if (timerElement) {
      timerElement.textContent = `${hours}:${minutes}:${seconds}`;
      console.log(`Timer tick: ${hours}:${minutes}:${seconds}`); // Debug output
    }

    if (--timer < 0) {
      clearInterval(timerInterval);
      alert("Time's up! Exam ended.");
      // Optionally auto-submit
      submitExam();
    }
  }, 1000);
}


/*
function startTimer(duration) {
  let timer = duration;
  const timerElement = document.getElementById("timer");

  timerInterval = setInterval(() => {
    const hours = String(Math.floor(timer / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((timer % 3600) / 60)).padStart(2, '0');
    const seconds = String(timer % 60).padStart(2, '0');

    if (timerElement) {
      timerElement.textContent = `${hours}:${minutes}:${seconds}`;
      console.log(`Timer tick: ${hours}:${minutes}:${seconds}`); // Debug output
    }

    if (--timer < 0) {
      clearInterval(timerInterval);
      alert("Time's up! Exam ended.");
      // Optionally auto-submit
      // submitExam();
    }
  }, 1000);
}
*/

/*
// Timer
function startTimer(duration) {
  let timer = duration;
  //if (timerInterval) clearInterval(timerInterval); // Prevent duplicates
  timerInterval = setInterval(() => {
    const hours = String(Math.floor(timer / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((timer % 3600) / 60)).padStart(2, '0');
    const seconds = String(timer % 60).padStart(2, '0');
    document.getElementById("timer").textContent = `${hours}:${minutes}:${seconds}`;
    
    //const timerElement = document.getElementById("timer");
    //if (timerElement) {
      //timerElement.textContent = `${hours}:${minutes}:${seconds}`;
    //}  


    if (--timer < 0) {
      clearInterval(timerInterval);
      alert("Time's up! Exam ended.");
      //submitExam(); // Optional: auto-submit exam
    }
  }, 1000);
}
*/  

/*
// Show question content
function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("questionNum").textContent = currentQuestion + 1;
  document.getElementById("questionText").textContent = q.q;
  document.getElementById("label1").textContent = q.options[0];
  document.getElementById("label2").textContent = q.options[1];
  document.getElementById("label3").textContent = q.options[2];
  document.getElementById("label4").textContent = q.options[3];


  // Clear all options first
  document.querySelectorAll('input[name="option"]').forEach(el => {
    el.checked = false;
  });

  // Restore answer only for this question if previously selected
  if (q.answer !== null) {
    document.getElementById(`option${q.answer + 1}`).checked = true;
  }

  // Update status if it's first visit

  // Update status if first time visiting
  if (questionStatus[currentQuestion] === 'not-visited') {
    updateStatus(currentQuestion, 'not-answered');
  }
  
  // Restore selected option if any
  document.querySelectorAll('input[name="option"]').forEach((el, i) => {
    el.checked = (q.answer === i);
  });
}

*/



function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("questionNum").textContent = currentQuestion + 1;
  document.getElementById("questionText").innerHTML = q.q;
  document.getElementById("label1").textContent = q.options[0];
  document.getElementById("label2").textContent = q.options[1];
  document.getElementById("label3").textContent = q.options[2];
  document.getElementById("label4").textContent = q.options[3];

  // Clear all selections
  document.querySelectorAll('input[name="option"]').forEach(el => el.checked = false);

  // Restore answer if available
  //if (q.answer !== null) {
  if (q.answer !== null && q.answer !== undefined) {
    const optionRadio = document.getElementById(`option${q.answer + 1}`);
    if (optionRadio) {
      optionRadio.checked = true;
      //document.getElementById(`option${q.answer + 1}`).checked = true;
    }  
  }

  // Mark as visited
  if (questionStatus[currentQuestion] === 'not-visited') {
    updateStatus(currentQuestion, 'not-answered');
  }
}




/*
// Save answer when user selects an option
function selectOption(index) {
  questions[currentQuestion].answer = index;
  questions[currentQuestion].markedForReview = false;
  updateStatus(currentQuestion, 'answered');
}
*/



function selectOption(index) {
  questions[currentQuestion].answer = index;
  questions[currentQuestion].markedForReview = false;
  updateStatus(currentQuestion, 'answered');
}









// Mark question for review
function markForReview() {
  if (questions[currentQuestion].answer !== null) {
    updateStatus(currentQuestion, 'review-answered');
  } else {
    updateStatus(currentQuestion, 'review');
  }
  questions[currentQuestion].markedForReview = true;
}

// Clear response
function clearResponse() {
  questions[currentQuestion].answer = null;
  questions[currentQuestion].markedForReview = false;
  updateStatus(currentQuestion, 'not-answered');
  document.querySelectorAll('input[name="option"]').forEach(el => el.checked = false);
}

// Navigate to next question
function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  }
}

// Navigate to previous question
function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
}

// Render the 200 question palette
function renderPalette() {
  const palette = document.getElementById("question-palette");
  palette.innerHTML = "";
  for (let i = 0; i < 100; i++) {
    const btn = document.createElement("button");
    btn.textContent = String(i + 1).padStart(2, '0');
    btn.classList.add(questionStatus[i]);
    btn.onclick = () => {
      currentQuestion = i;
      showQuestion();
    };
    btn.id = `qbtn-${i}`;
    palette.appendChild(btn);
  }
}

// Update question status and color
function updateStatus(index, statusClass) {
  questionStatus[index] = statusClass;
  const btn = document.getElementById(`qbtn-${index}`);
  if (btn) {
    btn.className = "";
    btn.classList.add(statusClass);
  }
    updateStatusCounts(); // 🔄 Update counter display
}


/*
function submitExam() {
  clearInterval(timerInterval); // stop timer

  let correct = 0;
  let incorrect = 0;
  let notAttempted = 0;

  questions.forEach(q => {
    if (q.answer === null) {
      notAttempted++;
    } else if (q.answer === q.correct) {
      correct++;
    } else {
      incorrect++;
    }
  });

  // Hide exam
  document.getElementById("exam-section").classList.add("hidden");
  document.getElementById("question-status").classList.add("hidden");

  // Show summary
  document.getElementById("summary-section").classList.remove("hidden");
  document.getElementById("correct-count").textContent = correct;
  document.getElementById("incorrect-count").textContent = incorrect;
  document.getElementById("notattempted-count").textContent = notAttempted;
}


function submitExam() {
  clearInterval(timerInterval);

  let correct = 0;
  let incorrect = 0;
  let notAttempted = 0;

  questions.forEach(q => {
    if (q.answer === null) {
      notAttempted++;
    } else if (Number(q.answer) === Number(q.correct)) {
      correct++;
    } else {
      incorrect++;
    }
  });

  // Hide exam view
  document.getElementById("exam-section").classList.add("hidden");
  document.getElementById("question-status").classList.add("hidden");

  // Show summary
  document.getElementById("summary-section").classList.remove("hidden");
  document.getElementById("correct-count").textContent = correct;
  document.getElementById("incorrect-count").textContent = incorrect;
  document.getElementById("notattempted-count").textContent = notAttempted;
}

*/

function submitExam() {
  clearInterval(timerInterval);

  let correct = 0;
  let incorrect = 0;
  let notAttempted = 0;

  // Clear old grid if needed
  const grid = document.getElementById("question-status-grid");
  grid.innerHTML = "";

  questions.forEach((q, index) => {
    let statusClass = "";
    if (q.answer === null || q.answer === undefined) {
      notAttempted++;
      statusClass = "not-attempted";
    } else if (Number(q.answer) === Number(q.correct)) {
      correct++;
      statusClass = "correct";
    } else {
      incorrect++;
      statusClass = "incorrect";
    }

    const box = document.createElement("div");
    box.textContent = index + 1;
    box.className = `question-box-summary ${statusClass}`;
    grid.appendChild(box);
  });

  // Show count
  document.getElementById("correct-count").textContent = correct;
  document.getElementById("incorrect-count").textContent = incorrect;
  document.getElementById("notattempted-count").textContent = notAttempted;

  // Switch view
  document.getElementById("exam-section").classList.add("hidden");
  document.getElementById("question-status").classList.add("hidden");
  document.getElementById("summary-section").classList.remove("hidden");
}



function updateStatusCounts() {
  const counts = {
    'not-visited': 0,
    'not-answered': 0,
    'answered': 0,
    'review': 0,
    'review-answered': 0
  };

  questionStatus.forEach(status => {
    if (counts[status] !== undefined) {
      counts[status]++;
    }
  });

  document.getElementById("count-not-visited").textContent = counts["not-visited"];
  document.getElementById("count-not-answered").textContent = counts["not-answered"];
  document.getElementById("count-answered").textContent = counts["answered"];
  document.getElementById("count-review").textContent = counts["review"];
  document.getElementById("count-review-answered").textContent = counts["review-answered"];
}








window.addEventListener("load", function() {
  const loader = document.getElementById("preloader");
  const main = document.getElementById("main-content");

  setTimeout(() => {
    loader.style.display = "none";
    main.style.display = "block";
  }, 1500); // Adjust time as needed
});
