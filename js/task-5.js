function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorSpan = document.querySelector(`.color`);
const changeColorBtn = document.querySelector(`.change-color`);

changeColorBtn.addEventListener("click", (event) => {
  const colorHex = getRandomHexColor();
  colorSpan.textContent = colorHex;
  document.body.style.backgroundColor = colorHex;
});
