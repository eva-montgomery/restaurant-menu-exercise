
function appendCardToMainContent(card) {
    console.log(card);
    const mainContent = document.querySelector('.js-main-content');
    mainContent.appendChild(card);
}

function itemToCard(itemObj) {
    console.log(itemObj);
    const card = document.createElement('div');
    card.classList.add('card');

    const title = document.createElement('h2');
    title.textContent = itemObj.name;
    card.appendChild(title);

    const price = document.createElement('h3');
    price.textContent = itemObj.price;
    card.appendChild(price);

    return card;
}

function drawItemsForCategory(categoryName) {
    // Clear out any existing menu items
    const mainContent = document.querySelector('.js-main-content');    
    mainContent.textContent = "";

    // Get the menu items for this category.
    // (i.e., if "lunch" was passed in as `categoryName`
    // get the value of `menu[categoryName]`)
    const arrayOfItems = menu[categoryName];
    console.log(arrayOfItems);
    arrayOfItems
        .map(itemToCard)
        .forEach(appendCardToMainContent)
}

function appendToMenu(item) {
    const menu = document.querySelector('.js-menu');
    menu.appendChild(item);
}

function showMenuItemsForCategory(category) {
    console.log(`You clicked ${category}`);
    drawItemsForCategory(category);
}

function addClickFunction(item) {
    item.addEventListener('click', function () {
        showMenuItemsForCategory(item.textContent);
    })
    return item;
}

function nameToListItem(name) {
    const el = document.createElement('li');
    el.textContent = name;
    return el;
}

function drawCategoriesToMenu(categoryNames) {
    const listItems = categoryNames
                                .map(nameToListItem)
                                .map(addClickFunction)
                                .forEach(appendToMenu)
}

function main() {
    const categoryNames = Object.keys(menu);
    drawCategoriesToMenu(categoryNames);    
}

main();