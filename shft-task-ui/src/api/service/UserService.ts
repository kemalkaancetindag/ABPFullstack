import Cookies from "universal-cookie";
import ApiClient from "../ApiClient";
import { UserPost } from "../model";
import { API_ENDPOINTS } from "../ApiUtils";
import { UserCreate, UserUpdate } from "../model/UserModels";

const cookies = new Cookies()

export const create = async (data: UserCreate) => {
    const response = await ApiClient.post(API_ENDPOINTS.users, data, {
        headers: {
            'X-Xsrf-Token': cookies.get('XSRF-TOKEN'),
            'RequestVerificationToken': cookies.get('XSRF-TOKEN')
        }
    })

    return response
} 


export const update = async (userId: string, data: UserUpdate) => {
    const response = await ApiClient.put(`${API_ENDPOINTS.users}?userId=${userId}`, data, {
        headers: {
            'X-Xsrf-Token': cookies.get('XSRF-TOKEN'),
            'RequestVerificationToken': cookies.get('XSRF-TOKEN')
        }
    })

    return response
}

export const deleteR = async (userId: string) => {
    const response = await ApiClient.delete(`${API_ENDPOINTS.users}?userId=${userId}`,
    {
        headers: {
            'X-Xsrf-Token': cookies.get('XSRF-TOKEN'),
            'RequestVerificationToken': cookies.get('XSRF-TOKEN')
        }
    })

    return response
}