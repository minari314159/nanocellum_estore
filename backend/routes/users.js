const router = require("express").Router();
const { getUsers, getUser } = require("../controllers/usersController");
const roleAuth = require("../middleware/roleAuth");
const userAuth = require("../middleware/userAuth");

router.use(userAuth);

router.get("/profile", getUser);

router.use(roleAuth);

router.get("/", getUsers);

module.exports = router;
