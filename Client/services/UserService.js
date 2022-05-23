import AxiosService from "./AxiosService";
import {getAllUserGroups} from "./GroupService";

const instance = AxiosService.getInstance();

export async function getUserIdByEmail(email){
    let userDetails = await instance.get(`/api/user/email/${email}`)
    return await getAllUserGroups(userDetails?.id)
}