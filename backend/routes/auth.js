const router = require("express").Router();
const { loginUser, registerUser } = require("../controllers/authController");

router.post("/login", loginUser);

router.post("/register", registerUser);

router.use("/users", require("./users"));

module.exports = router;