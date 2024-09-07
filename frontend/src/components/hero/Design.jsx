import { Link } from "react-router-dom";
import Slider from "../utils/Slider";
import { images } from "../..";

const Design = () => {
	return (
		<section
			id="design"
			className="flex  flex-col w-full justify-start gap-8  items-center h-screen ">
			<div className="flex flex-col justify-center items-center  relative  gap-4">
				<h1 className="font-bold text-2xl mb-3">How it works</h1>

				<p className="font-light text-black text-[14px] md:text-[16px] leading-[30.8px] max-w-[500px]  text-center  px-5 ">
					Depending on the sugar source, the produced cellulose fibres can
					exhibit different colours as well as different material strength. This
					dying process is fully sustainable, using naturally occuring sugar
					from various fruits and vegetables.
				</p>
				<Link
					to="/growth"
					className="text-black btn btn-accent hover:scale-105 cursor-pointer">
					Product Details
				</Link>
			</div>
			<Slider slide={images} />
		</section>
	);
};

export default Design;
