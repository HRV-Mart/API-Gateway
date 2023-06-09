const { getRequest } = require("./../networking/networking");
const { getAuthServerURL } = require("./../secretManager/secretManager");

async function login(jwt) {
    const response = await getRequest(`${getAuthServerURL()}?jwt=${jwt}`, {}, true)
    return response
}

module.exports = {
    login
}