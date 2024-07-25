import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
	name: "product",
	initialState: {
		products: [],
		isFetching: false,
		error: false,
	},
	reducers: {
		start: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		failure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		//GET ALL
		getProductSuccess: (state, action) => {
			state.isFetching = false;
			state.products = action.payload;
		},
		//DELETE

		deleteProductSuccess: (state, action) => {
			state.isFetching = false;
			state.products.splice(
				state.products.findIndex((item) => item._id === action.payload),
				1
			);
		},

		//PUT

		updateProductSuccess: (state, action) => {
			state.isFetching = false;
			state.products[
				state.products.findIndex((item) => item._id === action.payload.id)
			] = action.payload.product;
		},

		//POST

		addProductSuccess: (state, action) => {
			state.isFetching = false;
			state.products.push(action.payload);
		},
	},
});

export const {
	start,
	failure,
	getProductSuccess,
	deleteProductSuccess,
	updateProductSuccess,
	addProductSuccess,
} = productSlice.actions;

export default productSlice.reducer;
