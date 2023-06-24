const { postRequest } = require("./../networking/networking");
const { getAuthServerURL } = require("./../secretManager/secretManager");

async function login(jwt) {
    const response = await postRequest(getAuthServerURL(), {
        jwt: jwt,
        userType: "USER"
        },
        getHeader(),
        true
    )
    return response
}
function getHeader() {
    return {
        "Content-Type": "application/json"
    };
}
module.exports = {
    login
}
