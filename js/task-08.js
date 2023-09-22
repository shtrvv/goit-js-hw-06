const registerForm = document.querySelector('.login-form');

registerForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const {email, password} = event.currentTarget.elements;

    if (email.value === '' || password.value === '') {
        alert('All fields must be filled!');
    }

    const data = {
        email: email.value,
        password: password.value
    }
    console.log(data);

    event.currentTarget.reset();
}