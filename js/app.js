document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-item-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);
})


const handleNewItemFormSubmit = function (event) {
    event.preventDefault();
  
    const whiskyListItem = createWhiskyListItem(event.target);
    const whiskyList = document.querySelector('#whisky-list');
    whiskyList.appendChild(whiskyListItem);
  
    event.target.reset();

  }


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

    return whiskyListItem;
}