const grid = document.querySelector(".grid");

for (let i = 0; i < 225; i++) {
  let square = document.createElement("div");
  grid.append(square);
}

const alienInvaders = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 30, 31,
  32, 33, 34, 35, 36, 37, 38, 39,
];

let squares = Array.from(document.querySelectorAll(".grid div"));
let resultDisplay = document.querySelector(".result");
let currentShooterIndex = 202;
let width = 15;
let direction = 1;
let goingRight = true;

function draw() {
  for (let i = 0; i < alienInvaders.length; i++) {
    squares[alienInvaders[i]].classList.add("invader");
  }
}

draw();

function remove() {
  for (let i = 0; i < alienInvaders.length; i++) {
    squares[alienInvaders[i]].classList.remove("invader");
  }
}
squares[currentShooterIndex].classList.add("shooter");

function moveShooter(event) {
  squares[currentShooterIndex].classList.remove("shooter");
  switch (event.key) {
    case "ArrowLeft":
      if (currentShooterIndex % width !== 0) currentShooterIndex -= 1;
      break;
    case "ArrowRight":
      if (currentShooterIndex % width < width - 1) currentShooterIndex += 1;
      break;
  }
  squares[currentShooterIndex].classList.add("shooter");
}

document.addEventListener("keydown", moveShooter);

function moveInvaders() {
  const leftEdge = alienInvaders[0] % width === 0;
  const rightEdge =
    alienInvaders[alienInvaders.length - 1] % width === width - 1;

  remove();
  if (rightEdge && goingRight) {
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += width + 1;
      direction = -1;
      goingRight = false;
    }
  }
  if (leftEdge && !goingRight) {
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += width - 1;
      direction = 1;
      goingRight = true;
    }
  }
  for (let i = 0; i < alienInvaders.length; i++) {
    alienInvaders[i] += direction;
  }
  draw();

  if (squares[currentShooterIndex].classList.contains("invader", "shooter")) {
    resultDisplay.innerHTML = "GAME OVER";
    clearInterval(invadersId);
  }
  for (let i = 0; i < alienInvaders.length; i++) {
    if (alienInvaders[i] > squares.length) {
      resultDisplay.innerHTML = "GAME OVER";
      clearInterval(invadersId);
    }
  }
}

let invadersId = setInterval(moveInvaders, 100);

function shoot(event) {
  let laserId;
  let currentLaserIndex = currentShooterIndex;
  function moveLaser() {
    squares[currentLaserIndex].classList.remove("laser");
    currentLaserIndex -= width;
    squares[currentLaserIndex].classList.add("laser");
  }
  switch (event.key) {
    case "ArrowUp":
      laserId = setInterval(moveLaser, 200);
  }
}
document.addEventListener("keydown", shoot);
