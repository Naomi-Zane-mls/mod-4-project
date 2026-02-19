


export async function init(facts) { // async means the function can use await inside it. It calls fetchCollection() and waits for it to finish before moving on, that's what await does.
  if (facts.data) render(facts);
}

export function render(facts) { // grabs the ul element that already exists in the html. where the list items will be injected
  const factList = document.querySelector('#cat-fact-list');

  facts.data.forEach(fact => { // loops over every item in the array one at a time
    const li = document.createElement('li'); // creates a new li element in memory, its not on the page (yet)
    li.dataset.id = fact.id; // sets the data-id attribute on the li. dataset.id is the JS way of writing data-id in html. li data-id="123" this lets me identift which item was clicked
    li.textContent = fact; //put fields for the API returns
    factList.appendChild(li); // adds the li to the ul on the page. everything before this was building it in memory, this is the line that makes it appear
  });
}
