import { Footer, NavBar, OrderItem } from "../components/components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";
import FormatCurrency from "../components/FormatCurrency";

const Order = () => {
	const [orderitem, setOrderItem] = useState([]);
	const [getTotal, setTotal] = useState(0);


	const getOrder = async () => {
		try {
			// Step 1: Create a cart if it doesn't exist
			let cartId = localStorage.getItem("cartId");
			// Step 2: Add item to the cart
			const response = await api.get(`/api/carts/${cartId}/`);
			setOrderItem(response.data.items);
			console.log(response.data.items);
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
		<section className="bg-primary">
			<NavBar />
			<Link
				to="/#designs"
				className="hover:scale-[102%] text-black rounded-lg p-2 m-2 hover:underline">
				{" "}
				&larr; Continue Shopping
			</Link>

			<div className="h-[50rem] p-4 w-full flex flex-col items-center gap-3">
				<h2 className="font-bold text-[25px]">Your Order</h2>
				<div className=" flex flex-col items-start">
					{orderitem.map((item) => (
						<OrderItem
							key={item.id}
							price={item.total_price}
							name="Hanging Lamp"
							quantity={item.quantity}
							image={item.product.images[0].image}
						/>
					))}
				</div>
				<div className="flex justify-between w-[500px]">
					<div>
						
						<h2 className="font-bold text-[18px]">
							Total: <FormatCurrency value={getTotal} />
							
						</h2>
					</div>
					<Link
						to="/checkout"
						className="bg-orange-300 shadow-md hover:scale-[102%] text-black rounded-lg p-2 m-2">
						Checkout
					</Link>
				</div>
			</div>

			<Footer /> 
		</section>
	);
};

export default Order;
