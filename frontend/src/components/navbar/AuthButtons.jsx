import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function SignInButton() {
	return (
		<NavLink to="/login" className="btn btn-accent rounded-xl w-[95px]">
			Sign In
		</NavLink>
	);
}

export function SignOutButton() {
	const redirect = useNavigate();
	return (
		<button
			onClick={() => {
				localStorage.clear();
				redirect("/");
			}}
			className="btn btn-accent rounded-xl w-[95px] ">
			Sign Out
		</button>
	);
}
