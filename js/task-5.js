function getRandomHexColor2() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const getFirstElement = document.querySelector("body");
const getSecondElement = document.querySelector(".color");
const getThirdElement = document.querySelector(".change-color");

getThirdElement.addEventListener("click", () => {
  const randomColor = getRandomHexColor2();
  getFirstElement.style.backgroundColor = randomColor;
  getSecondElement.textContent = randomColor;
});
