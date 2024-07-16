const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		designer: {
			type: String,
			default: "OLSENHAUS",
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			default:
				"https://static.vecteezy.com/system/resources/previews/015/723/855/original/vintage-retro-sunset-png.png",
			required: true,
		},
		cart_quantity: {
			type: Number,
			default: 0,
		},
		cart_id: {
			type: String,
			default: "",
		},
	},
	{ timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
