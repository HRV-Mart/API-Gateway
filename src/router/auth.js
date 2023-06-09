const router = require("express").Router();
const { logError, logMessage } = require("../logging/logging");
const { createJWT } = require("../service/tokenService");
const { login } = require("./../service/authService");
// Login
router.post('/login', async (req, res) => {
    try {
        const jwt = req.body.jwt

        const response = await login(jwt);

        if (response.status == 200) {
            // Create User if status = 200.
            logMessage(response)
            const token = createJWT(response.data.email, false);
            res.status(response.status).json({
                token: token,
                message: "Login successful"
            });
        }
        else {
            res.status(response.status).json({
                error: "Unable to login"
            });
        }
    }
    catch (error) {
        logError(error)
        res.status(500).json({
            error: "Something Went Wrong!!"
        })
    }
});
module.exports = router;