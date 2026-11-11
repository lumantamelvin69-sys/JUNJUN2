export function saveCart(cart) {
    localStorage.setItem(
        "fruitCart",
        JSON.stringify(cart)
    );
}

export function loadCart() {
    return JSON.parse(
        localStorage.getItem("fruitCart") || "[]"
    );
}
