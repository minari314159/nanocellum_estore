import { Footer, NavBar } from "../components/components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";

const Order = () => {
	const [order, setOrder] = useState([]);

	useEffect(() => {
		const fetchOrderItems = async () => {
			await api
				.get(`api/orders/`)
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
					{order.map((item) => {
						<div className="flex border shadow-md rounded-lg w-[500px] gap-2 justify-between p-2">
							<div className="flex justify-evenly gap-2">
								<img
									src="https://via.placeholder.com/150"
									alt="product"
									className="w-24 h-24"
								/>
								<div className="flex flex-col items-start ">
									<h2 className="font-bold text-[18px]">{item.name}</h2>
									<p className="text-[14px]">Price: ${item.price}</p>
									<p className="text-[14px]">Quantity: x2</p>
								</div>
							</div>
							<div className="flex  flex-col items-center justify-evenly gap-2">
								<button className="bg-red-100 text-black rounded-lg p-2 hover:scale-[102%]">
									Remove
								</button>
								<button className="bg-dimWhite w-[75px] text-black rounded-lg p-2 hover:scale-[102%]">
									Edit
								</button>
							</div>
						</div>;
					})}
				</div>
			</div>

			<Footer />
		</section>
	);
};

export default Order;
