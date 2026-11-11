export let favorites = [];

export function addFavorite(name) {
    if (!favorites.includes(name)) {
        favorites.push(name);
    }
}
