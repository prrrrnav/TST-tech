const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/api/products", require("./modules/products/product.routes"));
app.use("/api/health", require("./modules/health/health.routes"));

module.exports = app;
