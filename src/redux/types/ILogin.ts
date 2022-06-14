export interface LoginState {
    open: boolean;
    openAnimation: boolean;
}

export enum LoginActionTypes {
    SET_LOGIN_OPEN = "SET_LOGIN_OPEN",
}

interface setLoginOpen {
    type: LoginActionTypes.SET_LOGIN_OPEN;
    payload: boolean;
}

export type LoginActions = setLoginOpen;
