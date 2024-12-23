import { Card, CardSkeleton } from "../components";
import { useParams } from "react-router-dom";
import { useState } from "react";

import useProducts from "../../hooks/useProducts";

const ProductCard = () => {
	const { id } = useParams();

	const [quantity, setQuantity] = useState(1);

	const { products, isLoading, error } = useProducts(id);

	const handleQuantity = (type) => {
		if (type === "dec") {
			quantity > 1 && setQuantity(quantity - 1);
		} else {
			setQuantity(quantity + 1);
		}
	};
	const handleClick = () => {
		console.log("Added to cart");
	};

	return (
		<div>
			<div className="p-4 px-6 bg-accent rounded-e-full flex flex-col items-center justify-center shadow-lg">
				<h1 className="text-2xl lg:text-4xl font-bold">{products.title}</h1>
			</div>{" "}
			{error && <h3 className="font-bold text-xl mt-4 text-accent">{error}</h3>}
			{isLoading ? (
				<CardSkeleton />
			) : (
				<Card style="min-w-[300px] max-w-[600px] my-5">
					<div className="w-lg flex gap-2">
						<div className="flex flex-col justify-start items-start text-xs sm:text-sm md:text-md lg:text-lg text-left p-2">
							<p>
								<b>Price:</b> ${products.price}.00
							</p>
							<p>
								<b>Designer:</b> {products.designer}
							</p>
							<p className="flex items-center gap-3">
								<b>Colour:</b> {products.colour}
							</p>
							<hr className="w-full my-2 border-neutral-700" />
							<p className="w-full my-2 ">{products.description}</p>
							<div className="w-full flex flex-col items-center gap-3">
								<div className="inline-flex items-center  my-2 ">
									<span
										className="btn btn-sm btn-ghost btn-circle"
										onClick={() => handleQuantity("dec")}>
										-
									</span>
									<p className="font-bold"> {quantity}</p>
									<span
										className="btn btn-sm btn-ghost btn-circle"
										onClick={() => handleQuantity("inc")}>
										+
									</span>
									{/* {quantity > 0 && (
									<button className="btn btn-error  rounded-full">
										<AiFillDelete />
									</button>
								)} */}
								</div>
								<button onClick={handleClick} className="btn  w-full">
									Add to Cart
								</button>
							</div>
						</div>
						<img
							src={products.image}
							alt={products.name}
							height={300}
							width={300}
							className="rounded-full w-md h-md aspect-square object-contain shadow-lg bg-black"
						/>
					</div>
				</Card>
			)}
		</div>
	);
};

export default ProductCard;
