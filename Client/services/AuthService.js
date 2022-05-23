import AxiosService from "./AxiosService";

const instance = AxiosService.getInstance();

const register = (firstName, lastName, email, phoneNumber, school, program, password, image) => {
	return instance.post("/api/register", {
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

const login = (email, password) => {
	return instance.post("/api/login", {
		email,
		password,
	})
}

export default {
	register,
	login,
}
