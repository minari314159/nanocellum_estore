import { CartContext } from "./useCart";
import  cartReducer  from "./cartReducer";
import { useReducer } from "react";
import PropTypes from "prop-types";

//provider of cart context
function CartProvider({ children }) {
	const [cart, dispatch] = useReducer(cartReducer, []);
	return (
		<CartContext.Provider value={{ cart, dispatch }}>
			{children}
		</CartContext.Provider>
	);
}
CartProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default CartProvider;
