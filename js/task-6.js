const inputControls = document.querySelector("#controls input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;

const createDiv = (amount) => {
  boxesContainer.innerHTML = "";
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = 30 + i * 10;

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesContainer.appendChild(box);
  }
};

const destroyDiv = () => {
  boxesContainer.innerHTML = "";
};

createButton.addEventListener("click", () => {
  const amount = parseInt(inputControls.value);

  if (amount >= 1 && amount <= 100) {
    createDiv(amount);
    inputControls.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

destroyButton.addEventListener("click", destroyDiv);
