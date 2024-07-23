import { FiDollarSign } from "react-icons/fi";

// eslint-disable-next-line react/prop-types
const Search = ({ setFilter, filter }) => {
	const priceFilter = () => {
		if (filter === "?price=false" || filter === " ") {
			setFilter("?price=true");
		}
		if (filter === "?price=true") {
			setFilter(" ");
		}
	};
	return (
		<button
			onClick={priceFilter}
			className="inline-flex justify-center items-center gap-1 btn btn-ghost rounded-2xl font-inter font-normal p-1">
			<span className="text-lg lg:text-xl ">Sort</span>
			<FiDollarSign className="w-5 h-5" />
		</button>
	);
};

export default Search;
