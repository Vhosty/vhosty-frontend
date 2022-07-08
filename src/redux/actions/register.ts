import { Dispatch } from "redux";

import {
	RegisterActionTypes,
	RegisterActions,
} from "../types/IRegister";

import { Register } from '../../models/IRegister'

import $api from "../../http/index";

export const sendRegister = (data: Register) => {
	return async (dispatch: Dispatch<RegisterActions>) => {
		dispatch({
			type: RegisterActionTypes.SET_IS_PENDING_REGISTER,
			payload: true,
		});

		await $api.post("/users/register/email", data).then(({ data }) => {
			dispatch({
				type: RegisterActionTypes.SET_IS_SEND_REGISTER,
				payload: true,
			});

			localStorage.setItem("accessToken", data.access_token);

			window.location.hash = "register_success"
		})
			.catch((error) => {
				console.log(error);
			});

		dispatch({
			type: RegisterActionTypes.SET_IS_PENDING_REGISTER,
			payload: false,
		});
	};
};
