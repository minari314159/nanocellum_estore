import { publicRequest, userRequest } from "../requestMethods";
import {
	loginStart,
	loginFailure,
	loginSuccess,
	logoutSuccess,
	registerStart,
	registerSuccess,
	registerFailure,
} from "./userRedux";
import {
	getProductFailure,
	getProductStart,
	getProductSuccess,
	deleteProductFailure,
	deleteProductStart,
	deleteProductSuccess,
	updateProductFailure,
	updateProductStart,
	updateProductSuccess,
	addProductFailure,
	addProductStart,
	addProductSuccess,
} from "./productRedux";

// USER API CALLS
export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const res = await publicRequest.post("auth/login", user);
		dispatch(loginSuccess(res.data));
	} catch (err) {
		dispatch(loginFailure());
	}
};

export const register = async (dispatch, user) => {
	dispatch(registerStart());
	try {
		const res = await publicRequest.post("auth/register", user);
		dispatch(registerSuccess(res.data));
	} catch (err) {
		dispatch(registerFailure());
	}
};

export const logout = async (dispatch) => {
	try {
		localStorage.removeItem("persist:root");
		dispatch(logoutSuccess());
	} catch (err) {
		dispatch(loginFailure());
	}
};

//PRODUCT API CALLS
export const getProducts = async (dispatch, filter) => {
	dispatch(getProductStart());
	try {
		const res = await publicRequest.get(`products?${filter}`);
		dispatch(getProductSuccess(res.data));
	} catch (err) {
		dispatch(getProductFailure());
	}
};

export const deleteProduct = async (id, dispatch) => {
	dispatch(deleteProductStart());
	try {
		await userRequest.delete(`products/${id}`);
		dispatch(deleteProductSuccess(id));
	} catch (err) {
		dispatch(deleteProductFailure());
	}
};

export const updateProduct = async (id, product, dispatch) => {
	dispatch(updateProductStart());
	try {
		await userRequest.put(`products/${id}`);
		dispatch(updateProductSuccess({ id, product }));
	} catch (err) {
		dispatch(updateProductFailure());
	}
};
export const createProduct = async (product, dispatch) => {
	dispatch(addProductStart());
	try {
		const res = await userRequest.post(`products`, product);
		dispatch(addProductSuccess(res.data));
	} catch (err) {
		dispatch(addProductFailure());
	}
};
