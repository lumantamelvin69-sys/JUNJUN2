import { cart } from "./cart.js";
import { calculateTotal } from "./calculateTotal.js";

export function displayCart() {
    let cartList = document.getElementById("cart");

    cartList.innerHTML = "";

    cart.forEach(fruit => {
        cartList.innerHTML += `
            <p>${fruit.name} x ${fruit.quantity}
            = ₱${fruit.price * fruit.quantity}</p>
        `;
    });

    document.getElementById("total").textContent =
        "Total: ₱" + calculateTotal();
}
