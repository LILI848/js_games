const grid = document.querySelector(".grid");

for (let i = 0; i < 49; i++) {
  const div = document.createElement("div");
  grid.append(div);
}

let divs = document.querySelectorAll("div");
for (let j = 42; j <= 49; j++) {
  divs[j].setAttribute("class", "taken");
}

const squares = document.querySelectorAll(".grid div");
const result = document.querySelector("#result");
const displayCurrentPlayer = document.querySelector("#current-player");
let currentPlayer = 1;
displayCurrentPlayer.innerHTML = currentPlayer;
for (let i = 0; i < squares.length; i++) {
  squares[i].onclick = () => {
    // if the square below your current square is taken, you can go ontop of it
    if (squares[i + 7].classList.contains("taken")) {
      if (currentPlayer === 1) {
        squares[i].classList.add("player-one");
        squares[i].classList.add("taken");
        currentPlayer = 2;
        displayCurrentPlayer.innerHTML = currentPlayer;
      } else if (currentPlayer === 2) {
        squares[i].classList.add("player-two");
        squares[i].classList.add("taken");
        currentPlayer = 1;
        displayCurrentPlayer.innerHTML = currentPlayer;
      }
    } else {
      alert("You cannot go there!");
    }
  };
}
