import PropTypes from "prop-types";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Slider = ({ slide }) => {
	const [index, setIndex] = useState(0);
	const changeImage = (direction) => {
		if (direction === "left") {
			if (index === 0) {
				setIndex(0);
			} else {
				setIndex(index - 1);
			}
		} else {
			if (index === slide.length - 1) {
				setIndex(slide.length - 1);
			} else {
				setIndex(index + 1);
			}
		}
	};
	const filteredSlide = slide.filter((_, i) => i !== index);
	return (
		<div className="flex flex-col items-center w-[100%]  gap-0 justify-center  ">
			<div className="flex items-center justify-center w-full gap-2">
				{
					<div>
						<div key={slide[index]} className=" relative w-[300px] h-[100%]">
							<img
								src={slide[index].src}
								alt={slide[index].alt}
								width="100%"
								height="100%"
								className="rounded-full content-center object-cover "
							/>
							<p className="text-center text-neutral-300 absolute bottom-3 bg-accent-content bg-opacity-40 p-2 rounded-lg ">
								{slide[index].description}
							</p>
						</div>
					</div>
				}
				<div className="flex flex-col items-center">
					{filteredSlide.map((s, i) => (
						<div key={i} className="  w-[100px] h-[100%]">
							<img
								src={s.src}
								alt={s.alt}
								width="100%"
								height="100%"
								className="rounded-full content-center object-cover "
							/>
						</div>
					))}
				</div>
			</div>
			<div className="inline-flex ">
				<div className="p-5 flex items-center gap-3">
					<IoIosArrowBack
						onClick={() => changeImage("left")}
						className="text-base-content w-[16rem] flex-1 btn btn-circle btn-ghost"
					/>

					{slide.map((_, i) => (
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
		</div>
	);
};

Slider.propTypes = {
	slide: PropTypes.array.isRequired,
};

export default Slider;
