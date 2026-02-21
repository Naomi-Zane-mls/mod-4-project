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
    li.dataset.id = fact.id; 
    li.textContent = fact; 
    factList.appendChild(li);
  });
}