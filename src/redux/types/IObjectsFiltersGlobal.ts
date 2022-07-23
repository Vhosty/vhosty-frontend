export interface ObjectsFiltersGlobalGuestKidsItem {
	age: number;
}

export interface ObjectsFiltersGlobalGuestItem {
	adultsCount: number;
	kids: ObjectsFiltersGlobalGuestKidsItem[];
}

export interface ObjectsFiltersGlobalState {
	isParse: boolean
	city: string
	guestRoom: ObjectsFiltersGlobalGuestItem[];
	date: {
		from: string,
		to: string
	},
	flexibleDate: boolean
}

export enum ObjectsFiltersGlobalActionTypes {
	SET_OBJECTS_FILTERS_GLOBAL_IS_PARSE = "SET_OBJECTS_FILTERS_GLOBAL_IS_PARSE",

	SET_OBJECTS_FILTERS_GLOBAL_CITY = "SET_OBJECTS_FILTERS_GLOBAL_CITY",

	SET_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM = "SET_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM",
	ADD_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM = "ADD_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM",
	DELETE_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM = "DELETE_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM",

	PLUS_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM_ADULTS_COUNT = "PLUS_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM_ADULTS_COUNT",
	MINUS_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM_ADULTS_COUNT = "MINUS_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM_ADULTS_COUNT",

	ADD_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM_KIDS = "ADD_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM_KIDS",
	DELETE_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM_KIDS = "DELETE_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM_KIDS",

	SET_OBJECTS_FILTERS_GLOBAL_DATE = "SET_OBJECTS_FILTERS_GLOBAL_DATE",

	SET_OBJECTS_FILTERS_GLOBAL_FLEXIBLE_DATE = "SET_OBJECTS_FILTERS_GLOBAL_FLEXIBLE_DATE",
}

interface setObjectsFiltersGlobalIsParse {
	type: ObjectsFiltersGlobalActionTypes.SET_OBJECTS_FILTERS_GLOBAL_IS_PARSE;
	payload: boolean;
}

interface setObjectsFiltersGlobalCity {
	type: ObjectsFiltersGlobalActionTypes.SET_OBJECTS_FILTERS_GLOBAL_CITY;
	payload: string;
}

interface setObjectsFiltersGlobalGuestRoom {
	type: ObjectsFiltersGlobalActionTypes.SET_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM;
	payload: ObjectsFiltersGlobalGuestItem[];
}

interface addObjectsFiltersGlobalGuestRoom {
	type: ObjectsFiltersGlobalActionTypes.ADD_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM;
	payload: ObjectsFiltersGlobalGuestItem;
}

interface deleteObjectsFiltersGlobalGuestRoom {
	type: ObjectsFiltersGlobalActionTypes.DELETE_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM;
	payload: number;
}

interface plusObjectsFiltersGlobalGuestAdultsCount {
	type: ObjectsFiltersGlobalActionTypes.PLUS_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM_ADULTS_COUNT;
	payload: number;
}

interface minusObjectsFiltersGlobalGuestAdultsCount {
	type: ObjectsFiltersGlobalActionTypes.MINUS_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM_ADULTS_COUNT;
	payload: number;
}

interface addObjectsFiltersGlobalGuestKids {
	type: ObjectsFiltersGlobalActionTypes.ADD_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM_KIDS;
	payload: {
		index: number;
		kidsItem: ObjectsFiltersGlobalGuestKidsItem;
	};
}

interface deleteObjectsFiltersGlobalGuestKids {
	type: ObjectsFiltersGlobalActionTypes.DELETE_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM_KIDS;
	payload: {
		itemIndex: number;
		kidsItemIndex: number;
	};
}

interface setObjectsFiltersGlobalDate {
	type: ObjectsFiltersGlobalActionTypes.SET_OBJECTS_FILTERS_GLOBAL_DATE;
	payload: {
		from: string,
		to: string
	};
}

interface setObjectsFiltersGlobalFlexibleDate {
	type: ObjectsFiltersGlobalActionTypes.SET_OBJECTS_FILTERS_GLOBAL_FLEXIBLE_DATE;
	payload: boolean
}

export type ObjectsFiltersGlobalActions =
	setObjectsFiltersGlobalIsParse
	| setObjectsFiltersGlobalCity
	| setObjectsFiltersGlobalGuestRoom
	| addObjectsFiltersGlobalGuestRoom
	| deleteObjectsFiltersGlobalGuestRoom
	| plusObjectsFiltersGlobalGuestAdultsCount
	| minusObjectsFiltersGlobalGuestAdultsCount
	| addObjectsFiltersGlobalGuestKids
	| deleteObjectsFiltersGlobalGuestKids
	| setObjectsFiltersGlobalDate
	| setObjectsFiltersGlobalFlexibleDate