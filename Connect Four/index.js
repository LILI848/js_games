const grid = document.querySelector(".grid");

for (let i = 0; i < 48; i++) {
  const div = document.createElement("div");
  grid.append(div);
}

let divs = document.querySelectorAll("div");
for (let j = 42; j <= 48; j++) {
  divs[j].setAttribute("class", "taken");
}
const squares = document.querySelectorAll(".grid div");
const result = document.querySelector("#result");
const displayCurrentPlayer = document.querySelector("#current-player");
