import { cart } from "./cart.js";

export function updateQuantity(id, quantity) {
    let fruit = cart.find(item => item.id === id);

    if (fruit && quantity > 0) {
        fruit.quantity = quantity;
    }
}
