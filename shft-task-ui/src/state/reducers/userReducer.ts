import { UserActionType } from "../action-types"
import { UserStateType } from "../state-types"

const initialState: UserStateType = {
    userId: undefined,
    username: "",
    name: "",
    surname: "",
    email: "",
    password: "",
    department: undefined,
    role: []
}

interface Action {
    type: string,
    payload: any
}

const reducer = (state: UserStateType = initialState, action: Action) => {
    switch(action.type){
        case UserActionType.SET_USER_USERNAME:
            return {...state, username: action.payload}
        case UserActionType.SET_USER_NAME:
            return {...state, name: action.payload}
        case UserActionType.SET_USER_SURNAME:
            return {...state, surname: action.payload}
        case UserActionType.SET_USER_EMAIL:
            return {...state, email: action.payload}
        case UserActionType.SET_USER_PASSWORD:
            return {...state, password: action.payload}
        case UserActionType.SET_DEPARTMENT:
            return {...state, department: action.payload}
        case UserActionType.SET_ROLE:
            return {...state, role: action.payload}
        case UserActionType.SET_EDIT_INFO_USER:
            return {
                ...state,
                userId: action.payload.user.id,
                username: action.payload.user.userName,
                name: action.payload.user.name,
                surname: action.payload.user.surname,
                email: action.payload.user.email,
                department: action.payload.department,
                role: action.payload.roles
            }
        case UserActionType.RESET_USER_INFO:
            return {
                ...state,
                userId: undefined,
                username: "",
                name: "",
                surname: "",
                email: "",
                department: undefined,
                role: []
            }
        default:
            return state
    }
}

export default reducer
