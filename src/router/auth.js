const router = require("express").Router();
const { logError } = require("../logging/logging");
const { createJWT } = require("../service/tokenService");
const { signUp, login } = require("./../service/authService");
const { createUser } = require("./../service/userService");

// Sign Up
router.post('/signup', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const name = req.body.name
        if (email == undefined || password == undefined || name == undefined) {
            res.status(404).send("Not Found");
            return;
        }
        const authResponse = await signUp(email, password);
        if (authResponse.status == 200) {
            // Create User if status = 200.
            const userResponse = await createUser(name, email);
            if (userResponse.status == 200) {
                const token = createJWT(email);
                res.status(authResponse.status).json({
                    token: token,
                    message: authResponse.data
                });
            }
            else {
                logError({
                    userId: email,
                    message: "Unable to create user after creating auth",
                    data: userResponse
                });
                res.status(500).send("Something went wrong");
            }

        }
        else {
            res.status(authResponse.status).send(authResponse.data);
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