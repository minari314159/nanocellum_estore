import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		products: [],
		quantity: 0,
		total: 0,
	},
	reducers: {
		addProduct: (state, action) => {
			state.quantity += 1;
			state.products.push(action.payload);
			state.total += action.payload.price * action.payload.quantity;
		},
		removeProduct: (state, action) => {
			state.quantity -= 1;
			state.products.pop(action.payload);
			state.total -= action.payload.price * action.payload.quantity;
		},
		getCart: (state, action) => {
			state.products = action.payload.product;
			state.quantity = action.payload.quantity;
			state.total = action.payload.total;
		},
		createCart: (state) => {
			state.products = [];
			state.quantity = 0;
			state.total = 0;
		},
		clearProducts: (state) => {
			state.products = [];
			state.quantity = 0;
			state.total = 0;
		},
	},
});

export const { addProduct, clearProducts, getCart, createCart } = cartSlice.actions;
export default cartSlice.reducer;
