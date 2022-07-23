import { IObjectBlock } from '../../models/IObjectBlock'

export interface ObjectsState {
	items: IObjectBlock[],

	totalCount: number,
	page: number,

	firstIsLoaded: boolean,
	isLoaded: boolean,
}

export enum ObjectsActionTypes {
	SET_OBJECTS_ITEMS = "SET_OBJECTS_ITEMS",
	SET_OBJECTS_IS_LOADED = "SET_OBJECTS_IS_LOADED",
	SET_OBJECTS_FIRST_IS_LOADED = "SET_OBJECTS_FIRST_IS_LOADED"
}

interface setObjectsItems {
	type: ObjectsActionTypes.SET_OBJECTS_ITEMS,
	payload: IObjectBlock[]
}

interface setObjectsFirstIsLoaded {
	type: ObjectsActionTypes.SET_OBJECTS_FIRST_IS_LOADED,
	payload: boolean
}

interface setObjectsIsLoaded {
	type: ObjectsActionTypes.SET_OBJECTS_IS_LOADED,
	payload: boolean
}

export type ObjectsActions = setObjectsItems | setObjectsFirstIsLoaded | setObjectsIsLoaded