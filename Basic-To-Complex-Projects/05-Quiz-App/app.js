// =======================================
// QUESTIONS ARRAY
// =======================================
const questions = [
  {
    question: "Which keyword is used to declare a variable that cannot be reassigned?",
    options: ["var", "let", "const", "static"],
    correct: "const"
  },
  {
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Data Object Model", "Document Oriented Model", "Dynamic Object Model"],
    correct: "Document Object Model"
  },
  {
    question: "Which method adds an element to the end of an array?",
    options: ["pop()", "push()", "shift()", "splice()"],
    correct: "push()"
  },
  {
    question: "What is the output of typeof null in JavaScript?",
    options: ["null", "undefined", "object", "string"],
    correct: "object"
  },
  {
    question: "Which of these is used to handle asynchronous code in JavaScript?",
    options: ["try/catch", "Promise", "forEach", "splice"],
    correct: "Promise"
  }
];

// =======================================
// QUIZ CLASS
// =======================================
class Quiz {
  constructor(questions) {
    this.questions = questions;      // saare questions store kiye
    this.currentIndex = 0;           // konsa question show ho raha hai
    this.score = 0;                  // kitne sahi jawab diye
  }

  // -----------------------------------------------
  // METHOD 1: Question render karo screen pe
  // -----------------------------------------------
  renderQuestion() {
    // question counter show karo
    document.getElementById("question-counter").textContent =
      `Question ${this.currentIndex + 1} of ${this.questions.length}`;

    // question text show karo
    document.getElementById("question-text").textContent =
      this.questions[this.currentIndex].question;

    // options list clear karo
    const optionsList = document.getElementById("options-list");
    optionsList.innerHTML = "";

    // har option ka button banao
    this.questions[this.currentIndex].options.forEach((option) => {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.classList.add("option-btn");
      button.textContent = option;

      // button click pe answer check karo
      button.addEventListener("click", () => {
        this.checkAnswer(option);
      });

      li.appendChild(button);
      optionsList.appendChild(li);
    });

    // next button hide karo
    document.getElementById("next-btn").style.display = "none";
  }

  // -----------------------------------------------
  // METHOD 2: Answer check karo
  // -----------------------------------------------
  checkAnswer(selectedOption) {
    const currentQuestion = this.questions[this.currentIndex];
    const allButtons = document.querySelectorAll(".option-btn");

    // saare buttons disable karo — ek baar hi click ho
    allButtons.forEach(btn => btn.disabled = true);

    // sahi ya galat check karo
    allButtons.forEach(btn => {
      if (btn.textContent === currentQuestion.correct) {
        btn.classList.add("correct");  // sahi answer green
      }
      if (btn.textContent === selectedOption && selectedOption !== currentQuestion.correct) {
        btn.classList.add("wrong");    // galat answer red
      }
    });

    // agar sahi jawab diya toh score badhao
    if (selectedOption === currentQuestion.correct) {
      this.score++;
    }

    // next button show karo
    document.getElementById("next-btn").style.display = "block";
  }

  // -----------------------------------------------
  // METHOD 3: Next question pe jao
  // -----------------------------------------------
  nextQuestion() {
    this.currentIndex++;

    // agar aur questions hain
    if (this.currentIndex < this.questions.length) {
      this.renderQuestion();
    } else {
      // quiz khatam — result show karo
      this.showResult();
    }
  }

  // -----------------------------------------------
  // METHOD 4: Result show karo
  // -----------------------------------------------
  showResult() {
    // question area hide karo
    document.getElementById("question-counter").style.display = "none";
    document.getElementById("question-text").style.display = "none";
    document.getElementById("options-list").style.display = "none";
    document.getElementById("next-btn").style.display = "none";

    // result show karo
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    document.getElementById("score-text").textContent =
      `You scored ${this.score} out of ${this.questions.length}!`;
  }

  // -----------------------------------------------
  // METHOD 5: Quiz restart karo
  // -----------------------------------------------
  restart() {
    this.currentIndex = 0;
    this.score = 0;

    // question area wapas show karo
    document.getElementById("question-counter").style.display = "block";
    document.getElementById("question-text").style.display = "block";
    document.getElementById("options-list").style.display = "block";
    document.getElementById("result").style.display = "none";

    this.renderQuestion();
  }
}

// =======================================
// QUIZ OBJECT BANAO
// =======================================
const quiz = new Quiz(questions);
quiz.renderQuestion();  // pehla question show karo

// =======================================
// EVENT LISTENERS
// =======================================

// next button
document.getElementById("next-btn").addEventListener("click", () => {
  quiz.nextQuestion();
});

// restart button
document.getElementById("restart-btn").addEventListener("click", () => {
  quiz.restart();
});