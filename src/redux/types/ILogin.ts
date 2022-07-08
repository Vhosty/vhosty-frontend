export interface LoginState {
    isPending: boolean;
}

export enum LoginActionTypes {
    SET_IS_PENDING_LOGIN = "SET_IS_PENDING_LOGIN",
}

interface setIsPendingLogin {
    type: LoginActionTypes.SET_IS_PENDING_LOGIN;
    payload: boolean;
}

export type LoginActions = setIsPendingLogin;
