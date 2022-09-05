const gridDisplay = document.querySelector(".grid");

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
