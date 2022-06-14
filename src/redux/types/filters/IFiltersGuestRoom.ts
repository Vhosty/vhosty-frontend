export interface FiltersGuestRoomItemKidsItem {
    age: number;
}

export interface FiltersGuestRoomItem {
    adultsCount: number;
    kids: FiltersGuestRoomItemKidsItem[];
}

export interface FiltersState {
    guestRoom: FiltersGuestRoomItem[];
}

export enum FiltersActionTypes {
    ADD_FILTERS_GUEST_ROOM = "ADD_FILTERS_GUEST_ROOM",
    DELETE_FILTERS_GUEST_ROOM = "DELETE_FILTERS_GUEST_ROOM",
    PLUS_FILTERS_GUEST_ROOM_ADULTS_COUNT = "PLUS_FILTERS_GUEST_ROOM_ADULTS_COUNT",
    MINUS_FILTERS_GUEST_ROOM_ADULTS_COUNT = "MINUS_FILTERS_GUEST_ROOM_ADULTS_COUNT",
    ADD_FILTERS_GUEST_ROOM_KIDS = "ADD_FILTERS_GUEST_ROOM_KIDS",
    DELETE_FILTERS_GUEST_ROOM_KIDS = "DELETE_FILTERS_GUEST_ROOM_KIDS",
}

interface addFiltersGuestRoom {
    type: FiltersActionTypes.ADD_FILTERS_GUEST_ROOM;
    payload: FiltersGuestRoomItem;
}

interface deleteFiltersGuestRoom {
    type: FiltersActionTypes.DELETE_FILTERS_GUEST_ROOM;
    payload: number;
}

interface plusFiltersGuestRoomAdultsCount {
    type: FiltersActionTypes.PLUS_FILTERS_GUEST_ROOM_ADULTS_COUNT;
    payload: number;
}

interface minusFiltersGuestRoomAdultsCount {
    type: FiltersActionTypes.MINUS_FILTERS_GUEST_ROOM_ADULTS_COUNT;
    payload: number;
}

interface addFiltersGuestRoomKids {
    type: FiltersActionTypes.ADD_FILTERS_GUEST_ROOM_KIDS;
    payload: {
        index: number;
        kidsItem: FiltersGuestRoomItemKidsItem;
    };
}

interface deleteFiltersGuestRoomKids {
    type: FiltersActionTypes.DELETE_FILTERS_GUEST_ROOM_KIDS;
	payload: {
		itemIndex: number
		kidsItemIndex: number
	};
}

export type FiltersActions =
    | addFiltersGuestRoom
    | deleteFiltersGuestRoom
    | plusFiltersGuestRoomAdultsCount
    | minusFiltersGuestRoomAdultsCount
    | addFiltersGuestRoomKids
    | deleteFiltersGuestRoomKids;
