document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  // delete all button listener - waiting for click
  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

// setting what to do when form is subitted (append form info to whisky list item)
const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const whiskyListItem = createWhiskyListItem(event.target);
  const whiskyList = document.querySelector('#whisky-list');
  whiskyList.appendChild(whiskyListItem);

  // clear the form
  event.target.reset();

}

// creating DOM item from info submitted on form
// element created for each value extracted from the form entry
const createWhiskyListItem = function (form) {
  const whiskyListItem = document.createElement('li');
  whiskyListItem.classList.add('whisky-list-item');

  const expression = document.createElement('h2');
  expression.textContent = form.expression.value;
  whiskyListItem.appendChild(expression);

  const distiller = document.createElement('h3');
  distiller.textContent = form.distiller.value;
  whiskyListItem.appendChild(distiller);

  const region = document.createElement('p');
  region.textContent = form.region.value;
  whiskyListItem.appendChild(region);

  const type = document.createElement("li");
  type.textContent = form.type.value;
  whiskyListItem.appendChild(type);

  return whiskyListItem;
}

// delete all button handler - on click event
const handleDeleteAllClick = function (event) {
  const whiskyList = document.querySelector('#whisky-list');
  whiskyList.innerHTML = '';
}