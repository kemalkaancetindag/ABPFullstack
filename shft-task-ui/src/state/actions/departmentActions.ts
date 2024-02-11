import { Department } from "../../api/model/AppModels";
import { DepartmentActionType } from "../action-types";

export interface SetDepartmentNameAction {
    type: DepartmentActionType.SET_DEPARTMENT_NAME,
    payload: string
}


export interface SetEditInfoDepartmentAction {
    type: DepartmentActionType.SET_EDIT_INFO_DEPARTMENT,
    payload: Department
}

export interface ResetDepartmentInfoAction {
    type: DepartmentActionType.RESET_DEPARTMENT_INFO
}