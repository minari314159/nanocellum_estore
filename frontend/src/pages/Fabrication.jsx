import { growth } from "../assets";
import { fabSteps } from "..";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
const Fabrication = () => {
	const [imageIndex, setImageIndex] = useState(0);
	const changeImage = (direction) => {
		if (direction === "left") {
			if (imageIndex === 0) {
				setImageIndex(0);
			} else {
				setImageIndex(imageIndex - 1);
			}
		} else {
			if (imageIndex === fabSteps.length - 1) {
				setImageIndex(fabSteps.length - 1);
			} else {
				setImageIndex(imageIndex + 1);
			}
		}
	};
	return (
		<section className="flex w-full min-h-screen flex-col items-center gap-10 justify-between">
			<div className="w-full relative">
				<img src={growth} className="w-full h-[400px] object-cover z-0" />
				<h1 className="text-7xl absolute  left-0 bottom-0 m-auto font-['Tahoma'] z-1 font-semibold text-base-content bg-gradient-to-b from-transparent to-base-200  w-full px-2">
					Fabrication
				</h1>
			</div>

			<div className="flex flex-col items-center justify-end overflow-hidden  w-screen h-[80vh] p-2 pr-0 my-5 gap-2">
				{
					<div
						key={fabSteps[imageIndex].step}
						className=" w-full h-[70vh] flex justify-between items-center  pl-5 ">
						<div className="h-full flex flex-col justify-between">
							<p className="p-5 text-sm sm:text-md md:text-lg rounded-lg shadow-sm bg-opacity-20 bg-blur-md min-w-[250px] md:min-w-[300px] max-w-[500px]">
								{fabSteps[imageIndex].description}
							</p>
							<div className=" flex items-end gap-2">
								<h2 className="text-7xl  font-['Tahoma'] z-1 text-base-content">
									{fabSteps[imageIndex].step}
								</h2>
								<h2 className="text-xl  font-['Tahoma']  text-base-content">
									{" "}
									/ 0{fabSteps.length}
								</h2>
							</div>
						</div>
						<img
							src={fabSteps[imageIndex].image}
							className="max-w-[300px] md:max-w-[400px] lg:max-w-[500px] h-full rounded-l-lg object-cover"
						/>
					</div>
				}
				<div className="p-5 flex items-center gap-3">
					<IoIosArrowBack
						onClick={() => changeImage("left")}
						className="text-base-content w-[16rem] flex-1 btn btn-circle btn-ghost"
					/>
					<Link to="/products" className="btn btn-accent rounded-full ml-5 ">
						View Designs
					</Link>
					<IoIosArrowForward
						onClick={() => changeImage("right")}
						className="text-base-content w-[16rem] btn btn-circle btn-ghost flex-1"
					/>
				</div>
			</div>
		</section>
	);
};

export default Fabrication;
