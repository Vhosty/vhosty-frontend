import { City } from '../../models/ICity'

export interface CitiesState {
	cities: City[],
	isLoadedFirst: boolean,
	isLoaded: boolean,
}

export enum CitiesActionTypes {
	SET_CITIES = "SET_CITIES",
	SET_CITIES_IS_LOADED = "SET_CITIES_IS_LOADED",
}

interface setCities {
	type: CitiesActionTypes.SET_CITIES,
	payload: City[]
}

interface setCitiesIsLoaded {
	type: CitiesActionTypes.SET_CITIES_IS_LOADED,
	payload: boolean
}

export type CitiesActions = setCities | setCitiesIsLoaded