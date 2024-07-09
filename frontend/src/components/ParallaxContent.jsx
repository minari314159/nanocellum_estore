/* eslint-disable react/prop-types */
import { Overlay, StickyImage } from "../components/components";

const ParallaxContent = ({
	imgUrl,
	subheading,
	heading,
	textColor,
	width,
	height,
	children,
}) => {
	return (
		<section
			style={{
				paddingLeft: 5,
				paddingRight: 5,
			}}>
			<div className="relative h-[100vh] my-1">
				<StickyImage
					imgUrl={imgUrl}
					width={width}
					height={height}
				/>
				<Overlay
					subheading={subheading || ""}
					heading={heading || ""}
					textColor={textColor || false}
				/>
			</div>
			{children}
		</section>
	);
};

export default ParallaxContent;
