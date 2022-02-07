function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body')
const btnChange = document.querySelector('.change-color')
const spanText = document.querySelector('.color')


const onChangeBtnColor = (event) => {

  // const newColor = `#${Math.floor(Math.random() * 16777215)
  //   .toString(16)
  //   .padStart(6, 0)}`;
  
  body.style.backgroundColor = getRandomHexColor();
  
  spanText.textContent = body.style.backgroundColor;
};

btnChange.addEventListener('click', onChangeBtnColor);
