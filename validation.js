export function validateCustomer(name) {
    if (name.trim() === "") {
        alert("Please enter customer name!");
        return false;
    }

    return true;
}
