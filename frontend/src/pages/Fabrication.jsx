import { growth } from "../assets";
const Fabrication = () => {
	return (
		<section className="flex w-full min-h-screen flex-col items-center">
			<div className="w-full relative">
				<img src={growth} className="w-full h-[400px] object-cover z-0" />
				<h1 className="text-7xl absolute  left-[2%] bottom-0 m-auto font-['Tahoma'] z-50 font-semibold ">
					Fabrication
				</h1>
			</div>
		</section>
	);
};

export default Fabrication;
