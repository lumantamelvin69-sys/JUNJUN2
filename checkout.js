import { cart } from "./cart.js";
import { calculateTotal } from "./calculateTotal.js";

export function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Total Payment: ₱" + calculateTotal());

    cart.length = 0;
}
