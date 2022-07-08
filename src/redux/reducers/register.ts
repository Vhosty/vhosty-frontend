import {
    RegisterState,
    RegisterActionTypes,
    RegisterActions,
} from "../types/IRegister";

const initialState: RegisterState = {
    isPending: false,
    isSend: false,
};

const register = (state = initialState, action: RegisterActions) => {
    if (action.type === RegisterActionTypes.SET_IS_PENDING_REGISTER) {
        return {
            ...state,
            isPending: action.payload,
        };
    }
    if (action.type === RegisterActionTypes.SET_IS_SEND_REGISTER) {
        return {
            ...state,
            isSend: action.payload,
        };
    }

    return state;
};

export default register;
