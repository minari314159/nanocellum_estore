const express = require("express");
const router = express.Router();
const {
	loginUser,
	registerUser,
	getUsers,
	getUser,
} = require("../controllers/usersController");
const userAuth = require("../middleware/userAuth");

router.post("/login", loginUser);

router.post("/register", registerUser);

router.get("/:id", getUser);

router.use(userAuth);

router.get("/", getUsers);

module.exports = router;
