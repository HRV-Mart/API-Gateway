const router = require("express").Router();
const { signUp } = require("./../service/authService");

// Sign Up
router.post('/signup', async (req, res) => {
    try {
        const response = await signUp(req.body.email, req.body.password);
        res.status(response.status).send(response.data);
        // Create User if status = 200.
    }
    catch (error) {
        res.status(500).send("Something Went Wrong!!")
    }
});
module.exports = router;