export const renderSingleFact = (data) => {
    const factH2 = document.querySelector("#single-fact")
    factH2.textContent = `Did you know?: ` // set to fact in data object (e.g ${data.fact})
}