const btnChangeColor = document.querySelector('.change-color');
const label = document.querySelector('.color');

btnChangeColor.addEventListener('click', onBtnChangeClick);

function onBtnChangeClick() {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  label.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
