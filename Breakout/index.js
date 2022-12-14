const grid = document.querySelector(".grid");
const score = document.querySelector(".score");

const blockWidth = 100;
const blockHeight = 20;
const boardWidth = 560;
const boardHeight = 300;

let scoreNum = 0;
score.innerHTML = scoreNum;
let userStartPosition = [230, 10];
let userCurrentPosition = userStartPosition;

let ballStart = [270, 40];
let ballCurrentPosition = ballStart;
let ballDiameter = 20;
let timeId;
let xDirection = -2;
let yDirection = 2;
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topLeft = [xAxis, yAxis + blockHeight];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
  }
}

const blocks = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(450, 270),
  new Block(10, 240),
  new Block(120, 240),
  new Block(230, 240),
  new Block(340, 240),
  new Block(450, 240),
  new Block(10, 210),
  new Block(120, 210),
  new Block(230, 210),
  new Block(340, 210),
  new Block(450, 210),
];

function addBlocks() {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div");
    block.classList.add("block");

    block.style.left = blocks[i].bottomLeft[0] + "px";
    block.style.bottom = blocks[i].bottomLeft[1] + "px";
    grid.appendChild(block);
  }
}

addBlocks();

const user = document.createElement("div");
user.classList.add("user");
setUserPosition();
grid.appendChild(user);

function setUserPosition() {
  user.style.bottom = userCurrentPosition[1] + "px";
  user.style.left = userCurrentPosition[0] + "px";
}

function moveUser(event) {
  switch (event.key) {
    case "ArrowLeft":
      if (userCurrentPosition[0] > 0) {
        userCurrentPosition[0] -= 10;
        setUserPosition();
      }

      break;
    case "ArrowRight":
      if (userCurrentPosition[0] < boardWidth - blockWidth) {
        userCurrentPosition[0] += 10;
        setUserPosition();
      }

    default:
      break;
  }
}

document.addEventListener("keydown", moveUser);

function setBallPosition() {
  ball.style.left = ballCurrentPosition[0] + "px";
  ball.style.bottom = ballCurrentPosition[1] + "px";
}

const ball = document.createElement("div");
ball.classList.add("ball");
setBallPosition();
grid.appendChild(ball);

function moveBall() {
  ballCurrentPosition[0] += xDirection;
  ballCurrentPosition[1] += yDirection;
  setBallPosition();
  checkForCollisions();
  checkForLose();
}

timeId = setInterval(moveBall, 30);

function checkForCollisions() {
  // check for block collisions
  for (let i = 0; i < blocks.length; i++) {
    if (
      ballCurrentPosition[0] > blocks[i].bottomLeft[0] &&
      ballCurrentPosition[0] < blocks[i].bottomRight[0] &&
      ballCurrentPosition[1] + ballDiameter > blocks[i].bottomLeft[1] &&
      ballCurrentPosition[1] < blocks[i].topLeft[1]
    ) {
      let allBlocks = Array.from(document.querySelectorAll(".block"));
      allBlocks[i].classList.remove("block");
      blocks.splice(i, 1);
      scoreNum++;
      score.innerHTML = scoreNum;
      checkForWin();
    }
  }

  //check for wall collisions
  if (
    ballCurrentPosition[0] >= boardWidth - ballDiameter ||
    ballCurrentPosition[1] >= boardHeight - ballDiameter ||
    ballCurrentPosition[0] <= 0
  ) {
    changeDirection();
  }

  //check for user collisions

  if (
    ballCurrentPosition[0] > userCurrentPosition[0] &&
    ballCurrentPosition[0] < userCurrentPosition[0] + blockWidth &&
    ballCurrentPosition[1] < userCurrentPosition[1] + blockHeight &&
    ballCurrentPosition[1] > userCurrentPosition[1]
  ) {
    changeDirection();
  }
}

function changeDirection() {
  if (xDirection === 2 && yDirection === 2) {
    xDirection = -2;
    return;
  } else if (xDirection === -2 && yDirection === 2) {
    yDirection = -2;
    return;
  } else if (xDirection === -2 && yDirection === -2) {
    xDirection = 2;
    return;
  } else if (xDirection === 2 && yDirection === -2) {
    yDirection = 2;
    return;
  }
}

function checkForLose() {
  if (ballCurrentPosition[1] <= 0) {
    clearInterval(timeId);
    score.innerHTML = "You lose!";
    document.removeEventListener("keydown", moveUser);
  }
}

function checkForWin() {
  if (blocks.length === 0) {
    clearInterval(timeId);
    score.innerHTML = "You win!";
    document.removeEventListener("keydown", moveUser);
  }
}
