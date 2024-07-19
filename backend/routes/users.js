const router = require("express").Router();
const {
	getUsers,
	deleteUser,
	updateUser,
} = require("../controllers/usersController");

const {verifyToken, roleAuth} = require("../middleware/userAuth");

router.put("/:id", verifyToken, updateUser);

router.delete("/:id",verifyToken, deleteUser);

router.get("/", roleAuth, getUsers);

module.exports = router;
