import AxiosService from "./AxiosService";

const instance = AxiosService.getInstance();

export const getAllGroups = () => {
	return instance.get("/api/group/all");
}

export const getAllPostsByGroup = (groupId) => {
	return instance.get(`/api/group/${groupId}/post`);
}

export default {
	getAllGroups,
}
