const input = document.querySelector('#name-input');
const nameText = document.querySelector('#name-output');


const onInputText = (event) => {
    nameText.textContent = event.currentTarget.value;
    if (event.currentTarget.value === ('')) {
        nameText.textContent = `Anonymous`;
    }
};

input.addEventListener('input', onInputText)