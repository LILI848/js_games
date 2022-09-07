const gridDisplay = document.querySelector(".grid");

const timeLeftDisplay = document.querySelector("#time-left");
const resultDisplay = document.querySelector("#result");
const startPauseButton = document.querySelector("#start-pause-button");

let divArr = [];

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

console.log(divArr);
console.log(groupDivs);

console.log(divArr[1]);

function addClass(arr) {
  let newDiv = [];

  for (let i = 0; i < arr.length; i++) {
    newDiv = arr[i].map((div) => {
      let indexOfDiv = arr[i].indexOf(div) + 1;
      console.log(indexOfDiv);
      div.classList.add(`l${indexOfDiv}`);

      return div;
    });

    console.log(newDiv);
  }
  return newDiv;
}

let addClassDivs = addClass(groupDivs);
console.log(addClassDivs);

console.log(document.querySelectorAll(".l1"));

const squares = document.querySelectorAll(".grid div");
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
