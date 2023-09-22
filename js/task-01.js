const categoriesItems = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(function (item) {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});
