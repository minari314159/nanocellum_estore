const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
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

		amount: {
			type: Number,
			required: true,
        },
        address: {  
            type: Object,
            required: true,
        },
		status: {
            type: String,
            enum: ["Pending", "Processing", "Shipped", "Delivered"],
			default: "Pending",
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);