import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingIndicator from "./LoadingIndicator";
import { useRegister } from "../../hooks/useRegister";
import { useLogin } from "../../hooks/useLogin";
import Card from "./Card";

// eslint-disable-next-line react/prop-types
const Form = ({ method }) => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { register, error, isLoading } = useRegister();
	const { login } = useLogin();
	const navigate = useNavigate();

	const methodName = method === "login" ? "Login" : "Register";
	const toggleMethod = () => {
		if (method === "login") {
			navigate("/register");
		} else {
			navigate("/login");
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (method === "register") {
			await register({ username, email, password });
			navigate("/");
		}
		if (method === "login") {
			await login({ email, password });
			navigate("/");
		}
	};

	return (
		<Card>
			<form
				onSubmit={handleSubmit}
				className="max-w-sm flex flex-col justify-center items-between gap-5 p-3 mx-5">
				<h1 className="font-bold text-[2rem]">{methodName}</h1>
				<div className="flex flex-col justify-center items-between gap-3">
					{method === "register" ? <label
						htmlFor="name"
						className="input input-bordered input-md flex items-center gap-2">
						<input
							className="grow "
							type="text"
							value={username}
							
							onChange={(e) => setUsername(e.target.value)}
							placeholder="Name"
						/>
					</label> : null}

					<label className="input input-bordered input-md flex items-center gap-2">
						<input
							className="grow"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Email"
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

					<button
						className="btn btn-accent rounded-xl shadow-[1px_1px_5px_2px_#f9fafb1A] text-lg"
						type="submit">
						{isLoading ? (
							<LoadingIndicator>{methodName}</LoadingIndicator>
						) : (
							<>{methodName}</>
						)}
					</button>
					{error && <p>{error}</p>}
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
								className="underline underline-offset-2">
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
