const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
	{
		products: [
			{
				product_id: { type: String },
				quantity: {
					type: Number,
					default: 1,
				},
			},
		],
		user_id: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);
