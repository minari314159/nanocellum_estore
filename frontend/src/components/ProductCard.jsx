import api from "../api";
import { useEffect, useRef, useState } from "react";
import FormatCurrency from "./FormatCurrency";
import AddToCartButton from "./AddToCartButton";
import { AnimatePresence, motion } from "framer-motion";

const ProductCard = () => {
	const [products, setProducts] = useState([]);
	const [toggleOpen, setToggle] = useState(false);
	const ref = useRef();

	const close = () => {
		setToggle(false);
	};
	const open = () => {
		setToggle(true);
	};

	const handleScroll = (direction) => {
		const scrollAmount = 360;
		if (direction === "left") {
			ref.current.scrollLeft -= scrollAmount;
		} else {
			ref.current.scrollLeft += scrollAmount;
		}
	};
	useEffect(() => {
		const fetchProducts = async () => {
			const response = await api.get("/api/products/", {
				headers: { "Content-Type": "multipart/form-data" },
			});
			setProducts(response.data.results);
		};

		fetchProducts();
	}, []);

	return (
		<section className="flex flex-col items-center">
			<motion.div
				ref={ref}
				className="relative overflow-x-scroll scroll-smooth no-scrollbar py-10 rounded-xl flex gap-12 items-center w-[31rem] sm:w-[40rem] h-[400px] md:w-[46rem]">
				{products.map((product) => (
					<motion.div
						key={product.id}
						style={{
							backgroundImage: `url(${product.images[0].image})`,
							backgroundSize: "cover",
							backgroundPosition: "bottom",
						}}
						className="w-[20rem] h-[18rem] shrink-0  flex flex-col justify-end items-start  rounded-lg text-[14px] gap-1 relative">
						<div
							className={`flex flex-col justify-end items-end  p-1 rounded-xl  w-full  h-full`}>
							<div className="bg-primary bg-opacity-60 w-full h-[6rem] flex flex-col items-start gap-1">
								<h2 className="font-bold text-black text-[1rem] md:text-[1.2rem] ">
									{product.color}
								</h2>
								<h3 className="text-[0.8rem] md:text-[0.9rem] flex justify-between w-full">
									<b>Price:</b>{" "}
									<FormatCurrency value={product.price_with_tax} />
								</h3>

								<button onClick={() => (toggleOpen ? close() : open())}>
									{toggleOpen ? "Less" : "More"} Details {">"}{" "}
								</button>
							</div>

							<AnimatePresence>
								{toggleOpen && (
									<motion.div
										initial={{ height: 0 }}
										animate={{ height: "14rem" }}
										transition={{
											duration: 0.5,
											type: "spring",
											stiffness: 200,
											damping: 15,
											ease: "easeInOut",
										}}
										exit={{ height: 0 }}
										className="flex overflow-y-scroll flex-col  bg-primary bg-opacity-60">
										<p className="p-3 text-[0.9rem] md:text-[1rem]">
											{product.description}
										</p>
										<div className="w-full flex justify-center ">
											<AddToCartButton productId={product.id} />
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</motion.div>
				))}
			</motion.div>
			<div className="flex items-center gap-3">
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={() => handleScroll("left")}
					className="w-6 h-6 p-1 rounded-full bg-white bg-opacity-50 shadow-md">
					L
				</motion.button>
				<p>Scroll Products</p>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={() => handleScroll("right")}
					className="w-6 h-6 p-1 rounded-full bg-white bg-opacity-50 shadow-md">
					R
				</motion.button>
			</div>
		</section>
	);
};

export default ProductCard;
