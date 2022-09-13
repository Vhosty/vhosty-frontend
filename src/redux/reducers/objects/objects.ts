import { ObjectsState, ObjectsActionTypes, ObjectsActions } from '../../types/IObjects';

const initialState: ObjectsState = {
	items: [],

	totalCount: 0,
	page: 1,

	isFavorites: false,

	firstIsLoaded: false,
	isLoaded: false,
}

const objects = (state = initialState, action: ObjectsActions) => {
	if (action.type === ObjectsActionTypes.SET_OBJECTS_ITEMS) {
		return {
			...state,
			items: action.payload
		}
	}

	if (action.type === ObjectsActionTypes.SET_OBJECTS_TOTAL_COUNT_ITEMS) {
		return {
			...state,
			totalCount: action.payload
		}
	}

	if (action.type === ObjectsActionTypes.SET_OBJECTS_PAGE) {
		return {
			...state,
			page: action.payload
		}
	}

	if (action.type === ObjectsActionTypes.SET_OBJECTS_IS_FAVORITES) {
		return {
			...state,
			isFavorites: action.payload
		}
	}

	if (action.type === ObjectsActionTypes.SET_OBJECTS_FIRST_IS_LOADED) {
		return {
			...state,
			firstIsLoaded: action.payload
		}
	}

	if (action.type === ObjectsActionTypes.SET_OBJECTS_IS_LOADED) {
		return {
			...state,
			isLoaded: action.payload
		}
	}

	return state
}

export default objects