import {
    FiltersGuestRoomItemKidsItem,
    FiltersGuestRoomItem,
    FiltersActionTypes,
} from "../types/filters/IFiltersGuestRoom";

export const addFiltersGuestRoom = (guestRoomItem: FiltersGuestRoomItem) => ({
    type: FiltersActionTypes.ADD_FILTERS_GUEST_ROOM,
    payload: guestRoomItem,
});

export const deleteFiltersGuestRoom = (index: number) => ({
    type: FiltersActionTypes.DELETE_FILTERS_GUEST_ROOM,
    payload: index,
});

export const plusFiltersGuestRoomAdultsCount = (index: number) => ({
    type: FiltersActionTypes.PLUS_FILTERS_GUEST_ROOM_ADULTS_COUNT,
    payload: index,
});

export const minusFiltersGuestRoomAdultsCount = (index: number) => ({
    type: FiltersActionTypes.MINUS_FILTERS_GUEST_ROOM_ADULTS_COUNT,
    payload: index,
});

export const addFiltersGuestRoomKids = (
    index: number,
    kidsItem: FiltersGuestRoomItemKidsItem
) => ({
    type: FiltersActionTypes.ADD_FILTERS_GUEST_ROOM_KIDS,
    payload: {index, kidsItem},
});

export const deleteFiltersGuestRoomKids = (
    itemIndex: number,
    kidsItemIndex: number
) => ({
    type: FiltersActionTypes.DELETE_FILTERS_GUEST_ROOM_KIDS,
    payload: {itemIndex, kidsItemIndex},
});
