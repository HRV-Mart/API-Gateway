const { postRequest } = require("../networking/networking");
const { getCartServerURL } = require("./../secretManager/secretManager");

async function addProductInCart(userId, productId, quantity) {
    const response = await postRequest(`${getCartServerURL()}`, getBody(userId, productId, quantity), getHeader(), false);
    return response;
}
function getBody(userId, productId, quantity) {
    return {
        userId: userId,
        productId: productId,
        quantity: quantity
    };
}
function getHeader() {
    return {
        "Content-Type": "application/json"
    };
}
module.exports = {
    addProductInCart
}