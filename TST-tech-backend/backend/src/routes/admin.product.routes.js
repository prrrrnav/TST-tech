const express = require("express");
const auth = require("../middlewares/admin.auth.middleware");
const {
  createProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/admin.product.controller");

const router = express.Router();

router.post("/products", auth, createProduct);
router.put("/products/:id", auth, updateProduct);
router.delete("/products/:id", auth, deleteProduct);

module.exports = router;
