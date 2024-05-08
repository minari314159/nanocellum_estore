import { useState } from "react";
import api from "../api";

// eslint-disable-next-line react/prop-types
const AddToCartButton = ({ productId }) => {
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	const addToCart = async () => {
		setLoading(true);
		try {
			// Step 1: Create a cart if it doesn't exist
			let cartId = localStorage.getItem("cartId");
			if (!cartId) {
				const createCartResponse = await api.post("/api/carts/");
				cartId = createCartResponse.data.id;
				localStorage.setItem("cartId", cartId);
				console.log(cartId);
			}

			// Step 2: Add item to the cart
			await api.post(`/api/carts/${cartId}/items/`, {
				product_id: productId,
				quantity: 1,
			});

			// Optionally: You can fetch the updated cart if needed
			// const updatedCartResponse = await axios.get(`/api/carts/${cartId}/items/`);
			// const updatedCart = updatedCartResponse.data;

			// Success! Do something if needed (e.g., show a success message)
			setSuccess(true);
			setTimeout(() => {
				setSuccess(false);
			}, 3000);
		} catch (error) {
			// Handle error (e.g., show an error message)
			alert("Error adding item to cart:");
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			{success && (
				<div className="bg-primary rounded-lg p-2 absolute -bottom-[3rem]">
					<p className="text-green-600 text-[17px]">Added to cart!</p>
				</div>
			)}
			<button
				className="bg-orange-300 w-[40%] rounded-xl py-2 md:px-2 hover:bg-orange-400 transition-colors ease-in-out text-black text-[0.9rem] md:text-[1rem] shadow-md cursor-pointer"
				onClick={addToCart}
				disabled={loading}>
				{loading ? "Adding to cart..." : "Add to Cart"}
			</button>
		</>
	);
};

export default AddToCartButton;
