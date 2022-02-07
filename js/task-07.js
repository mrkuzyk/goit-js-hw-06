const controler = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text')

// console.dir(textSpan.style);
// console.log(controler.value)

// функція змінює "фонтСайз" в залежності від значення "контроллера"
const onChangeFontSize = () => textSpan.style.fontSize = controler.value + 'px';

controler.addEventListener('input', onChangeFontSize);