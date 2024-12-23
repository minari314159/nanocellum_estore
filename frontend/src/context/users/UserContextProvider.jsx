import { useReducer } from "react";
import PropTypes from "prop-types";
import { UserContext } from "./useUsers";
import { authReducer, initialState } from "./authReducer";

//provider of cart context
function UserProvider({ children }) {
	const [user, dispatch] = useReducer(authReducer, initialState);
	return (
		<UserContext.Provider value={{ user, dispatch }}>
			{children}
		</UserContext.Provider>
	);
}
UserProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default UserProvider;
