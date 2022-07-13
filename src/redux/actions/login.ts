import { Dispatch } from "redux";

import { SubmissionError } from "redux-form";

import {
	LoginErrorMessageTypes,
	LoginActionTypes,
	LoginActions,
} from "../types/ILogin";

import { Login } from '../../models/ILogin'

import $api from "../../http/index";

export const sendLogin = (data: Login) => {
	return async (dispatch: Dispatch<LoginActions>) => {
		dispatch({
			type: LoginActionTypes.SET_LOGIN_IS_PENDING,
			payload: true,
		});

		return $api.post("/users/login/email", data)
			.then(({ data }) => {
				localStorage.setItem("accessToken", data.access_token);

				window.location.href = "/cabinet/setting";
			})
			.catch(({ response }) => {
				const errorMessage = response.data.detail

				dispatch({
					type: LoginActionTypes.SET_LOGIN_IS_PENDING,
					payload: false,
				});

				if (errorMessage === "Invalid password or email.") {
					dispatch({
						type: LoginActionTypes.SET_LOGIN_ERROR_MESSAGE,
						payload: LoginErrorMessageTypes.INCORRECT_EMAIL_OR_PASSWORD
					})

				}

				throw new SubmissionError({
					email: " ",
					password: " ",
				});
			});
	};
};
