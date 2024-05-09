import { motion } from "framer-motion";

import { useCart } from "../hooks/useCart";

// eslint-disable-next-line react/prop-types
const AddToCartButton = ({ productId }) => {
	const { addToCart, loading, success } = useCart();

	return (
		<>
			{success && (
				<div className="bg-primary rounded-lg p-2 absolute -bottom-[3rem]">
					<p className="text-green-600 text-[17px]">Added to cart!</p>
				</div>
			)}
			<motion.button
				className="bg-orange-300 w-[40%] rounded-xl py-2 md:px-2 text-black text-[0.9rem] md:text-[1rem] shadow-md cursor-pointer"
				onClick={() => addToCart(productId)}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				disabled={loading}>
				<span>{loading ? "Adding to cart..." : "Add to Cart"}</span>
			</motion.button>
		</>
	);
};

export default AddToCartButton;
