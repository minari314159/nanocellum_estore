import Carousel from "./Carousel";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { blob } from "../assets";
import { slides } from "../index.js";

const Design = () => {
	const ref = useRef();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0.5 1", "1 1"],
	});

	const backgroundY = useTransform(scrollYProgress, [0, 1], ["200%", "0%"]);
	const blobY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
	const blobO = useTransform(scrollYProgress, [0, 1], ["100%", "140%"]);

	return (
		<section
			id="design"
			ref={ref}
			className="flex  flex-col md:flex-row  w-full lg:w-[85%] justify-center items-center h-[100vh] gap-5 mt-10 p-10 ">
			<motion.div
				style={{ opacity: blobY }}
				className="flex flex-col justify-center items-center sm:px-16 ">
				<h3 className="font-semibold text-[30px] md:text-[40px] lg:text-[45px] text-left relative top-[12rem]">
					Choose Your Colour.
				</h3>

				<p className="font-light text-black text-[14px] md:text-[18px] leading-[30.8px] mt-10  max-w-[400px]  text-center md:text-left md:mt-8 sm:mt-8 px-5 ss:mt-8 xs:mt-8 relative top-[12rem]">
					The grown cellulose can be tailered to your colour preference.
					Depending on the sugar source, the produced cellulose fibres can
					exhibit different colours as well as different material strength. This
					dying process is fully sustainable, using naturally occursing sugar
					from various fruits and vegetables.
				</p>
				<motion.img
					style={{ y: blobY, scale: blobO }}
					src={blob}
					alt="cellulos lamp"
					className=" h-[250px] w-[260px] md:h-[450px] lg:h-[400px] lg:w-[450px] xl:w-[410px] -z-10 relative top-[-18rem]  md:top-[-40rem] lg:top-[-35rem] xl:top-[-32rem]"
				/>
			</motion.div>

			<motion.div style={{ x: backgroundY, opacity: blobY }}>
				<Carousel slides={slides} />
			</motion.div>
		</section>
	);
};

export default Design;
