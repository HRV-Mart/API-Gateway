const authServerURLKey = "AUTH_SERVER_URL";
const userServerURLKey = "USER_SERVER_URL";
const productServerURLKey = "PRODUCT_SERVER_URL";
const hashedSecretKey = "HASHED_SECRET";
const jwtSecret = "JWT_SECRET";
const APPLICATION_PORT = "APPLICATION_PORT";

function getSecret(key) {
    return process.env[key]
}
function getAuthServerURL() {
    return getSecret(authServerURLKey)
}
function getUserServerURL() {
    return getSecret(userServerURLKey);
}
function getProductServerURL() {
    return getSecret(productServerURLKey);
}
function getHashedSecret() {
    return getSecret(hashedSecretKey)
}
function getJwtSecret() {
    return getSecret(jwtSecret);
}
function getApplicationPort() {
    return parseInt(getSecret(APPLICATION_PORT));
}
module.exports = { getApplicationPort, getAuthServerURL, getProductServerURL, getUserServerURL, getHashedSecret, getJwtSecret }