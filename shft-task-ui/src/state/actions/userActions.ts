import { Department, UserGet } from "../../api/model/AppModels";
import { UserActionType } from "../action-types";

export interface SetUserUsernameAction {
    type: UserActionType.SET_USER_USERNAME,
    payload: string
}

export interface SetUserNameAction {
    type: UserActionType.SET_USER_NAME,
    payload: string
}

export interface SetUserSurnameAction {
    type: UserActionType.SET_USER_SURNAME,
    payload: string
}

export interface SetUserEmailAction {
    type: UserActionType.SET_USER_EMAIL,
    payload: string
}


export interface SetUserPasswordAction {
    type: UserActionType.SET_USER_PASSWORD,
    payload: string
}

export interface SetDepartmentAction {
    type: UserActionType.SET_DEPARTMENT,
    payload: Department
}

export interface SetEditInfoUserAction {
    type: UserActionType.SET_EDIT_INFO_USER,
    payload: UserGet
}


export interface SetRoleAction {
    type: UserActionType.SET_ROLE,
    payload: string[]
}


export interface ResetUserInfoAction {
    type: UserActionType.RESET_USER_INFO,    
}



