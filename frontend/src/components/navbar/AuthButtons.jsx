import { useReducer } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { authReducer, initialState } from "../../context/users/authReducer";

export function SignInButton() {
	return (
		<NavLink to="/login" className="btn btn-accent rounded-xl w-[95px]">
			Sign In
		</NavLink>
	);
}

export function SignOutButton() {
	const [user, dispatch] = useReducer(authReducer, initialState);
	const redirect = useNavigate();
	const handleLogout = () => {
		dispatch({ type: "LOGOUT" });
		// Clear token from localStorage
		localStorage.clear();
		window.location.reload();
		redirect("/");
	};
	return (
		<button
			onClick={handleLogout}
			className="btn btn-accent rounded-xl w-[95px] ">
			Sign Out {user.username}
		</button>
	);
}
