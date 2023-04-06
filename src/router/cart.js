const router = require("express").Router();
const { isUser } = require("./../service/tokenService");
const {addProductInCart, getUserCart} = require("./../service/cartService");
const { logError } = require("../logging/logging");

router.post('/', isUser, async (req, res) => {
    const userId = req.user.userId;
    const productId = req.body.productId;
    const quantity = req.body.quantity

    const response = await addProductInCart(userId, productId, quantity);
    if (response.status == 200) {
        res.status(200).send(response.data)
    }
    else {
        logError(response);
        res.status(response.status).send(response.data)
    }
});
router.get("/", isUser, async (req, res) => {
    const userId = req.user.userId;
    const response = await getUserCart(userId);
    if (response.status == 200) {
        res.status(200).send(response.data)
    }
    else {
        logError(response);
        res.status(response.status).send(response.data)
    }
});
module.exports = router;