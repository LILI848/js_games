const cardArray = [
  { imgName: "leaf1.png", imgAdress: "./images/leaf1.png" },
  { imgName: "leaf2.png", imgAdress: "./images/leaf2.png" },
  { imgName: "leaf3.png", imgAdress: "./images/leaf3.png" },
  { imgName: "flower1.png", imgAdress: "./images/flower1.png" },
  { imgName: "flower2.png", imgAdress: "./images/flower2.png" },
  { imgName: "flower3.png", imgAdress: "./images/flower3.png" },
  { imgName: "leaf1.png", imgAdress: "./images/leaf1.png" },
  { imgName: "leaf2.png", imgAdress: "./images/leaf2.png" },
  { imgName: "leaf3.png", imgAdress: "./images/leaf3.png" },
  { imgName: "flower1.png", imgAdress: "./images/flower1.png" },
  { imgName: "flower2.png", imgAdress: "./images/flower2.png" },
  { imgName: "flower3.png", imgAdress: "./images/flower3.png" },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
let score = document.getElementById("result");
let num = 0;
score.innerHTML = num;
let cardName = [];
let cardChosenId = [];

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

function flipCard() {
  const cardId = this.getAttribute("data-id");
  const imgName = cardArray[cardId].imgName;
  const imgAdress = cardArray[cardId].imgAdress;

  this.setAttribute("src", imgAdress);

  cardName.push(imgName);
  cardChosenId.push(cardId);

  if (cardName.length === 2) {
    setTimeout(() => {
      findSameCards();
    }, 200);
  } else if (cardName.length > 2) {
    setTimeout(() => {
      resetBoard();
    }, 200);
  }
}

function findSameCards() {
  const allImgs = document.querySelectorAll("#grid img");
  const imgIndex1 = cardChosenId[0];
  const imgIndex2 = cardChosenId[1];
  if (imgIndex1 === imgIndex2) {
    alert("You have clicked the same image!");
    allImgs[imgIndex1].setAttribute("src", "./images/blank.png");
    cardName = [];
    cardChosenId = [];
  } else if (cardName[0] === cardName[1]) {
    allImgs[imgIndex1].setAttribute("src", "./images/white.png");
    allImgs[imgIndex2].setAttribute("src", "./images/white.png");
    allImgs[imgIndex1].removeEventListener("click", flipCard);
    allImgs[imgIndex2].removeEventListener("click", flipCard);
    num += 1;
    score.innerHTML = num;
    cardName = [];
    cardChosenId = [];
  } else {
    resetBoard();
  }
}

function resetBoard() {
  const imgIndex1 = cardChosenId[0];
  const imgIndex2 = cardChosenId[1];
  const allImgs = document.querySelectorAll("#grid img");
  allImgs[imgIndex1].setAttribute("src", "./images/blank.png");
  allImgs[imgIndex2].setAttribute("src", "./images/blank.png");

  cardChosenId = [];
  cardName = [];
}
