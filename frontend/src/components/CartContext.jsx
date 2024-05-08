import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartContextProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (item_id) => {
		null;
	};

	const removeFromCart = (item_id) => {
		null;
	};

	const clearCart = () => {
		setCartItems([]);
	};

	const getCartTotal = () => {
		return cartItems.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		);
	};

	useEffect(() => {
		
	}, []);

	return (
		<CartContext.Provider
			value={{
				cartItems,
				addToCart,
				removeFromCart,
				clearCart,
				getCartTotal,
			}}>
			{children}
		</CartContext.Provider>
	);
};
