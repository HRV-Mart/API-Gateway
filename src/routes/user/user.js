const router = require("express").Router();
const { logMessage } = require("../../logging/logging");
const { isUser } = require("./../../middleware/middleware");
const { getRequest } = require("./../../networking/networking");
const { getUserServerURL } = require("./../../secretManager/secretManager");

router.get("/", isUser, async (req, res) => {
    const id = req.user.userId;
    const path = `${getUserServerURL()}/${id}`;

    const response = await getRequest(path, null, {}, true);
    logMessage(response);
    res.status(response.status).json(response.data);
});
module.exports = router;