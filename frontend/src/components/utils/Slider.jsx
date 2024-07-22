import { sucrose, kiwi, pcabbage, beet, molasses } from "../../assets";
import {
	FaRegArrowAltCircleRight,
	FaRegArrowAltCircleLeft,
} from "react-icons/fa";
const Slider = () => {
	const images = [sucrose, kiwi, pcabbage, beet, molasses];
	return (
		<div className="flex flex-col items-center w-[100%]  gap-0 justify-center  ">
			<div className="flex overflow-auto">
				{images.map((img, index) => (
					<img
						src={img}
						key={index}
						alt="Nanocellulose colour samples"
						width={150}
						height={150}
						className="rounded-full  content-center object-cover relative z-10 p-1 "
					/>
				))}
			</div>
			<div className="inline-flex ">
				<button className="btn btn-ghost btn-circle">
					<FaRegArrowAltCircleLeft size={25} className="text-neutral-500 " />
				</button>
				<button className="btn btn-ghost btn-circle">
					<FaRegArrowAltCircleRight size={25} className="text-neutral-500 " />
				</button>
			</div>
		</div>
	);
};

export default Slider;
