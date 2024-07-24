import { useState } from "react";
import FormatCurrency from "../components/utils/FormatCurrency";
import { useSelector } from "react-redux";
import Checkout from "../components/order/Checkout";

const Order = () => {
	const cart = useSelector((state) => state.cart);
	const [quantity, setQuantity] = useState(1);
	const [toggle, setToggle] = useState(false);
	

	const handleQuantity = (type) => {
		if (type === "dec") {
			quantity > 1 && setQuantity(quantity - 1);
		} else {
			setQuantity(quantity + 1);
		}
	};

	

	return (
		<section className="bg-base-200 min-h-screen">
			<div className="h-[50rem] p-4 w-full flex flex-col items-center gap-3">
				<h2 className="font-bold text-[25px]">Your Order</h2>

				<div className=" flex flex-col items-start gap-3 w-[70%] md:w-[40%]">
					{cart.products.map((product) => (
						<div
							key={product._id}
							className="card card-compact bg-gray-700 rounded-md  backdrop-filter backdrop-blur-md bg-opacity-20  shadow-xl w-full">
							<div className="p-2 flex justify-between gap-2  ">
								<img
									src={product.image}
									alt={product.name}
									height={100}
									width={100}
									className="rounded-lg  aspect-square shadow-lg "
								/>
								<div className="flex flex-col items-start justify-center flex-2">
									<h2 className="font-bold text-xs ">
										Product: {product.title}
									</h2>
									<p className="text-xs">Colour: {product.color || "N/A"}</p>
									<p className="text-xs">
										Price: <FormatCurrency value={product.price} />
									</p>
								</div>
								<div className="flex flex-col items-center">
									<div className="inline-flex items-center   ">
										<span
											className="btn btn-sm btn-ghost btn-circle"
											onClick={() => handleQuantity("dec")}>
											-
										</span>
										<p className="text-xs font-bold">{product.quantity}</p>
										<span
											className="btn btn-sm btn-ghost btn-circle"
											onClick={() => handleQuantity("inc")}>
											+
										</span>
									</div>
									<button className="btn btn-sm btn-error text-xs">
										Remove Item
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="flex flex-col justify-between gap-2 w-[70%] md:w-[40%]">
					<hr className="w-full my-2 border-base-300" />
					<h1 className="font-bold text-[25px]">Order Summary</h1>
					<div className="flex justify-between items-center">
						<div>
							<h2 className="font-bold text-[18px]">
								Quantity: {cart.quantity}
							</h2>
							<h2 className="font-bold text-[18px] flex items-center gap-2">
								Total: <FormatCurrency value={cart.total} />
							</h2>
						</div>
						<div className="flex flex-col gap-1">
							<button
								onClick={() => setToggle(true)}
								className="btn btn-sm btn-accent btn-outline rounded-xl">
								Checkout
							</button>
							<button className="btn btn-sm btn-outline btn-error rounded-xl">
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
			{toggle === true && (
				<Checkout setToggle={setToggle} cart={cart} />
			)}
		</section>
	);
};

export default Order;
