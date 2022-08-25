import { ObjectPageState, ObjectPageActionTypes, ObjectPageActions } from "../types/IObjectPage";

const initialState: ObjectPageState = {
	itemById: {},
	isLoaded: false
};

const object_page = (state = initialState, action: ObjectPageActions) => {
	if (action.type === ObjectPageActionTypes.SET_OBJECT_PAGE_ITEM_BY_ID) {
		return {
			...state,
			itemById: action.payload,
		};
	}

	if (action.type === ObjectPageActionTypes.SET_OBJECT_PAGE_IS_LOADED) {
		return {
			...state,
			isLoaded: action.payload,
		};
	}

	return state;
};

export default object_page;
