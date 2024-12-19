/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { userRequest } from "../../services/requestMethods";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../../services/constants";
import { useState, useEffect } from "react";
import Loader from "../../pages/Loader";

const ProtectedRoute = ({ children }) => {
	const [isAuthorized, setIsAuthorized] = useState(null);
	useEffect(() => {
		const auth = async () => {
			const token = localStorage.getItem(ACCESS_TOKEN);
			if (!token) {
				setIsAuthorized(false);
				return;
			}
			const decoded = jwtDecode(token);
			const tokenExpiration = decoded.exp;
			const now = Date.now() / 1000;
			if (tokenExpiration < now) {
				await refreshToken();
			} else {
				setIsAuthorized(true);
			}
		};
		auth().catch(() => setIsAuthorized(false));
	}, []);
	const refreshToken = async () => {
		const refreshToken = localStorage.getItem(REFRESH_TOKEN);
		try {
			const res = await userRequest.post("/api/token/refresh/", {
				refresh: refreshToken,
			});
			if (res.status == 200) {
				localStorage.setItem(ACCESS_TOKEN, res.data.access);
				setIsAuthorized(true);
			} else {
				setIsAuthorized(false);
			}
		} catch (error) {
			console.log(error);
			setIsAuthorized(false);
		}
	};

	if (isAuthorized === null) {
		return <Loader />;
	}
	return isAuthorized ? children : <Navigate to="/login" />;
};
export default ProtectedRoute;
