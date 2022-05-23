import AxiosService from "./AxiosService";

const instance = AxiosService.getInstance();

export const getAllGroups = () => {
	return instance.get("/api/group/all");
}

export const getAllPostsByGroup = (groupId) => {
	return instance.get(`/api/group/${groupId}/post`);
}

export const getAllUserGroups = (userId) => {
	return instance.get(`/api/user/${userId}/group`)
}
