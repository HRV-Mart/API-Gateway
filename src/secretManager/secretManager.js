const authServerURLKey = "AUTH_SERVER_URL";
const hashedSecretKey = "HASHED_SECRET";
const jwtSecret = "JWT_SECRET";
const port = "APPLICATION_PORT";
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
function getApplicationPort() {
    return parseInt(getSecret(APPLICATION_PORT));
}
module.exports = { getApplicationPort, getAuthServerURL, getHashedSecret, getJwtSecret }