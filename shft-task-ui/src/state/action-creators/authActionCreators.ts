import { Dispatch } from "redux"
import { SetAuthPasswordAction, SetAuthUsernameOrEmailAction } from "../actions/authActions"
import { AuthActionType } from "../action-types"

export const setAuthUsernameOrEmail = (data: string) => {
    return (dispatch: Dispatch<SetAuthUsernameOrEmailAction>) => {
        dispatch({
            type: AuthActionType.SET_AUTH_USERNAME_EMAIL,
            payload: data
        })
    }
}

export const setAuthPassword = (data: string) => {
    return (dispatch: Dispatch<SetAuthPasswordAction>) => {
        dispatch({
            type: AuthActionType.SET_AUTH_PASSWORD,
            payload: data
        })
    }
}