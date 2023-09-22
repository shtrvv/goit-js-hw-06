const range = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

range.addEventListener('input', onInputChange);

function onInputChange(event) {
    const currentValue = event.currentTarget.value;

    text.style.fontSize = `${currentValue}px`;
}