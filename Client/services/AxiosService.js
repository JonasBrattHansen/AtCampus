import axios from "axios";

export default class AxiosService {
	static __instance;
	
	static getInstance() {
		if (!AxiosService.__instance) {
			AxiosService.generate();
		}
		
		return AxiosService.__instance;
	}
	
	static generate() {
		AxiosService.__instance = axios.create({
			withCredentials: true,
			baseURL: "https://fierce-plains-44298.herokuapp.com",
		})
	}
}
