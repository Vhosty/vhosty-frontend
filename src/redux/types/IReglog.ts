export enum ReglogStateTypesNotLogin {
	LOGIN = "login",
	REGISTER = "register",

	REGISTER_SUCCESS = "register_success",
	RECOVERY_PASSWORD = "recovery_password",
	RECOVERY_PASSWORD_SUCCESS = "recovery_password_success",
	RECOVERY_PASSWORD_CONFIRMED = "recovery_password_confirmed",
}

export enum ReglogStateTypesLogin {
	LOGOUT = "logout",

	CABINET_SETTING_CHANGE_PASSWORD = "cabinet_setting_change_password",

	PAYMENT_SUCCESS = "payment_success"
}

export interface ReglogState {
	open: boolean;
	closeAnimation: boolean;
	changeCloseAnimation: boolean;

	type: ReglogStateTypesNotLogin | ReglogStateTypesLogin;
}

export enum ReglogActionTypes {
	SET_REGLOG_OPEN = "SET_REGLOG_OPEN",
	SET_REGLOG_CLOSE_ANIMATION = "SET_REGLOG_CLOSE_ANIMATION",
	SET_REGLOG_CLOSE_CHANGE_ANIMATION = "SET_REGLOG_CLOSE_CHANGE_ANIMATION",
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

interface setReglogCloseChangeAnimation {
	type: ReglogActionTypes.SET_REGLOG_CLOSE_CHANGE_ANIMATION;
	payload: boolean;
}

interface setReglogType {
	type: ReglogActionTypes.SET_REGLOG_TYPE;
	payload: string;
}

export type ReglogActions =
	| setReglogOpen
	| setReglogCloseAnimation
	| setReglogCloseChangeAnimation
	| setReglogType