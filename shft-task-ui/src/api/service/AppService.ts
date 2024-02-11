import Cookies from "universal-cookie";
import ApiClient from "../ApiClient";
import { API_ENDPOINTS } from "../ApiUtils";
import { Pagination } from "../../constants.ts";

const cookies = new Cookies()

export const getRoles = async () => {
    const response = ApiClient.get(API_ENDPOINTS.roles, {
        headers: {
            'X-Xsrf-Token': cookies.get('XSRF-TOKEN')
        }
    })
    return response
}

export const getDepartments = async () => {
    const response = ApiClient.get(API_ENDPOINTS.departments,  {
        headers: {
            'X-Xsrf-Token': cookies.get('XSRF-TOKEN')
        }
    })
    return response
}

export const getUsers = async (skipCount: number) => {
    const response = await ApiClient.get(`${API_ENDPOINTS.users}?SkipCount=${skipCount}&MaxResultCount=${Pagination.DOC_PER_PAGE}`,  {
        headers: {
            'X-Xsrf-Token': cookies.get('XSRF-TOKEN')
        }
    })

    return response
}