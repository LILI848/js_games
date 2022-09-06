const gridDisplay = document.querySelector(".grid");

const timeLeftDisplay = document.querySelector("#time-left");
const resultDisplay = document.querySelector("#result");
const startPauseButton = document.querySelector("#start-pause-button");

for (let i = 0; i <= 80; i++) {
  const divDisplay = document.createElement("div");
  gridDisplay.append(divDisplay);
}

function setDivAttribute() {
  const divs = document.querySelectorAll("div");
  divs[5].setAttribute("class", "ending-block");
  divs[77].setAttribute("class", "starting-block");
  for (let i = 19; i <= 27; i++) {
    divs[i].setAttribute("class", "log-left");
  }
  for (let i = 28; i <= 36; i++) {
    divs[i].setAttribute("class", "log-right");
  }

  for (let i = 46; i <= 54; i++) {
    divs[i].setAttribute("class", "car-left");
  }
  for (let i = 55; i <= 63; i++) {
    divs[i].setAttribute("class", "car-right");
  }
}

setDivAttribute();

const squares = document.querySelectorAll(".grid div");
let currentIndex = 76;
let width = 9;

squares[currentIndex].classList.add("frog");

function moveFrog(event) {
  squares[currentIndex].classList.remove("frog");
  switch (event.key) {
    case "ArrowLeft":
      console.log("left");
      currentIndex -= 1;
      break;
    case "ArrowRight":
      console.log("right");
      currentIndex += 1;
      break;
    case "ArrowUp":
      console.log("up");
      currentIndex -= width;
      break;
    case "ArrowDown":
      console.log("down");
      currentIndex += width;
      break;
    default:
      break;
  }
  squares[currentIndex].classList.add("frog");
}

document.addEventListener("keyup", moveFrog);
