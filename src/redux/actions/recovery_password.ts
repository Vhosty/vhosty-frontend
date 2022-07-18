import { Dispatch } from "react"
import axios from 'axios'

import { RecoveryPasswordErrorMessage, RecoveryPasswordActions, RecoveryPasswordActionTypes } from '../types/IRecoveryPassword';

export const sendRequestRecoveryPassword = (data: any) => {
	return async (dispatch: Dispatch<RecoveryPasswordActions>) => {
		dispatch({
			type: RecoveryPasswordActionTypes.SET_RECOVERY_PASSWORD_IS_PENDING,
			payload: true
		})

		axios.post(`${process.env.REACT_APP_API_DOMEN}/users/password/reset-request`, data).then(() => {
			dispatch({
				type: RecoveryPasswordActionTypes.SET_RECOVERY_PASSWORD_IS_PENDING,
				payload: false
			})

			window.location.hash = "recovery_password_success"
		}).catch(() => {
			dispatch({
				type: RecoveryPasswordActionTypes.SET_RECOVERY_PASSWORD_ERROR_MESSAGE,
				payload: RecoveryPasswordErrorMessage.NOT_FOUND_EMAIL
			})
		})
	}
} 