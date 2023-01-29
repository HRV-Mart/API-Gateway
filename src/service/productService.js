const { postRequest, getRequest } = require("./../networking/networking");
const { getProductServerURL } = require("./../secretManager/secretManager");
async function getProduct(productId) {
    const response = await getRequest(getProductServerURL(), {}, true);
    return response;
}
async function createProduct(name, description, images) {
    const response = await postRequest(getProductServerURL(), getBody(name, description, images), getHeader(), false);
    return response;
}
function getBody(name, description, images) {
    return {
        name: name,
        description: description,
        images: images
    };
}
function getHeader() {
    return {
        "Content-Type": "application/json"
    };
}
module.exports = {
    getProduct,
    createProduct
}