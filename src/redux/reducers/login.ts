import {LoginState, LoginActions, LoginActionTypes} from "../types/ILogin";

const initialState: LoginState = {
    open: false,
    openAnimation: false,
};

const login = (state = initialState, action: LoginActions) => {
    if (action.type === LoginActionTypes.SET_LOGIN_OPEN) {
        return {
            ...state,
            open: true,
        };
    }

    return state;
};

export default login;
