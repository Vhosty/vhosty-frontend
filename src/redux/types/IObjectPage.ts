export interface ObjectPageState {
	itemById: any,
	isLoaded: boolean
}

export enum ObjectPageActionTypes {
	SET_OBJECT_PAGE_ITEM_BY_ID = "SET_OBJECT_PAGE_ITEM_BY_ID",
	SET_OBJECT_PAGE_IS_LOADED = "SET_OBJECT_PAGE_IS_LOADED",
}

interface setObjectPageItemById {
	type: ObjectPageActionTypes.SET_OBJECT_PAGE_ITEM_BY_ID;
	payload: any;
}

interface setObjectPageIsLoaded {
	type: ObjectPageActionTypes.SET_OBJECT_PAGE_IS_LOADED;
	payload: boolean;
}

export type ObjectPageActions = setObjectPageItemById | setObjectPageIsLoaded;