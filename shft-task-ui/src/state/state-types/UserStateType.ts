import { Department } from "../../api/model/AppModels"

type UserStateType = {
    userId?: string,
    username: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    department?: Department,
    role: string[]

}

export default UserStateType