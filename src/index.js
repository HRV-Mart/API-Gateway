const express = require("express");
const cors = require("cors");

const auth = require("./router/auth");
const product = require("./router/product");
const cart = require("./router/cart");
const like = require("./router/like");
const order = require("./router/order");
const review = require("./router/review")

const { getApplicationPort } = require("./secretManager/secretManager");
const { logError, logMessage } = require("./logging/logging");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("", auth);
app.use("/product", product);
app.use("/cart", cart);
app.use("/like", like);
app.use("/order", order);
app.use("/review", review)

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
