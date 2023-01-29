const { postRequest, putRequest } = require("./../networking/networking");
const { getAuthServerURL, getHashedSecret } = require("./../secretManager/secretManager");
const crypto = require("crypto");
async function signUp(email, password) {

    const header = getHeader()
    const body = getBody(email, password);
    const response = await postRequest(`${getAuthServerURL()}/signup`, body, header, false);
    return response;
}
async function login(email, password) {
    const header = getHeader()
    const body = getBody(email, password);
    const response = await postRequest(`${getAuthServerURL()}/login`, body, header, false);
    return response;
}
async function updatePassword(email, password) {

}
function generateHashedPassword(password) {
    const hashedPassword = crypto.createHash("sha256", getHashedSecret())
        .update(password)
        .digest("hex");
    return hashedPassword;
}
function getBody(email, password) {
    return {
        email: email,
        hashedPassword: generateHashedPassword(password)
    };
}
function getHeader() {
    return {
        "Content-Type": "application/json"
    };
}
module.exports = {
    signUp,
    login,
    updatePassword
}