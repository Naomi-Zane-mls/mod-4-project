import { renderSingleFact } from "./dom-helpers";
import { getSingleFact } from "./single-fact-fetch";
import { fetchCollection } from "./fact-collection-fetch";
import { render } from "./dom-helpers";
const errorMessage = document.querySelector("#error-message")
const successMessage = document.querySelector('#success-message')
const singleFactButton = document.querySelector('#single-fact-button')
const form = document.querySelector('#generate-form');

const getAndRenderSingleFact = async () => {
    const factObj = await getSingleFact()
    if (factObj.error) {
        errorMessage.textContent = `Error: ${factObj}`
        return;
    }
    console.log(factObj)
    renderSingleFact(factObj.data)
}

getAndRenderSingleFact()

singleFactButton.addEventListener('click', () => {
    document.querySelector('#fact-list').style.display = 'none'
    document.querySelector('#single-fact').style.display = 'grid'
    getAndRenderSingleFact();
})

async function getAndRenderCollection(num) {
    const facts = await fetchCollection(num)
    if (facts.error) {
        errorMessage.textContent = `Error: ${factObj}`
        return;
    }
    render(facts)
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const factCount = document.querySelector('#fact-count').value;
  document.querySelector('#single-fact').style.display = 'none'
  document.querySelector('#fact-list').style.display = 'grid'
    getAndRenderCollection(factCount)
  form.reset();
});
