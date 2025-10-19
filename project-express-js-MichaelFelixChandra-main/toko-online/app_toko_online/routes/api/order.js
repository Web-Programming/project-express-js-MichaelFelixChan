const express = require("express");
const router = express.Router();
const orderController = require("../../controllers/order");

router.post("/", orderController.createOrder);
router.get("/", orderController.listOrders);
router.get("/:id", orderController.detailOrder);
router.put("/:id", orderController.updateOrder);

module.exports = router;