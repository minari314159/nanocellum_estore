import {
	NavBar,
	Hero,
	Detail,
	Growth,
	Transition,
	Design,
	Footer,
	ComingSoon,
	ParallaxContent,
} from "../components/components";
import { herolamp, chambers, microgrowth } from "../assets";
const App = () => {
	return (
		<section className="bg-primary  w-full">
			<NavBar />
			<div className=" w-full flex flex-col gap-2 justify-center items-center ">
				<ParallaxContent
					imgUrl={herolamp}
					subheading="The Next"
					heading="Bio-Integrated Lighting"
					textColor
					width={450}>
					<Hero />
				</ParallaxContent>
				<ParallaxContent
					imgUrl=" "
					subheading=" "
					heading="Nanocellum Presents...">
					<Detail />
				</ParallaxContent>
				<ParallaxContent
					imgUrl={chambers}
					subheading=" "
					heading="The Growth Chamber"
					width={800}>
					<Growth />
				</ParallaxContent>
				<ParallaxContent
					imgUrl={microgrowth}
					subheading=" "
					heading="Watch it Grow"
					width={800}
					textColor>
					<Transition />
				</ParallaxContent>
				<Design />
				<ComingSoon />
				<Footer />
			</div>
		</section>
	);
};

export default App;
