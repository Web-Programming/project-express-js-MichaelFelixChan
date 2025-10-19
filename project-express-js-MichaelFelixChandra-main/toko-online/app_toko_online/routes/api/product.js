const express = require("express");
const router = express.Router();
const productController = require("../../controllers/product");

// URL create - POST (/api/product)
router.post("/", productController.create);
// URL read all - GET (/api/product)
router.get("/", productController.all);
// URL read one - detail - GET (/api/product/:id)
router.get("/:id", productController.detailProduk);
// URL update - PUT (/api/product/:id)
router.put("/:id", productController.update);
// URL delete - DELETE (/api/product/:id)
router.delete("/:id", productController.remove);

module.exports = router;