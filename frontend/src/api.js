//interceptor to automatically add the write headers using axios
import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const api = axios.create({
	baseURL: import.meta.env.BACKEND_URL,
});

// axios is automatically handling tokens for jwt by adding the auth headers
api.interceptors.request.use(
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

//use api object instead of axios directly so authorization is always added directly
export default api;
