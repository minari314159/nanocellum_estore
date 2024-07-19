const User = require("../models/user");

const getUsers = async (req, res) => {
	try {
		const users = await User.find({});
		res.status(200).json(users);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

const updateUser = async (req, res) => {
	try {
		const profile = await User.findByIdAndUpdate(
			req.user._id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(profile);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

const deleteUser = async (req, res) => {
	const user = req.user;
	try {
		await User.deleteOne({ _id: user._id });
		res.status(200).json({ message: "User deleted" });
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};
module.exports = { getUsers, updateUser, deleteUser };
