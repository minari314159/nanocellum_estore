import PropTypes from "prop-types";

const Card = ({ children, style }) => {
	return (
		<div
			className={`card card-compact bg-gray-700 rounded-md  backdrop-filter backdrop-blur-md bg-opacity-20  shadow-xl ${style}`}>
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
