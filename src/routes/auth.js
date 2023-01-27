const router = require("express").Router();
const crypto = require('crypto');
const { getHashedSecret, getAuthServerURL } = require("./../secretManager/secretManager");
const { postRequest } = require("./../networking/networking");
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

        const response = await postRequest(getAuthServerURL(), payload, {}, false);
        res.status(response.status).send(response.data);
    }
    else {
        res.status(500).send("Send Valid Email")
    }
});
// Sign up
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