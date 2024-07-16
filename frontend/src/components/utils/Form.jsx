import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingIndicator from "./LoadingIndicator";
import Card from "./Card";

// eslint-disable-next-line react/prop-types
const Form = ({ route, method }) => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	console.log(route);
	const name = method === "login" ? "Login" : "Register";
	const toggleMethod = () => {
		if (method === "Register") {
			navigate("/register");
		} else {
			navigate("/login");
		}
	};

	const handleSubmit = async () => {
		console.log("Form Submitted");
	};

	return (
		<Card>
			<form
				onSubmit={handleSubmit}
				className="max-w-sm flex flex-col justify-center items-between gap-5 p-3 mx-5">
				<h1 className="font-bold text-[2rem]">{name}</h1>
				<div className="flex flex-col justify-center items-between gap-3">
					<label
						htmlFor="username"
						className="input input-bordered input-md flex items-center gap-2">
						<input
							className="grow "
							type="text"
							value={username}
							name="username"
							onChange={(e) => setUsername(e.target.value)}
							placeholder="Username"
						/>
					</label>
					{method === "register" && (
						<label
							htmlFor="email"
							className="input input-bordered input-md flex items-center gap-2">
							<input
								className="grow"
								type="email"
								value={email}
								name="email"
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Email"
							/>
						</label>
					)}
					<label
						htmlFor="password"
						className="input input-bordered input-md flex items-center gap-2">
						<input
							className="grow "
							type="password"
							name="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Password"
						/>
					</label>
					{loading && <LoadingIndicator />}
					<button
						className="btn btn-accent rounded-xl shadow-[1px_1px_5px_2px_#f9fafb1A] "
						type="submit">
						{name}
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
