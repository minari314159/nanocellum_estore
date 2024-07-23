import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Search from "../components/product/Search";
import { IoEyeOutline } from "react-icons/io5";
import Card from "../components/utils/Card";

const Products = () => {
	const [products, setProducts] = useState([]);
	const [filter, setFilter] = useState(" ");
	const overlay = useRef();

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const res = await axios.get(
					`http://localhost:3000/api/products${filter}`
				);

				setProducts(res.data);
			} catch (err) {
				return err.response;
			}
		};

		fetchProducts();
	}, [filter]);

	return (
		<section className="flex w-full min-h-screen flex-col items-center p-4 ">
			<div className="py-2 px-10 bg-accent rounded-e-full flex flex-col items-center justify-center shadow-lg">
				<h1 className="text-2xl lg:text-4xl font-bold mt-2">Products</h1>
				<Search setFilter={setFilter} filter={filter} />
			</div>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-5">
				{products.length === 0 && (
					<h3 className="font-bold text-xl mt-4">
						No Products at this time...
					</h3>
				)}

				{products.map((product, index) => (
					<Card
						key={index}
						style="w-[11rem] sm:w-[14rem] md:w-[15rem] lg:w-[20rem]">
						<div className="w-full ">
							<h2 className="text-md sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">
								{product.title}
							</h2>
							<div className="relative">
								<img
									src={product.image || "https://placehold.co/400"}
									alt={product.name}
									height={300}
									width={300}
									className="rounded-lg w-full aspect-square shadow-lg "
								/>
								<div
									ref={overlay}
									className=" w-full h-full bg-opacity-40 bg-neutral-300 absolute bottom-0 left-0  z-10 hover:flex justify-center items-center rounded-lg hidden">
									<Link
										to={`/products/${product._id}`}
										className="btn btn-ghost btn-circle  ">
										<IoEyeOutline className="w-5 h-5" />
									</Link>
								</div>
								<div className="w-full absolute bottom-[0.5rem] left-[1rem] text-xs sm:text-sm md:text-md lg:text-lg">
									<p className="text-white">Price: ${product.price}.00</p>
								</div>
							</div>
						</div>
					</Card>
				))}
			</div>
		</section>
	);
};

export default Products;
