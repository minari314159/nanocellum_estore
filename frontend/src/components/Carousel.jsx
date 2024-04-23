/* eslint-disable react/prop-types */
import { useState } from "react";

const Carousel = ({ slides }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const next = () => {
		setCurrentIndex((currentIndex + 1) % slides.length);
	};
	const prev = () => {
		setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
	};

	return (
		<section className="w-3/4 sm:w-full">
			<div className="flex ">
				{/* Previous button */}
				<button
					onClick={prev}
					className="cursor-pointer w-auto p-3 rounded-full font-light text-black text-[20px] border-none transition-[0.6s] hover:text-white">
					&lt;
				</button>

				{slides.map((slide) => (
					<div
						key={slide.id}
						// if the photo is the current photo, show it
						className={
							slides[currentIndex].id === slide.id ? "fade" : "slide fade"
						}>
						<img
							src={slide.image}
							alt={slide.colour}
							className="w-[100%] max-h-300 object-cover"
						/>
						<div className="text-center font-bold w-[100%] text-[18px] p-3">
							{slide.colour}
						</div>
					</div>
				))}

				{/* Next button */}
				<button
					onClick={next}
					className="cursor-pointer w-auto p-3 rounded-full font-light text-black  border-none transition-[0.6s] text-[20px] hover:text-white">
					&gt;
				</button>
			</div>

			{/* Render dots indicator */}
			<div className="flex justify-center items-center p-5">
				{slides.map((slide) => (
					<span
						key={slide.id}
						className={
							slides[currentIndex].id == slide.id ? "dot bg-black" : "dot"
						}
						onClick={() => setCurrentIndex(slides.indexOf(slide))}></span>
				))}
			</div>
		</section>
	);
};

export default Carousel;
