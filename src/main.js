import { renderSingleFact } from "./dom-helpers";
import { getSingleFact } from "./single-fact-fetch";
import { fetchCollection } from "./fact-collection-fetch";
import { render, renderFavorites } from "./dom-helpers"; 
import { addFavorite } from "./favorites";                
import { clearStaleFavorites } from "./favorites";



const errorMessage = document.querySelector("#error-message");
const singleFactButton = document.querySelector('#single-fact-button');
const singleFactEl = document.querySelector('#single-fact');
const form = document.querySelector('#generate-form');
const singleMeow = new Audio(`${import.meta.env.BASE_URL}sfx/singlemeow.mp3`)
const multipleMeow = new Audio(`${import.meta.env.BASE_URL}sfx/multiplemeow.mp3`)
const favoriteMeow = new Audio(`${import.meta.env.BASE_URL}sfx/favoritemeow.mp3`)
const muteButton = document.querySelector('#mute-button')
let isMuted = false;


muteButton.addEventListener('click', () => {
   isMuted = !isMuted
})

singleFactEl.addEventListener("click", () => {
  const text = singleFactEl.textContent.trim();
  if (!text) return;
    if (isMuted === false) {
        favoriteMeow.play()
    }
  addFavorite(text);
  renderFavorites();
  singleFactEl.style.color = "var(--calico_orange)";
});

const getAndRenderSingleFact = async () => {
    const factObj = await getSingleFact()
    if (factObj.error) {
        errorMessage.textContent = `Error: ${factObj}`
        return;
    }
    renderSingleFact(factObj.data)
    singleFactEl.style.color = ""
}

getAndRenderSingleFact()

singleFactButton.addEventListener('click', () => {
    document.querySelector('#fact-list').style.display = 'none'
    singleFactEl.style.display = 'grid'
   if (isMuted === false) {
    singleMeow.play()
   }
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
  singleFactEl.style.display = 'none'
  document.querySelector('#fact-list').style.display = 'grid'
  if (isMuted === false) {
    multipleMeow.play() 
   }
  getAndRenderCollection(factCount)
  form.reset();
});

clearStaleFavorites();
renderFavorites();



