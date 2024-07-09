// import { Suspense } from "react";
// import ProductSkeleton from "./ProductSkeleton";
import Search from "../components/product/Search";
// import Card  from "./Card";
const Products = () => {
	return (
		<section className="flex w-full min-h-screen flex-col items-center p-4 ">
			<div className="p-4 px-6 bg-accent rounded-e-full flex flex-col items-center justify-center shadow-lg">
				<h1 className="text-2xl lg:text-4xl font-bold">Products</h1>
				<Search />
			</div>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-5">
				{/* <Suspense fallback={<ProductSkeleton />}>
					{products.map((product) => (
						<Card
							key={product.id}
							style="w-[11rem] sm:w-[14rem] md:w-[15rem] lg:w-[20rem]">
							<div className="w-full">
								<h2 className="text-md sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">
									{product.name}
								</h2>
								<Image
									src={product.image || "https://placehold.co/400"}
									alt={product.name}
									height={300}
									width={300}
									className="rounded-lg w-full aspect-square shadow-lg"
								/>
								<div className="w-full absolute bottom-[4.7rem] left-[1.5rem] text-xs sm:text-sm md:text-md lg:text-lg">
									<p className="text-white">Price: ${product.price}.00</p>
								</div>
							</div>
							<Link
								href={`/products/${product.id}`}
								className="btn btn-block text-sm md:text-md lg:text-lg shadow-lg">
								View Product
							</Link>
						</Card>
					))}
				</Suspense> */}
			</div>
		</section>
	);
};

export default Products;
