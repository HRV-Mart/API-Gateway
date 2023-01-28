const router = require("express").Router();
const { createJWT } = require("../service/tokenService");
const { signUp, login } = require("./../service/authService");

// Sign Up
router.post('/signup', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const response = await signUp(email, password);
        if (response.status == 200) {
            // Create User if status = 200.
            const token = createJWT(email);
            res.status(response.status).json({
                token: token,
                message: response.data
            });
        }
        else {
            res.status(response.status).send(response.data);
        }
    }
    catch (error) {
        res.status(500).send("Something Went Wrong!!")
    }
});
// Login
router.post('/login', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const response = await login(email, password);
        if (response.status == 200) {
            // Create User if status = 200.
            const token = createJWT(email);
            res.status(response.status).json({
                token: token,
                message: response.data
            });
        }
        else {
            res.status(response.status).send(response.data);
        }
    }
    catch (error) {
        res.status(500).send("Something Went Wrong!!")
    }
});
module.exports = router;