import FormatCurrency from "./utils/FormatCurrency";
import { useState } from "react";
import { useCart } from "../hooks/useCart";


// eslint-disable-next-line react/prop-types
const OrderItem = ({ id, price, quantity, name, image }) => {
	const [newQuantity, setNewQuantity] = useState(quantity);
	const { removeFromCart } = useCart();
	
	const handleUpdate = () => {
		console.log("Update item in cart");
		// try {
		// 	// Step 1: get cart id
		// 	let cartId = localStorage.getItem("cartId");
		// 	// Step 2: remove item to the cart
		// 	api.patch(`/api/carts/${cartId}/items/${id}/`, { quantity: newQuantity });
		// } catch (error) {
		// 	// Handle error (e.g., show an error message)
		// 	alert("Error deleting cart item", error.response.message);
		// }
	};
	
	return (
		<div
			key={id}
			className="flex  shadow-md rounded-lg w-[440px] md:w-[500px]  justify-between p-2">
			<div className="flex justify-evenly gap-3">
				<img
					src={image ? image : "https://via.placeholder.com/150"}
					alt="product"
					className="w-24 h-24"
				/>
				<div className="flex flex-col items-start justify-center gap-1">
					<h2 className="font-bold text-[18px]">{name}</h2>
					<p className="text-[14px]">
						Price: <FormatCurrency value={price} />
					</p>
					<div className="flex gap-2 justify-center items-center ">
						<button
							onClick={() => setNewQuantity((quantity) => quantity - 1)}
							className="bg-dimWhite w-[20px] h-[20px] text-black rounded-lg flex justify-center items-center  hover:bg-gray-100 shadow-sm">
							-
						</button>
						<span>{newQuantity}</span>
						<button
							onClick={() => setNewQuantity((quantity) => quantity + 1)}
							className="bg-dimWhite w-[20px] h-[20px] text-black rounded-lg flex justify-center items-center hover:bg-gray-100 shadow-sm ">
							+
						</button>
					</div>
				</div>
			</div>
			<div className="flex  flex-col items-center justify-evenly gap-2">
				<button
					onClick={handleUpdate}
					className="bg-primary text-black rounded-lg p-2 hover:scale-[103%] w-full shadow-sm">
					Update
				</button>
				<button
					onClick={removeFromCart}
					className="bg-red-400 text-black rounded-lg p-2 hover:scale-[103%] w-full shadow-sm">
					Remove
				</button>
			</div>
		</div>
	);
};

export default OrderItem;
