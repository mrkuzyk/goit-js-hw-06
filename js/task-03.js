const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const listEl = document.querySelector('.gallery')
// console.log(listEl);

// створюю шаблон і деструктуризую вхідні дані
const makeImageGallery = ({ url, alt }) => {

  // створюю "лі" і даю йому клас
  const itemsEl = document.createElement(`li`);
  itemsEl.classList.add('items');

  // створюю "імґ" і даю йому клас + "срк" з масиву + "альт" з масиву
  const imageEl = document.createElement("img")
  imageEl.classList.add("image");
  imageEl.src = `${url}`;
  imageEl.alt = `${alt}`;

  itemsEl.append(imageEl); // вкладаю "імґ" в елемент "лі"
  return itemsEl;
};

const elements = images
  .map(makeImageGallery)
  .join(''); // перебираю масив через створений шаблон
console.log(elements);
listEl.insertAdjacentHTML("beforeend", elements);
// listEl.append(...elements);
console.log()