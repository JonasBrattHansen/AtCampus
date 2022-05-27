import AxiosService from "./AxiosService";

const instance = AxiosService.getInstance();

export async function getUserIdByEmail(email){
    let userDetails = await instance.get(`user/email/${email}`)
	
    return userDetails.data?.id
}

export async function getUser(id) {
	return await instance.get(`user/${id}`);
}
