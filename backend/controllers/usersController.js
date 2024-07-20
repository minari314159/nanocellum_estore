const User = require("../models/user");

const getUsers = async (req, res) => {
	const query = req.query.new;
	try {
		const users = query
			? await User.find().sort({ _id: -1 }).limit(5)
			: await User.find();
		const allUsers = users.map((user) => {
			const { password, createdAt, updatedAt, __v, ...data } = user._doc;
			return data;
		});
		res.status(200).json(allUsers);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};
const getUser = async (req, res) => {
	try {
		const users = await User.findById(req.params.id);
		const { password, ...data } = await users._doc;
		res.status(200).json({ ...data });
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

const updateUser = async (req, res) => {
	try {
		const users = await User.findByIdAndUpdate(
			req.user._id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		const { password, createdAt, updatedAt, __v, ...data } = await users._doc;
		res.status(200).json({ ...data });
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

const deleteUser = async (req, res) => {
	try {
		await User.findByIdAndDelete(req.params.id);
		res.status(200).json({ message: "User deleted" });
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};
module.exports = { getUsers, getUser, updateUser, deleteUser };
