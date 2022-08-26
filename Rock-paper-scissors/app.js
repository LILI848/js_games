const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("your-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll(".btn");
let userChoice;
let computerChoice;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
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
