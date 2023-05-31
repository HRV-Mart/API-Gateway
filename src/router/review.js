const router = require("express").Router();
const { logError } = require("../logging/logging");
const { createReview, deleteReview, getReviews } = require("../service/reviewService");
const { isUser } = require("../service/tokenService");

router.post("", isUser, async (req, res) => {
    const userId = req.user.userId
    const productId = req.body.productId
    const title = req.body.title
    const images = req.body.images
    const description = req.body.description
    
    const result = await createReview(userId, productId, title, description, images)

    if (response.status == 200) {
        res.status(200).send(response.data)
    }
    else {
        logError(response);
        res.status(response.status).send(response.data)
    }
})
router.delete("/:productId", isUser, async (req, res) => {
    const userId = req.user.userId
    const productId = req.params.productId

    const result = await deleteReview(userId, productId)
    
    if (response.status == 200) {
        res.status(200).send(response.data)
    }
    else {
        logError(response);
        res.status(response.status).send(response.data)
    }
})
router.get("", async (req, res)=>{
    const query = req.url.replace("/", "");

    const result = await getReviews(query)

    if (response.status == 200) {
        res.status(200).send(response.data)
    }
    else {
        logError(response);
        res.status(response.status).send(response.data)
    }
})
module.exports = router