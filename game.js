const questions = [
    {
      question: "Quel est le plus grand pays du monde?",
      answers: [
        { text: "Russie", correct: true },
        { text: "Etats-Unis", correct: false },
        { text: "Chine", correct: false }
      ]
    },
    {
      question: "Quel est le plus grand océan du monde?",
      answers: [
        { text: "Océan Atlantique", correct: false },
        { text: "Océan Indien", correct: false },
        { text: "Océan Pacifique", correct: true }
      ]
    },
    {
      question: "Quel est le plus grand pays d'Afrique?",
      answers: [
        { text: "Algérie", correct: true },
        { text: "Soudan", correct: false },
        { text: "Afrique du Sud", correct: false }
      ]
    },
    {
      question: "Quel est le plus grand pays d'Amérique?",
      answers: [
        { text: "Brésil", correct: true },
        { text: "Mexique", correct: false },
        { text: "Argentine", correct: false }
      ]
    },
    {
      question: "Quel est le plus grand pays d'Asie?",
      answers: [
        { text: "Inde", correct: false },
        { text: "Chine", correct: true },
        { text: "Indonésie", correct: false }
      ]
    },
    {
      question: "Quel est le plus grand pays d'Europe?",
      answers: [
        { text: "Allemagne", correct: false },
        { text: "France", correct: false },
        { text: "Russie", correct: true }
      ]
    },
    {
      question: "Quel est le plus grand pays d'Océanie?",
      answers: [
        { text: "Australie", correct: true },
        { text: "Nouvelle-Zélande", correct: false },
        { text: "Papouasie-Nouvelle-Guinée", correct: false }
      ]
    },
    {
      question: "Quel est le plus grand pays d'Amérique du Sud?",
      answers: [
        { text: "Colombie", correct: false },
        { text: "Pérou", correct: false },
        { text: "Brésil", correct: true }
      ]
    },
    {
      question: "Quel est le plus grand pays d'Europe de l'Est?",
      answers: [
        { text: "Pologne", correct: false },
        { text: "Ukraine", correct: false },
        { text: "Russie", correct: true }
      ]
    },
    
    
    // 19 autres questions
  ];
  
  
  let currentQuestion = 0;
  let score = 0;
  let time = 30;
  let countdown;
  
  function displayQuestion() {
    const question = questions[currentQuestion].question;
    document.querySelector("#question").textContent = question;
  
    const answers = questions[currentQuestion].answers;
    answers.forEach(answer => {
      const button = document.createElement("button");
      button.textContent = answer.text;
      button.addEventListener("click", selectAnswer);
      document.querySelector("#answers").appendChild(button);
      
    });
    
  }
  
    // start countdown for current question
    countdown = setInterval(() => {
        time--;
        document.querySelector("#timer").textContent = `${time} seconds remaining`;
        if (time === 0) {
          clearInterval(countdown);
          alert("Temps écoulé!");
          currentQuestion++;
          if (currentQuestion === questions.length) {
            endGame();
          } else {
            time = 30;
            displayQuestion();
          }
        }
      }, 1000);
    
  
  function selectAnswer(event) {
    const selectedButton = event.target;
    const correct = selectedButton.textContent === questions[currentQuestion].answers.find(answer => answer.correct).text;
  
    if (correct) {
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }
    currentQuestion++;
    if (currentQuestion === questions.length) {
      alert("Game over!");
    } else {
      displayQuestion();
    }
  }
  
  
  displayQuestion();
  function selectAnswer(event) {
    const selectedButton = event.target;
    const correct = selectedButton.textContent === questions[currentQuestion].answers.find(answer => answer.correct).text;
    
    if (correct) {
      score++;
      alert("Correct!");
      currentQuestion++;
      // clear previous answers
      document.querySelector("#answers").innerHTML = "";
      // update timer
      time = 30;
      document.querySelector("#timer").textContent = `${time} seconds remaining`;
      // check if the game is over
      if (currentQuestion === questions.length) {
        endGame();
      } else {
        displayQuestion();
      }
    } else {
      alert("Incorrect!");
    }
  }
  
  
  const restartButton = document.querySelector("#restart");
  restartButton.addEventListener("click", restartGame);
  
  function restartGame() {
    location.reload();
  }
  
  
  
  