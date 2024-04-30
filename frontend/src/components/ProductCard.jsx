import api from "../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue } from "framer-motion";

const ProductCard = () => {
	const [products, setProducts] = useState([]);
	const DRAG_BUFFER = 50;

	const [imgIndex, setImgIndex] = useState(0);
	//passing this in changes based on the x translate value (updates it)
	const dragX = useMotionValue(0);
	const fetchProducts = async () => {
		const response = await api.get("/api/products/");
		setProducts(response.data.results);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	const SPRING_OPTIONS = {
		type: "spring",
		mass: 3,
		stiffness: 400,
		damping: 50,
	};

	const onDragEnd = () => {
		const x = dragX.get();

		if (x <= -DRAG_BUFFER && imgIndex < products.length - 1) {
			setImgIndex((pv) => pv + 1);
		} else if (x >= DRAG_BUFFER && imgIndex > 0) {
			setImgIndex((pv) => pv - 1);
		}
	};
	return (
		<div className="w-full">
			<motion.div className="relative overflow-hidden py-10">
				<motion.div
					drag="x"
					dragConstraints={{
						left: 0,
						right: 0,
					}}
					style={{
						x: dragX,
					}}
					animate={{ translateX: `-${imgIndex * 50}%` }}
					transition={SPRING_OPTIONS}
					onDragEnd={onDragEnd}
					className="flex cursor-grab items-center active:cursor-grabbing">
					{products.map((product) => (
						<motion.div
							key={product.id}
							style={{
								backgroundImage: `url(${product.image})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
							animate={{
								scale: imgIndex === product.id ? 0.95 : 0.85,
							}}
							transition={SPRING_OPTIONS}
							className="w-[48%] h-[15rem] shrink-0  flex flex-col justify-end items-center py-3 rounded-xl text-[14px] gap-1 ">
							<div className="flex flex-col items-center p-1 bg-primary rounded-xl bg-opacity-60">
								<p className="font-bold text-black">{product.color}</p>

								<Link
									to={`/product/${product.id}`}
									className="cursor-pointer hover:underline underline-offset-3 text-black">
									Details &gt;
								</Link>
							</div>
						</motion.div>
					))}
				</motion.div>
				<div className=" flex w-full justify-center gap-2">
					{products.map((_, product) => {
						return (
							<button
								key={product.id}
								onClick={() => setImgIndex(product.id)}
								className={`h-3 w-3 rounded-full transition-colors ${
									product.id === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
								}`}
							/>
						);
					})}
				</div>
			</motion.div>
		</div>
	);
};

export default ProductCard;
