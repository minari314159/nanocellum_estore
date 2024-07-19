const user = require("../models/user");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
	return jwt.sign({ _id }, process.env.JWT_SECRET, {
		expiresIn: "1d",
	});
};

//login user
const loginUser = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.login(email, password);
		const token = createToken(user._id);
		res.status(200).json({ email, token });
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

//register user
const registerUser = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.signup(email, password);
		const token = createToken(user._id);
		res.status(200).json({ email, token });
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

const getUsers = async (req, res) => {
	try {
		const users = await User.find({});
		res.status(200).json(users);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

const getUser = async (req, res) => {
	const user = req.user;
	try {
		const profile = await User.findOne({ _id: user._id });
		res.status(200).json(profile);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};
module.exports = { loginUser, registerUser, getUsers, getUser };
