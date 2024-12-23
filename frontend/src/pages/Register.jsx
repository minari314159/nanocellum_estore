import { useReducer } from "react";
import { useNavigate, Link } from "react-router-dom";
import LoadingIndicator from "../components/utils/LoadingIndicator";
import { Card } from "../components/components";
import { authReducer, initialState } from "../context/users/authReducer";

const Register = () => {
	const [user, register, dispatch] = useReducer(authReducer, initialState);

	const navigate = useNavigate();
	const handleChange = (e) => {
		const { name, value } = e.target;
		dispatch({ type: "SET_USER", field: name, value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({ type: "SET_LOADING", value: true });

		try {
			register(user.email, user.username, user.password);
			dispatch({ type: "REGISTER_SUCCESS" });
			navigate("/");
		} catch (err) {
			dispatch({ type: "SET_ERROR", value: err.message });
		} finally {
			dispatch({ type: "SET_LOADING", value: false });
		}
	};
	return (
		<section className="m-0 p-0 h-screen bg-base-200">
			<div className="flex flex-col justify-center items-center w-full">
				<div className="p-[6rem]"></div>
				<Card>
					<form
						onSubmit={handleSubmit}
						className="max-w-md w-[300px] flex flex-col justify-center items-between gap-10 p-3 mx-5">
						<h1 className="font-bold text-[2rem] text-center">Register</h1>
						<div className="flex flex-col justify-center items-between gap-3 ">
							<label className="input input-bordered input-md flex items-center gap-2">
								<input
									className="grow"
									type="email"
									name="email"
									value={user.email}
									onChange={handleChange}
									placeholder="Email"
									disabled={user.loading}
								/>
							</label>

							<label
								htmlFor="name"
								className="input input-bordered input-md flex items-center gap-2">
								<input
									className="grow "
									type="text"
									name="username"
									value={user.username}
									onChange={handleChange}
									placeholder="Username"
									disabled={user.loading}
								/>
							</label>

							<label className="input input-bordered input-md flex items-center gap-2">
								<input
									className="grow "
									type="password"
									name="password"
									value={user.password}
									onChange={handleChange}
									placeholder="Password"
									disabled={user.loading}
								/>
							</label>
							{user.error && <p className="text-error">{user.error}</p>}
							<button
								className="btn btn-accent "
								type="submit"
								disabled={user.loading}>
								Register
								{user.loading && (
									<LoadingIndicator>Registering</LoadingIndicator>
								)}
							</button>

							<div className="flex flex-col justify-center items-center">
								<h2>Have an account</h2>
								<Link
									to="/login"
									className="underline underline-offset-2 disabled:cursor-not-allowed ">
									Login
								</Link>
							</div>
						</div>
					</form>
				</Card>
			</div>
		</section>
	);
};

export default Register;
