import {
	sucrose,
	kiwi,
	pcabbage,
	beet,
	molasses,
	fabrication,
	bcgrowth,
	cellumlamp,
	skeleton,
	algowatt,
} from "./assets";

export const navLinks = [
	{
		id: "products",
		title: "Lamps",
	},
	{
		id: "growth",
		title: "Fabrication",
	},
	{
		id: "innovation",
		title: "Innovation",
	},
];

export const products = [
	
	{
		_id: "p6",
		image: algowatt,
		title: "Innovation",
		price: 0,
		designer: "OLSEN",
	},
];

export const slides = [
	{
		id: "p1",
		image: sucrose,
		colour: "Transparent",
	},
	{
		id: "p2",
		image: kiwi,
		colour: "Yellow-green",
	},
	{
		id: "p3",
		image: pcabbage,
		colour: "Purple",
	},
	{
		id: "p4",
		image: beet,
		colour: "Dark Burgundy",
	},
	{
		id: "p5",
		image: molasses,
		colour: "Boysenberry",
	},
];

export const fabSteps = [
	{
		step: "01",
		description:
			"Carbon waste is collected and processed to serve as a carbon source for Acetobacter bacteria. Extensive chemical and computational research has been conducted to identify the optimal carbon waste sources, the most efficient bacterial strains, and the ideal environmental conditions to maximize bacterial growth.",
		image: bcgrowth,
	},
	{
		step: "02",
		description:
			"Nanocellulose sheets are cultivated over 1-2 weeks, depending on the desired thickness. During this period, Acetobacter bacteria synthesize and assemble the nanocellulose as a byproduct of fermentation. The choice of carbon waste source influences the color, strength, and fiber alignment of the resulting sheets, allowing for tailored material properties",
		image: fabrication,
	},
	{
		step: "03",
		description:
			"The fibrous structural framework is constructed, forming the foundation for the lamp's design. The harvested nanocellulose sheets are then carefully stretched over the frame to ensure uniform coverage and optimal tension. Once in place, the sheets undergo a controlled drying process, allowing the material to bond securely to the frame, creating a stable and resilient structure while preserving the desired aesthetic and functional properties.",
		image: skeleton,
	},
	{
		step: "04",
		description:
			"The entire lamp is coated with a specially formulated, naturally occurring, non-toxic resin composite. This resin is carefully applied to enhance the structural integrity of the lamp, providing durability while maintaining environmental sustainability. The resin not only protects the nanocellulose sheets but also preserves the lamp's aesthetic, ensuring a long-lasting, eco-friendly final product.",
		image: fabrication,
	},
	{
		step: "05",
		description:
			"The final step involves integrating the electrical components, ensuring seamless functionality and safety. Once the wiring and lighting elements are properly installed, the lamp undergoes a final inspection for performance and quality. At this stage, the lamp is fully operational and ready for use, combining innovative design with sustainable materials and technology.",
		image: cellumlamp,
	},
];

export const images = [
	{
		src: sucrose,
		alt: "Sucrose",
		description:
			"Sucrose is a disaccharide composed of glucose and fructose. It is produced naturally in plants",
	},
	{
		src: kiwi,
		alt: "Kiwi",
		description:
			"Kiwi is a fruit that is rich in vitamins and minerals. Its sugar content is mainly fructose",
	},
	{
		src: pcabbage,
		alt: "Purple Cabbage",
		description:
			"Purple cabbage is a vegetable rich in antioxidants. Its sugar content is mainly glucose",
	},
	{
		src: beet,
		alt: "Beet",
		description:
			"Beet is a root vegetable rich in vitamins and minerals. Its sugar content is mainly sucrose",
	},
	{
		src: molasses,
		alt: "Molasses",
		description:
			"Molasses is a byproduct of sugar production.  Its sugar content is mainly glucose",
	},
];
