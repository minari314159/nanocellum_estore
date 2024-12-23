import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const publicRequest = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

const userRequest = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

userRequest.interceptors.request.use((config) => {
	const token = localStorage.getItem(ACCESS_TOKEN); // Store JWT in localStorage
	if (token) {
		config.headers.Authorization = `JWT ${token}`;
	}
	return config;
});

export { publicRequest, userRequest };
