import { sucrose, kiwi, pcabbage, beet, molasses } from "../../assets";
import {
	FaRegArrowAltCircleRight,
	FaRegArrowAltCircleLeft,
} from "react-icons/fa";
const Slider = () => {
	const images = [
		{
			src: sucrose,
            alt: "Sucrose",
            description: "Sucrose is a disaccharide composed of glucose and fructose. It is produced naturally in plants"
		},
		{
			src: kiwi,
            alt: "Kiwi",
            description: "Kiwi is a fruit that is rich in vitamins and minerals. Its sugar content is mainly fructose"
		},
		{
			src: pcabbage,
            alt: "Purple Cabbage",
            description: "Purple cabbage is a vegetable rich in antioxidants. Its sugar content is mainly glucose"
		},
		{
			src: beet,
            alt: "Beet",
            description: "Beet is a root vegetable rich in vitamins and minerals. Its sugar content is mainly sucrose"
		},
		{
			src: molasses,
            alt: "Molasses",
            description: "Molasses is a byproduct of sugar production.  Its sugar content is mainly glucose"
		},
	];
	return (
		<div className="flex flex-col items-center w-[100%]  gap-0 justify-center  ">
			<div className="flex overflow-auto w-full gap-2">
				{images.map((design, index) => (
					<div key={index} className=" relative w-[300px] h-[100%]">
						<img
							src={design.src}
                            alt={design.alt}
                            width="100%"
                            height="100%"
							className="rounded-full content-center object-cover "
                        />
                        <p className="text-center text-neutral-300 absolute bottom-3 bg-accent-content bg-opacity-40 p-2 rounded-lg ">{design.description}</p>
					</div>
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
