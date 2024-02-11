import Cookies from "universal-cookie"
import ApiClient from "../ApiClient"
import { API_ENDPOINTS } from "../ApiUtils";
import { DepartmentCreate, DepartmentUpdate } from "../model";

const cookies = new Cookies();

export const create = async (data: DepartmentCreate) => {   
    const response = await ApiClient.post(API_ENDPOINTS.departments, data, {
        headers: {
            'X-Xsrf-Token': cookies.get('XSRF-TOKEN'),
            'RequestVerificationToken': cookies.get('XSRF-TOKEN')
        }
    })    
    return response
}

export const update = async (departmentId: string, data: DepartmentUpdate) => {
    const response = await ApiClient.put(`${API_ENDPOINTS.departments}/${departmentId}`, data, {
        headers: {
            'X-Xsrf-Token': cookies.get('XSRF-TOKEN'),
            'RequestVerificationToken': cookies.get('XSRF-TOKEN')
        }
    })

    return response
}

export const deleteR = async (departmentId: string) => {
    const response = await ApiClient.delete(`${API_ENDPOINTS.departments}/${departmentId}`, {
        headers: {
            'X-Xsrf-Token': cookies.get('XSRF-TOKEN'),
            'RequestVerificationToken': cookies.get('XSRF-TOKEN')
        }
    })
    return response
}