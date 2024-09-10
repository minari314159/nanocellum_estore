import { useEffect, useRef, useState } from "react";

import { cellumlamp } from "../../assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Details = () => {
	const container = useRef(null);
	const [screen, setScreen] = useState(window.innerWidth);
	useEffect(() => {
		const handleResize = () => {
			setScreen(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [screen]);

	useGSAP(
		() => {
			gsap.fromTo(
				"#lampimg",
				{
					x: -window.innerWidth * 2,
					y: screen <= 768 ? -window.innerHeight / 4 : "200px",
					duration: 1,
					ease: "smooth",
				},
				{
					x: screen <= 768 ? window.innerWidth / 4 : window.innerWidth / 2.5,
					y: screen <= 768 ? -window.innerHeight / 4 : "200px",
					scrollTrigger: {
						trigger: "#lampimg",
						start: "top center",
						end: "bottom center",
						scrub: true,
					},
				}
			);
			gsap.fromTo(
				"#para",
				{
					x: window.innerWidth * 2,
					y: screen <= 768 ? window.innerHeight / 4 : "200px",
					duration: 1,
					ease: "smooth",
				},
				{
					x: screen <= 768 ? -window.innerWidth / 4 : -window.innerWidth / 2.5,
					y: screen <= 768 ? window.innerHeight / 4 : "200px",
					scrollTrigger: {
						trigger: "#lampimg",
						start: "top center",
						end: "bottom center",
						scrub: true,
					},
				}
			);
		},
		{ scope: container }
	);
	return (
		<section
			id="product"
			ref={container}
			className="flex felx-col md:flex-row w-full justify-center items-start  sm:gap-3 h-[100vh] relative">
			<img
				id="lampimg"
				src={cellumlamp}
				alt="cellulose lamp hanging"
				className=" w-[280px] lg:w-[360px]   rounded-b-full  lg:m-10 drop-shadow-2xl z-[5] border-2 border-amber-950"
			/>
			<div className=" flex flex-col items-end w-[300px] ">
				<p
					id="para"
					className="font-light text-[16px] lg:text-[18px] leading-[30px] text-center md:text-right min-w-[300px] max-w-[450px] lg:mt-10 z-[2] ">
					A production line which uses living organisms to grow geometrical
					objects. A data-driven approach to explore our perception of new
					biotechnological materials. <br /> 300x faster than growing and
					processing pulp from trees, each cellulose lamp is ready for use in 2
					weeks!
				</p>
			</div>
		</section>
	);
};

export default Details;
