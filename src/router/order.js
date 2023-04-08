const router = require("express").Router();
const { isUser } = require("./../service/tokenService");
const { getAllOrderOfUser } = require("./../service/orderService");
const { logError } = require("../logging/logging");

router.get("/", isUser, async (req, res) => {
    const userId = req.user.userId;
    const response = await getAllOrderOfUser(userId);

    if (response.status == 200) {
        res.status(200).send(response.data)
    }
    else {
        logError(response);
        res.status(response.status).send(response.data)
    }
});
module.exports = router