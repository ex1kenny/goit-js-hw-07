const getIdinput = document.getElementById("name-input");
const getIdoutput = document.getElementById("name-output");

getIdinput.addEventListener("input", () => {
  const sumInput = getIdinput.value;
  getIdoutput.textContent = sumInput === "" ? "Anonymous" : sumInput;
});
