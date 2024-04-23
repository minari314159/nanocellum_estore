import { Footer, NavBar, ProductCard } from "../components/components";
const Product = () => {
	return (
		<section className="bg-primary w-full ">
			<NavBar />
			<div className="flex flex-col items-center">
				<div className="flex flex-wrap justify-center gap-3 m-5">
					<ProductCard />
				</div>
				<Footer />
			</div>
		</section>
	);
};

export default Product;
