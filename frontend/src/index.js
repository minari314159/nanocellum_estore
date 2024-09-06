import {
	swirl,
	lotus,
	crackle,
	cellum,
	basic,
	sucrose,
	kiwi,
	pcabbage,
	beet,
	molasses,
	fabrication,
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
		_id: "p1",
		image: basic,
		title: "Rose",
		price: 55,
	},
	{
		_id: "p2",
		image: lotus,
		title: "Lotus",
		price: 75,
	},
	{
		_id: "p3",
		image: swirl,
		title: "Swirl",
		price: 150,
	},
	{
		_id: "p4",
		image: crackle,
		title: "Crackle",
		price: 64,
	},
	{
		_id: "p5",
		image: cellum,
		title: "Wisp",
		price: 110,
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
			"Chemically pretuned carbon waste source is chosen depending on desired colour",
		image: fabrication,
	},
	{
		step: "02",
		description:
			"Sheets are grown over a period of 1-2 weeks, depending on desired thickness.  During this time the Acetorbacter “workers”  knit the nanocellulose sheets together. Depending on the waste carbon source, the colour, strength and even fiber alignment is determined ",
		image: fabrication,
	},
	{
		step: "03",
		description:
			"The fibrous structural skeleton is created and the harvested nanocellulose sheets are stretched and dried over the frame",
		image: fabrication,
	},
	{
		step: "04",
		description:
			"The entire lamp is set with a naturally occuring non-toxic resin composite, specially designed. ",
		image: fabrication,
	},
	{
		step: "05",
		description: "Electricals are implemented & the lamp is ready for use.",
		image: fabrication,
	},
];
