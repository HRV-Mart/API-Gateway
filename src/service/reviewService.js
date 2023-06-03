const { postRequest, deleteRequest, getRequest } = require("../networking/networking");
const { getReviewServerURL } = require("../secretManager/secretManager");

async function createReview(userId, productId, title, description, images) {
    const response = await postRequest(getReviewServerURL(), getBody(userId, productId, title, description, images), getHeader(), false);
    return response
}
async function deleteReview(userId, productId) {
    const response = await deleteRequest(`${getReviewServerURL()}/${userId}/${productId}`, {}, {}, false);
    return response
}
async function getReviews(queryParams) {
    const response = await getRequest(`${getReviewServerURL()}${queryParams}`, {}, true);
    return response
}
function getBody(userId, productId, title, description, images) {
    return {
        userId: userId,
        productId: productId,
        title: title,
        description: description,
        images: images
    }
}
function getHeader() {
    return {
        "Content-Type": "application/json"
    };
}
module.exports = {
    createReview,
    deleteReview,
    getReviews
}