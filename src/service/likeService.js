const { postRequest, getRequest, deleteRequest } = require("../networking/networking");
const { getLikeServerURL } = require("./../secretManager/secretManager");

async function getProductLikeByUser(userId) {
    const response = await getRequest(`${getLikeServerURL()}/${userId}`, {}, true);
    return response;
}
async function isProductLikesByUser(userId, productId) {
    const response = await getRequest(`${getLikeServerURL()}/${userId}/${productId}`, {}, true);
    return response;
}
async function addProductInLike(userId, productId) {
    const response = await postRequest(`${getLikeServerURL()}`,getBody(userId, productId), getHeader(), false);
    return response;
}
async function removeProductFromLike(userId, productId) {
    const response = await deleteRequest(`${getLikeServerURL()}/${userId}/${productId}`, {}, false);
    return response
}
function getBody(userId, productId) {
    return {
        userId: userId,
        productId: productId
    }
}
function getHeader() {
    return {
        "Content-Type": "application/json"
    };
}
module.exports = {
    getProductLikeByUser,
    isProductLikesByUser,
    addProductInLike,
    removeProductFromLike
}