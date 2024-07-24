import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/apiCalls";

const DeleteButton = ({ id }) => {
	const redirect = useNavigate();
	
	const dispatch = useDispatch();

	const handleDelete = async () => {
		deleteProduct(id, dispatch)
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
