import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const publicRequest = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
});

const token = localStorage.getItem(ACCESS_TOKEN);
const userRequest = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		Authorization: `JWT ${token}`,
	},
});

export { publicRequest, userRequest };
