import { Dispatch } from 'redux'

import {
	UserActionTypes,
	UserActions,
} from "../types/IUser";

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