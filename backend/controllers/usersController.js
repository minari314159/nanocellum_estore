const User = require("../models/user");


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
module.exports = { getUsers, getUser };
