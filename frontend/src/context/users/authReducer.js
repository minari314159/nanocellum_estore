export const initialState = {
	username: "",
	password: "",
	email: "",
	firstName: "",
	lastName: "",
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
		case "SET_AUTH":
			return { ...user, loading: false, isAuthenticated: true, error: null };
		case "LOGOUT":
			return { ...initialState }; // Reset to initial state
		case "REGISTER_SUCCESS":
			return { ...user, isAuthenticated: true, error: null };
		case "SET_USER_DETAILS":
			// Update all user details (username, email, firstName, lastName) from fetched user data
			return {
				...user,
				username: action.username,
				email: action.email,
				firstName: action.firstName,
				lastName: action.lastName,
			};
		default:
			return user;
	}
};
