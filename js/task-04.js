let counterValue = 0;

// отримую доступ до "хттмл" елементів
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const indicstorValue = document.querySelector('#value');
indicstorValue.textContent = counterValue;

// колбек функція для зменшення значення
const onDecrementBtn = () => {
    indicstorValue.textContent = counterValue -= 1;
};

// колбек функція для збільшення значення
const onIncrementBtn = () => {
    indicstorValue.textContent = counterValue += 1;
};

// створюю реакцію на подію черз клік з колбеками
decrementBtn.addEventListener('click', onDecrementBtn);
incrementBtn.addEventListener('click', onIncrementBtn);