const { createProduct, getProduct } = require("./../service/productService");
const router = require("express").Router();
const { isAdmin, isUser } = require("./../service/tokenService");
router.get("/:productId", isUser, async (req, res) => {
    const productId = req.params.productId;
    const response = await getProduct(productId);
    res.status(response.status).json(response.data);
});
router.post("", isAdmin, async (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const images = req.body.images;

    const response = await createProduct(name, description, images);
    res.status(response.status).send(response.data);
});
module.exports = router;