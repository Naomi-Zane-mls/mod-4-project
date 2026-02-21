import { getFavorites, addFavorite, removeFavorite } from "./favorites";

export const renderSingleFact = (fact) => {
    const factH2 = document.querySelector("#single-fact")
    factH2.textContent = `${fact}`
}

export async function init(facts) { 
  if (facts.data) render(facts);
}

export function render(facts) {
  const factList = document.querySelector('#fact-list');

  facts.data.forEach(fact => {
    const li = document.createElement('li');
    li.dataset.id = "fact";
    li.textContent = fact;
    li.addEventListener("click", () => {
      addFavorite(fact);
      renderFavorites();
      li.style.borderColor = "var(--calico_orange)";
    });

    factList.appendChild(li);
  });
}

export function createFavoriteLi(text) {
  const li = document.createElement("li");
  li.textContent = text;

  const btn = document.createElement("button");
  btn.textContent = "Remove";

  btn.addEventListener("click", () => {
    removeFavorite(text);
    renderFavorites();
  });

  li.appendChild(btn);
  return li;
}

export function renderFavorites() {
  const favoritesList = document.querySelector("#favorite-facts");
  favoritesList.innerHTML = "";

  const favorites = getFavorites();
  
  document.querySelectorAll("#fact-list li").forEach((li) => {
    const isFavorited = favorites.includes(li.textContent.trim());
    li.style.borderColor = isFavorited ? "var(--calico_orange)" : "";
  });

  const singleFactEl = document.querySelector("#single-fact");
  const isSingleFavorited = favorites.includes(singleFactEl.textContent.trim());
  singleFactEl.style.color = isSingleFavorited ? "var(--calico_orange)" : "";

  favorites.forEach((fact) => {
    favoritesList.appendChild(createFavoriteLi(fact));
  });
}
