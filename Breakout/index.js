const grid = document.querySelector(".grid");
const blockWidth = 100;
const blockHeight = 20;
const boardWidth = 560;
let userStartPosition = [230, 10];
let userCurrentPosition = userStartPosition;

let ballStart = [270, 40];
let ballCurrentPosition = ballStart;
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topLeft = [xAxis, yAxis + blockHeight];
    this.toRight = [xAxis + blockWidth, yAxis + blockHeight];
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
