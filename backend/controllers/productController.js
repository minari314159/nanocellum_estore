const Product = require("../models/products");
const mongoose = require("mongoose");

//get all products
const getAllProducts = async (req, res) => {
	try {
		const products = await Product.find({}).sort({ createdAt: -1 });
		res.status(200).json(products);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

//get one product
const getOneProduct = async (req, res) => {
	const id = req.params.id;
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(400).json({ message: "Invalid id" });
	}
	try {
		const product = await Product.findById(id);
		res.status(200).json(product);
	} catch (error) {
		res.status(404).json({ message: "No such product" });
	}
};

//create a product
const createProduct = async (req, res) => {
	const { title, designer, price, description, image } = req.body;
	//validation
	let emptyFields = [];
	if (!title || !description || !price) {
		emptyFields.push("title");
		emptyFields.push("description");
		emptyFields.push("price");
	}
	if (emptyFields.length > 0) {
		return res.status(400).json({
			message: `The following fields are required: ${emptyFields.join(", ")}`,
		});
	}
	try {
		const product = await Product.create({
			title,
			designer,
			price,
			description,
			image,
		});
		res.status(200).json(product);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

module.exports = { getAllProducts, getOneProduct, createProduct };
