import { useState, useEffect } from "react";
import UserService from "../../services/user-service";
import {  createContext } from "react";

export const UserContext = createContext({});
const useUsers = () => {
	const [user, setUser] = useState({});
	const [error, setError] = useState();
	useEffect(() => {
		const res = UserService.getMe();
		res
			.then((res) => res.data)
			.then((data) => {
				setUser(data);
			})
			.catch((error) => setError(error.message));
	}, []);
	return { user, error, setError };
};

export default useUsers;
