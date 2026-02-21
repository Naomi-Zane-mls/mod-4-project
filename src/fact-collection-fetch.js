async function fetchCollection(num) {
try {
    const response = await fetch(`https://meowfacts.herokuapp.com/?count=${num}`);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return {
      data: data.data,
      error: null

    }
    

  } catch (error) {
    console.warn('Failed to fetch collection:', error);
  }
}

export { fetchCollection };

