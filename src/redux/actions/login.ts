import { Dispatch } from "redux";

import {
	LoginActionTypes,
	LoginActions,
} from "../types/ILogin";

import {Login} from '../../models/ILogin'

import $api from "../../http/index";

export const sendLogin = (data: Login) => {
	return async (dispatch: Dispatch<LoginActions>) => {
		dispatch({
			type: LoginActionTypes.SET_IS_PENDING_LOGIN,
			payload: true,
		});

		$api.post("/users/login/email", data)
			.then(({data}) => {
				localStorage.setItem("accessToken", data.access_token);

				window.location.href = "/cabinet/setting";
			})
			.catch((error) => {
				console.log(error);
			});

		dispatch({
			type: LoginActionTypes.SET_IS_PENDING_LOGIN,
			payload: false,
		});
	};
};
