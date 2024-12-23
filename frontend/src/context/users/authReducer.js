export const initialState = {
	username: "",
	password: "",
	email: "",	
	loading: false,
	error: null,
	isAuthenticated: false,
};

export const authReducer = (user, action) => {
	switch (action.type) {
		case "SET_USER":
			return { ...user, [action.field]: action.value };
		case "SET_LOADING":
			return { ...user, loading: action.value };
		case "SET_ERROR":
			return { ...user, error: action.value };
		case "RESET_ERROR":
			return { ...user, error: null };
		case "LOGIN_SUCCESS":
			return { ...user, isAuthenticated: true, error: null };
		case "LOGOUT":
			return { ...initialState }; // Reset to initial state
		case "REGISTER_SUCCESS":
			return { ...user, isAuthenticated: true, error: null };
		default:
			return user;
	}
};
