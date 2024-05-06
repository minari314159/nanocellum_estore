/* eslint-disable react/prop-types */
import api from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormatCurrency from "./FormatCurrency";

const ProductDetail = () => {
	const { id } = useParams();
	const [product, setProduct] = useState([]);
	const [images, setImages] = useState([]);
	const quantity = 1;

	const addToCart = () => {
		const cart_id = api
			.post(`/api/carts/`)
			.then((res) => {
				res.data.id;
				console.log(res.data.id);
			})
			.catch((err) => alert(err));
		api
			.post(`/api/carts/${cart_id}/items/${id}`)
			.then((res) => {
				res.data;
				console.log(res.data);
			})
			.catch((err) => alert(err));
	};
	useEffect(() => {
		const getProduct = () => {
			api
				.get(`/api/products/${id}`)
				.then((res) => res.data)
				.then((data) => {
					setProduct(data);
					setImages(data.images[0].image);
				})
				.catch((err) => alert(err));
		};
		getProduct();
	}, [id]);
	if (!product) {
		return <div>Loading...</div>;
	}

	return (
		<section className="w-[40%] flex flex-col justify-center py-5  bg-primary">
			<h1 className="font-bold text-[1.2rem] md:text-[2rem]">{product.name}</h1>
			<h1 className="font-semibold italic text-[0.8rem] md:text-[1rem]">
				{product.color}
			</h1>
			<img src={images} alt={product.name} />
			<h3 className="text-[0.9rem] md:text-[1rem] flex justify-between">
				<b>Price:</b> <FormatCurrency value={product.price_with_tax} />
			</h3>
			<p className="p-3 text-[0.9rem] md:text-[1rem]">{product.description}</p>
			{quantity === 0 ? (
				<button
					onClick={addToCart}
					className="bg-amber-800 rounded-2xl py-2 md:px-2 hover:bg-amber-700 text-white text-[0.9rem] md:text-[1rem]">
					Add to Cart
				</button>
			) : (
				<div className="flex flex-col gap-2 items-center my-3">
					<div className="flex justify-center items-center gap-4">
						<button className="text-gray-700 bg-gray-300 bg-opacity-80 rounded-full w-5 hover:bg-slate-200">
							-
						</button>
						<p>
							<span className="font-bold text-[1.2rem]">{quantity}</span> in cart
						</p>
						<button className="text-gray-700 bg-gray-300 bg-opacity-80 rounded-full w-5 hover:bg-slate-200">
							+
						</button>
						</div>
						<button className="bg-amber-700 p-2 rounded-xl text-white">Remove</button>
				</div>
			)}
		</section>
	);
};

export default ProductDetail;
