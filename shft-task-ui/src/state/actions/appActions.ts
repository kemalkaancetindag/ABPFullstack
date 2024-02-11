import { Action } from "redux";
import { AppActionType } from "../action-types";
import { Role } from "../../api/model";
import { Department, DepartmentResponse, User, UserGet, UserResponse } from "../../api/model/AppModels";
import { DepartmentDataModalModeEnum, UserDataModalModeEnum } from "../../enums";

export interface ChangePageAction {
    type: AppActionType.CHANGE_PAGE,
    payload: string
}

export interface SetDepartmentDataModalModeAction {
    type: AppActionType.SET_DEPARTMENT_DATA_MODAL_MODE,
    payload: undefined | DepartmentDataModalModeEnum
}

export interface SetUserDataModalModeAction {
    type: AppActionType.SET_USER_DATA_MODAL_MODE,
    payload: undefined | UserDataModalModeEnum
}

export interface SetRolesAction {
    type: AppActionType.SET_ROLES,
    payload: Role[]
}

export interface SetDepartmentsAction {
    type: AppActionType.SET_DEPARTMENTS,
    payload: DepartmentResponse
}

export interface SetUsersAction {
    type: AppActionType.SET_USERS,
    payload: UserResponse
}

export interface SetRefetchUserAction {
    type: AppActionType.SET_REFETCH_USER,
    payload: boolean
}

export interface SetRefetchDepartmentAction {
    type: AppActionType.SET_REFETCH_DEPARTMENT,
    payload: boolean
}

export interface SetCurrentPageAction {
    type: AppActionType.SET_CURRENT_PAGE,
    payload: number
}

export interface SetIsWorkingAction {
    type: AppActionType.SET_IS_WORKING,
    payload: boolean
}

export interface SetMeAction {
    type: AppActionType.SET_ME,
    payload: User
}