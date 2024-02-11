import Cookies from "universal-cookie";
import ApiClient from "../ApiClient";
import { LoginPost, User } from "../model";
import { API_ENDPOINTS } from "../ApiUtils";


const cookies = new Cookies()

     
export const login = async (data: LoginPost) => {
    
    const response = await ApiClient.post("/api/account/login", data, {
        headers: {
            'X-Xsrf-Token': cookies.get('XSRF-TOKEN'),
            'RequestVerificationToken': cookies.get('XSRF-TOKEN')
        }
    })    

    return response
}

export const getCsfr = async () => {
    const response = await ApiClient.get("/abp/Swashbuckle/SetCsrfCookie")
    return response
}

export const getMe = async () => {
    let userResponse = await ApiClient.get("/api/account/my-profile")    
    userResponse = await ApiClient.get(`/api/identity/users/by-username/${userResponse.data.userName}`) 
    const roleResponse = await ApiClient.get(`/api/identity/users/${userResponse.data.id}/roles`)
    const role = roleResponse.data.items[0]
    const user: User = {
        id: userResponse.data.id,
        userName: userResponse.data.userName,
        name: userResponse.data.name,
        surname: userResponse.data.surname,
        email: userResponse.data.email,
        role: {
            name: role.name,
            id: role.id
        }
    }        
    return user
}

export const logout = async () => {
    const response = await ApiClient.get(API_ENDPOINTS.logout)
    return response
}