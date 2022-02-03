const itemWithClass = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemWithClass.length}`);

itemWithClass.forEach(function (item) {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
});