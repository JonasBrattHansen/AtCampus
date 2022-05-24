import AxiosService from "./AxiosService";
import * as SecureStore from 'expo-secure-store';

const instance = AxiosService.getInstance();

const register = (firstName, lastName, email, phoneNumber, school, program, password, image) => {
	return instance.post("register", {
		firstName,
		lastName,
		email,
		phoneNumber,
		password,
		school,
		program,
		userProfileImage: image,
	});
}

const refresh = (refreshToken) => {
	return instance.post("refresh", refreshToken);
}

const login = (email, password) => {
	return instance.post("login", {
		email,
		password,
	})
}

const check = async () => {
	const token = await SecureStore.getItemAsync("token");
	const username = await SecureStore.getItemAsync("username");
	
	if (token && username) {
		return {token, username}
	}
	
	return null
}

export default {
	register,
	login,
	refresh,
	check
}
