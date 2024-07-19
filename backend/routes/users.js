const router = require("express").Router();
const {
	getUsers,
	getUser,
	deleteUser,
	updateUser,
} = require("../controllers/usersController");

const { verifyToken, roleAuth } = require("../middleware/userAuth");

router.get("/", roleAuth, getUsers);

router.get("/:id", roleAuth, getUser);

router.put("/:id", verifyToken, updateUser);

router.delete("/:id", verifyToken, deleteUser);

module.exports = router;
