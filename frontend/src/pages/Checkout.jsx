import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../api";
import FormatCurrency from "../components/FormatCurrency";

const Checkout = () => {
	const [orderitem, setOrderItem] = useState([]);
	const [getTotal, setTotal] = useState(0);

	const getOrder = async () => {
		try {
			// Step 1: Create a cart if it doesn't exist
			let cartId = localStorage.getItem("cartId");
			// Step 2: Add item to the cart
			const response = await api.get(`/api/carts/${cartId}/`);
			setOrderItem(response.data.items);

			setTotal(response.data.total_price);
		} catch (error) {
			// Handle error (e.g., show an error message)
			alert("Error getting cart items");
		}
	};
	useEffect(() => {
		getOrder();
	}, []);
	return (
		<section className="bg-base-200">
			<Link
				to="/order"
				className="hover:scale-[102%] text-black rounded-lg p-2 m-2 hover:underline">
				{" "}
				&larr; Back to Order
			</Link>
			<div className="h-[50rem] p-4 w-full grid grid-cols-1 md:grid-cols-2 md:gap-3">
				<div className="flex flex-col justify-start items-center p-3">
					<h1 className="font-bold text-[25px]">Order Summary</h1>
					<hr />
					<div className="flex flex-col items-center gap-2 w-[450px] rounded-lg shadow p-5">
						{orderitem.map((item) => (
							<div
								key={item.id}
								className="flex justify-evenly items-center gap-2 w-full">
								<h2 className="font-bold text-[14px]">Product Name</h2>
								<p className="text-[12px]">
									Price: <FormatCurrency value={item.quantity} />
								</p>
								<p className="text-[12px]">Quantity: {item.quantity}</p>
								<img
									src={
										item.product.images[0].image
											? item.product.images[0].image
											: "https://via.placeholder.com/150"
									}
									alt="product"
									className="w-[50px] h-[50px]"
								/>
							</div>
						))}
						<hr />
						<div className="flex justify-between w-full gap-2">
							<p className="font-bold text-[14px]">Total</p>
							<p className="text-[14px]">
								<FormatCurrency value={getTotal} />
							</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center justify-start p-3">
					<h1 className="font-bold text-[25px]">Shipping Information</h1>
					<hr />
					<form className="flex flex-col gap-2 w-[450px] rounded-lg shadow p-5">
						<div className="flex justify-between w-full gap-2">
							<input
								type="text"
								placeholder="Full Name"
								className="rounded-xl px-2 py-1"
							/>
							<input
								type="email"
								placeholder="Email"
								className="rounded-xl px-2 py-1"
							/>
						</div>
						<input
							type="text"
							placeholder="Address"
							className="rounded-xl px-2 py-1"
						/>
						<input
							type="text"
							placeholder="State"
							className="rounded-xl px-2 py-1"
						/>

						<input
							type="text"
							placeholder="Postal Code"
							className="rounded-xl px-2 py-1"
						/>
						<input
							type="submit"
							value="Continue"
							className="bg-orange-300 p-2 rounded-lg"
						/>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Checkout;
