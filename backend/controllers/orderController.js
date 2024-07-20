const Order = require("../models/order");

//get all Orders
const allOrders = async (req, res) => {
	try {
		const orders = await Order.find();
		res.status(200).json(orders);
	} catch (error) {
		res.status(500).json(error);
	}
};

//get user Order
const userOrder = async (req, res) => {
	try {
		const order = await Order.find({ user_id: req.params.id });
		res.status(200).json(order);
	} catch (error) {
		res.status(500).json(error);
	}
};

//create a Order
const createOrder = async (req, res) => {
	const newOrder = new Order(req.body);
	try {
		const savedOrder = await newOrder.save();
		res.status(200).json(savedOrder);
	} catch (error) {
		res.status(500).json(error);
	}
};

//update a Order
const updateOrder = async (req, res) => {
	try {
		const updatedOrder = await Order.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updatedOrder);
	} catch (error) {
		res.status(500).json(error);
	}
};

//delete a Order
const deleteOrder = async (req, res) => {
	try {
		await Order.findByIdAndDelete(req.params.id);
		res.status(200).json("Order has been deleted...");
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = { allOrders, userOrder, createOrder, updateOrder, deleteOrder };
