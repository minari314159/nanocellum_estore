import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const Product = () => {
	const { id } = useParams();
	const [product, setProduct] = useState({});
	useEffect(() => {
		const fetchProduct = async () => {
			await fetch(`http://localhost:3000/api/products/${id}`)
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					setProduct(data);
				})
				.catch((err) => {
					console.log(err);
				});
		};

		fetchProduct();
	}, [id]);
	return (
		<section className="flex w-full min-h-screen flex-col items-center p-4 ">
			<div className="p-4 px-6 bg-accent rounded-e-full flex flex-col items-center justify-center shadow-lg">
				<h1 className="text-2xl lg:text-4xl font-bold">{product.title}</h1>
			</div>{" "}
			<Card style="min-w-[300px] max-w-[600px] my-5">
				<div className="w-full flex gap-2">
					<img
						src={product.image}
						alt={product.name}
						height={300}
						width={300}
						className="rounded-full w-md h-md aspect-square shadow-lg"
					/>
					<div className="left-[1.5rem] text-xs sm:text-sm md:text-md lg:text-lg">
                        <p>Price: ${product.price}.00</p>
                        <p>Designer: {product.designer}</p>
                        <p>{product.description}</p>
					</div>
				</div>
			</Card>
			<Link to="/products" className="btn btn-accent">
				Back
			</Link>
		</section>
	);
};

export default Product;
