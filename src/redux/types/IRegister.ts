export interface RegisterState {
    isPending: boolean;
    isSend: boolean;
}

export enum RegisterActionTypes {
    SET_IS_PENDING_REGISTER = "SET_IS_PENDING_REGISTER",
    SET_IS_SEND_REGISTER = "SET_IS_SEND_REGISTER",
}

interface setIsPendingRegister {
    type: RegisterActionTypes.SET_IS_PENDING_REGISTER;
    payload: boolean;
}

interface setIsSendRegister {
    type: RegisterActionTypes.SET_IS_SEND_REGISTER;
    payload: boolean;
}

export type RegisterActions = setIsPendingRegister | setIsSendRegister;
