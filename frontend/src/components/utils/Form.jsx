import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingIndicator from "./LoadingIndicator";
import Card from "./Card";
import UserService from "../../services/user-service";

// eslint-disable-next-line react/prop-types
const Form = ({ method }) => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState();
	const navigate = useNavigate();

	const methodName = method === "login" ? "Login" : "Register";
	const toggleMethod = () => {
		if (method === "login") {
			localStorage.clear();
			navigate("/register");
		} else {
			navigate("/login");
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		if (method === "login") {
			const res = UserService.login(username, password);
			res
				.catch((err) => {
					setError(err.message);
				})
				.finally(() => {
					setLoading(false);
				});
			navigate(-1);
		} else if (method === "register") {
			const res = UserService.register(username, email, password);
			res
				.catch((err) => {
					setError(err.message);
				})
				.finally(() => {
					setLoading(false);
					UserService.login(username, password);
				});
			navigate(-1);
		}
	};

	return (
		<Card>
			<form
				onSubmit={handleSubmit}
				className="max-w-md w-[300px] flex flex-col justify-center items-between gap-10 p-3 mx-5">
				<h1 className="font-bold text-[2rem] text-center">{methodName}</h1>
				<div className="flex flex-col justify-center items-between gap-3 ">
					{method === "register" ? (
						<label className="input input-bordered input-md flex items-center gap-2">
							<input
								className="grow"
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Email"
							/>
						</label>
					) : null}
					<label
						htmlFor="name"
						className="input input-bordered input-md flex items-center gap-2">
						<input
							className="grow "
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							placeholder="Username"
						/>
					</label>

					<label className="input input-bordered input-md flex items-center gap-2">
						<input
							className="grow "
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Password"
						/>
					</label>
					{error && <p className="text-error">{error}</p>}
					<button className="btn btn-accent " type="submit" disabled={loading}>
						{methodName}
						{loading && <LoadingIndicator />}
					</button>
					{method === "login" ? (
						<div className="flex flex-col justify-center items-center">
							<h2>Don&apos;t have an account</h2>
							<button
								onClick={toggleMethod}
								className="underline underline-offset-2">
								Register
							</button>
						</div>
					) : (
						<div className="flex flex-col justify-center items-center">
							<h2>Have an account</h2>
							<button
								onClick={toggleMethod}
								className="underline underline-offset-2 disabled:cursor-not-allowed ">
								Login
							</button>
						</div>
					)}
				</div>
			</form>
		</Card>
	);
};

export default Form;
