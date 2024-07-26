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
				"https://64.media.tumblr.com/8a1f30fe386df1a31ee9f82235580938/tumblr_nmzxfjaQtx1uoh3mfo1_r1_1280.jpg",
			required: true,
		},
	},
	{ timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
