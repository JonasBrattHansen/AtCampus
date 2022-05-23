import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	SET_MESSAGE,
} from "./type";

import AuthService from "../services/AuthService";

export const register = (username, email, password) => (dispatch) => {
	return AuthService.register(username, email, password)
		.then(response => {
			// dispatch({
			// 	type: REGISTER_SUCCESS,
			// });
			//
			// dispatch({
			// 	type: SET_MESSAGE,
			// 	payload: response,
			// })
			
			console.log("Response from register", response);
		})
		.catch(err => {
			const message = (error.response &&
				error.response.data &&
				error.response.data.message) ||
				error.message ||
				error.toString();
			
			dispatch({
				type: REGISTER_FAIL,
			});
			
			dispatch({
				type: SET_MESSAGE,
				payload: message,
			});
		});
}

export const login = (username, password) => dispatch => {
	return AuthService.login(username, password)
		.then(response => {
			dispatch({
				type: LOGIN_SUCCESS,
				payload: response,
			})
			
			console.log("Response from login", response);
		})
		.catch(err => {
			const message = (error.response &&
				error.response.data &&
				error.response.data.message) ||
				error.message ||
				error.toString();
			
			dispatch({
				type: LOGIN_FAIL,
			});
			
			dispatch({
				type: SET_MESSAGE,
				payload: message,
			});
		})
}

export const logout = () => dispatch => {
	// AuthService.logout();
	// dispatch({
	// 	type: LOGOUT,
	// })
}
