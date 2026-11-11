import { cart } from "./cart.js";
import { fruits } from "./fruits.js";

export function addToCart(id) {
    let fruit = fruits.find(item => item.id === id);

    let existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...fruit, quantity: 1 });
    }
}
