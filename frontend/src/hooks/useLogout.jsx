import useAuthContext from "./useAuthContext";

export const useLogout = () => {
	const { dispatch } = useAuthContext();

	const logout = () => {
		// Remove token from localStorage
		localStorage.removeItem("user");
		// update global state
		dispatch({ type: "LOGOUT" });
	};
	return { logout };
};
