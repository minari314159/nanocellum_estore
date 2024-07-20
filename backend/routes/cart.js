const express = require("express");
const { allCarts, userCart, createCart, updateCart, deleteCart } = require("../controllers/cartController");
const { verifyUser, verifyRole } = require("../middleware/userAuth");

const router = express.Router();

router.get("/", verifyRole, allCarts)

router.get("/:id", verifyUser, userCart);

router.post("/", verifyUser, createCart);

router.put("/:id", verifyUser, updateCart);

router.delete("/:id", verifyUser, deleteCart);

module.exports = router;
