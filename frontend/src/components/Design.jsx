import { Link } from "react-router-dom";

import { sucrose, kiwi, pcabbage, beet, molasses } from "../assets";

const Design = () => {
	const images = [sucrose, kiwi, pcabbage, beet, molasses];

	return (
		<section
			id="design"
			className="flex  flex-col w-full justify-start gap-8  items-center h-[80vh] ">
			<div className="flex flex-col justify-center items-center sm:px-16 relative mb-2 gap-4">
				<h1 className="font-bold text-2xl mb-3">How it works</h1>

				<p className="font-light text-black text-[14px] md:text-[16px] leading-[30.8px] max-w-[500px]  text-center  px-5 ">
					Depending on the sugar source, the produced cellulose fibres can
					exhibit different colours as well as different material strength. This
					dying process is fully sustainable, using naturally occuring sugar
					from various fruits and vegetables.
				</p>
				<Link
					to="/products"
					className="text-black btn btn-accent hover:scale-105 cursor-pointer">
					Product Details
				</Link>
			</div>
			<div className="flex gap-0 justify-center overflow-y-hidden overflow-x-auto ">
				{images.map((img, index) => (
					<img
						src={img}
						key={index}
						alt="Nanocellulose colour samples"
						width={150}
						height={150}
						className="rounded-full  content-center object-cover relative z-10"
					/>
				))}
			</div>
		</section>
	);
};

export default Design;
