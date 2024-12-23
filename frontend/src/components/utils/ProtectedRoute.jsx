/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

import Loader from "../../pages/Loader";
import useAuth from "../../context/users/useAuth";

const ProtectedRoute = ({ children }) => {
	const { user } = useAuth();

	if (user.loading) {
		return <Loader />;
	}
	return user.isAuthenticated ? children : <Navigate to="/login" />;
};
export default ProtectedRoute;
