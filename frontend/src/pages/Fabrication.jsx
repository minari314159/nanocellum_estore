import { growth } from "../assets";
import { fabSteps } from "..";
const Fabrication = () => {
	return (
		<section className="flex w-full min-h-screen flex-col items-center gap-5 justify-between">
			<div className="w-full relative">
				<img src={growth} className="w-full h-[400px] object-cover z-0" />
				<h1 className="text-7xl absolute  left-0 bottom-0 m-auto font-['Tahoma'] z-1 font-semibold text-base-content bg-gradient-to-b from-transparent to-base-200  w-full px-2">
					Fabrication
				</h1>
			</div>
			{fabSteps.map((step) => (
				<div
					key={step.step}
					className="w-full flex justify-between items-center relative pl-5">
					<h2 className="text-6xl absolute  left-2 bottom-2 m-auto font-['Tahoma'] z-1 text-base-content">
						{step.step}
					</h2>
					<p className="p-5 text-lg rounded-lg shadow-md max-w-[500px]">
						{step.description}
					</p>
					<img src={step.image} className="" />
				</div>
			))}
		</section>
	);
};

export default Fabrication;
