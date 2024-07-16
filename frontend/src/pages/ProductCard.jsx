import { Card } from "../components/components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
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
		<>
			<div className="p-4 px-6 bg-accent rounded-e-full flex flex-col items-center justify-center shadow-lg">
				<h1 className="text-2xl lg:text-4xl font-bold">{product.title}</h1>
			</div>{" "}
			<Card style="min-w-[300px] max-w-[600px] my-5">
				<div className="w-full flex gap-2">
					<div className="flex flex-col justify-start items-start text-xs sm:text-sm md:text-md lg:text-lg text-left p-2">
						<p>
							<b>Price:</b> ${product.price}.00
						</p>
						<p>
							<b>Designer:</b> {product.designer}
						</p>
						<hr className="w-full my-2 text-base-300" />
						<p className="w-full my-2 ">{product.description}</p>
					</div>
					<img
						src={product.image}
						alt={product.name}
						height={300}
						width={300}
						className="rounded-full w-md h-md aspect-square shadow-lg"
					/>
				</div>
			</Card>
			<div>
				<Link to={`/products/${id}/edit`} className="btn btn-ghost">
					Edit
				</Link>
				<button className="btn btn-ghost text-error">Delete</button>
			</div>
		</>
	);
};

export default ProductCard;
