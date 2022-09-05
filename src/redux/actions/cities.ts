import { Dispatch } from "redux";
import axios from "axios";

import { City } from '../../models/ICity'

import { CitiesActions, CitiesActionTypes } from '../types/ICities'

export const fetchCities = (city: string) => {
	return async (dispatch: Dispatch<CitiesActions>) => {
		dispatch({
			type: CitiesActionTypes.SET_CITIES_IS_LOADED,
			payload: false
		})

		axios.get<{ result: City[] }>(`${process.env.REACT_APP_API_DOMEN}/hotels/cities?search=${city}`).then(({ data }) => {
			dispatch({
				type: CitiesActionTypes.SET_CITIES,
				payload: data.result
			})

			dispatch({
				type: CitiesActionTypes.SET_CITIES_IS_LOADED,
				payload: true
			})
		})
	}
} 