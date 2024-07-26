import { NavLink } from "react-router-dom";
import { logout } from "../../redux/apiCalls";
import { clearProducts } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export function SignInButton() {
	return (
		<NavLink to="/login" className="btn btn-accent rounded-xl">
			Sign In
		</NavLink>
	);
}

export function SignOutButton() {
	const dispatch = useDispatch();
	const redirect = useNavigate();
	return (
		<button
			onClick={() => {
				dispatch(clearProducts());
				logout(dispatch);
				redirect("/");
			}}
			className="btn btn-accent rounded-xl">
			Sign Out
		</button>
	);
}
