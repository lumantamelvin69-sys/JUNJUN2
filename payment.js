export function payment(amount, cash) {
    if (cash >= amount) {
        return cash - amount;
    }

    return "Insufficient payment";
}
