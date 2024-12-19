import { publicRequest, userRequest } from "./requestMethods";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constants";

class UserService {
	async login(username, password) {
		const res = await publicRequest.post("auth/jwt/create/", {
			username,
			password,
		});
		localStorage.setItem(ACCESS_TOKEN, res.data.access);
		localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
		return res;
	}

	async register(username, email, password) {
		const res = await publicRequest.post("auth/users/", {
			username,
			password,
			email,
		});
		return res;
	}
	async getMe() {
		const res = userRequest.get("/auth/users/me/");
		return res;
    }
    
    async editUser(user) {
        const res = userRequest.put("/auth/users/me/", user);
        return res;
    }
}

export default new UserService();
