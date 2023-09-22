const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const container = document.querySelector('#boxes');
const input = document.querySelector('input')

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = input.valueAsNumber;
  const initialSize = 30;
  const sizeIncr = 10;
  let boxes = '';

  for (let i = 0; i < amount; i += 1) {
    const size = initialSize + i * sizeIncr;
    const backgroundColor = getRandomHexColor();

    const box = `
    <div
      style="width:${size}px; height:${size}px; background-color:${backgroundColor};"
    ></div>`

    boxes += box;
  }

  container.innerHTML = boxes;
}

function destroyBoxes() {
  container.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
