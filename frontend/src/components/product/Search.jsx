import { MdSearch } from "react-icons/md";

const Search = () => {
	return (
		<div className="inline-flex justify-center items-center gap-1">
			<button className="text-lg lg:text-xl ">Sort</button>
			<MdSearch className="w-5 h-5" />
		</div>
	);
};

export default Search;
