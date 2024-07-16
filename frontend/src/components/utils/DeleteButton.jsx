import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const DeleteButton = ({ id }) => {
	const redirect = useNavigate();

	const handleClick = async () => {
		await fetch(`http://localhost:3000/api/products/${id}`, {
			method: "DELETE",
		})
			.then((res) => {
				return res.json();
			})
            .then((data) => {
                console.log(data);
            })
			.catch((error) => {
				throw new Error(error);
			});
		redirect(-1);
	};
	return (
		<button className="btn btn-ghost text-error" onClick={handleClick}>
			Delete
		</button>
	);
};

DeleteButton.propTypes = {
	id: PropTypes.string.isRequired,
};

export default DeleteButton;
