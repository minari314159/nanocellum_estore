import { cellumlamp } from "../assets";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Product = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end end"],
	});

	const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
	const textY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
	const opacity = useTransform(scrollYProgress, [0.15, 0.7, 0.85], [0, 1, 0]);

	return (
		<section
			ref={ref}
			id="product"
			className="flex flex-col sm:flex-row w-full justify-center items-start  sm:gap-3 h-[100vh]">
			<motion.div
				style={{ y, opacity, transformOrigin: "bottom" }}
				className="px-10">
				<img
					src={cellumlamp}
					alt="cellulose lamp hanging"
					className=" w-[280px] lg:w-[360px]   rounded-b-full  lg:m-10 drop-shadow-xl "
				/>
			</motion.div>

			<motion.div
				style={{ y: textY, opacity, transformOrigin: "top" }}
				className=" flex flex-col items-end w-[300px] ">
				<p className="font-light text-[16px] lg:text-[18px] leading-[30.8px] text-right max-w-[450px] lg:mt-10 ">
					A production line which uses living organisms to grow geometrical
					objects. A data-driven approach using bacterial cellulose to explore
					our perception of new biotechnological materials. Within a growth
					period of three weeks each cellulose lamp is ready for use!
				</p>
			</motion.div>
		</section>
	);
};

export default Product;
