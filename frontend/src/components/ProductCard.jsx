import api from "../api";
import { useEffect, useState } from "react";
import FormatCurrency from "./FormatCurrency";
import AddToCartButton from "./AddToCartButton";
import { motion, useMotionValue } from "framer-motion";

const ProductCard = () => {
	const [products, setProducts] = useState([]);
	const [toggle, setToggle] = useState(false);

	const toggleDetails = () => {
		setToggle((pv) => !pv);
	};

	const DRAG_BUFFER = 50;

	const [imgIndex, setImgIndex] = useState(0);
	//passing this in changes based on the x translate value (updates it)
	const dragX = useMotionValue(0);
	useEffect(() => {
		const fetchProducts = async () => {
			const response = await api.get("/api/products/", {
				headers: { "Content-Type": "multipart/form-data" },
			});
			setProducts(response.data.results);
		};

		fetchProducts();
	}, []);

	const SPRING_OPTIONS = {
		type: "spring",
		mass: 4,
		stiffness: 500,
		damping: 50,
	};

	const onScroll = () => {
		const x = dragX.get();

		if (x <= -DRAG_BUFFER && imgIndex < products.length - 1) {
			setImgIndex((pv) => pv + 1.5);
		} else if (x >= DRAG_BUFFER && imgIndex > 0) {
			setImgIndex((pv) => pv - 1);
		}
	};
	return (
		<div className="w-full">
			<motion.div className="relative overflow-x-scroll scroll-smooth  py-10 no-scrollbar">
				<motion.div
					onScroll={onScroll}
					style={{
						x: dragX,
					}}
					animate={{ translateX: `-${imgIndex * 50}%` }}
					transition={SPRING_OPTIONS}
					className="flex cursor-grab items-center active:cursor-grabbing w-[200px] no-scrollbar">
					{products.map((product, index) => (
						<motion.div
							key={index}
							animate={{
								scale: imgIndex === product.id ? 0.95 : 0.85,
							}}
							transition={SPRING_OPTIONS}
							className="w-[350px] h-[15rem] shrink-0  flex flex-col justify-end items-end  rounded-lg text-[14px] gap-1 relative">
							<img
								src={product.images[0].image}
								alt={product.name}
								className="absolute -z-10  aspect-square w-[340px]  rounded-lg pointer-events-none"
							/>
							<div
								className={`flex flex-col items-start gap-2 p-1 bg-primary rounded-xl bg-opacity-60 w-full ${
									toggle ? "h-[250px]" : "h-[100px]"
								} `}>
								<h2 className="font-bold text-black text-[1rem] md:text-[1.2rem] ">
									{product.color}
								</h2>

								<h3 className="text-[0.8rem] md:text-[0.9rem] flex justify-between">
									<b>Price:</b>{" "}
									<FormatCurrency value={product.price_with_tax} />
								</h3>

								<motion.button whileTap={toggleDetails}>
									{toggle ? "Less" : "More"} Details {">"}{" "}
								</motion.button>
								<div className={`${toggle ? "flex" : "hidden"} flex-col`}>
									<p className="p-3 text-[0.9rem] md:text-[1rem]">
										{product.description}
									</p>
									<div className="w-full flex justify-center">
										
										<AddToCartButton productId={product.id} />
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
};

export default ProductCard;
