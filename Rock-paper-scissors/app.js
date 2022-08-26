const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("your-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll(".btn");
let userChoice;
let computerChoice;
let result;
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  let randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
  if (randomNumber === 1) {
    computerChoice = "Rock";
  } else if (randomNumber === 2) {
    computerChoice = "Paper";
  } else if (randomNumber === 3) {
    computerChoice = "Scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}
/* possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    if (randomNumber === 1) {
      computerChoice = "Rock";
    } else if (randomNumber === 2) {
      computerChoice = "Paper";
    } else if (randomNumber === 3) {
      computerChoice = "Scissors";
    }
    computerChoiceDisplay.innerHTML = computerChoice;
  })
);
 */

function getResult() {
  if (userChoice === "Rock" && computerChoice === "Scissors") {
    result = "You won!";
  } else if (userChoice === "Scissors" && computerChoice === "Paper") {
    result = "You won!";
  } else if (userChoice === "Paper" && computerChoice === "Rock") {
    result = "You won!";
  } else if (userChoice === "Paper" && computerChoice === "Scissors") {
    result = "You lost!";
  } else if (userChoice === "Scissors" && computerChoice === "Rock") {
    result = "You lost!";
  } else if (userChoice === "Rock" && computerChoice === "Paper") {
    result = "You lost!";
  } else if (userChoice === computerChoice) {
    result = "It is a draw!";
  }
  resultDisplay.innerHTML = result;
}
