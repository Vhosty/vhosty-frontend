import {
	ReglogStateTypes,
	ReglogState,
	ReglogActions,
	ReglogActionTypes,
} from "../types/IReglog";

const initialState: ReglogState = {
	open: false,
	closeAnimation: false,
	changeCloseAnimation: false,

	type: ReglogStateTypes.LOGIN,
};

const login = (state = initialState, action: ReglogActions) => {
	if (action.type === ReglogActionTypes.SET_REGLOG_OPEN) {
		return {
			...state,
			open: action.payload,
		};
	}

	if (action.type === ReglogActionTypes.SET_REGLOG_CLOSE_ANIMATION) {
		return {
			...state,
			closeAnimation: action.payload,
		};
	}

	if (action.type === ReglogActionTypes.SET_REGLOG_CLOSE_CHANGE_ANIMATION) {
		return {
			...state,
			changeCloseAnimation: action.payload,
		};
	}

	if (action.type === ReglogActionTypes.SET_REGLOG_TYPE) {
		return {
			...state,
			type: action.payload,
		};
	}

	return state;
};

export default login;
