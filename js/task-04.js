const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#value');

let counterValue = 0;

decrementBtn.addEventListener('click', onDecrClick);
incrementBtn.addEventListener('click', onIncrClick);

function updateCounter() {
    counter.textContent = counterValue;
}

function onDecrClick() {
    counterValue -= 1;
    updateCounter();
}

function onIncrClick() {
    counterValue += 1;
    updateCounter();
}

