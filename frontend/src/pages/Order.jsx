import { Footer, NavBar, OrderItem } from "../components/components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";

const Order = () => {
	const [order, setOrder] = useState({});

	useEffect(() => {
		const fetchOrderItems = async () => {
			await api
				.get(`api/carts/`)
				.then((res) => res.data)
				.then((data) => {
					setOrder(data);
					console.log(data);
				})
				.catch((err) => alert(err));
		};
		fetchOrderItems();
		console.log(order);
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
				<div className="flex justify-between w-[500px]">
					<div>
						<h2 className="font-bold text-[16px]">Items: 2</h2>
						<h2 className="font-bold text-[18px]">Total: $100</h2>
					</div>
					<Link
						to="/checkout"
						className="bg-orange-300 hover:scale-[102%] text-black rounded-lg p-2 m-2">
						Checkout
					</Link>
				</div>
				<div className=" flex flex-col items-start">
					{/* {order.length === 0 && <h2>No items in your order</h2>}
					<p>{order.transaction_id}</p> */}
					<OrderItem />
				</div>
			</div>

			<Footer />
		</section>
	);
};

export default Order;
