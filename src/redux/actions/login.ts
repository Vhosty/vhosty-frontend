import {LoginActionTypes} from "../types/ILogin";

export const setLoginOpen = (state: boolean) => ({
    type: LoginActionTypes.SET_LOGIN_OPEN,
    payload: state,
});
