import AxiosService from "./AxiosService";

const instance = AxiosService.getInstance();

export async function getUserIdByEmail(email){
    let userDetails = await instance.get(`user/email/${email}`)
    return userDetails?.id
}
