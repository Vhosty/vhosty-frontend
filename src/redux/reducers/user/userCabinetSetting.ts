import { UserCabinetSettingState, UserCabinetSettingActionTypes, UserCabinetSettingActions } from '../../types/IUserCabinetSetting'

const initialState: UserCabinetSettingState = {
	isPendingChangePassword: false,
	errorMessageChangePassword: ""
}

const userCabinetSetting = (state = initialState, action: UserCabinetSettingActions) => {
	if (action.type === UserCabinetSettingActionTypes.SET_IS_PENDING_CHANGE_PASSWORD) {
		return {
			...state,
			isPendingChangePassword: action.payload
		}
	}

	if (action.type === UserCabinetSettingActionTypes.SET_ERROR_PASSWORD_CHANGE_PASSWORD) {
		return {
			...state,
			errorMessageChangePassword: action.payload
		}
	}

	return state
}

export default userCabinetSetting