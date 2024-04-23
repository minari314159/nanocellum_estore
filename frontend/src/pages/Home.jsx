import {
	NavBar,
	Hero,
	Detail,
	Growth,
	Transition,
	Products,
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
					height={700}
					width={500}>
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
					height={580}
					width={800}>
					<Growth />
				</ParallaxContent>
				<ParallaxContent
					imgUrl={microgrowth}
					subheading=" "
					heading="Watch it Grow"
					height={580}
					width={800}
					textColor>
					<Transition />
				</ParallaxContent>
				<ParallaxContent
					imgUrl=" "
					subheading="Tailer the cellulose to your colour preference."
					heading="Choose Your Design.">
					<Products />
				</ParallaxContent>

				<ComingSoon />
				<Footer />
			</div>
		</section>
	);
};

export default App;
