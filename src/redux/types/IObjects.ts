import { IObjectBlock } from '../../models/IObjectBlock'

export interface ObjectsState {
	items: IObjectBlock[],

	totalCount: number,
	page: number,

	isFavorites: boolean,

	firstIsLoaded: boolean,
	isLoaded: boolean,
}

export enum ObjectsActionTypes {
	SET_OBJECTS_ITEMS = "SET_OBJECTS_ITEMS",

	SET_OBJECTS_TOTAL_COUNT_ITEMS = "SET_OBJECTS_TOTAL_COUNT_ITEMS",
	SET_OBJECTS_PAGE = "SET_OBJECTS_PAGE",

	SET_OBJECTS_IS_FAVORITES = "SET_OBJECTS_IS_FAVORITES",

	SET_OBJECTS_IS_LOADED = "SET_OBJECTS_IS_LOADED",
	SET_OBJECTS_FIRST_IS_LOADED = "SET_OBJECTS_FIRST_IS_LOADED",
}

interface setObjectsItems {
	type: ObjectsActionTypes.SET_OBJECTS_ITEMS,
	payload: IObjectBlock[]
}

interface setObjectsTotalCountItems {
	type: ObjectsActionTypes.SET_OBJECTS_TOTAL_COUNT_ITEMS,
	payload: number
}

interface setObjectsPage {
	type: ObjectsActionTypes.SET_OBJECTS_PAGE,
	payload: number
}

interface setObjectsIsFavorites {
	type: ObjectsActionTypes.SET_OBJECTS_IS_FAVORITES,
	payload: boolean
}

interface setObjectsFirstIsLoaded {
	type: ObjectsActionTypes.SET_OBJECTS_FIRST_IS_LOADED,
	payload: boolean
}

interface setObjectsIsLoaded {
	type: ObjectsActionTypes.SET_OBJECTS_IS_LOADED,
	payload: boolean
}

export type ObjectsActions = setObjectsItems | setObjectsTotalCountItems | setObjectsPage | setObjectsIsFavorites | setObjectsFirstIsLoaded | setObjectsIsLoaded 