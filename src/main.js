import { renderSingleFact } from "./dom-helpers";
import { getSingleFact } from "./single-fact-fetch";
import { fetchCollection } from "./fetch-collection";
import { init } from "./app";
import { render } from "./app";
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
    successMessage.textContent = 'Fact found!'
}

singleFactButton.addEventListener('click', () => {
    getAndRenderSingleFact();
})

async function getAndRenderCollection(num) {
    const facts = await fetchCollection(num)
    if (facts.error) {
        errorMessage.textContent = `Error: ${factObj}`
        return;
    }
    console.log(facts)
    render(facts)
}

form.addEventListener('submit', (e) => {
  e.preventDefault(); // stops the browsers default form behavior which would refresh the page

  const factCount = document.querySelector('#fact-count').value;
    getAndRenderCollection(factCount)
  form.reset();
});
