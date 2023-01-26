const { verify, sign } = require("jsonwebtoken");
const { getSecret } = require("../secretManager/secretManager");
const { logError } = require("../logging/logging");

function isAuthenticated(req, res, next) {
    try {
        const token = req.headers.authentication;
        const divider = ":";
        const jwt = token.split(divider)[1];
        const methord = token.split(divider)[0];

        if (methord != BEARER) {
            res.status(401).send(`Please use ${BEARER} as authenitcation type`);
        }
        else if (jwt == "") {
            res.status(401).json(
                { error: INVALID_TOKEN }
            );
        }
        else {
            verify(jwt, getSecret("JWT_SECRET"), (error, decodedMessage) => {
                if (error || decodedMessage == "") {
                    logError(error);
                    res.status(400).json({ error: INVALID_TOKEN });
                }
                else {
                    req.user = {
                        userId: decodedMessage.userId,
                        type: decodedMessage.type
                    };
                    next();
                }
            })
        }
    }
    catch (error) {
        res.status(401).json(
            { error: INVALID_TOKEN }
        );
    }
}
function isUser(req, res, next) {
    isAuthenticated(req, res, () => {
        if (req.user.type == USER_TYPE || req.user.type == ADMIN_TYPE) {
            next();
        }
        else {
            res.status(401).json(
                { error: ACCESS_DENIED }
            );
        }
    })
}
function isAdmin(req, res, next) {
    isAuthenticated(req, res, () => {
        if (req.user.type == ADMIN_TYPE) {
            next();
        }
        else {
            res.status(401).send(
                { error: ACCESS_DENIED }
            );
        }
    })
}
function createJWT(userId) {
    const token = sign({
        userId: userId,
        type: USER_TYPE
    },
        getSecret("JWT_SECRET"),
        {
            expiresIn: "10m",
            issuer: "HRV-Mart",
        }
    )
    return token
}
module.exports = { isAdmin, isUser, createJWT }