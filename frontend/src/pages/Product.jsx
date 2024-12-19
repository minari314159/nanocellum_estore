import { Link } from "react-router-dom";
import { ProductCard } from "../components/components";

const Product = () => {
	return (
		<section className="flex w-full min-h-screen flex-col items-center p-4 pt-[5rem]">
			<ProductCard />

			<Link to="/products" className="btn btn-accent btn-ghost ">
				{" "}
				&larr; Back
			</Link>
		</section>
	);
};

export default Product;
