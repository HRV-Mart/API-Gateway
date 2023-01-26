const express = require("express");
const { getSecret } = require("./secretManager/secretManager");
const { logError, logMessage } = require("./logging/logging");

const app = express();

require('dotenv').config();

const port = parseInt(getSecret("APPLICATION_PORT"));
app.listen(port, (error) => {
    if (error) {
        logError(error)
    }
    else {
        logMessage(`Application is started at port: ${port}`);
    }
})