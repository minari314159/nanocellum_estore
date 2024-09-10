import { growth } from "../assets";
import { fabSteps } from "..";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
const Fabrication = () => {
	const [index, setIndex] = useState(0);
	const changeImage = (direction) => {
		if (direction === "left") {
			if (index === 0) {
				setIndex(0);
			} else {
				setIndex(index - 1);
			}
		} else {
			if (index === fabSteps.length - 1) {
				setIndex(fabSteps.length - 1);
			} else {
				setIndex(index + 1);
			}
		}
	};
	return (
		<section className="flex w-full min-h-screen  flex-col items-center gap-10 justify-between">
			<div className="w-full relative">
				<img src={growth} className="w-full h-[400px] object-cover z-0" />
				<h1 className="text-7xl absolute  left-0 bottom-0 m-auto font-['Tahoma'] z-1 font-semibold text-base-content bg-gradient-to-b from-transparent to-base-200  w-full px-2">
					Fabrication
				</h1>
			</div>

			<div className="flex flex-col items-start justify-center  w-full  p-2 px-10  gap-5 max-w-[1200px]">
				<h2 className="text-2xl font-semibold">Why Bacterial Cellulose?</h2>
				<p className="sm:columns-2">
					Each lamp is made from 1-3 pieces of raw cellulose grown over 1-2
					weeks using the non-toxic bacterium A. xylinum. While plant-derived
					cellulose is technically renewable, it requires extensive
					processing—often involving strong acids and large water usage—to
					isolate. In contrast, using raw bacterial cellulose eliminates these
					steps, making it a more cost-effective, time-efficient, and
					sustainable alternative.{" "}
				</p>
				<Link to="/products" className="btn btn-accent rounded-full  ">
					View Designs
				</Link>
			</div>
			<div className="flex flex-col items-start justify-end overflow-hidden  w-screen max-w-[1200px] h-[80vh] p-2 px-10 mb-8 gap-2">
				<h2 className=" py-2 text-2xl font-semibold"> Steps</h2>
				{
					<div
						key={fabSteps[index]}
						className=" w-full h-[70vh] flex justify-between items-center  p-2 px-5 rounded-lg shadow-inner  border border-base-300">
						<div className="h-full flex flex-col justify-between">
							<p className="p-5 text-sm sm:text-md md:text-lg  min-w-[250px] md:min-w-[300px] max-w-[500px]">
								{fabSteps[index].description}
							</p>

							<div className=" flex items-end gap-2">
								<h2 className="text-7xl  font-['Tahoma'] z-1 text-base-content">
									{fabSteps[index].step}
								</h2>
							</div>
						</div>
						<img
							src={fabSteps[index].image}
							className="max-w-[300px] md:max-w-[400px] lg:max-w-[500px] h-full rounded-b-[9rem] object-cover "
						/>
					</div>
				}
				<div className="p-5 flex items-center gap-3">
					<IoIosArrowBack
						onClick={() => changeImage("left")}
						className="text-base-content w-[16rem] flex-1 btn btn-circle btn-ghost"
					/>

					{fabSteps.map((_, i) => (
						<div
							key={i}
							className={`w-5 h-5 rounded-full cursor-pointer ${
								index === i ? "bg-accent-content" : "bg-neutral-300"
							}`}
							onClick={() => setIndex(i)}></div>
					))}
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
