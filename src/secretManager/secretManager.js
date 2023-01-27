const authServerURLKey = "AUTH_SERVER_URL";
const hashedSecretKey = "HASHED_SECRET";

function getSecret(key) {
    return process.env[key]
}
function getAuthServerURL() {
    return getSecret(authServerURLKey)
}
function getHashedSecret() {
    return getSecret
}
module.exports = { getSecret, getAuthServerURL, getHashedSecret }