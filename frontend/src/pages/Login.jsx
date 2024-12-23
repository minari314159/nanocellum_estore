import { useNavigate, Link } from "react-router-dom";
import LoadingIndicator from "../components/utils/LoadingIndicator";
import Card from "../components/utils/Card";

import useAuth from "../context/users/useAuth";

const Login = () => {
	const { user, login, dispatch } = useAuth();

	const navigate = useNavigate();
	const handleChange = (e) => {
		const { name, value } = e.target;
		dispatch({ type: "SET_USER", field: name, value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(user.username, user.password);
		navigate("/");
	};

	return (
		<section className="m-0 p-0 h-screen bg-base-200">
			<div className="flex flex-col justify-center items-center w-full">
				<div className="p-[6rem]" />
				<Card>
					<form
						onSubmit={handleSubmit}
						className="max-w-md w-[300px] flex flex-col justify-center items-between gap-10 p-3 mx-5">
						<h1 className="font-bold text-[2rem] text-center">Login</h1>
						<div className="flex flex-col justify-center items-between gap-3 ">
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
								{user.loading ? (
									<LoadingIndicator>Logging In</LoadingIndicator>
								) : (
									<span>Login</span>
								)}
							</button>

							<div className="flex flex-col justify-center items-center">
								<h2>Don&apos;t have an account</h2>
								<Link to="/register" className="underline underline-offset-2">
									Register
								</Link>
							</div>
						</div>
					</form>
				</Card>
			</div>
		</section>
	);
};

export default Login;
