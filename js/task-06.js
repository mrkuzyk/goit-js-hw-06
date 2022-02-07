const input = document.querySelector('#validation-input');

// колбек функція, яка перевіря кількість введених символів (дата-ленг 
// в хтмл) після втрати фокусу і відносно цієї перевірки вішає колір
// бордера на імпут.
const onInputBlur = (event) => {
    input.classList.add('invalid'); // вішаю зразу неправильний
    
    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        input.classList.add('valid'); //якщо умова збулася то вішаю цей клас
        input.classList.remove('invalid'); // знімаю клас, якщо умова вірна
    };
};

input.addEventListener('blur', onInputBlur);
