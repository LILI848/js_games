const gridDisplay = document.querySelector(".grid");

const timeLeftDisplay = document.querySelector("#time-left");
const resultDisplay = document.querySelector("#result");
const startPauseButton = document.querySelector("#start-pause-button");

let divArr = [];
let carArr = [];

for (let i = 0; i <= 80; i++) {
  const divDisplay = document.createElement("div");
  gridDisplay.append(divDisplay);
}

function setDivAttribute() {
  let divs = document.querySelectorAll("div");
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
  for (let i = 19; i <= 36; i++) {
    divArr.push(divs[i]);
  }
  for (let i = 46; i <= 63; i++) {
    carArr.push(divs[i]);
  }
}

setDivAttribute();

function groupArr(data, num) {
  let group = [];

  for (let i = 0, j = 0; i < data.length; i++) {
    if (i >= num && i % num === 0) {
      j++;
    }
    group[j] = group[j] || [];
    group[j].push(data[i]);
  }
  return group;
}
let groupDivs = groupArr(divArr, 5);
let groupCars = groupArr(carArr, 3);

console.log(carArr);
console.log(groupCars);

function addClassLog(arr) {
  let newDiv = [];

  for (let i = 0; i < arr.length; i++) {
    newDiv = arr[i].map((div) => {
      let indexOfDiv = arr[i].indexOf(div) + 1;

      div.classList.add(`l${indexOfDiv}`);

      return div;
    });

    console.log(newDiv);
  }
  return newDiv;
}

let addClassDivs = addClassLog(groupDivs);

function addClassCar(arr) {
  let newDiv = [];

  for (let i = 0; i < arr.length; i++) {
    newDiv = arr[i].map((div) => {
      let indexOfDiv = arr[i].indexOf(div) + 1;

      div.classList.add(`c${indexOfDiv}`);

      return div;
    });
  }
  return newDiv;
}
let addClassCars = addClassCar(groupCars);
console.log(addClassCars);

const squares = document.querySelectorAll(".grid div");
const logsLeft = document.querySelectorAll(".log-left");
const logsRight = document.querySelectorAll(".log-right");
let currentIndex = 76;
let width = 9;

squares[currentIndex].classList.add("frog");

function moveFrog(event) {
  squares[currentIndex].classList.remove("frog");
  switch (event.key) {
    case "ArrowLeft":
      if (currentIndex % width !== 0) currentIndex -= 1;
      break;
    case "ArrowRight":
      if (currentIndex % width < width - 1) currentIndex += 1;
      break;
    case "ArrowUp":
      if (currentIndex - width >= 0) currentIndex -= width;
      break;
    case "ArrowDown":
      if (currentIndex + width < width * width) currentIndex += width;

      break;
    default:
      break;
  }
  squares[currentIndex].classList.add("frog");
}

document.addEventListener("keyup", moveFrog);

function autoMoveLogs() {
  logsLeft.forEach((logLeft) => moveLogsLeft(logLeft));
  logsRight.forEach((logRight) => moveLogsRight(logRight));
}

function moveLogsLeft(logLeft) {
  switch (true) {
    case logLeft.classList.contains("l1"):
      logLeft.classList.remove("l1");
      logLeft.classList.add("l2");
      break;
    case logLeft.classList.contains("l2"):
      logLeft.classList.remove("l2");
      logLeft.classList.add("l3");
      break;
    case logLeft.classList.contains("l3"):
      logLeft.classList.remove("l3");
      logLeft.classList.add("l4");
      break;
    case logLeft.classList.contains("l4"):
      logLeft.classList.remove("l4");
      logLeft.classList.add("l5");
      break;
    case logLeft.classList.contains("l5"):
      logLeft.classList.remove("l5");
      logLeft.classList.add("l1");
      break;
  }
}
function moveLogsRight(logRight) {
  switch (true) {
    case logRight.classList.contains("l5"):
      logRight.classList.remove("l5");
      logRight.classList.add("l4");
      break;
    case logRight.classList.contains("l4"):
      logRight.classList.remove("l4");
      logRight.classList.add("l3");
      break;
    case logRight.classList.contains("l3"):
      logRight.classList.remove("l3");
      logRight.classList.add("l2");
      break;
    case logRight.classList.contains("l2"):
      logRight.classList.remove("l2");
      logRight.classList.add("l1");
      break;
    case logRight.classList.contains("l1"):
      logRight.classList.remove("l1");
      logRight.classList.add("l5");
      break;
  }
}

setInterval(autoMoveLogs, 1000);
