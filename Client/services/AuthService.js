import AxiosService from "./AxiosService";

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

export default {
	register,
	login,
	refresh,
}
