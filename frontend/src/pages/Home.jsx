import {
	Hero,
	Detail,
	Growth,
	Transition,
	Products,
	ComingSoon,
	ParallaxContent,
} from "../components/components";
import { chambers, microgrowth } from "../assets";

const App = () => {
	return (
		<main className="bg-base-200 m-auto min-w-[300px] w-full lg:max-w-7xl">
			<div className="flex min-h-screen flex-col items-center w-full p-5  font-inter">
				<Hero />
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
			</div>
		</main>
	);
};

export default App;
