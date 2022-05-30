import AxiosService from "./AxiosService";

const instance = AxiosService.getInstance();

export const getAllGroups = () => {
	return instance.get("group/all");
}

export const getAllPostsByGroup = (groupId) => {
	return instance.get(`group/${groupId}/post`);
}

export const getAllUserGroups = (userId) => {
	console.log(userId)
	const groups = instance.get(`user/${userId}/group`)
	console.log(groups)
	return groups
}

export function createGroup(name, description, image, admin, school) {
	return instance.post("group/create", {
		name,
		description,
		image,
		admin,
		school,
	});
}

export function getCommentsByPost(postId){
	return instance.get(`post/${postId}/comment`)
}

export function requestToJoinGroup(userId, groupId){
	return instance.post(`group/request/${userId}/${groupId}`)
}

export function getAllGroupRequests(groupId){
	return instance.get(`group/${groupId}/requests`)
}