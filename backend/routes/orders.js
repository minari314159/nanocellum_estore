const express = require("express");
const {
	allOrders,
	userOrder,
	createOrder,
	updateOrder,
	deleteOrder,
} = require("../controllers/orderController");
const { verifyUser, verifyRole } = require("../middleware/userAuth");

const router = express.Router();

router.get("/", verifyRole, allOrders);

router.get("/:id", verifyUser, userOrder);

router.post("/", createOrder);

router.put("/:id", verifyRole, updateOrder);

router.delete("/:id", verifyRole, deleteOrder);

module.exports = router;
