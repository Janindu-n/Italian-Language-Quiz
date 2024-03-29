function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
  this.message = ["Correct", "Wrong"];
}

Quiz.prototype.getQuestionIndex = function () {
  return this.questions[this.questionIndex];
};

// Quiz.prototype.guess = function (answer) {
//   if (this.getQuestionIndex().isCorrectAnswer(answer)) {
//     this.score++;
//     console.log(this.message[0]);
//   } else {
//     console.log(this.message[1]);
//   }

//   this.questionIndex++;
// };

Quiz.prototype.guess = function (answer) {
  var messageElement = document.getElementById("message");
  if (this.getQuestionIndex().isCorrectAnswer(answer)) {
    this.score++;
    messageElement.innerHTML = "Correct!";
    messageElement.style.color = "#008000"; // Green color for correct
  } else {
    messageElement.innerHTML = "Wrong!";
    messageElement.style.color = "#FF0000"; // Red color for wrong
  }

  var self = this; // Store a reference to the Quiz object
  setTimeout(function () {
    messageElement.innerHTML = ""; // Clear the message after a delay
    self.questionIndex++; // Increment the question index
    populate();
  }, 1000);
};

Quiz.prototype.isEnded = function () {
  return this.questionIndex === this.questions.length;
};

// function guess(id, guess) {
//   var button = document.getElementById(id);
//   button.onclick = function () {
//     var currentQuestion = quiz.getQuestionIndex();
//     var correctChoice = currentQuestion.correctAnswer;

//     if (guess === correctChoice) {
//       button.style.backgroundColor = "#a1d04a"; // Apply green background for correct answer
//       // Add a checkmark icon next to the correct answer
//       button.innerHTML += " &#10003;";
//     } else {
//       button.style.backgroundColor = "#ff6347"; // Apply red background for incorrect answer
//     }

//     quiz.guess(guess);
//     populate();

//     // Remove the background color after 2 seconds
//     setTimeout(function () {
//       button.style.backgroundColor = "";
//     }, 2000);
//   };
// }

// document.addEventListener("DOMContentLoaded", function () {
//   // ... (your existing code) ...

//   const nextButton = document.getElementById("next-button");
//   const summarySection = document.getElementById("summary");
//   const answersList = document.getElementById("answers-list");
//   const scoreDisplay = document.getElementById("score-display");

//   nextButton.addEventListener("click", () => {
//     // ... (your existing code to handle question navigation) ...

//     if (quiz.isEnded()) {
//       showScores();
//       displaySummary();
//     }
//   });

//   function displaySummary() {
//     answersList.innerHTML = "";
//     let score = 0;

//     quiz.questions.forEach((question, index) => {
//       const userAnswer = quiz.userAnswers[index];
//       const listItem = document.createElement("li");
//       listItem.innerHTML = `Question ${index + 1}: ${question.text}`;
//       listItem.style.color = userAnswer === question.answer ? "green" : "red";

//       if (userAnswer === question.answer) {
//         score++;
//       }

//       answersList.appendChild(listItem);
//     });

//     summarySection.style.display = "block";
//     scoreDisplay.innerHTML = `Your Score: ${score} / ${quiz.questions.length}`;
//   }
// });
