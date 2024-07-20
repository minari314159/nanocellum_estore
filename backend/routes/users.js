const router = require("express").Router();
const {
	getUsers,
	getUser,

	deleteUser,
	updateUser,
} = require("../controllers/usersController");

const { verifyUser, verifyRole } = require("../middleware/userAuth");

router.get("/", verifyRole, getUsers);

router.get("/:id", verifyUser, getUser);

router.put("/:id", verifyUser, updateUser);

router.delete("/:id", verifyRole, deleteUser);

module.exports = router;
