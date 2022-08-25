import { Dispatch } from 'redux'

import {
	UserActionTypes,
	UserActions,
} from "../../types/IUser";

import { UserInfo } from '../../../models/IUser'

import $api from '../../../http/index'

export const fetchUserAboutMe = () => {
	return async (dispatch: Dispatch<UserActions>) => {
		$api.get("/users/about-me").then(({ data }) => {
			dispatch({
				type: UserActionTypes.SET_USER,
				payload: data
			})
		})
	}
}

export const sendUserUpdateAboutMe = (data: UserInfo) => {
	return async (dispatch: Dispatch<UserActions>) => {
		$api.post("/users/about-me", data).then(({ data }) => {
			dispatch({
				type: UserActionTypes.SET_USER,
				payload: data
			})
		})
	}
}

export const sendRepeatUserConfirmedEmail = (email: string) => {
	return async (dispatch: Dispatch<UserActions>) => {
		$api.post("/users/verification/resend-email", { email })
	}
}

export const fetchUserBookings = () => {
	return async (dispatch: Dispatch<UserActions>) => {
		$api.get("/hotels/bookings").then(({ data }) => {
			console.log(data)
		})
	}
}