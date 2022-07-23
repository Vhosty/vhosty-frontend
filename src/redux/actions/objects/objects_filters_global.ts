import {
	ObjectsFiltersGlobalGuestKidsItem,
	ObjectsFiltersGlobalGuestItem,
	ObjectsFiltersGlobalActionTypes,
} from "../../types/IObjectsFiltersGlobal";

export const setObjectsFiltersGlobalIsParse = (status: boolean) => ({
	type: ObjectsFiltersGlobalActionTypes.SET_OBJECTS_FILTERS_GLOBAL_IS_PARSE,
	payload: status,
});

export const setObjectsFiltersGlobalCity = (city: string) => ({
	type: ObjectsFiltersGlobalActionTypes.SET_OBJECTS_FILTERS_GLOBAL_CITY,
	payload: city,
});

export const setObjectsFiltersGlobalGuestRoom = (guestRoomItems: ObjectsFiltersGlobalGuestItem[]) => ({
	type: ObjectsFiltersGlobalActionTypes.SET_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM,
	payload: guestRoomItems,
});

export const addObjectsFiltersGlobalGuestRoom = (guestRoomItem: ObjectsFiltersGlobalGuestItem) => ({
	type: ObjectsFiltersGlobalActionTypes.ADD_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM,
	payload: guestRoomItem,
});

export const deleteObjectsFiltersGlobalGuestRoom = (index: number) => ({
	type: ObjectsFiltersGlobalActionTypes.DELETE_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM,
	payload: index,
});

export const plusObjectsFiltersGlobalGuestRoomAdultsCount = (index: number) => ({
	type: ObjectsFiltersGlobalActionTypes.PLUS_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM_ADULTS_COUNT,
	payload: index,
});

export const minusObjectsFiltersGlobalGuestRoomAdultsCount = (index: number) => ({
	type: ObjectsFiltersGlobalActionTypes.MINUS_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM_ADULTS_COUNT,
	payload: index,
});

export const addObjectsFiltersGlobalGuestRoomKids = (
	index: number,
	kidsItem: ObjectsFiltersGlobalGuestKidsItem
) => ({
	type: ObjectsFiltersGlobalActionTypes.ADD_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM_KIDS,
	payload: { index, kidsItem },
});

export const deleteObjectsFiltersGlobalGuestRoomKids = (
	itemIndex: number,
	kidsItemIndex: number
) => ({
	type: ObjectsFiltersGlobalActionTypes.DELETE_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM_KIDS,
	payload: { itemIndex, kidsItemIndex },
});

export const setObjectsFiltersGlobalDate = (
	from: string, to: string
) => ({
	type: ObjectsFiltersGlobalActionTypes.SET_OBJECTS_FILTERS_GLOBAL_DATE,
	payload: { from, to },
});

export const setObjectsFiltersGlobalFlexibleDate = (
	state: boolean
) => ({
	type: ObjectsFiltersGlobalActionTypes.SET_OBJECTS_FILTERS_GLOBAL_FLEXIBLE_DATE,
	payload: state,
});