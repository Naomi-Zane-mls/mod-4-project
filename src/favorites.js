const STORAGE_KEY = "favorite-facts";

export function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return [];
  }
}

export function addFavorite(text) {
  const favorites = getFavorites();
  if (!favorites.includes(text)) {
    favorites.push(text);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }
}

export function removeFavorite(text) {
  const updated = getFavorites().filter((f) => f !== text);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export function clearStaleFavorites() {
  const favorites = getFavorites();

  const cleaned = favorites.filter(
    (f) => typeof f === "string" && f.trim() !== ""
  );

  if (cleaned.length !== favorites.length) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cleaned));
  }
}