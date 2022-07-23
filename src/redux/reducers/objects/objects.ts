import { ObjectsState, ObjectsActionTypes, ObjectsActions } from '../../types/IObjects';

const initialState: ObjectsState = {
	items: [],

	totalCount: 0,
	page: 1,

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