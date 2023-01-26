function getSecret(key) {
    return process.env[key]
}
module.exports = { getSecret }