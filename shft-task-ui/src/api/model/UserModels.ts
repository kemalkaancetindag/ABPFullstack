import { Department } from "./DepartmentModels"

export interface UserPost {
    userName: string,
    name: string,
    surname: string,
    email: string,
    phoneNumber: string, //const
    isActive: boolean, //const
    lockoutEnabled: boolean, //const
    roleNames: string[],  
    password: string
}


export interface UserCreate {
    user: UserPost,
    department: Department
}

export interface UserUpdate {
    user: UserPost,
    department: Department
}
