
import { fruits } from "./fruits.js";
import { addToCart } from "./addToCart.js";

export function displayFruits() {
    let products = document.getElementById("products");

    products.innerHTML = "";

    fruits.forEach(fruit => {
        products.innerHTML += `
            <div class="fruit">
                <h3>${fruit.name}</h3>
                <p>Price: ₱${fruit.price}</p>
                <button onclick="addFruit(${fruit.id})">
                    Add to Cart
                </button>
            </div>
        `;
    });

    window.addFruit = (id) => {
        addToCart(id);
    };
}
