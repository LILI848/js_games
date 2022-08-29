const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const score = document.querySelector("#score");
const timeLeft = document.querySelector("#time-left");
const btn = document.querySelector("#btn");

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
  const randomSqr = squares[Math.floor(Math.random() * 9)];
  randomSqr.classList.add("mole");
}

function moveMole() {
  let timeId = null;
  timeId = setInterval(randomSquare(), 500);
}

btn.addEventListener("click", moveMole);
