const router = require("express").Router();
const {
	getUsers,
	getUser,
	getUsersStats,
	deleteUser,
	updateUser,
} = require("../controllers/usersController");

const { verifyUser, verifyRole } = require("../middleware/userAuth");

router.get("/", verifyRole, getUsers);

router.get("/:id", verifyUser, getUser);

router.get("/stats", verifyRole, getUsersStats);

router.put("/:id", verifyUser, updateUser);

router.delete("/:id", verifyRole, deleteUser);

module.exports = router;
