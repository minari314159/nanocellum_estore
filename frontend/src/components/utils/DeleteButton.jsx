import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";


const DeleteButton = ({ id }) => {
	const redirect = useNavigate();
	


	const handleDelete = async () => {
		
		redirect(-1);
	};
	return (
		<button className="btn btn-ghost text-error" onClick={() => handleDelete()}>
			Delete
		</button>
	);
};

DeleteButton.propTypes = {
	id: PropTypes.string.isRequired,
};

export default DeleteButton;
