import { userRequest } from "./requestMethods";

class UserService {
	async editUser(...user) {
		const res = userRequest.put("/auth/users/me/", ...user);
		return res;
	}
}

export default new UserService();
