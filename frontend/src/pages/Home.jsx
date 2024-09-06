import {
	Hero,
	Detail,
	Design,
	ParallaxContent,
} from "../components/components";
import { blob4, comingsoon } from "../assets";

const App = () => {
	return (
		<main className="flex min-h-screen flex-col items-center w-full p-5  font-inter">
			<Hero />
			<ParallaxContent
				subheading=""
				imgUrl={blob4}
				heading="Nanocellum Presents..."
				height={580}
				width={800}>
				<Detail />
			</ParallaxContent>

			<ParallaxContent
				imgUrl={comingsoon}
				subheading="Tailer the cellulose to your colour preference."
				heading="Choose Your Design."
				textColor
				height={580}
				width={800}>
				<Design />
			</ParallaxContent>
		</main>
	);
};

export default App;
