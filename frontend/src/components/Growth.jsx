import { growthbc } from "../assets";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { blob } from "../assets";

const Growth = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end end"],
	});

	const y = useTransform(scrollYProgress, [0, 1], [0, -250]);
	const growOut = useTransform(scrollYProgress, [0, 1], ["0%", "130%"]);
	const textOut = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
	const opacity = useTransform(scrollYProgress, [0.1, 0.7, 0.98], [0, 1, 0]);

	return (
		<section
			id="growth"
			ref={ref}
			className="flex flex-col  w-full  justify-center items-center h-[100vh]">
			<motion.div
				style={{ y, opacity }}
				className="flex flex-col items-center relative">
				<img
					src={growthbc}
					alt="Liquid growth chamber for cellulose. Image by Stefan Schwabe Xylinum Cone"
					className="w-[350px] md:w-[400px] md:h-[650] "
				/>
				<motion.img
					style={{ y, scale: growOut }}
					src={blob}
					alt="cellulos lamp"
					className=" h-[450px] w-[450px] md:h-[550px] md:w-[600px] -z-10 absolute bottom-[1rem]"
				/>
				<motion.p
					style={{ y, opacity, scale: textOut }}
					className="font-light text-black sm:text-[18px] leading-[30.8px]  max-w-[450px] z-1 text-center ">
					Cellulose grown in liquid growth chambers create a novel material that
					is translucent, strong and have fabric-like properties. The journey
					begins with a Non-Pathogenic cellulose producing bacteria that is
					commonly involved in the decomposition of fruits and vegetable, A.
					xylinum.
				</motion.p>
			</motion.div>
		</section>
	);
};

export default Growth;
