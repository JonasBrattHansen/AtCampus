import AxiosService from "./AxiosService";

const instance = AxiosService.getInstance();

export const getAllGroups = () => {
	return instance.get("group/all");
}

export const getAllPostsByGroup = (groupId) => {
	return instance.get(`group/${groupId}/post`);
}

export const getAllUserGroups = (userId) => {
	return instance.get(`user/${userId}/group`)
}

export function getAllPostsByUser(userId) {
	return instance.get(`user/${userId}/post`)
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

export function postACommentToPost(postId, body, userId){
	return instance.post(`post/${postId}/comment`,{
		post: postId,
		body,
		user: userId
	});
}

export function requestToJoinGroup(userId, groupId){
	return instance.post(`group/request/${userId}/${groupId}`)
}

export function getAllGroupRequests(groupId){
	return instance.get(`group/${groupId}/requests`)
}

export function addUserToGroupByGroupRequest(groupRequestId){
	return instance.post(`group/request/${groupRequestId}`)
}
