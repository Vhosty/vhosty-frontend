export interface RecoveryPasswordState {
	isPending: boolean;
	errorMessage: string
}

export enum RecoveryPasswordActionTypes {
	SET_RECOVERY_PASSWORD_IS_PENDING = "SET_RECOVERY_PASSWORD_IS_PENDING",
	SET_RECOVERY_PASSWORD_ERROR_MESSAGE = "SET_RECOVERY_PASSWORD_ERROR_MESSAGE"
}

interface setRecoveryPasswordIsPending {
	type: RecoveryPasswordActionTypes.SET_RECOVERY_PASSWORD_IS_PENDING,
	payload: boolean
}

interface setRecoveryPasswordErrorMessage {
	type: RecoveryPasswordActionTypes.SET_RECOVERY_PASSWORD_ERROR_MESSAGE,
	payload: RecoveryPasswordActionTypes
}

export type RecoveryPasswordActions = setRecoveryPasswordIsPending | setRecoveryPasswordErrorMessage