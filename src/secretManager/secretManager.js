const { logError } = require("./../logging/logging");
const authServerURLKey = "AUTH_SERVER_URL";
const userServerURLKey = "USER_SERVER_URL";
const productServerURLKey = "PRODUCT_SERVER_URL";
const cartServerURLKey = "CART_SERVER_URL"
const orderServerURL = "ORDER_SERVER_URL";
const hashedSecretKey = "HASHED_SECRET";
const jwtSecret = "JWT_SECRET";
const APPLICATION_PORT = "APPLICATION_PORT";

function getSecret(key) {
    return process.env[key] || getDefaultSecret(key);
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
function getOrderServerURL() {
    return getSecret(orderServerURL)
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
    getOrderServerURL,
    getHashedSecret,
    getJwtSecret
}