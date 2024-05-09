import { createContext, useState, useEffect } from "react";
import api from "../api";

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartContextProvider = ({ children }) => {
	const [orderItems, setOrderItems] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [quantity, setQuantity] = useState(1);
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	const getCartItems = async () => {
		setLoading(true);
		try {
			// Step 1: Create a cart if it doesn't exist
			let cartId = localStorage.getItem("cartId");
			// Step 2: Add item to the cart
			const response = await api.get(`/api/carts/${cartId}/`);
			setOrderItems(response.data.items);
			setQuantity(response.data.total_quantity);
			setTotalPrice(response.data.total_price);
		} catch (error) {
			// Handle error (e.g., show an error message)
			alert("Error getting cart items");
		} finally {
			setLoading(false);
		}
	};

	const addToCart = async (product_id) => {
		setLoading(true);
		try {
			// Step 1: Create a cart if it doesn't exist
			let cartId = localStorage.getItem("cartId");
			if (!cartId) {
				const createCartResponse = await api.post("/api/carts/");
				cartId = createCartResponse.data.id;
				localStorage.setItem("cartId", cartId);
			}

			// Step 2: Add item to the cart
			await api.post(`/api/carts/${cartId}/items/`, {
				product_id: product_id,
				quantity: 1,
			});

			// Success! Do something if needed (e.g., show a success message)
			setSuccess(true);
			setTimeout(() => {
				setSuccess(false);
			}, 3000);
		} catch (error) {
			// Handle error (e.g., show an error message)
			console.error("Error adding item to cart:", error);
		} finally {
			setLoading(false);
		}
	};

	const removeFromCart = (id) => {
		api
			.delete(`/api/order/${id}/`)
			.then((res) => {
				if (res.status === 204) alert("Note deleted!");
				else alert("Failed to delete note.");
				setOrderItems(orderItems.filter((item) => item.id !== id));
				getCartTotal(orderItems.filter((item) => item.id !== id));
			})
			.catch((error) => {
				console.error("Error removing item from cart:", error);
			});
	};

	

	const getCartTotal = (items) => {
		const total = items.reduce((acc, item) => {
			return acc + item.product_price * item.quantity;
		}, 0);
		setTotalPrice(total);
	};
	useEffect(() => {}, []);

	return (
		<CartContext.Provider
			value={{
				orderItems,
				getCartItems,
				addToCart,
				removeFromCart,
				totalPrice,
				quantity,
				loading,
				success,
				
			}}>
			{children}
		</CartContext.Provider>
	);
};
