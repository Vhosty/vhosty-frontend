import { Dispatch } from 'redux'

import {
	UserActionTypes,
	UserActions,
} from "../types/IUser";

import { UserInfo } from '../../models/IUser'

import $api from '../../http/index'

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

export const fetchUserUpdateAboutMe = (data: UserInfo) => {
	return async (dispatch: Dispatch<UserActions>) => {
		$api.post("/users/about-me", data).then(({ data }) => {
			dispatch({
				type: UserActionTypes.SET_USER,
				payload: data
			})
		})
	}
}

export const fetchRepeatUserConfirmedEmail = (data: any) => {
	return async (dispatch: Dispatch<UserActions>) => {

	}
}