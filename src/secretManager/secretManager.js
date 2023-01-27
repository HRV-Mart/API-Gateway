const authServerURLKey = "AUTH_SERVER_URL";
const hashedSecretKey = "HASHED_SECRET";
const jwtSecret = "JWT_SECRET";

function getSecret(key) {
    return process.env[key]
}
function getAuthServerURL() {
    return getSecret(authServerURLKey)
}
function getHashedSecret() {
    return getSecret(hashedSecretKey)
}
function getJwtSecret() {
    return getSecret(jwtSecret);
}
module.exports = { getSecret, getAuthServerURL, getHashedSecret, getJwtSecret }