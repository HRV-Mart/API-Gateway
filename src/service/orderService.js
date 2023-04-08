const { getRequest } = require("../networking/networking");
const { getOrderServerURL } = require("./../secretManager/secretManager");
async function getAllOrderOfUser(userID) {
    const response = await getRequest(`${getOrderServerURL()}/${userID}`, {}, true);
    return response;
}
module.exports = {
    getAllOrderOfUser
}