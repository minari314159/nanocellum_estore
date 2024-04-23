/* eslint-disable react/prop-types */
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const StickyImage = ({ imgUrl, width, height }) => {
	const targetRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["end end", "end start"],
	});

	const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

	return (
		<motion.div
			className="sticky z-0 overflow-hidden  flex flex-col items-center justify-center"
			ref={targetRef}>
			<motion.img
				style={{
					height: height,
					width: width,
					top: 10,
					scale,
				}}
				src={imgUrl}
				className="h-[600px] rounded-full bg-cover aspect-auto"
			/>
			<motion.div
				style={{
					opacity,
				}}
				className="absolute inset-0 bg-neutral-950/700"
			/>
		</motion.div>
	);
};

export default StickyImage;
