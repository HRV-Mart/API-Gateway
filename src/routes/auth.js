const router = require("express").Router();
const crypto = require('crypto');
const { getHashedSecret, getAuthServerURL } = require("./../secretManager/secretManager");
const { postRequest } = require("./../networking/networking");
const { logMessage } = require("./../logging/logging");
const { createJWT } = require("../middleware/middleware");
// Login
router.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (verifyEmail(email)) {
        const hashedPassword = crypto.createHash("sha256", getHashedSecret())
            .update(password)
            .digest("hex");

        const payload = {
            email: email,
            hashedPassword: hashedPassword
        };
        const header = {
            "Content-Type": "application/json"
        }
        const path = `${getAuthServerURL()}/auth/login`;
        const response = await postRequest(path, payload, header, false);
        if (response.status == 200) {
            const token = createJWT(email);
            res.status(200).json({
                jwt: token,
                message: response.data
            });
        }
        else {
            res.status(response.status).send(response.data);
        }
    }
    else {
        res.status(500).send("Send Valid Email");
    }
});
// Sign up
router.post("/signup", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (verifyEmail(email)) {
        const hashedPassword = crypto.createHash("sha256", getHashedSecret())
            .update(password)
            .digest("hex");

        const payload = {
            email: email,
            hashedPassword: hashedPassword
        };
        const header = {
            "Content-Type": "application/json"
        }
        const path = `${getAuthServerURL()}/auth/signup`;
        const response = await postRequest(path, payload, header, false);
        if (response.status == 200) {
            const token = createJWT(email);
            res.status(200).json({
                jwt: token,
                message: response.data
            });
        }
        else {
            res.status(response.status).send(response.data);
        }
    }
    else {
        res.status(500).send("Send Valid Email");
    }
});
// Email verifier
function verifyEmail(email) {
    if (email.includes('@')) {
        return true;
    }
    else {
        return false;
    }
}
// Password Verifier
module.exports = router;