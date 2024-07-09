import { useRef } from "react";

import { blob, forlamp, lamp } from "../assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Growth = () => {
	const container = useRef(null);

	useGSAP(
		() => {
			gsap.fromTo(
				"#forlamp",
				{
					opacity: 0.6,
					yPercent: 100,
					scale: 0.6,
					duration: 2,
					ease: "quint",
				},
				{
					opacity: 1,
					yPercent: 0,
					scale: 1,

					scrollTrigger: {
						trigger: "#paragraph",
						start: "top bottom",
						end: "bottom bottom",
						scrub: true,
					},
					ease: "quint",
				}
			);
			gsap.fromTo(
				"#vid",
				{
					yPercent: 200,
					scale: 0.6,
					duration: 4,
					ease: "power4",
				},
				{
					yPercent: -380,
					scale: 1,
					scrollTrigger: {
						trigger: "#paragraph",
						start: "top bottom",
						end: "bottom bottom",
						scrub: true,
					},
				}
			);
		},
		{ scope: container }
	);
	return (
		<section
			id="growth"
			ref={container}
			className="flex flex-col  w-full  justify-center items-center h-[100vh] relative">
			<div
				id="vid"
				className="w-[130px] h-[130px]  cursor-pointer  relative z-[7]">
				<img
					src={blob}
					alt="blob"
					className="w-[130px] h-[130px] absolute  z-0 blur-md"
				/>
				<button
					className="flex-col w-[100%] h-[100%] absolute bottom-[-0.5rem] left-[-0.2rem] z-[4]"
					onClick={() => open("https://www.youtube.com/watch?v=bbUDEV-thYc")}>
					<p className=" font-medium text-[18px] text-center  text-amber-950 ">
						Watch It <br /> Grow!
					</p>
				</button>
			</div>
			<div className="flex flex-col items-center  ">
				<p
					id="paragraph"
					className="font-light text-amber-950 sm:text-[18px] leading-[30.8px]  max-w-[450px]  text-center bg-base-300 shadow-lg rounded-b-2xl  p-2 border-t-4 border-amber-950 z-10">
					Cellulose grown in liquid growth chambers create a novel material that
					is translucent, strong and have fabric-like properties. The journey
					begins with a Non-Pathogenic cellulose producing bacteria that is
					commonly involved in the decomposition of fruits and vegetable, A.
					xylinum.
				</p>
				<img
					src={lamp}
					id="forlamp"
					alt="cellulos lamp"
					className=" w-[350px] md:w-[400px] aspect-square  absolute bottom-[31rem] z-[0] "
				/>
				<img
					src={forlamp}
					id="forlamp"
					alt="Liquid growth chamber for cellulose. Image by Stefan Schwabe Xylinum Cone"
					className="w-[350px] md:w-[400px] aspect-square   z-[9] absolute bottom-[31rem] "
				/>
			</div>
		</section>
	);
};

export default Growth;
