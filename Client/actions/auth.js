import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	SET_MESSAGE,
} from "./type";

import AuthService from "../services/AuthService";
import * as SecureStore from 'expo-secure-store';

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
		.catch(error => {
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

export const check = () => dispatch => {
	return AuthService.check()
		.then(response => {
			if (response) {
				const {token, username} = response;
				
				dispatch({
					type: LOGIN_SUCCESS,
					payload: {username},
				})
			}
		})
}

export const login = (username, password) => dispatch => {
	return AuthService.login(username, password)
		.then(response => {
			const tokens = response.data;
			const {token, refreshToken} = tokens;
			
			SecureStore.setItemAsync("token", token);
			SecureStore.setItemAsync("refresh_token", refreshToken);
			SecureStore.setItemAsync("username", username);
			
			dispatch({
				type: LOGIN_SUCCESS,
				payload: {username},
			})
		})
		.catch(error => {
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
