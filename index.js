var readlineSync = require("readline-sync");

var score = 0;
var questions = [
  {
    question: "Where do I live?",
    answer: "Namakkal"
  },
  {
    question: "Where am I working?",
    answer: "Accenture"
  },
  {
    question: "What are my hobbies?",
    answer: "Anime"
  },
  {
    question: "which programming language I am comfortable with?",
    answer: "Java"
  },
  {
    question: "who is my favorite atheist-scientist?",
    answer: "Stephen Hawking"
  }
]
function welcome() {
  console.log("Hello there!!!");
  var userName = readlineSync.question("What is you name?");
  console.log("Welcome to the quiz session about Sarath, " + userName);
}
function play(question, answer) {
  var playerAns = readlineSync.question(question);
  if (answer.toUpperCase() == playerAns.toUpperCase()) {
    console.log("Correct Answer!!!");
    score = score + 1;
  }
  else {
    console.log("Wrong Answer");
  }

  console.log("Current Score: " + score);
  console.log("-------------")
}
function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);

  }
}
function showScore() {
  console.log("Thanks for the participation");
  console.log("Your Final score is: " + score);
}

welcome();
game();
showScore();