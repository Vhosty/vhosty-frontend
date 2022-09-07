import { Dispatch } from "redux";
import axios from "axios"

import { SubmissionError } from "redux-form";

import {
	LoginErrorMessageTypes,
	LoginActionTypes,
	LoginActions,
} from "../types/ILogin";

import { Login } from '../../models/ILogin'

export const sendLogin = (data: Login, isRedirect?: boolean) => {
	return async (dispatch: Dispatch<LoginActions>) => {
		dispatch({
			type: LoginActionTypes.SET_LOGIN_IS_PENDING,
			payload: true,
		});

		return axios.post(`${process.env.REACT_APP_API_DOMEN}/users/login/email`, data)
			.then(({ data }) => {
				localStorage.setItem("accessToken", data.access_token);

				if (isRedirect) {
					window.location.href = "/cabinet/setting";
				} else {
					window.location.hash = ""
				}
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
