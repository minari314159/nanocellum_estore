import { growth } from "../assets";
const Fabrication = () => {
	return (
		<section className="flex w-full min-h-screen flex-col items-center">
			<div className="w-full relative">
				<img src={growth} className="w-full h-[400px] object-cover z-0" />
				<h1 className="text-7xl absolute  left-0 bottom-0 m-auto font-['Tahoma'] z-1 font-semibold text-base-content bg-gradient-to-b from-transparent to-base-200  w-full px-2">
					Fabrication
				</h1>
			</div>
		</section>
	);
};

export default Fabrication;
