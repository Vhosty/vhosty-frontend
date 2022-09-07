import { Dispatch } from "redux";
import axios from 'axios'

import { SubmissionError } from "redux-form";

import {
	RegisterErrorMessageTypes,
	RegisterActionTypes,
	RegisterActions,
} from "../types/IRegister";

import { Register } from '../../models/IRegister'

import { fetchUserAboutMe } from '../actions/user/user';

export const sendRegister = (data: Register) => {
	return async (dispatch: Dispatch<RegisterActions>) => {
		dispatch({
			type: RegisterActionTypes.SET_REGISTER_IS_PENDING,
			payload: true,
		});

		await axios.post(`${process.env.REACT_APP_API_DOMEN}/users/register/email`, data).then(({ data }) => {
			dispatch({
				type: RegisterActionTypes.SET_REGISTER_IS_SEND,
				payload: true,
			});

			localStorage.setItem("accessToken", data.access_token);

			dispatch(fetchUserAboutMe() as any)

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
