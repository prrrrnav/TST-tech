const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/api/products", require("./routes/product.routes"));

app.use("/api/admin/auth", require("./routes/admin.auth.routes"));
app.use("/api/admin", require("./routes/admin.product.routes"));

app.get("/health", (_, res) => res.json({ status: "OK" }));

module.exports = app;
