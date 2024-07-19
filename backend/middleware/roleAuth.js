const jwt = require("jsonwebtoken");
const User = require("../models/user");

const roleAuth = async (req, res, next) => {
	//verify authentication
	const { authorization } = req.headers;

	if (!authorization) {
		return res.status(401).json({ error: "Unauthorized" });
	}
	//use split method to separate the token from the Bearer keyword
	const token = authorization.split(" ")[1];
	try {
		//grab the user id from the token through verification
		const { _id } = jwt.verify(token, process.env.JWT_SECRET);
		//with the id find the user in the database
		req.user = await User.findOne({ _id }).select("_id");
		if (req.user.role !== "admin") {
			next();
		}
	} catch (error) {
		console.log(error);
		res.status(401).json({ error: "Unauthorized" });
	}
};

module.exports = roleAuth;
