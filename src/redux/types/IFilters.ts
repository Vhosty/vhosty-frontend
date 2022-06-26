export interface filtersItemKidsItem {
    age: number;
}

export interface filtersItem {
    adultsCount: number;
    kids: filtersItemKidsItem[];
}

export interface FiltersState {
    guestRoom: filtersItem[];
}

export enum FiltersActionTypes {
    ADD_FILTERS_GUEST_ROOM = "ADD_FILTERS_GUEST_ROOM",
    DELETE_FILTERS_GUEST_ROOM = "DELETE_FILTERS_GUEST_ROOM",
    PLUS_FILTERS_GUEST_ROOM_ADULTS_COUNT = "PLUS_FILTERS_GUEST_ROOM_ADULTS_COUNT",
    MINUS_FILTERS_GUEST_ROOM_ADULTS_COUNT = "MINUS_FILTERS_GUEST_ROOM_ADULTS_COUNT",
    ADD_FILTERS_GUEST_ROOM_KIDS = "ADD_FILTERS_GUEST_ROOM_KIDS",
    DELETE_FILTERS_GUEST_ROOM_KIDS = "DELETE_FILTERS_GUEST_ROOM_KIDS",
}

interface addfilters {
    type: FiltersActionTypes.ADD_FILTERS_GUEST_ROOM;
    payload: filtersItem;
}

interface deletefilters {
    type: FiltersActionTypes.DELETE_FILTERS_GUEST_ROOM;
    payload: number;
}

interface plusfiltersAdultsCount {
    type: FiltersActionTypes.PLUS_FILTERS_GUEST_ROOM_ADULTS_COUNT;
    payload: number;
}

interface minusfiltersAdultsCount {
    type: FiltersActionTypes.MINUS_FILTERS_GUEST_ROOM_ADULTS_COUNT;
    payload: number;
}

interface addfiltersKids {
    type: FiltersActionTypes.ADD_FILTERS_GUEST_ROOM_KIDS;
    payload: {
        index: number;
        kidsItem: filtersItemKidsItem;
    };
}

interface deletefiltersKids {
    type: FiltersActionTypes.DELETE_FILTERS_GUEST_ROOM_KIDS;
    payload: {
        itemIndex: number;
        kidsItemIndex: number;
    };
}

export type FiltersActions =
    | addfilters
    | deletefilters
    | plusfiltersAdultsCount
    | minusfiltersAdultsCount
    | addfiltersKids
    | deletefiltersKids;
