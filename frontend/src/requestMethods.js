import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const publicRequest = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
});

const userRequest = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
});

userRequest.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem(ACCESS_TOKEN);
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export { publicRequest, userRequest };
