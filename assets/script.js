// This event listener runs the function once the HTML document is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Array of objects representing quiz questions
    let questions = [
      {
        question: "What 1949 science fiction book by author George Orwell describes a dystopian world in the future?",
      choices: ["A. Bladerunner", "B. The Stranger", "C. 1984", "D. The Road"],
      answer: "C"
    },
    {
      question: "Which Italian town is the setting for Shakespeares Romeo and Juliet?",
      choices: ["A. Rome", "B. Milan", "C. Venice", "D. Verona"],
      answer: "D"
    },
    {
      question: "Which globally-dreaded disease did the World Health Organization declared eradicated in 1980?",
      choices: ["A. Sars", "B. Small Pox", "C. Tuberculosis", "D. Man Flu"],
      answer: "B"
    },
    {
      question: "Who was the first “American Idol” winner?",
      choices: ["A. Katy Perry", "B. Celine Dion", "C. Ariana Grande", "D. Kelly Clarkson"],
      answer: "D"
    },
    {
      question: "What movie is 'you had me at hello' from?",
      choices: ["A. Billy Elliot", "B. Lil Nicky", "C. BraveHeart", "D. Jerry Maguire"],
      answer: "D"
    },
    {
      question: "Which of the six main characters on the TV show “Friends” never got married?",
      choices: ["A. Ross", "B. Rachel", "C. Joey", "D. Phoebe"],
      answer: "C"
    },
    {
      question: "What species of fish is Nemo?",
      choices: ["A. Pufferfish", "B. Clownfish", "C. Blowfish", "D. Salmon"],
      answer: "B"
    },
    {
      question: "Where did the 2000 Summer Olympics take place?",
      choices: ["A. Greece", "B. Australia", "C. Ireland", "D. Russia"],
      answer: "B"
    },
    {
      question: "What is an eight-sided shape called?",
      choices: ["A. Hexagon", "B. Rectangle", "C. Decahedron", "A. Octagon"],
      answer: "D"
    },
    {
      question: "Where is the worlds largest Starbucks?",
      choices: ["A. New York", "B. Brisbane", "C. Chicago", "D. Tokyo"],
      answer: "C"
    },
    {
      question: "What is a single strand of spaghetti called?",
      choices: ["A. Spaghetto", "B. Noodle", "C. String", "D. Tendon"],
      answer: "A"
    },
    {
      question: "Which NBA team plays its home games at Madison Square Garden?",
      choices: ["A. Lakers", "B. Bulls", "C. Knicks", "D. Nets"],
      answer: "C"
    },
    {
      question: "What color is a giraffe’s tongue",
      choices: ["A. Black", "B. Yellow", "C. Red", "D. Purple"],
      answer: "D"
    },
    {
      question: "Who wrote “The Little Mermaid”? ",
      choices: ["A. Walt Disney", "B. Hans C. Anderson", "C. Roald Dahl", "D. Bob Ross"],
      answer: "B"
    },
    {
      question: "How many ghosts show up in “A Christmas Carol”?",
      choices: ["A. Three", "B. Two", "C. Four", "D. Five"],
      answer: "C"
    }
  ];
  
    // Variables for score, question index, timer, and related elements
    let score;
    let questionIndex;
    let timerContainer;
    let timeLeft;
    let timer;
    let quizContainer;
    let questionContainer;
  
    // Function to start the quiz
    function playQuiz(questions) {
      // Initialize score and question index to 0
      score = 0;
      questionIndex = 0;
  
      // Get the element that will display the timer
      timerContainer = document.getElementsByClassName("quiztimer")[0];
  
      // Set the time limit for the quiz to 60 seconds
      timeLeft = 60;
  
      // Start the timer and decrement the time remaining every second
      timer = setInterval(() => {
        timeLeft--;
  
        // Update the timer display
        timerContainer.textContent = `Time left ${timeLeft}s`;
  
        // If the timer runs out, end the quiz
        if (timeLeft === 0) {
          clearInterval(timer);
          endQuiz();
        }
      }, 1000);
    }
  
    // Call the playQuiz function to start the quiz
    playQuiz();
  
    // Function to display the current question and answer choices
    function displayQuestion() {
      // Get the element that will display the quiz question
      quizContainer = document.getElementsByClassName("quizquestions")[0];
  
      // Create a new div element to hold the question and answer choices
      questionContainer = document.createElement("div");
  
      // Add the question to the question container
      questionContainer.innerHTML = `<p>Question ${questionIndex + 1}: ${
        questions[questionIndex].question
      }</p>`;
      quizContainer.appendChild(questionContainer);
  
      // Create buttons for each answer choice
      let answerBtn;
      for (let j = 0; j < questions[questionIndex].choices.length; j++) {
        answerBtn = document.createElement("button");
        answerBtn.className = "answer-btn";
        answerBtn.textContent = questions[questionIndex].choices[j];
        questionContainer.appendChild(answerBtn);
  
        // Add an event listener to each answer button that checks if the answer is correct
        answerBtn.addEventListener("click", function () {
          // If the answer is correct, add the class "correct" to the button and increase the player's score
          if (this.textContent.charAt(0) === questions[questionIndex].answer) {
            this.classList.add("correct");
            score += 100;
          } else {
            // If the answer is incorrect, add the "incorrect" class to the button
            this.classList.add("incorrect");
          }
  
          // Disable all answer buttons so the player can't change their answer
          let answerBtns = questionContainer.querySelectorAll(".answer-btn");
          for (let k = 0; k < answerBtns.length; k++) {
            answerBtns[k].disabled = true;
          }
  
          questionIndex++;
          if (questionIndex < questions.length) {
            quizContainer.innerHTML = "";
            displayQuestion();
          } else {
            endQuiz();
          }
        });
  
        questionContainer.appendChild(answerBtn);
      }
    }
  
    // Function to end the quiz and display the final score
    function endQuiz() {
      clearInterval(timer);
      quizContainer.innerHTML = "";
      timerContainer.innerHTML = "";
  
      // Create a paragraph element for the final score and display it
      let finalScore = document.createElement("p");
      finalScore.textContent = `You scored ${score} out of ${questions.length}.`;
      quizContainer.appendChild(finalScore);
  
      // Redirect the user to a different page after a delay (modify the URL as needed)
      setTimeout(() => {
        window.location.href = "#";
      }, 3000);
    }
  
    // Call the displayQuestion function to start displaying questions
    displayQuestion();
  });
  
      