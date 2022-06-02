import AxiosService from "./AxiosService";

const instance = AxiosService.getInstance();

export const getAllSchools = () => {
    return instance.get(`school/all`);
}

export const getSchoolById = (schoolId) => {
    return instance.get(`school/${schoolId}`)

}

export function createSchool(schoolName) {
    return instance.post("school/new", {
        schoolName
    });
}
