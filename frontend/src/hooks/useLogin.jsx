import { useState } from "react";
import useAuthContext from "./useAuthContext";

export function useLogin() {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(null);
	const { dispatch } = useAuthContext();

	const login = async (email, password) => {
		setIsLoading(true);
		setError(null);

		const response = await fetch("http://localhost:3000/api/users/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(email, password ),
		});
		const data = await response.json();
		if (!response.ok) {
			setIsLoading(false);
			setError(data.message);
			return;
		}
		//save user to local storage (token and email)
		localStorage.setItem("user", JSON.stringify(data));

		//update auth context
		dispatch({ type: "LOGIN", payload: data });
		setIsLoading(false);
	};

	return { login, error, isLoading };
}
