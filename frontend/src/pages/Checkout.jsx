import { NavBar, Footer } from "../components/components";
import { Link } from "react-router-dom";

const Checkout = () => {
	return (
		<section className="bg-primary">
			<NavBar />
			<Link
				to="/order"
				className="hover:scale-[102%] text-black rounded-lg p-2 m-2 hover:underline">
				{" "}
				&larr; Back to Order
			</Link>
			<div className="h-[50rem] p-4 w-full grid grid-cols-2  gap-3">
				<div className="flex flex-col items-center p-3">
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
				<div className="flex flex-col items-center p-3">
					<h1 className="font-bold text-[25px]">Order Summary</h1>
					<hr />
					<div className="flex flex-col items-start gap-2 w-[450px] rounded-lg shadow p-5">
						<div className="flex justify-evenly items-center gap-2 w-full">
							<img
								src="https://via.placeholder.com/150"
								alt="product"
								className="w-[60px] h-[50px]"
							/>

							<h2 className="font-bold text-[14px]">Product Name</h2>
							<p className="text-[12px]">Price: $100</p>
							<p className="text-[12px]">Quantity: x2</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</section>
	);
};

export default Checkout;
