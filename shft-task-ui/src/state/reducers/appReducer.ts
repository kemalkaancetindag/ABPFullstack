import { AppActionType } from "../action-types"
import { AppStateType } from "../state-types"


const initialState: AppStateType = {
    page: "USERS",    
    departmentDataModalMode: undefined,
    userDataModalMode: undefined,
    roles: [],
    departments: {totalCount: 0, items: []},
    users: {totalCount: 0, items: []},
    refetchDepartment: false,
    refetchUser: false,
    currentPage: 0,
    isWorking: false,
    me: undefined
}

interface Action {
    type: string,
    payload: any
}

const reducer = (state: AppStateType = initialState, action: Action) => {
    switch(action.type){
        case AppActionType.CHANGE_PAGE:            
            return {...state, page: action.payload}
        case AppActionType.SET_DEPARTMENT_DATA_MODAL_MODE:
            return {...state, departmentDataModalMode: action.payload}       
        case AppActionType.SET_ROLES:
            return {...state, roles: action.payload}
        case AppActionType.SET_DEPARTMENTS:
            return {...state, departments: action.payload}
        case AppActionType.SET_USERS:
            return {...state, users: action.payload}
        case AppActionType.SET_USER_DATA_MODAL_MODE:
            return {...state, userDataModalMode: action.payload}
        case AppActionType.SET_REFETCH_DEPARTMENT:         
            return {...state, refetchDepartment: action.payload}
        case AppActionType.SET_REFETCH_USER:
            return {...state, refetchUser: action.payload}
        case AppActionType.SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload}
        case AppActionType.SET_IS_WORKING:
            return {...state, isWorking: action.payload}
        case AppActionType.SET_ME:           
            return {...state, me: action.payload}
        default:
            return state
    }
}

export default reducer