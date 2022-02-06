const form = document.querySelector('.login-form');
const btn = document.querySelector('button')
// console.log(form);

const onFormSubmit = (event) => {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        mail, password,
    };

    if (mail === "" || password === "") {
        return console.log(`Шановний! Ви забули дещо заповнити`);
    } else {
        console.log(`Email: ${mail}, Password: ${password}`);
        event.currentTarget.reset();
    };
}

form.addEventListener('submit', onFormSubmit);
