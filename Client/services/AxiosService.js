import axios from "axios";
import * as SecureStore from 'expo-secure-store';

import store from "../store";
import {LOGOUT} from "../actions/type";

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
			baseURL: "http://172.26.29.247:8080/api/",
		})
		
		instance.interceptors.request.use(async config => {
			const token = await SecureStore.getItemAsync("token");
			
			config.headers = {
				...config.headers,
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

			if (error.response && error.response?.status === 403 && !originalRequest._retry) {
				originalRequest._retry = true;
				
				const refreshToken = await SecureStore.getItemAsync("refresh_token");
				let response
				try {
					response = await instance.post("refresh", refreshToken);
				} catch(e) {
					console.log("Failed to refresh token", e);
					
					await SecureStore.deleteItemAsync("token");
					await SecureStore.deleteItemAsync("refresh_token");
					
					store.dispatch({
						type: LOGOUT,
					})
					
					return
				}
				
				const tokens = response.data;
				
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
