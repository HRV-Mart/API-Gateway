const router = require("express").Router();
const { isUser } = require("./../service/tokenService");
const { addProductInLike, getProductLikeByUser, isProductLikesByUser, removeProductFromLike} = require("./../service/likeService");
const { logError } = require("../logging/logging");

router.get("/", isUser, async (req, res) => {
    const userId = req.user.userId;
    const response = await getProductLikeByUser(userId);

    if (response.status == 200) {
        res.status(200).send(response.data)
    }
    else {
        logError(response);
        res.status(response.status).send(response.data)
    }
});
router.get("/:productId", isUser, async (req, res) => {
    const userId = req.user.userId;
    const productId = req.params.productId;

    const response = await isProductLikesByUser(userId, productId);

    if (response.status == 200) {
        res.status(200).send(response.data)
    }
    else {
        logError(response);
        res.status(response.status).send(response.data)
    }
});
router.post("/", isUser, async (req, res) => {
    const userId = req.user.userId;
    const productId = req.body.productId;

    const response = await addProductInLike(userId, productId);

    if (response.status == 200) {
        res.status(200).send(response.data)
    }
    else {
        logError(response);
        res.status(response.status).send(response.data)
    }
});
router.delete("/:productId", isUser, async (req, res) => {
    const userId = req.user.userId;
    const productId = req.params.productId;

    const response = await removeProductFromLike(userId, productId);

    if (response.status == 200) {
        res.status(200).send(response.data)
    }
    else {
        logError(response);
        res.status(response.status).send(response.data)
    }
});
module.exports = router