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
		color: {
			type: String,
			enum: ["s", "k", "p", "b", "m"],
			default: "s",
		},
		image: {
			type: String,
			default:
				"https://static.vecteezy.com/system/resources/previews/015/723/855/original/vintage-retro-sunset-png.png",
			required: true,
		},
	},
	{ timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
