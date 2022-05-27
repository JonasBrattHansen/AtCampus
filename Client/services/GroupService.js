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
