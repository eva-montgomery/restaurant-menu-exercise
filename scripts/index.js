const nameContainer = document.querySelector(".js-menu");

//Extract names of categories
// Write a function (named getCategories()) that returns an array of
// the category names from the menu variable.
// (Hint: use the Object.keys() function!)

function getCategories(dict) {
    // console.log(Object.keys(menu)); 
    return (Object.keys(dict)); 
}
   let mealCategories = getCategories(menu);
   console.log(mealCategories);

// Wrap names in <li> elements
// Write a function (named nameToListItem()) that accepts a category 
// name (like "breakfast") and returns a new <li> DOM element with 
// the category name set as its .textContent
// Make sure to return the new element.

function nameToListItem(categoryName) {
    const li = document.createElement('li');
    // li.appendChild(categoryName);
    li.textContent = categoryName;
    return li;
}

console.log(nameToListItem("breakfast"));

// Write a function that transforms an array of category names to an 
// array of <li> elements.


function categoriesToListItem(array) {
    return array.map(nameToListItem);
}

// Use `getCategories()`in combination with `categoriesToListItem()`

console.log(getCategories(menu));
console.log(categoriesToListItem(mealCategories));

// Render the list items to `.js-menu`

function listItemToElement(element) {
    nameContainer.appendChild(element);
}
listItemToElement(mealCategories);
