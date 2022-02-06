const form = document.querySelector('.login-form');
const btn = document.querySelector('button')
// console.log(form);

const onFormSubmit = (event) => {
    event.preventDefault(); //дефолтні налаштування (при відправці не обновляти)

    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value;
    const password = formElements.password.value;

    // масив даних на бекенд
    const formData = {
        mail, password,
    };

    // перевірка на відсутність пустих полів
    if (mail === "" || password === "") {
        return console.log(`Шановний! Ви забули дещо заповнити`);
    } else {
        console.log(`Email: ${mail}, Password: ${password}`);
        event.currentTarget.reset(); // при відправці відбувається ресет форми
    };
}

form.addEventListener('submit', onFormSubmit);
