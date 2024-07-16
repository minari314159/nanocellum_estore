import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const Products = () => {
	const ref = useRef();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0.5 1", "1 1"],
	});

	const blobY = useTransform(scrollYProgress, [0, 1], ["0%", "110%"]);
	return (
		<section
			id="design"
			ref={ref}
			className="flex  flex-col w-full justify-start gap-8  items-center h-[100vh] ">
			<motion.div
				style={{ opacity: blobY }}
				className="flex flex-col justify-center items-center sm:px-16 relative mb-2">
				<h1 className="font-bold text-[22px] mb-3">How it works</h1>
				<p className="font-light text-black text-[14px] md:text-[16px] leading-[30.8px] max-w-[500px]  text-center  px-5 ">
					Depending on the sugar source, the produced cellulose fibres can
					exhibit different colours as well as different material strength. This
					dying process is fully sustainable, using naturally occuring sugar
					from various fruits and vegetables.
					<br />
					(Click more details to learn)
				</p>
			</motion.div>
		</section>
	);
};

export default Products;
