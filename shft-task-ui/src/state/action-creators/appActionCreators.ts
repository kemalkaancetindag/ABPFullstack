import { Dispatch } from "redux"
import { ChangePageAction, SetCurrentPageAction, SetDepartmentDataModalModeAction, SetDepartmentsAction, SetIsWorkingAction, SetMeAction, SetRefetchDepartmentAction, SetRefetchUserAction, SetRolesAction, SetUserDataModalModeAction, SetUsersAction } from "../actions/appActions"
import { AppActionType } from "../action-types"
import { Role } from "../../api/model"
import { Department, DepartmentResponse, User, UserGet, UserResponse } from "../../api/model/AppModels"
import { DepartmentDataModalModeEnum, UserDataModalModeEnum } from "../../enums"


export const changePage = (data: string) => {
    return (dispatch: Dispatch<ChangePageAction>) => {
        dispatch({
            type: AppActionType.CHANGE_PAGE,
            payload: data
        })
    }
}

export const setDepartmentDataModalmode = (data: DepartmentDataModalModeEnum | undefined) => {
    return (dispatch: Dispatch<SetDepartmentDataModalModeAction>) => {
        dispatch({
            type: AppActionType.SET_DEPARTMENT_DATA_MODAL_MODE,
            payload: data
        })
    }
}

export const setUserDataModalMode = (data: UserDataModalModeEnum | undefined) => {
    return (dispatch: Dispatch<SetUserDataModalModeAction>) => {
        dispatch({
            type: AppActionType.SET_USER_DATA_MODAL_MODE,
            payload: data
        })
    }
}

export const setRoles = (data: Role[]) => {
    return (dispatch: Dispatch<SetRolesAction>) => {
        dispatch({
            type: AppActionType.SET_ROLES,
            payload: data
        })
    }
}


export const setDepartments = (data: DepartmentResponse) => {
    return (dispatch: Dispatch<SetDepartmentsAction>) => {
        dispatch({
            type: AppActionType.SET_DEPARTMENTS,
            payload: data
        })
    }
}


export const setUsers = (data: UserResponse) => {
    return (dispatch: Dispatch<SetUsersAction>) => {
        dispatch({
            type: AppActionType.SET_USERS,
            payload: data
            
        })
    }
}

export const setRefetchUser = (data: boolean) => {
    return (dispatch: Dispatch<SetRefetchUserAction>) => {
        dispatch({
            type: AppActionType.SET_REFETCH_USER,
            payload: data
            
        })
    }
}


export const setRefetchDepartment = (data: boolean) => {
    return (dispatch: Dispatch<SetRefetchDepartmentAction>) => {
        dispatch({
            type: AppActionType.SET_REFETCH_DEPARTMENT,
            payload: data
            
        })
    }
}


export const setCurrentPage = (data: number) => {
    return (dispatch: Dispatch<SetCurrentPageAction>) => {
        dispatch({
            type: AppActionType.SET_CURRENT_PAGE,
            payload: data
            
        })
    }
}


export const setIsWorking = (data: boolean) => {
    return (dispatch: Dispatch<SetIsWorkingAction>) => {
        dispatch({
            type: AppActionType.SET_IS_WORKING,
            payload: data
            
        })
    }
}

export const setMe = (data: User) => {
    return (dispatch: Dispatch<SetMeAction>) => {
        dispatch({
            type: AppActionType.SET_ME,
            payload: data
        })
    }
}






