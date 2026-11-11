import { fruits } from "./fruits.js";

export function filterFruit(maxPrice) {
    return fruits.filter(fruit =>
        fruit.price <= maxPrice
    );
}
