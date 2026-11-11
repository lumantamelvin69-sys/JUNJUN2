import { cart } from "./cart.js";

export function calculateTotal() {
    return cart.reduce(
        (total, fruit) =>
            total + fruit.price * fruit.quantity, 0
    );
}
