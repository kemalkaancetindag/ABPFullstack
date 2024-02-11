import { DepartmentActionType } from "../action-types";
import { DepartmentStateType } from "../state-types";

const initialState: DepartmentStateType = {
    name: "",    
    id: undefined
}

interface Action {
    type: string,
    payload: any
}

const reducer = (state: DepartmentStateType = initialState, action: Action) => {
    switch(action.type){
        case DepartmentActionType.SET_DEPARTMENT_NAME:
            return {...state, name: action.payload}
        case DepartmentActionType.SET_EDIT_INFO_DEPARTMENT:
            return {...state, name: action.payload.name, id: action.payload.id}
        case DepartmentActionType.RESET_DEPARTMENT_INFO:
            return {...state, id: undefined, name: ""}
        default:
            return state
    }
}

export default reducer

