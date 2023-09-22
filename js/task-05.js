const input = document.querySelector('#name-input');
const label = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (input.value === '') {
        label.textContent = 'Anonymous';
    } else {
        label.textContent = event.currentTarget.value;
    }
}
