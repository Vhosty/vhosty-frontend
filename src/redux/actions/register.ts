import { Dispatch } from "redux";

import { SubmissionError } from "redux-form";

import {
	RegisterErrorMessageTypes,
	RegisterActionTypes,
	RegisterActions,
} from "../types/IRegister";

import { Register } from '../../models/IRegister'

import $api from "../../http/index";

export const sendRegister = (data: Register) => {
	return async (dispatch: Dispatch<RegisterActions>) => {
		dispatch({
			type: RegisterActionTypes.SET_REGISTER_IS_PENDING,
			payload: true,
		});

		await $api.post("/users/register/email", data).then(({ data }) => {
			dispatch({
				type: RegisterActionTypes.SET_REGISTER_IS_SEND,
				payload: true,
			});

			localStorage.setItem("accessToken", data.access_token);

			window.location.hash = "register_success"
		})
			.catch(({ response }) => {
				const errorMessage = response.data.detail

				dispatch({
					type: RegisterActionTypes.SET_REGISTER_IS_PENDING,
					payload: false,
				});

				if (errorMessage === "This email already is used") {
					dispatch({
						type: RegisterActionTypes.SET_REGISTER_ERROR_MESSAGE,
						payload: RegisterErrorMessageTypes.IS_EMAIL_USED
					})

					throw new SubmissionError({
						email: " ",
					});
				}
			});

		dispatch({
			type: RegisterActionTypes.SET_REGISTER_IS_PENDING,
			payload: false,
		});
	};
};
