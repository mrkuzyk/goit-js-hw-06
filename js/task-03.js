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

const makeImageGallery = image => {

  const items = document.createElement( `li`);
  itemEl.classList.add("items");

// const imageEl = document.createElement("img")
//   imageEl.classList.add("image");
//   imageEl.src = `${images.url}`;
//   imageEl.alt = `${images.alt}`;

//     // imageEl.src = `https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`;
//     // imageEl.alt = `lol`;


// itemEl.append(imageEl);
  
// console.log(itemEl);

  // return itemEl;
}

// const elementsImg = images.map(makeImageGallery);

listEl.append(items);