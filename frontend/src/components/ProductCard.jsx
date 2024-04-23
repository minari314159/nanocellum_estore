import api from "../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
	const [products, setProduct] = useState([]);

	const fetchProducts = async () => {
		const response = await api.get("products/");
		setProduct(response.data);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<>
			{products.map((product) => (
				<div
					key={product.id}
					className="shadow flex flex-col items-center w-[10rem] lg:w-[15rem] py-2 rounded-xl text-[14px] gap-1">
					<div>
						<h2 className="text-[15px] font-bold">{product.name}</h2>
					</div>
					<img src={product.image} className="w-[8rem] h-[8rem] border-none" />
					<div>
						<Link to={`/product/${product.id}`}>More Details..</Link>
						<p>
							<b>Colour:</b> {product.color}
						</p>
						<p>
							<b>Price:</b> {product.price} <i>$</i>
						</p>
					</div>

					<button className="bg-amber-600 rounded-2xl p-2 hover:bg-amber-400">
						Add to Cart
					</button>
				</div>
			))}
			
		</>
	);
};

export default ProductCard;
