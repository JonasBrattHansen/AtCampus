import axios from "axios";
import * as SecureStore from 'expo-secure-store';

export default class AxiosService {
	static __instance;
	
	static getInstance() {
		if (!AxiosService.__instance) {
			AxiosService.generate();
		}
		
		return AxiosService.__instance;
	}
	
	static generate() {
		const instance = axios.create({
			withCredentials: true,
			baseURL: "https://fierce-plains-44298.herokuapp.com/api/",
		})
		
		instance.interceptors.request.use(async config => {
			const token = await SecureStore.getItemAsync("token");
			
			console.log("We are making a request", token);
			
			config.headers = {
				'Authorization': `Bearer ${token}`,
			}
			
			return config;
		}, error => {
			Promise.reject(error)
		});
		
		instance.interceptors.response.use((response) => {
			return response
		}, async function (error) {
			const originalRequest = error.config;
			
			if (error.response.status === 403 && !originalRequest._retry) {
				originalRequest._retry = true;
				
				console.log("Attempting to refresh");
				
				const refreshToken = await SecureStore.getItemAsync("refresh_token");
				const response = await instance.post("refresh", refreshToken);
				const tokens = response.data;
				
				console.log("New tokens", response, tokens);
				
				const newAccessToken = tokens.token;
				const newRefreshToken = tokens.refreshToken;
				
				await SecureStore.setItemAsync("token", newAccessToken);
				await SecureStore.setItemAsync("refresh_token", newRefreshToken);
				
				axios.defaults.headers.common['Authorization'] = 'Bearer ' + newAccessToken;
				return instance(originalRequest);
			}
			return Promise.reject(error);
		});
		
		AxiosService.__instance = instance;
	}
}
