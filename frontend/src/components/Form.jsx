import { useState } from "react";
import api from "../api.js";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import LoadingIndicator from "./LoadingIndicator";

// eslint-disable-next-line react/prop-types
const Form = ({ route, method }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, email, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/")
            } else {
                navigate("/login")
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    };

    return (
			<div className="rounded-lg outline outline-gray-400 p-5">
				<form
					onSubmit={handleSubmit}
					className="max-w-sm flex flex-col justify-center items-between gap-5 p-3 mx-5">
					<h1 className="font-bold text-[2rem]">{name}</h1>
					<div className="flex flex-col justify-center items-between gap-3">
						<input
							className="bg-gray-50 border border-gray-300 text-gray-900 text-m rounded-lg  block w-full p-3 "
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							placeholder="Username"
                    />
                    {method === "register" && 
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-m rounded-lg  block w-full p-3 "
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                    }
						<input
							className="bg-gray-50 border border-gray-300 text-gray-900 text-m rounded-lg  block w-full p-3 "
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Password"
						/>
						{loading && <LoadingIndicator />}
						<button
							className="text-white bg-tertiary hover:bg-dark font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
							type="submit">
							{name}
						</button>
					</div>
				</form>
			</div>
		);
}

export default Form