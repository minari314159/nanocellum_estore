const cartReducer = (cart, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return {
				...cart,
				cart: action.payload,
			};
		case "REMOVE_FROM_CART":
			return {
				...cart,
				cart: action.payload,
			};
		case "CLEAR_CART":
			return {
				...cart,
				cart: action.payload,
			};
		default:
			return cart;
	}
};

export default cartReducer;
