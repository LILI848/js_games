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
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "./images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);

    gridDisplay.append(card);
  }
}

createBoard();

/* function flipCard() {
  for (let i = 0; i < cardArray.length; i++) {
    const eachCard = document.getElementById(i);
    eachCard.addEventListener("click", () => {
      const cardId = eachCard.getAttribute("id");
      console.log("clicked", cardId);
    });
  }
}
flipCard();
 */

function flipCard() {
  const cardId = this.getAttribute("data-id");
  console.log("clicked", cardId);
}
