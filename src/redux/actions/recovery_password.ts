import { Dispatch } from "react"

import $api from '../../http';

import { RecoveryPasswordActions, RecoveryPasswordActionTypes } from '../types/IRecoveryPassword';

export const sendRequestRecoveryPassword = (data: any) => {
	return async (dispatch: Dispatch<RecoveryPasswordActions>) => {
		dispatch({
			type: RecoveryPasswordActionTypes.SET_RECOVERY_PASSWORD_IS_PENDING,
			payload: true
		})

		$api.post("/users/password/reset-request", data).then(() => {
			dispatch({
				type: RecoveryPasswordActionTypes.SET_RECOVERY_PASSWORD_IS_PENDING,
				payload: false
			})

			window.location.hash = "recovery_password_success"
		}).catch(() => {

		})
	}
} 