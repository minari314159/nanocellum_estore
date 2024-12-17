import axios from "axios";

const publicRequest = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
});

const userRequest = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
});
userRequest.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("access");
		if (token) {
			config.headers.Authorization = `JWT ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export { publicRequest, userRequest };
