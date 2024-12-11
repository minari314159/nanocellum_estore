import { Outlet, Link } from "react-router-dom";

const Product = () => {
	return (
		<section className="flex w-full min-h-screen flex-col items-center p-4 pt-[5rem]">
			<Outlet />

			<Link to="/products" className="btn btn-accent btn-ghost ">
				{" "}
				&larr; Back
			</Link>
		</section>
	);
};

export default Product;
