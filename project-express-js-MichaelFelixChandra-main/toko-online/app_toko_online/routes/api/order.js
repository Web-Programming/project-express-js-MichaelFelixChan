const express = require("express");
const router = express.Router();
const orderController = require("../../controllers/order");
const auth = require("../middleware/authMiddleware");

router.post("/", orderController.createOrder);
router.get("/", orderController.listOrders);
router.get("/:id", orderController.detailOrder);
router.put("/:id", auth.adminOnly, orderController.updateOrder);

module.exports = router;