export enum ReglogStateTypes {
    LOGIN = "LOGIN",
    REGISTER = "REGISTER",
    RECOVERY_PASSWORD = "RECOVERY_PASSWORD",
}

export interface ReglogState {
    open: boolean;
    closeAnimation: boolean;

    type: ReglogStateTypes;
}

export enum ReglogActionTypes {
    SET_REGLOG_OPEN = "SET_REGLOG_OPEN",
    SET_REGLOG_CLOSE_ANIMATION = "SET_REGLOG_CLOSE_ANIMATION",
    SET_REGLOG_TYPE = "SET_REGLOG_TYPE",
}

interface setReglogOpen {
    type: ReglogActionTypes.SET_REGLOG_OPEN;
    payload: boolean;
}

interface setReglogCloseAnimation {
    type: ReglogActionTypes.SET_REGLOG_CLOSE_ANIMATION;
    payload: boolean;
}

interface setReglogType {
    type: ReglogActionTypes.SET_REGLOG_TYPE;
    payload: ReglogStateTypes;
}

export type ReglogActions = setReglogOpen | setReglogCloseAnimation | setReglogType;
