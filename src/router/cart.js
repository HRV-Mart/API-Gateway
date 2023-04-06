const router = require("express").Router();
const { isUser } = require("./../service/tokenService");
const {addProductInCart, getUserCart, getProductQuantityInUserCart, purchaseProductInCart, computeCost, updateProductInCart} = require("./../service/cartService");
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
router.get("/purchase", isUser, async (req, res) => {
    const userId = req.user.userId;
    const response = await purchaseProductInCart(userId);
    if (response.status == 200) {
        res.status(200).send(response.data)
    }
    else {
        logError(response);
        res.status(response.status).send(response.data)
    }
});
router.get("/computeCost", isUser, async (req, res) => {
    const userId = req.user.userId;
    const response = await computeCost(userId);
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
    const productId = req.params.productId
    const response = await getProductQuantityInUserCart(userId, productId);
    if (response.status == 200) {
        res.status(200).json(response.data)
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
router.put('/', isUser, async (req, res) => {
    const userId = req.user.userId;
    const productId = req.body.productId;
    const quantity = req.body.quantity

    const response = await updateProductInCart(userId, productId, quantity);
    if (response.status == 200) {
        res.status(200).send(response.data)
    }
    else {
        logError(response);
        res.status(response.status).send(response.data)
    }
});
module.exports = router;