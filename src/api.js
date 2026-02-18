const API_URL = 'https://meowfacts.herokuapp.com/';

async function fetchCollection() {
try {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.warn('Failed to fetch collection:', error);
  }
}

export { fetchCollection };

