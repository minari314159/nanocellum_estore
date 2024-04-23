/* eslint-disable react/prop-types */
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Overlay = ({ subheading, heading, textColor }) => {
	const targetRef = useRef(null);

	//want animation to start when the text enters the bottom of the screen
	//run animation until the end of the content meets with the start of the screen
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	});
	//fast page scroll parallax effect
	const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
	const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

	return (
		<motion.div
			ref={targetRef}
			style={{
				y,
				opacity,
			}}
			className={`absolute left-0 top-0 flex flex-col h-screen w-full items-
		center justify-center ${textColor ? 'text-white' : 'text-black'}`}>
			<p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
				{subheading}
			</p>
			<p
				className="text-center text-4xl font-bold md:mb-4 md:text-
				7xl">
				{heading}
			</p>
		</motion.div>
	);
};

export default Overlay;
