import { useRef } from "react";
import {
	useScroll,
	useTransform,
	useAnimationControls,
	motion,
} from "framer-motion";
import { lamp, forlamp, blob } from "../assets";

const Transition = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end start", "start end"],
	});
	const menuControls = useAnimationControls();
	const y = useTransform(scrollYProgress, [0, 1], ["0", "135"]);
	const lampY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
	const lampScale = useTransform(scrollYProgress, [0, 1], ["100%", "105%"]);
	const glowScale = useTransform(scrollYProgress, [0, 1], ["100%", "200%"]);
	const handleClick = () => {
		menuControls.start("open");
		window.open(
			"https://www.youtube.com/watch?v=oeR2TlvfSHg&ab_channel=hkrita",
			"_blank"
		);
	};

	return (
		<section
			id="transition"
			ref={ref}
			className="flex  relative flex-row flex-nowrap justify-center items-center  mx-auto w-full lg:w-[85%] h-[100vh] my-[7rem] ">
			<div className="z-10">
				<motion.div
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
					style={{ y }}
					className={`w-[130px] h-[130px] p-[2px] cursor-pointer  relative`}
					onClick={handleClick}>
					<div className="flex-col w-[100%] h-[100%] absolute bottom-[1.5rem] left-[1.5rem] z-10">
						<span className="font-poppins font-medium text-[18px] leading-[23px]  text-white ">
							Click Me!
						</span>
					</div>
					<img
						src={blob}
						alt="blob"
						className="w-[130px] h-[130px] absolute bottom-[5rem] z-0"
					/>
					<motion.img
						style={{ scale: glowScale }}
						src={blob}
						alt="yellow blob"
						className="w-[100px] h-[100px] -z-10 relative left-3 bottom-[4.5rem] rounded-full blur-xl"
					/>
				</motion.div>
			</div>

			<motion.img
				style={{ scale: lampScale, opacity: lampScale, y: lampY }}
				className="h-[300px] md:h-[400px] absolute  bottom-[20rem] z-[-10px] rounded-b-full"
				whileTap={{ scale: 0.95 }}
				src={lamp}
				alt="cellulose lamp"
			/>
			<motion.img
				style={{ scale: lampScale, opacity: lampScale, y: lampY }}
				className="h-[300px] md:h-[400px] absolute bottom-[20rem] z-10 rounded-b-full "
				src={forlamp}
				alt="cellulose lamp"
			/>
		</section>
	);
};

export default Transition;
