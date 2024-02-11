import { Dispatch } from "redux"
import { ResetUserInfoAction, SetDepartmentAction, SetEditInfoUserAction, SetRoleAction, SetUserEmailAction, SetUserNameAction, SetUserPasswordAction, SetUserSurnameAction, SetUserUsernameAction } from "../actions/userActions"
import { UserActionType } from "../action-types"
import { Department, UserGet } from "../../api/model/AppModels"

export const setUserUsername = (data: string) => {
    return (dispatch: Dispatch<SetUserUsernameAction>) => {
        dispatch({
            type: UserActionType.SET_USER_USERNAME,
            payload: data
        })
    }
}


export const setUserName = (data: string) => {
    return (dispatch: Dispatch<SetUserNameAction>) => {
        dispatch({
            type: UserActionType.SET_USER_NAME,
            payload: data
        })
    }
}

export const setUserSurname = (data: string) => {
    return (dispatch: Dispatch<SetUserSurnameAction>) => {
        dispatch({
            type: UserActionType.SET_USER_SURNAME,
            payload: data
        })
    }
}


export const setUserEmail = (data: string) => {
    return (dispatch: Dispatch<SetUserEmailAction>) => {
        dispatch({
            type: UserActionType.SET_USER_EMAIL,
            payload: data
        })
    }
}


export const setUserPassword = (data: string) => {
    return (dispatch: Dispatch<SetUserPasswordAction>) => {
        dispatch({
            type: UserActionType.SET_USER_PASSWORD,
            payload: data
        })
    }
}

export const setDepartment = (data: Department) => {
    return (dispatch: Dispatch<SetDepartmentAction>) => {
        dispatch({
            type: UserActionType.SET_DEPARTMENT,
            payload: data
        })
    }
}

export const setEditInfoUser = (data: UserGet) => {
    return (dispatch: Dispatch<SetEditInfoUserAction>) => {
        dispatch({
            type: UserActionType.SET_EDIT_INFO_USER,
            payload: data
        })
    }
}

export const resetUserInfo = () => {
    return (dispatch: Dispatch<ResetUserInfoAction>) => {
        dispatch({
            type: UserActionType.RESET_USER_INFO
        })
    }
}

export const setRole = (data: string[]) => {
    return (dispatch: Dispatch<SetRoleAction>) => {
        dispatch({
            type: UserActionType.SET_ROLE,
            payload: data
        })
    }
}