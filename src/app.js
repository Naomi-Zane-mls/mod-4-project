
import { fetchCollection } from './api.js'; // pulls in the fetch function i wrote in api.js

async function init() { // async means the function can use await inside it. It calls fetchCollection() and waits for it to finish before moving on, that's what await does.
  const items = await fetchCollection();
  if (items) render(items);
}

function render(items) { // grabs the ul element that already exists in the html. where the list items will be injected
  const ul = document.querySelector('ul');

  items.forEach(item => { // loops over every item in the array one at a time
    const li = document.createElement('li'); // creates a new li element in memory, its not on the page (yet)
    li.dataset.id = item.id; // sets the data-id attribute on the li. dataset.id is the JS way of writing data-id in html. li data-id="123" this lets me identift which item was clicked
    li.textContent = item.name; //put fields for the API returns
    ul.appendChild(li); // adds the li to the ul on the page. everything before this was building it in memory, this is the line that makes it appear
  });
}

init(); // calls init when the file runs