import { Link } from "react-router-dom";

import FormatCurrency from "../components/utils/FormatCurrency";
import { useSelector } from "react-redux";

const Order = () => {
	const cart = useSelector((state) => state.cart);

	return (
		<section className="bg-base-200 min-h-screen">
			<div className="h-[50rem] p-4 w-full flex flex-col items-center gap-3">
				<h2 className="font-bold text-[25px]">Your Order</h2>

				<div className=" flex flex-col items-start gap-3 w-[70%] md:w-[40%]">
					{cart.products.map((product) => (
						<div
							key={product._id}
							className="card card-compact bg-gray-700 rounded-md  backdrop-filter backdrop-blur-md bg-opacity-20  shadow-xl w-full">
							<div className="p-2 flex justify-start gap-2  ">
								<img
									src={product.image}
									alt={product.name}
									height={100}
									width={100}
									className="rounded-lg  aspect-square shadow-lg "
								/>
								<div>
									<h2 className="font-bold text-md text-wrap">
										{product.title}
									</h2>
									<p className="text-xs">
										Price: <FormatCurrency value={product.price} />
									</p>
									<p className="text-xs">Quantity: {product.quantity}</p>
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
							<Link
								to="/checkout"
								className="btn btn-sm btn-accent btn-outline rounded-xl">
								Checkout
							</Link>
							<Link
								to="/checkout"
								className="btn btn-sm btn-outline btn-error rounded-xl">
								Cancel
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Order;
