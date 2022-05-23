import AxiosService from "./AxiosService";

const instance = AxiosService.getInstance();

export const getAllGroups = () => {
	return instance.get("/api/group/all");
}

export default {
	getAllGroups,
}
