const router = require("express").Router();
const { getProducts } = require("./product.controller");

router.get("/", getProducts);

module.exports = router;
