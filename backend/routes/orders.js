const express = require("express");
const router = express.Router();

//product routes
router.get("/", (req, res) => {
	res.send("Orders Route");
});

module.exports = router;
