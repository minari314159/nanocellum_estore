import { comingsoon } from "../assets";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const ComingSoon = () => {
	return (
		<section id="product" className="  w-full relative mt-[10rem] h-[90vh] ">
			<motion.div className="absolute bottom-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
				<h3 className="font-semibold  text-[35px] md:text-[45px] text-center mb-5 ">
					Coming Soon...
				</h3>
				<NavLink to="/order">
					<motion.p
						className="  px-2 py-3 rounded-lg bg-orange-300 text-gray-700 text-[14px] md:text-[16px] z-10"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}>
						Pre-Order Now
					</motion.p>
				</NavLink>
			</motion.div>
			<img
				src={comingsoon}
				alt="Liquid growth chamber for cellulose. Image by Stefan Schwabe Xylinum Cone"
				className="w-[45rem] lg:w-[50rem] absolute -left-2 -bottom-2 z-0 blur-[1px]"
			/>
		</section>
	);
};

export default ComingSoon;
