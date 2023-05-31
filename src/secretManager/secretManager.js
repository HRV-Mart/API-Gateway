const { logError } = require("./../logging/logging");
const {logMessage} = require("../logging/logging");
const authServerURLKey = "AUTH_SERVER_URL";
const userServerURLKey = "USER_SERVER_URL";
const productServerURLKey = "PRODUCT_SERVER_URL";
const cartServerURLKey = "CART_SERVER_URL"
const likeServerURLKey = "LIKE_SERVER_URL";
const orderServerURL = "ORDER_SERVER_URL";
const reviewServerURL = "REVIEW_SERVER_URL";
const hashedSecretKey = "HASHED_SECRET";
const jwtSecret = "JWT_SECRET";
const APPLICATION_PORT = "APPLICATION_PORT";

function getSecret(key) {
    const value = process.env[key] || getDefaultSecret(key);
    if (key !== hashedSecretKey && key !== jwtSecret) {
        logMessage(value)
    }
    return value
}
function getAuthServerURL() {
    return getSecret(authServerURLKey);
}
function getUserServerURL() {
    return getSecret(userServerURLKey);
}
function getProductServerURL() {
    return getSecret(productServerURLKey);
}
function getCartServerURL() {
    return getSecret(cartServerURLKey);
}
function getLikeServerURL() {
    return getSecret(likeServerURLKey);
}
function getOrderServerURL() {
    return getSecret(orderServerURL)
}
function getReviewServerURL() {
    return getSecret(reviewServerURL)
}
function getHashedSecret() {
    return getSecret(hashedSecretKey);
}
function getJwtSecret() {
    return getSecret(jwtSecret);
}
function getApplicationPort() {
    return parseInt(getSecret(APPLICATION_PORT));
}
function getDefaultSecret(key) {
    logError(`Unable to find ${key} secret`);
    if (key == APPLICATION_PORT) {
        return 3002;
    }
    else {
        return "SECRET";
    }
}
module.exports = {
    getApplicationPort,
    getAuthServerURL,
    getProductServerURL,
    getUserServerURL,
    getCartServerURL,
    getLikeServerURL,
    getOrderServerURL,
    getReviewServerURL,
    getHashedSecret,
    getJwtSecret
}