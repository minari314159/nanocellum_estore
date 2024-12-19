import { Link, useLocation } from "react-router-dom";
import { Card } from "../components/components";
import { useEffect, useState } from "react";
import { userRequest } from "../services/requestMethods";

const Success = () => {
	const location = useLocation();
	const data = location.state.address;
	const cart = location.state.cart;
	const currentUser = "currentUser";
	const [orderId, setOrderId] = useState(null);
	useEffect(() => {
		const createOrder = async () => {
			try {
				const res = await userRequest.post("/orders", {
					user_Id: currentUser._id,
					products: cart.products.map((item) => ({
						productId: item._id,
						quantity: item._quantity,
					})),
					amount: cart.total,
					address: data,
				});
				setOrderId(res.user_Id);
			} catch (err) {
				console.log(err);
			}
		};
		data && createOrder();
	}, [cart, data, currentUser]);

	return (
		<section className="min-h-screen flex flex-col items-center justify-start p-5">
			<Card>
				<h1 className="font-bold text-2xl text-success">Success!</h1>
				<i className="">
					{orderId
						? `Order has been created successfully. Your order number is ${orderId}`
						: `Successfull. Your order is being prepared...`}
				</i>
				<Link to="/" className="btn btn-sm btn-outline">
					Back
				</Link>
				<hr className="w-full my-2 border-neutral-500" />
				<div className="flex flex-col items-center mt-3">
					<h1 className="font-bold text-xl">THANK YOU</h1>
					<img src="/logo.png" className="w-[200px]" />
				</div>
			</Card>
		</section>
	);
};

export default Success;
