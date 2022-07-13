import { Dispatch } from 'redux'

import { SubmissionError } from "redux-form";

import {
	UserCabinetSettingErrorMessageChangePasswordTypes,
	UserCabinetSettingActionTypes,
	UserCabinetSettingActions
} from "../../types/IUserCabinetSetting";

import $api from '../../../http/index'

export const sendUserChangePassword = (data: any) => {
	return async (dispatch: Dispatch<UserCabinetSettingActions>) => {
		dispatch({
			type: UserCabinetSettingActionTypes.SET_IS_PENDING_CHANGE_PASSWORD,
			payload: true
		})

		await $api.post("/users/password/change", data).then(({ data }) => {
			dispatch({
				type: UserCabinetSettingActionTypes.SET_IS_PENDING_CHANGE_PASSWORD,
				payload: false
			})

			window.location.hash = ""
		}).catch(({ response }) => {
			const errorMessage = response.data.detail

			dispatch({
				type: UserCabinetSettingActionTypes.SET_IS_PENDING_CHANGE_PASSWORD,
				payload: false,
			});

			if (errorMessage === "Invalid old password") {
				dispatch({
					type: UserCabinetSettingActionTypes.SET_ERROR_PASSWORD_CHANGE_PASSWORD,
					payload: UserCabinetSettingErrorMessageChangePasswordTypes.INCORECTED_OLD_PASSWORD
				})

				throw new SubmissionError({
					old_password: " "
				});
			}
		});

	}
}