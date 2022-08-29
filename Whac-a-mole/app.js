const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const score = document.querySelector("#score");
const timeLeft = document.querySelector("#time-left");

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
  const randomSqr = squares[Math.floor(Math.random() * 9)];
  randomSqr.classList.add("mole");
}
randomSquare();
