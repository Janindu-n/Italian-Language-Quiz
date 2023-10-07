//

function populate() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    // show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    // show options
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }

    showProgress();
  }
}

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    populate();
  };
}

function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML =
    "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

// function showScores() {
//   var gameOverHTML = "<h1>Result</h1>";
//   gameOverHTML +=
//     "<h2 id='score'> Your score: " + (quiz.score * 100) / 5 + "%</h2>";
//   var element = document.getElementById("quiz");
//   element.innerHTML = gameOverHTML;
// }

function showScores() {
  var totalQuestions = quiz.questions.length; // Get the total number of questions
  var correctAnswers = quiz.score;
  var scorePercentage = (correctAnswers / totalQuestions) * 100;

  var gameOverHTML = "<h1>Result</h1>";
  gameOverHTML +=
    "<h2 id='score'> Your score: " + scorePercentage.toFixed(2) + "%</h2>";

  // Add the "View Answers" button here
  gameOverHTML +=
    "<div class='center'><a href='answers.html' class='button'>View Answers</a></div>";

  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
}

var questions = [
  new Question(
    "1. Qual e principio stabilisce che le imposte devono essere proporzionali alle capacità contributive dei cittadini?",
    [
      "a) Principio di legalità",
      "b) Principio di progressività",
      "c) Principio di capacità contributiva",
      "d) Principio di uguaglianza",
    ],
    "c) Principio di capacità contributiva"
  ),
  new Question(
    "2. Qual è l’agenzia governativa responsabile della riscossione delle imposte in Italia?",
    [
      "a) Agenzia delle Entrate",
      "b) Agenzia delle Imposte",
      "c) Agenzia Fiscale Italiana",
      "d) Agenzia di Riscossione",
    ],
    "a) Agenzia delle Entrate"
  ),
  new Question(
    "3. In quale categoria rientra l’IVA?",
    [
      "a) Imposta diretta",
      "b) Imposta indiretta",
      "c) Imposta patrimoniale",
      "d) Imposta progressiva",
    ],
    "b) Imposta indiretta"
  ),
  new Question(
    "4. Chi è responsabile del pagamento dell’IVA?",
    [
      "a) L’azienda che produce beni o offre servizi",
      "b) Il consumatore finale",
      "c) Il governo",
      "d) L’Agenzia delle Entrate",
    ],
    "b) Il consumatore finale"
  ),
  new Question(
    "5. Cos’è l’evasione fiscale?",
    [
      "a) Il pagamento delle tasse in ritardo",
      "b) La dichiarazione accurata dei redditi",
      "c) L’omissione dolosa del pagamento delle tasse",
      "d) L’elusione fiscale legale",
    ],
    "c) L’omissione dolosa del pagamento delle tasse"
  ),
  new Question(
    "6. In quale categoria rientra l’IRPEF (Imposta sul Reddito delle Persone Fisiche)?",
    [
      "a) Imposta diretta",
      "b) Imposta indiretta",
      "c) Imposta progressiva",
      "d) Imposta patrimoniale",
    ],
    "a) Imposta diretta"
  ),
  new Question(
    "7. Quale principio stabilisce che i cittadini devono pagare le tasse in base ai loro mezzi finanziari?",
    [
      "a) Principio di capacità contributiva",
      "b) Principio di uguaglianza",
      "c) Principio di legalità",
      "d) Principio di solidarietà",
    ],
    "c) Principio di legalità"
  ),
  new Question(
    "8. Qual è l’obbligo fondamentale del contribuente nei confronti dell’amministrazione fiscale?",
    [
      "a) Pagare le tasse in ritardo",
      "b) Presentare la dichiarazione dei redditi",
      "c) Chiedere l’esonero fiscale",
      "d) Investire in beni patrimoniali",
    ],
    "b) Presentare la dichiarazione dei redditi"
  ),
  new Question(
    "9. Cos’è l’elusione fiscale?",
    [
      "a) Il pagamento delle tasse in ritardo",
      "b) L’omissione dolosa del pagamento delle tasse",
      "c) L’uso legale di strategie per ridurre l’imposta dovuta",
      "d) L’omissione accidentale del pagamento delle tasse",
    ],
    "c) L’uso legale di strategie per ridurre l’imposta dovuta"
  ),
  new Question(
    "10. Qual è l’aliquota standard dell’IVA in Italia?",
    ["a) 18%", "b) 20%", "c) 22%", "d) 24%"],
    "b) 20%"
  ),
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
