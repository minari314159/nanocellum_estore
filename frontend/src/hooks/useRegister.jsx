import { useState } from "react";
import useAuthContext from "./useAuthContext";

export function useRegister() {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const { dispatch } = useAuthContext();

	const register = async (email, password) => {
		setIsLoading(true);
		setError(null);

		const response = await fetch("http://localhost:3000/api/users/register", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify( email, password ),
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

	return { register, error, isLoading };
}
