const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
	{
		user_id: {
			type: String,
			required: true,
		},
		products: [
			{
				product_id: { type: String },
				quantity: {
					type: Number,
					default: 1,
				},
			},
		],
		quantity: {
			type: Number,
			default: 0,
			minimum: 0,
		},
		total: {
			type: Number,
			default: 0,
			minimum: 0,
		},
		
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);