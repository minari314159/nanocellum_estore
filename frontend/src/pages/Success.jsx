import { Link } from "react-router-dom";
import { Card } from "../components/components";

const Success = () => {
	return (
		<section className="min-h-screen flex flex-col items-center justify-start p-5">
			<Card>
				<h1 className="font-bold text-2xl text-success">Success!</h1>
                <i className="">Your Order is Being Processed.</i>
                <Link to="/" className="btn btn-sm btn-outline">Back</Link>
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
