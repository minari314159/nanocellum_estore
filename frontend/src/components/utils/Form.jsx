import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";
import LoadingIndicator from "./LoadingIndicator";

import Card from "./Card";
import { publicRequest } from "../../requestMethods";
// import { useDispatch, useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const Form = ({ method, route }) => {
	const [username, setUsername] = useState("");
	// const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

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
		e.preventDefault();

		try {
			const res = await publicRequest.post(route, { username, password });
			if (method === "login") {
				localStorage.setItem(ACCESS_TOKEN, res.data.access);
				localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
				navigate("/");
			} else {
				navigate("/login");
			}
		} catch (error) {
			alert(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Card>
			<form
				onSubmit={handleSubmit}
				className="max-w-sm flex flex-col justify-center items-between gap-5 p-3 mx-5">
				<h1 className="font-bold text-[2rem]">{methodName}</h1>
				<div className="flex flex-col justify-center items-between gap-3">
					<label
						htmlFor="name"
						className="input input-bordered input-md flex items-center gap-2">
						<input
							className="grow "
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							placeholder="Name"
						/>
					</label>

					{/* {method === "register" ? (
						<label className="input input-bordered input-md flex items-center gap-2">
							<input
								className="grow"
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Email"
							/>
						</label>
					) : null} */}
					<label className="input input-bordered input-md flex items-center gap-2">
						<input
							className="grow "
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Password"
						/>
					</label>
					{loading && <LoadingIndicator />}
					<button className="btn btn-accent " type="submit">
						{methodName}
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
