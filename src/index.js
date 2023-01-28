const express = require("express");
const cors = require("cors");

const auth = require("./router/auth");
const { getApplicationPort } = require("./secretManager/secretManager");
const { logError, logMessage } = require("./logging/logging");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("", auth);

const port = getApplicationPort();
// const port = 3002;
app.listen(port, (error) => {
    if (error) {
        logError(error);
    }
    else {
        logMessage(`Application is running at port ${port}`);
    }
});
