import { createContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import authReducer from "./authReducer";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, { user: null });
	useEffect(() => {
		//have to parse because local storage only stores strings
		const user = JSON.parse(localStorage.getItem("user"));
		if (user) {
			dispatch({ type: "LOGIN", payload: user });
		}
	}, []);
	console.log("AuthContext state:", state);
	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;

// add prop validation for 'children'
AuthContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
