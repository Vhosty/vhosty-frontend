export interface UserCabinetSettingState {
	isPendingChangePassword: boolean
	errorMessageChangePassword: UserCabinetSettingErrorMessageChangePasswordTypes | ""
}

export enum UserCabinetSettingErrorMessageChangePasswordTypes {
	INCORECTED_OLD_PASSWORD = "Неверно введен старый пароль"
}

export enum UserCabinetSettingActionTypes {
	SET_IS_PENDING_CHANGE_PASSWORD = "SET_IS_PENDING_CHANGE_PASSWORD",
	SET_ERROR_PASSWORD_CHANGE_PASSWORD = "SET_ERROR_PASSWORD_CHANGE_PASSWORD"
}

interface setIsPendingChangePassword {
	type: UserCabinetSettingActionTypes.SET_IS_PENDING_CHANGE_PASSWORD,
	payload: boolean
}

interface setErrorMessageChangePassword {
	type: UserCabinetSettingActionTypes.SET_ERROR_PASSWORD_CHANGE_PASSWORD,
	payload: UserCabinetSettingErrorMessageChangePasswordTypes
}

export type UserCabinetSettingActions = setIsPendingChangePassword | setErrorMessageChangePassword