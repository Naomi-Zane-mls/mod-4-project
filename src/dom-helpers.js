export const renderSingleFact = (fact) => {
    const factH2 = document.querySelector("#single-fact")
    factH2.textContent = `Did you know?: ${fact}`
}