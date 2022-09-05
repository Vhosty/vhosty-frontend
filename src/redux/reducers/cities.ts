import { CitiesState, CitiesActions, CitiesActionTypes } from '../types/ICities'

const initialState: CitiesState = {
	cities: [],
	isLoadedFirst: false,
	isLoaded: false,
}

const sities = (state = initialState, action: CitiesActions) => {
	if (action.type === CitiesActionTypes.SET_CITIES) {
		return {
			...state,
			cities: action.payload,
			isLoadedFirst: true,
		}
	}

	if (action.type === CitiesActionTypes.SET_CITIES_IS_LOADED) {
		return {
			...state,
			isLoaded: action.payload,
		}
	}

	return state
}

export default sities