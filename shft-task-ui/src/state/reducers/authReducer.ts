import { AuthActionType } from "../action-types"
import AuthStateType from "../state-types/AuthStateType"

const initialState: AuthStateType = {
    usernameOrEmail: "",    
    password: ""
}

interface Action {
    type: string,
    payload: any
}

const reducer = (state: AuthStateType = initialState, action: Action) => {
    switch(action.type){
        case AuthActionType.SET_AUTH_USERNAME_EMAIL:
            return {...state, usernameOrEmail: action.payload}
        case AuthActionType.SET_AUTH_PASSWORD:
            return {...state, password: action.payload}
        default:            
            return state
    }
}

export default reducer