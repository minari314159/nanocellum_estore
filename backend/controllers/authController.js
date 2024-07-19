const User = require("../models/user");
const jwt = require("jsonwebtoken");

const createToken = (_id, role) => {
	return jwt.sign({ _id, role }, process.env.JWT_SECRET, {
		expiresIn: "1d",
	});
};

//login user
const loginUser = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.login(email, password);
		const token = createToken(user._id, user.role);
		const profile = {
			username: user.username,
			email: user.email,
			imageURL: user.imageURL,
			role: user.role,
		};
		res.status(200).json({ ...profile, token });
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

//register user
const registerUser = async (req, res) => {
	if (!req.body.username || !req.body.email || !req.body.password) {
		return res.status(400).json({ message: "All fields must be filled" });
	}
	const newUser = new User({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
	});

	try {
		const user = await User.signup(
			newUser.username,
			newUser.email,
			newUser.password
		);

		const token = createToken(user._id, user.role);
		const { password, createdAt, updatedAt, ...profile } = user._doc;
		res.status(201).json({ ...profile, token });
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

module.exports = { loginUser, registerUser };
