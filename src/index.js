// Import libraries
const express = require("express");
const { logError, logMessage } = require("./logging/logging");
const cors = require("cors");
const { json } = require("express");

// Import routes
const authRoutes = require("./routes/auth");
const { getApplicationPort } = require("./secretManager/secretManager");


const app = express();
require('dotenv').config();

app.use(cors());
app.use(json());

app.use(authRoutes)

const port = 3002;
// const port = getApplicationPort();
app.listen(port, (error) => {
    if (error) {
        logError(error)
    }
    else {
        logMessage(`Application is started at port: ${port}`);
    }
})