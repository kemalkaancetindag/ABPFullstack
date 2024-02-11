import { Dispatch } from "redux"
import { DepartmentActionType } from "../action-types"
import { ResetDepartmentInfoAction, SetDepartmentNameAction, SetEditInfoDepartmentAction } from "../actions/departmentActions"
import { Department } from "../../api/model/AppModels"


export const setCreateDepartmentName = (data: string) => {
    return (dispatch: Dispatch<SetDepartmentNameAction>) => {
        dispatch({
            type: DepartmentActionType.SET_DEPARTMENT_NAME,
            payload: data
        })
    }
}

export const setEditInfoDepartment = (data: Department) => {
    return (dispatch: Dispatch<SetEditInfoDepartmentAction>) => {
        dispatch({
            type: DepartmentActionType.SET_EDIT_INFO_DEPARTMENT,
            payload: data
        })
    }
}

export const resetDepartmentInfo = () => {
    return (dispatch: Dispatch<ResetDepartmentInfoAction>) => {
        dispatch({
            type: DepartmentActionType.RESET_DEPARTMENT_INFO,            
        })
    }
}