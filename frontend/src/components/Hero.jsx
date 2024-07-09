import { blob, herolamp } from "../assets";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
	const container = useRef(null);
	const tl = gsap.timeline();
	const title = "NANOCELLUM";

	useGSAP(
		() => {
			tl.fromTo(
				"#lamp",
				{
					y: -1000,
					scale: 0.6,
				},
				{
					y: -250,
					scale: 0.6,
					duration: 1.5,
					ease: "quint",
				}
			);

			tl.from("#herotitles", {
				x: -1500,
				duration: 0.8,
				stagger: 0.5,
				ease: "power2",
			});
			tl.fromTo(
				"#lamp",
				{
					y: -250,
					scale: 0.6,
					duration: 1.5,
					delay: 1,
					ease: "bounce",
				},
				{
					y: 0,
					scale: 1,
					scrollTrigger: {
						start: "3px top",
						end: "4% top",
						scrub: true,
						pin: true,
					},
				}
			);
			gsap.fromTo(
				"#intro",
				{
					y: -400,
					scale: 0,
					duration: 0.5,
					ease: "circ",
				},
				{
					y: -300,
					scale: 1,
					scrollTrigger: {
						trigger: "#intro",
						start: "-=450 top",
						end: "-=250 top",
						scrub: true,
						pin: true,
					},
				}
			);
		},
		{ scope: container }
	);
	return (
		<section
			id="hero"
			ref={container}
			className="  flex flex-col items-center justify-center ">
			<div className="  flex flex-col items-center justify-center ">
				<img
					src={herolamp}
					id="lamp"
					height={700}
					width={500}
					alt="Parallax Image"
					className="object-cover object-center rounded-full relative  z-[1] translate-y-[-6rem]"
				/>

				<div className="absolute left-0 top-6 flex flex-col h-screen w-full items-center justify-center  ">
					<p
						id="herotitles"
						className="inline-block text-center bg-gradient-to-r from-amber-900 via-yellow-500 to-amber-900 text-transparent bg-clip-text text-4xl font-bold md:mb-4 text-[3.5rem] md:text-[4rem] xl:text-[5rem] p-1 lg:p-3 z-[2]">
						{title.split("").map((letter, index) => (
							<span className="reveal-text" key={index}>
								{letter}
							</span>
						))}
					</p>
					<p
						id="herotitles"
						className="mb-2  text-center text-xl md:mb-3 md:text-2xl">
						The Next Bio-Integrated Lighting
					</p>
				</div>
			</div>
			<div id="intro" className="relative z-[0] mt-[6rem] max-w-[470px]  ">
				<p className="absolute top-[10rem] z-1 text-black font-light text-[16px] md:text-[18px] leading-[30.8px]  text-center">
					Sustainably grown nanocellulose material that is transparent, strong
					but still maintaining a fabric-like feel. Developed from the
					fermentation of fruits and vegetables, no trees involved.
				</p>
				<img
					src={blob}
					alt="cellulose lamp"
					className=" relative -z-10 shadow-lg rounded-full object-cover object-center blur-lg"
				/>
			</div>
		</section>
	);
};

export default Hero;
