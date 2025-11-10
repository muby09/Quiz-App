// DOM element
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const quizQuestions = [
    {
    "question": "Who is the current President of Nigeria?",
    "answers": [
      { "text": "Muhammadu Buhari", "correct": false },
      { "text": "Bola Ahmed Tinubu", "correct": true },
      { "text": "Goodluck Jonathan", "correct": false },
      { "text": "Atiku Abubakar", "correct": false }
    ]
  },
  {
    "question": "Who is Nigeria’s current Vice President?",
    "answers": [
      { "text": "Yemi Osinbajo", "correct": false },
      { "text": "Kashim Shettima", "correct": true },
      { "text": "Peter Obi", "correct": false },
      { "text": "Nasir El-Rufai", "correct": false }
    ]
  },
  {
    "question": "What is the capital city of Nigeria?",
    "answers": [
      { "text": "Lagos", "correct": false },
      { "text": "Abuja", "correct": true },
      { "text": "Kano", "correct": false },
      { "text": "Port Harcourt", "correct": false }
    ]
  },
  {
    "question": "Which year did Nigeria gain independence?",
    "answers": [
      { "text": "1957", "correct": false },
      { "text": "1960", "correct": true },
      { "text": "1963", "correct": false },
      { "text": "1970", "correct": false }
    ]
  },
  {
    "question": "What date is celebrated as Nigeria’s Democracy Day?",
    "answers": [
      { "text": "May 29", "correct": false },
      { "text": "October 1", "correct": false },
      { "text": "June 12", "correct": true },
      { "text": "December 25", "correct": false }
    ]
  },
  {
    "question": "How many states are there in Nigeria?",
    "answers": [
      { "text": "30", "correct": false },
      { "text": "36 and 1 FCT", "correct": true },
      { "text": "37", "correct": false },
      { "text": "35", "correct": false }
    ]
  },
  {
    "question": "How many local government areas are there in Nigeria?",
    "answers": [
      { "text": "774", "correct": true },
      { "text": "700", "correct": false },
      { "text": "750", "correct": false },
      { "text": "800", "correct": false }
    ]
  },
  {
    "question": "What is Nigeria’s official language?",
    "answers": [
      { "text": "Hausa", "correct": false },
      { "text": "Yoruba", "correct": false },
      { "text": "English", "correct": true },
      { "text": "Igbo", "correct": false }
    ]
  },
  {
    "question": "What year was NYSC established?",
    "answers": [
      { "text": "1970", "correct": false },
      { "text": "1973", "correct": true },
      { "text": "1980", "correct": false },
      { "text": "1967", "correct": false }
    ]
  },
  {
    "question": "What is the motto of the NYSC?",
    "answers": [
      { "text": "Unity and Service", "correct": false },
      { "text": "Service and Humility", "correct": true },
      { "text": "Discipline and Honour", "correct": false },
      { "text": "Loyalty and Patriotism", "correct": false }
    ]
  },
  {
    "question": "Who designed the Nigerian flag?",
    "answers": [
      { "text": "Obafemi Awolowo", "correct": false },
      { "text": "Michael Taiwo Akinkunmi", "correct": true },
      { "text": "Nnamdi Azikiwe", "correct": false },
      { "text": "Tafawa Balewa", "correct": false }
    ]
  },
  {
    "question": "What type of government does Nigeria practice?",
    "answers": [
      { "text": "Monarchy", "correct": false },
      { "text": "Confederation", "correct": false },
      { "text": "Federal Republic", "correct": true },
      { "text": "Unitary State", "correct": false }
    ]
  },
  {
    "question": "What does the red eagle on the Nigerian coat of arms represent?",
    "answers": [
      { "text": "Freedom", "correct": false },
      { "text": "Strength", "correct": true },
      { "text": "Unity", "correct": false },
      { "text": "Peace", "correct": false }
    ]
  },
  {
    "question": "What do the green and white colors in Nigeria’s flag stand for?",
    "answers": [
      { "text": "Green for peace, white for agriculture", "correct": false },
      { "text": "Green for agriculture, white for peace", "correct": true },
      { "text": "Green for unity, white for strength", "correct": false },
      { "text": "Green for wealth, white for purity", "correct": false }
    ]
  },
  {
    "question": "Who is Nigeria’s current Inspector General of Police (as of October 2025)?",
    "answers": [
      { "text": "Usman Alkali Baba", "correct": false },
      { "text": "Kayode Egbetokun", "correct": true },
      { "text": "Mohammed Adamu", "correct": false },
      { "text": "Ibrahim Idris", "correct": false }
    ]
  },
  {
    "question": "Who is Nigeria’s current Chief of Defence Staff (appointed October 2025)?",
    "answers": [
      { "text": "Lucky Irabor", "correct": false },
      { "text": "Major General F.O. Umuyede", "correct": true },
      { "text": "Abayomi Olonisakin", "correct": false },
      { "text": "Tukur Buratai", "correct": false }
    ]
  },
  {
    "question": "Who was appointed Nigeria’s new Chief of Army Staff in October 2025?",
    "answers": [
      { "text": "Shaibu I. Abbas", "correct": true },
      { "text": "Faruk Yahaya", "correct": false },
      { "text": "Azubuike Ihejirika", "correct": false },
      { "text": "Kenneth Minimah", "correct": false }
    ]
  },
  {
    "question": "Which organization is Nigeria a founding member of in West Africa?",
    "answers": [
      { "text": "AU", "correct": false },
      { "text": "UN", "correct": false },
      { "text": "ECOWAS", "correct": true },
      { "text": "OPEC", "correct": false }
    ]
  },
  {
    "question": "How many countries are members of ECOWAS?",
    "answers": [
      { "text": "15", "correct": false },
      { "text": "16", "correct": true },
      { "text": "12", "correct": false },
      { "text": "18", "correct": false }
    ]
  },
  {
    "question": "What is Nigeria’s currency called?",
    "answers": [
      { "text": "Cedi", "correct": false },
      { "text": "Naira", "correct": true },
      { "text": "Shilling", "correct": false },
      { "text": "Rand", "correct": false }
    ]
  },
  {
    "question": "Who is the current Governor of the Central Bank of Nigeria (CBN)?",
    "answers": [
      { "text": "Godwin Emefiele", "correct": false },
      { "text": "Yemi Cardoso", "correct": true },
      { "text": "Sanusi Lamido", "correct": false },
      { "text": "Charles Soludo", "correct": false }
    ]
  },
  {
    "question": "When was Nigeria suspended from the Commonwealth and why?",
    "answers": [
      { "text": "1995, due to human rights violations", "correct": true },
      { "text": "1999, due to corruption", "correct": false },
      { "text": "1983, due to military coup", "correct": false },
      { "text": "2000, due to election fraud", "correct": false }
    ]
  },
  {
    "question": "What is the largest state in Nigeria by land area?",
    "answers": [
      { "text": "Kano State", "correct": false },
      { "text": "Niger State", "correct": true },
      { "text": "Borno State", "correct": false },
      { "text": "Kaduna State", "correct": false }
    ]
  },
  {
    "question": "Which state in Nigeria has the largest number of Local Governments?",
    "answers": [
      { "text": "Lagos State", "correct": false },
      { "text": "Kano State", "correct": true },
      { "text": "Oyo State", "correct": false },
      { "text": "Rivers State", "correct": false }
    ]
  },
  {
    "question": "What does the blue in the Nigerian Police flag represent?",
    "answers": [
      { "text": "Peace and justice", "correct": false },
      { "text": "Love, loyalty, and unity", "correct": true },
      { "text": "Strength and courage", "correct": false },
      { "text": "Wisdom and truth", "correct": false }
    ]
  },
  {
    "question": "What is the meaning of the acronym “INEC”?",
    "answers": [
      { "text": "Independent National Electoral Commission", "correct": true },
      { "text": "International Nigerian Election Council", "correct": false },
      { "text": "Internal National Election Committee", "correct": false },
      { "text": "Institute for Nigerian Electoral Control", "correct": false }
    ]
  },
  {
    "question": "When was INEC established?",
    "answers": [
      { "text": "1999", "correct": false },
      { "text": "1998", "correct": true },
      { "text": "1996", "correct": false },
      { "text": "2000", "correct": false }
    ]
  },
  {
    "question": "Who is the current Chairman of INEC?",
    "answers": [
      { "text": "Attahiru Jega", "correct": false },
      { "text": "Mahmood Yakubu", "correct": true },
      { "text": "Festus Okoye", "correct": false },
      { "text": "Mike Igini", "correct": false }
    ]
  },
  {
    "question": "Who was Nigeria’s first Prime Minister?",
    "answers": [
      { "text": "Dr. Nnamdi Azikiwe", "correct": false },
      { "text": "Sir Abubakar Tafawa Balewa", "correct": true },
      { "text": "General Yakubu Gowon", "correct": false },
      { "text": "Chief Obafemi Awolowo", "correct": false }
    ]
  },
  {
    "question": "Who was Nigeria’s first President?",
    "answers": [
      { "text": "Sir Abubakar Tafawa Balewa", "correct": false },
      { "text": "Dr. Nnamdi Azikiwe", "correct": true },
      { "text": "General Olusegun Obasanjo", "correct": false },
      { "text": "Chief Ernest Shonekan", "correct": false }
    ]
  },
  {
    "question": "When did the Federal Military Government abolish the four regions?",
    "answers": [
      { "text": "1960", "correct": false },
      { "text": "1966", "correct": true },
      { "text": "1975", "correct": false },
      { "text": "1983", "correct": false }
    ]
  },
  {
    "question": "How many ethnic groups are there in Nigeria?",
    "answers": [
      { "text": "Over 100", "correct": false },
      { "text": "Over 250", "correct": true },
      { "text": "Over 300", "correct": false },
      { "text": "Over 500", "correct": false }
    ]
  }
];

// QUIZ STATE VARS 
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

// NEW: activeQuestions will hold the randomly picked subset
let activeQuestions = [];

// remove the old static assignments and set totals when quiz starts
// totalQuestionSpan.textContent = quizQuestions.length;
// maxScoreSpan.textContent = quizQuestions.length;

// NEW: utility to pick `count` random questions (Fisher–Yates shuffle)
function pickRandomQuestions(count) {
    const arr = quizQuestions.slice(); // copy
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.slice(0, count);
}

// event listeners 
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = 0;

    // pick 6 random questions
    activeQuestions = pickRandomQuestions(6);

    // update totals to reflect the active subset
    totalQuestionSpan.textContent = activeQuestions.length;
    maxScoreSpan.textContent = activeQuestions.length;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion();
}

function showQuestion() {
    answersDisabled = false;

    // use activeQuestions instead of full quizQuestions
    const currentQuestion = activeQuestions[currentQuestionIndex];
    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    const progressPercent = (currentQuestionIndex / activeQuestions.length) * 100;
    progressBar.style.width = progressPercent + "%";

    questionText.textContent = currentQuestion.question;

    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.textContent = answer.text ;
        button.classList.add("answer-btn");

        // What is Dataset? Its a property of the button element that allows you to store custom data 
        button.dataset.correct = answer.correct;

        button.addEventListener("click", selectAnswer);

        answersContainer.appendChild(button);
    });
}

function selectAnswer(event) {
    if(answersDisabled) return;

    answersDisabled = true;

    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    Array.from(answersContainer.children).forEach((button) => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        } else if (button === selectedButton) {
            button.classList.add("incorrect");
        }
    });

    if(isCorrect) {
        score++;
        scoreSpan.textContent = score;
    }

    setTimeout(() => {
        currentQuestionIndex++;

        // check if ther are more questions or the quiz is over 
        if (currentQuestionIndex < activeQuestions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1000);
}

function showResults() {
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");

    finalScoreSpan.textContent = score;

    // use activeQuestions.length for percentage
    const percentage = (score / activeQuestions.length) * 100;

    if (percentage === 100) {
        resultMessage.textContent = "Perfect!";
    } else if (percentage >= 80) {
        resultMessage.textContent = "Very Good!";
    } else if (percentage >= 60) {
        resultMessage.textContent = "Good!";
    } else if (percentage >= 40) {
        resultMessage.textContent = "You thought you had it!";
    } else {
        resultMessage.textContent = "Don't try again now, maybe later!";
    }
}

function restartQuiz() {
    resultScreen.classList.remove("active");

    // picking a fresh random subset happens in startQuiz()
    startQuiz();
}