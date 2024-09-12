function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");

function createBoxes(amount) {
  boxes.innerHTML = "";
  let size = 30;
  const divs = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    divs.push(box);
    size += 10;
  }

  boxes.append(...divs);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

document.querySelector("[data-create]").addEventListener("click", () => {
  const numberOfBlocks = Number(input.value);
  if (numberOfBlocks >= 1 && numberOfBlocks <= 100) {
    createBoxes(numberOfBlocks);
    input.value = "";
  }
});

document.querySelector("[data-destroy]").addEventListener("click", () => {
  destroyBoxes();
  input.value = "";
});
