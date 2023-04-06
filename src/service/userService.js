const { postRequest, putRequest, getRequest } = require("./../networking/networking");
const { getUserServerURL } = require("./../secretManager/secretManager");

async function updateUser(name, email) {
    const response = await putRequest(getUserServerURL(), getBody(name, email), getHeader(), false);
    return response
}
async function getUser(id) {
    const response = await getRequest(getUserServerURL(), {}, false);
    return response
}
function getBody(name, email) {
    return {
        emailId: email,
        name: name
    };
}
function getHeader() {
    return {
        "Content-Type": "application/json"
    };
}
module.exports = {
    updateUser,
    getUser
}