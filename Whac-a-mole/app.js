const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const score = document.querySelector("#score");
const timeLeft = document.querySelector("#time-left");
const btnStart = document.querySelector("#start-btn");
const btnEnd = document.querySelector("#end-btn");
let hitPosition;
let result = 0;
let currentTimer = 10;
function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
  const randomSqr = squares[Math.floor(Math.random() * 9)];
  randomSqr.classList.add("mole");
  hitPosition = randomSqr.id;
}

squares.forEach((square) =>
  square.addEventListener("mousedown", () => {
    if (hitPosition === square.id) {
      result += 1;
    }
    score.innerHTML = result;
    hitPosition = null;
  })
);

let timeId;
let countDownTimerId;
function moveMole() {
  timeId = null;
  timeId = setInterval(randomSquare, 500);
  countDownTimerId = setInterval(() => {
    currentTimer--;
    timeLeft.innerHTML = currentTimer;
    if (currentTimer === 0) {
      clearInterval(countDownTimerId);
      clearInterval(timeId);

      alert("Final score is " + result + " !");
    }
  }, 1000);
}

function endMoveMole() {
  clearInterval(timeId);
  timeId = null;
  squares.forEach((square) => square.classList.remove("mole"));
  clearInterval(countDownTimerId);
  currentTimer = 10;
  timeLeft.innerHTML = currentTimer;
  result = 0;
}

btnStart.addEventListener("click", moveMole);
btnEnd.addEventListener("click", endMoveMole);
