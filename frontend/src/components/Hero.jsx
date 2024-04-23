import { blob } from "../assets";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end start", "start end"],
	});

	const growOut = useTransform(scrollYProgress, [0, 1], ["50%", "100%"]);

	return (
		<section id="home" ref={ref}>
			<div className="relative  max-w-[470px] ">
				<motion.img
					style={{ scale: growOut }}
					src={blob}
					alt="cellulos lamp"
					className="h-[350px] w-full md:h-[450px] lg:h-[500px] -z-10 "
				/>
				<p className="absolute top-[40%] text-black font-light text-[16px] md:text-[18px] leading-[30.8px]  text-center">
					Sustainably grown nanocellulose material that is transparent, strong
					but still maintaining a fabric-like feel. Developed from the
					fermentation of fruits and vegetables, no trees involved.
				</p>
			</div>
		</section>
	);
};

export default Hero;
