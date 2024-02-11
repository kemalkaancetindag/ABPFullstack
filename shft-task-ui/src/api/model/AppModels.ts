export interface Role {
    id: string,
    name: string
}

export interface Department {
    id: string,
    name: string
}

export interface DepartmentResponse {
    items: Department[],
    totalCount: number
}

export interface User {        
    id: string,
    userName: string,
    name: string,
    surname: string,
    email: string,   
    role: Role

}

export interface UserGet {
    user: User,
    department: Department,
    role: Role
}

export interface UserResponse {
    totalCount: number,
    items: UserGet[],
}

