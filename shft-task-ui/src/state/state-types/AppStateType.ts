import { Role } from "../../api/model"
import { Department, DepartmentResponse, User, UserGet, UserResponse } from "../../api/model/AppModels"
import { DepartmentDataModalModeEnum, UserDataModalModeEnum } from "../../enums"

type AppStateType = {
    page: string,
    departmentDataModalMode?: DepartmentDataModalModeEnum,
    userDataModalMode?: UserDataModalModeEnum,
    roles: Role[],
    departments: DepartmentResponse,
    users: UserResponse,
    refetchUser: boolean,
    refetchDepartment: boolean,
    currentPage: number,
    isWorking: boolean,
    me?: User
}

export default AppStateType