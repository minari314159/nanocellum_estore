import { Card } from "../components";
import { IoClose } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Checkout = ({ setToggle, cart }) => {
	const [address, setAddress] = useState("");
	const history = useNavigate();
	
	const handleSubmit = (e) => {
		e.preventDefault
		try {
			history("/success", {
				address,
				products: cart,
			});
		} catch (err) {
			console.log(err);
		}
	}
	return (
		<section
			className={`bg-white bg-opacity-30 w-full h-full absolute top-0 left-0 flex justify-center items-start pt-[10rem] px-5 `}>
			<Card style={"w-[50%] relative py-2"}>
				<img src="/logo.png" className="w-[10rem] my-2" />
				<button
					onClick={() => setToggle(false)}
					className="btn btn-ghost btn-circle absolute right-1 top-1 z-10">
					<IoClose />
				</button>
				<h1 className="font-bold text-xl">Shipping Information</h1>
				<hr />
				<form onSubmit={handleSubmit}  className="flex flex-col gap-2 w-full  p-4">
					<label className="input input-bordered input-md flex items-center gap-2">
						<MdOutlineEmail />
						<input
							type="email"
							placeholder="Email"
							className="grow placeholder:text-neutral-600"
						/>
					</label>
					<label className="input input-bordered bg-base-200 input-sm flex items-center gap-2 text-neutral-600">
						<input type="checkbox" checked/>
						Same billing & shipping info
					</label>
					<label className="input input-bordered input-md flex items-center gap-2">
						<IoPersonOutline />
						<input
							type="text"
							placeholder="Full Name"
							className="grow placeholder:text-neutral-600"
						/>
					</label>
					<label className="input input-bordered input-md flex items-center gap-2">
						<SlLocationPin />
						<input
							type="text"
							placeholder="Address"
							onChange={(e) => setAddress(e.event.target)}
							className="grow placeholder:text-neutral-600"
						/>
					</label>

					<button
						type="submit"
						value="Continue"
						className="btn btn-accent rounded-lg">
						Continue
					</button>
				</form>
			</Card>
		</section>
	);
};

export default Checkout;
