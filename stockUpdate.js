import { inventory } from "./inventory.js";

export function updateStock(name, quantity) {
    let fruit = inventory.find(item => item.name === name);

    if (fruit && quantity > 0 && quantity <= fruit.stock) {
        fruit.stock -= quantity;
        return true;
    }

    return false;
}
