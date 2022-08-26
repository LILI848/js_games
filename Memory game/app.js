const cardArray = [
  { imgName: "leaf1", imgAdress: "./images/leaf1" },
  { imgName: "leaf2", imgAdress: "./images/leaf2" },
  { imgName: "leaf3", imgAdress: "./images/leaf3" },
  { imgName: "flower1", imgAdress: "./images/flower1" },
  { imgName: "flower2", imgAdress: "./images/flower2" },
  { imgName: "flower3", imgAdress: "./images/flower3" },
  { imgName: "leaf1", imgAdress: "./images/leaf1" },
  { imgName: "leaf2", imgAdress: "./images/leaf2" },
  { imgName: "leaf3", imgAdress: "./images/leaf3" },
  { imgName: "flower1", imgAdress: "./images/flower1" },
  { imgName: "flower2", imgAdress: "./images/flower2" },
  { imgName: "flower3", imgAdress: "./images/flower3" },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");

function createBoard() {
  for (let i = 0; i < 10; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "./images/blank.png");
    card.setAttribute("data-id", i);
    gridDisplay.append(card);
  }
}

createBoard();
