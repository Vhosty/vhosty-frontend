import {LoginState, LoginActionTypes, LoginActions} from "../types/ILogin";

const initialState: LoginState = {
    isPending: false,
};

const login = (state = initialState, action: LoginActions) => {
    if (action.type === LoginActionTypes.SET_IS_PENDING_LOGIN) {
        return {
            ...state,
            isPending: action.payload,
        };
    }

    return state;
};

export default login;
