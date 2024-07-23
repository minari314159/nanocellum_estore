import { Link, useNavigate } from "react-router-dom";

import FormatCurrency from "../components/utils/FormatCurrency";
import { useSelector } from "react-redux";

const Checkout = () => {
	const cart = useSelector((state) => state.cart);
	const navigate = useNavigate();

	return (
		<section className="bg-base-200 min-h-screen">
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
						{cart.products.map((item) => (
							<div
								key={item._id}
								className="flex justify-evenly items-center gap-2 w-full">
								<h2 className="font-bold text-[14px]">{item.title}</h2>
								<p className="text-[12px]">
									Price: <FormatCurrency value={item.quantity} />
								</p>
								<p className="text-[12px]">Quantity: {item.quantity}</p>
								<img
									src={item.image}
									alt={item.title}
									className="w-[50px] h-[50px] rounded-xl"
								/>
							</div>
						))}
						<hr />
						<div className="flex justify-between w-full gap-2">
							<p className="font-bold text-[14px]">Total</p>
							<p className="text-[14px]">
								<FormatCurrency value={cart.total} />
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
						<button
							onClick={() => navigate("/success")}
							value="Continue"
							className="btn btn-accent rounded-xl">
							Continue
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Checkout;
