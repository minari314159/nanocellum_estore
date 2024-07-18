const express = require("express");
const router = express.Router();
const {
	loginUser,
	registerUser,
	getUsers,
} = require("../controllers/usersController");

router.get("/", getUsers);

router.post("/login", loginUser);

router.post("/register", registerUser);

module.exports = router;
