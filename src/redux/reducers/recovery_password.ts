import { RecoveryPasswordState, RecoveryPasswordActionTypes, RecoveryPasswordActions } from '../types/IRecoveryPassword';

const initialState: RecoveryPasswordState = {
	isPending: false,
	errorMessage: ""
}

const recovery_password = (state = initialState, action: RecoveryPasswordActions) => {
	if (action.type === RecoveryPasswordActionTypes.SET_RECOVERY_PASSWORD_IS_PENDING) {
		return {
			...state,
			isPending: action.payload
		}
	}

	if (action.type === RecoveryPasswordActionTypes.SET_RECOVERY_PASSWORD_ERROR_MESSAGE) {
		return {
			...state,
			errorMessage: action.payload
		}
	}

	return state
}

export default recovery_password