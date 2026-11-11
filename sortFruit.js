import { fruits } from "./fruits.js";

export function sortFruit() {
    return [...fruits].sort(
        (a, b) => a.price - b.price
    );
}
