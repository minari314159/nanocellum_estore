const jwt = require("jsonwebtoken");
const User = require("../models/user");

const verifyToken = async (req, res, next) => {
	//verify authentication
	const { authorization } = req.headers;

	if (!authorization) {
		return res.status(401).json({ error: "Unauthorized" });
	}
	//use split method to separate the token from the Bearer keyword
	const token = authorization.split(" ")[1];
	try {
		//grab the user id from the token through verification
		jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
			if (err) res.status(403).json({ error: "Invalid token" });
			req.user = user;
			next();
		});
	} catch (error) {
		console.log(error);
		res.status(401).json({ error: "Unauthorized" });
	}
};
const roleAuth = async (req, res, next) => {
	verifyToken(req, res, async () => {
		if (req.user.id === req.params.id || req.user.role === "admin") {
			next();
		} else {
			res
				.status(403)
				.json({ error: "You are not authorized to perform this action" });
		}
	});
};

module.exports = { verifyToken, roleAuth };
