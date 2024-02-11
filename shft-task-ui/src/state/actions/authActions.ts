import { AuthActionType } from "../action-types";

export interface SetAuthUsernameOrEmailAction {
    type: AuthActionType.SET_AUTH_USERNAME_EMAIL,
    payload: string
}


export interface SetAuthPasswordAction {
    type: AuthActionType.SET_AUTH_PASSWORD,
    payload: string
}