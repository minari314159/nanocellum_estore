import PropTypes from "prop-types";

const Card = ({ children, style }) => {
	// Rest of the code

	return (
		<div
			className={`card card-compact bg-gray-700 rounded-md  backdrop-filter backdrop-blur-md bg-opacity-20 shadow-[inset_0_-3px_10px_#f9fafb33]  ${style}`}>
			<div className="card-body flex flex-col justify-between items-center ">
				{children}
			</div>
		</div>
	);
};

Card.propTypes = {
	children: PropTypes.node.isRequired,
	style: PropTypes.string,
};
export default Card;
