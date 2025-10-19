const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user");

router.post("/", userController.createUser);
router.get("/", userController.listUsers);
router.get("/:id", userController.detailUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;