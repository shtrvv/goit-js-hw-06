const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const inputValue = event.currentTarget.value;
    const requiredLength = parseInt(input.getAttribute('data-length'));

    if (inputValue.length === requiredLength) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}