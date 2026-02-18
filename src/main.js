import { renderSingleFact } from "./dom-helpers";
import { getSingleFact } from "./single-fact-fetch";

const errorMessage = document.querySelector("#error-message")
const successMessage = document.querySelector('#success-message')
const singleFactButton = document.querySelector('#single-fact-button')


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

