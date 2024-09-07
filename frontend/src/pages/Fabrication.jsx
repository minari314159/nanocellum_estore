import { growth } from "../assets";
import { fabSteps } from "..";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Fabrication = () => {
	const [imageIndex, setImageIndex] = useState(0);
	const changeImage = (direction) => {
		if (direction === "left") {
			if (imageIndex === 0) {
				setImageIndex(fabSteps.length - 1);
			} else {
				setImageIndex(imageIndex - 1);
			}
		} else {
			if (imageIndex === fabSteps.length - 1) {
				setImageIndex(0);
			} else {
				setImageIndex(imageIndex + 1);
			}
		}
	};
	return (
		<section className="flex w-full min-h-screen flex-col items-center gap-5 justify-between">
			<div className="w-full relative">
				<img src={growth} className="w-full h-[400px] object-cover z-0" />
				<h1 className="text-7xl absolute  left-0 bottom-0 m-auto font-['Tahoma'] z-1 font-semibold text-base-content bg-gradient-to-b from-transparent to-base-200  w-full px-2">
					Fabrication
				</h1>
			</div>
			<div className="flex items-center justify-between overflow-hidden  w-screen h-[90vh] p-2 my-5 gap-2">
				{
					<div
						key={fabSteps[imageIndex].step}
						className=" absolute w-screen h-[80vh] flex justify-between items-center  pl-5 border">
						<div className="h-full flex flex-col justify-between">
							<p className="p-5 text-lg rounded-lg shadow-sm bg-opacity-20 bg-blur-md min-w-[300px] max-w-[500px]">
								{fabSteps[imageIndex].description}
							</p>
							<h2 className="text-6xl  font-['Tahoma'] z-1 text-base-content w-full">
								{fabSteps[imageIndex].step}
							</h2>
						</div>
						<img src={fabSteps[imageIndex].image} className="w-full h-full" />
					</div>
				}
			</div>
			<div className="p-5 flex items-center gap-3">
				<IoIosArrowBack
					onClick={() => changeImage("left")}
					className="text-base-content w-[16rem] flex-1 btn btn-circle btn-ghost"
				/>
				<p className="text-3xl"> {fabSteps[imageIndex].step.slice(1)} / {fabSteps.length}</p>
				<IoIosArrowForward
					onClick={() => changeImage("right")}
					className="text-base-content w-[16rem] btn btn-circle btn-ghost flex-1"
				/>
			</div>
		</section>
	);
};

export default Fabrication;
