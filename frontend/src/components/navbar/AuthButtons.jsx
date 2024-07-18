import { NavLink } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useNavigate } from "react-router-dom";
export function SignInButton() {
	return (
		<NavLink to="/login" className="btn btn-accent rounded-xl">
			Sign In
		</NavLink>
	);
}

export function SignOutButton() {
	const { logout } = useLogout();
	const redirect = useNavigate();
	return (
		<button
			onClick={() => {
				logout();
				redirect("/");
			}}
			className="btn btn-accent rounded-xl">
			Sign Out
		</button>
	);
}
