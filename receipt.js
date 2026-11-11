export function receipt(name, total) {
    return `
        FRUIT SHOP RECEIPT
        Customer: ${name}
        Total: ₱${total}
        Thank you for shopping!
    `;
}
