import { Card, DeleteButton } from "../components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { publicRequest } from "../../requestMethods";

const ProductCard = () => {
	const { id } = useParams();

	const [product, setProduct] = useState();

	const [quantity, setQuantity] = useState(1);

	useEffect(() => {
		getProduct(id);
	}, [id]);

	const getProduct = (id) => {
		publicRequest
			.get(`api/products/${id}/`)
			.then((res) => res.data)
			.then((data) => {
				setProduct(data);
			})
			.catch((error) => alert(error));
	};
	console.log(product);
	const handleQuantity = (type) => {
		if (type === "dec") {
			quantity > 1 && setQuantity(quantity - 1);
		} else {
			setQuantity(quantity + 1);
		}
	};
	const handleClick = () => {
		// dispatch(addProduct({ ...product, quantity, color }));
	};

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
						<p className="flex items-center gap-3">
							<b>Colour:</b> {product.colour}
						</p>
						<hr className="w-full my-2 border-neutral-700" />
						<p className="w-full my-2 ">{product.description}</p>
						<div className="w-full flex flex-col items-center">
							<div className="inline-flex items-center  my-2 ">
								<span
									className="btn btn-sm btn-ghost btn-circle"
									onClick={() => handleQuantity("dec")}>
									-
								</span>
								{/* <p className="font-bold"> {quantity}</p> */}
								<span
									className="btn btn-sm btn-ghost btn-circle"
									onClick={() => handleQuantity("inc")}>
									+
								</span>
							</div>
							<button onClick={handleClick} className="btn  w-full">
								Add to Cart
							</button>
						</div>
					</div>
					<img
						src={product.image}
						alt={product.name}
						height={300}
						width={300}
						className="rounded-full w-md h-md aspect-square object-contain shadow-lg bg-black"
					/>
				</div>
			</Card>
			<div>
				<Link to={`/products/${id}/edit`} className="btn btn-ghost">
					Edit
				</Link>
				<DeleteButton id={id} />
			</div>
		</>
	);
};

export default ProductCard;
