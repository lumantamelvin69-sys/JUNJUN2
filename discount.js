export function discount(total) {
    if (total >= 500) {
        return total * 0.10;
    }

    return 0;
}
