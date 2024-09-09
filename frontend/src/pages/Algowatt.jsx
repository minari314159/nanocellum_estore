import { algowatt } from "../assets";

const Algowatt = () => {
	return (
		<section className="flex w-full min-h-screen flex-col items-center">
			<div className="w-full relative mb-10">
				<img src={algowatt} className="w-full h-[400px] object-cover z-0" />
				<h1 className="text-7xl absolute  left-0 bottom-[-3px] m-auto font-['Tahoma'] z-1 font-semibold text-base-content bg-gradient-to-b from-transparent to-base-200  w-full px-2">
					Algowatt
				</h1>
			</div>
			<div className="p-5 w-[85%] max-w-[700px] sm:columns-2 ">
				<p>
					This project focused on developing a flexible membrane biophotovoltaic
					(BPV) system by integrating advanced biomaterials, photosynthetic
					organisms, and cutting-edge technology. The aim was to create a
					biocompatible blend of algae with a bacterial cellulose-graphite
					composite, building upon the nanocellulose-based material used in
					Nanocellum lamp design.
				</p>
				<br />
				<p>
					In nature, photosynthetic organisms convert sunlight into usable
					energy through photosynthesis. By harnessing this natural process, we
					can generate clean electricity.
				</p>
				<br />
				<p>
					Currently in the testing phase, this innovation introduces a BPV
					cell—a bio-electrochemical system that captures sunlight and extracts
					electrons from the photosynthesis and respiration of microalgae,
					providing a sustainable energy solution.
				</p>
			</div>
			<hr className="w-[85%] max-w-[700px] border-1 border-base-300" />
			<div className="p-5 w-[85%] max-w-[700px]">
				<h2 className="text-2xl font-semibold">Challenges</h2>
			</div>
			<div className="p-5 w-[85%] max-w-[700px] sm:columns-2 ">
				<p>
					A key challenge with current BPV prototypes is the lack of
					biocompatibility between synthetic materials—specifically the
					stainless-steel anode and the liquid algal solution. Over time, the
					anode corrodes within the solution, reducing its ability to harvest
					electrons. Additionally, the metal anode is mildly toxic to the algae,
					inhibiting growth and, in turn, decreasing electron production.
				</p>
				<br />
				<p>
					A major issue with water-based BPV vessels is their reliance on rigid,
					unsustainable materials like acrylic, which limits flexibility and
					design optimization for efficient electron harvesting. The sharp
					boundaries between components reduce performance by increasing the
					distance between materials, a key factor in electrical efficiency.
					These designs also lack a nature-centric approach, neglecting the
					algae&apos;s natural environmental needs. The rigid, synthetic setup
					hinders algal growth and reduces electron production.
				</p>
				<br />
				<p>
					These limitations drove the development of a flexible, membrane-like
					BPV, where all components are seamlessly integrated to improve
					performance and sustainability.
				</p>
			</div>
			<div className="p-5 w-[85%] max-w-[700px]">
				<h2 className="text-2xl font-semibold">
					Material Optimization & Testing
				</h2>
			</div>
			<div className="p-5 w-[85%] max-w-[700px] sm:columns-2 ">
				<p>
					The bacterial cellulose (BC) membrane was further optimized for
					greater plasticity and resistance to tensile strain. A conductive
					non-biological material, graphene, was integrated into the membrane to
					enhance performance.
				</p>
			</div>
			<div className="p-5 w-[85%] max-w-[700px]">
				<h2 className="text-2xl font-semibold">Computational Design</h2>
			</div>
			<div className="p-5 w-[85%] max-w-[700px] sm:columns-2 ">
				<h3 className="text-lg font-semibold mb-3">
					Micro Desgin: Reaction Diffusion for Surface Area Enhancement
				</h3>
				<p>
					After confirming material compatibility, the focus shifted to pattern
					design. The anode, which extracts electrons from the photosynthetic
					algae, plays a key role in maximizing BPV power output and supporting
					algae health. Conventional anodes are flat, limiting sun exposure and,
					consequently, energy production.
				</p>
				<br />
				<p>
					Inspired by the increased surface area found in cellular components
					like the Golgi apparatus and mitochondria, a reaction-diffusion
					pattern based on Grey-Scott&apos;s model was developed using the 3D
					program Houdini. This design increases the anode&apos;s surface area,
					supporting algae growth and improving electron extraction. For a
					detailed computational exploration, see Olsen (2021).
				</p>
			</div>
			<div className="p-5 w-[85%] max-w-[700px] sm:columns-2 mb-10 ">
				<h3 className="text-lg font-semibold mb-3">
					Macro design: Data-Driven Flexible Panel
				</h3>
				<p>
					A simple geometry was analyzed using Millipede for structural
					integrity, Ladybug for solar analysis, and Galapagos for design
					iterations. As the goal is a flexible BPV membrane, compressive forces
					were less relevant, shifting the focus to solar efficiency. The
					macro-level swirl pattern optimizes BPV placement, while at smaller
					scales, it increases surface area for electrodes and algae, creating a
					hierarchical design structure.
				</p>
			</div>
		</section>
	);
};

export default Algowatt;
