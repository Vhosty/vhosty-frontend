import {Moment} from "moment";

import {
    filtersItemKidsItem,
    filtersItem,
    FiltersActionTypes,
} from "../types/IFilters";

export const addfilters = (guestRoomItem: filtersItem) => ({
    type: FiltersActionTypes.ADD_FILTERS_GUEST_ROOM,
    payload: guestRoomItem,
});

export const deletefilters = (index: number) => ({
    type: FiltersActionTypes.DELETE_FILTERS_GUEST_ROOM,
    payload: index,
});

export const plusfiltersAdultsCount = (index: number) => ({
    type: FiltersActionTypes.PLUS_FILTERS_GUEST_ROOM_ADULTS_COUNT,
    payload: index,
});

export const minusfiltersAdultsCount = (index: number) => ({
    type: FiltersActionTypes.MINUS_FILTERS_GUEST_ROOM_ADULTS_COUNT,
    payload: index,
});

export const addfiltersKids = (
    index: number,
    kidsItem: filtersItemKidsItem
) => ({
    type: FiltersActionTypes.ADD_FILTERS_GUEST_ROOM_KIDS,
    payload: {index, kidsItem},
});

export const deletefiltersKids = (
    itemIndex: number,
    kidsItemIndex: number
) => ({
    type: FiltersActionTypes.DELETE_FILTERS_GUEST_ROOM_KIDS,
    payload: {itemIndex, kidsItemIndex},
});

export const plusfiltersMonthDate = () => ({
    type: FiltersActionTypes.PLUS_FILTERS_CALENDAR_MONTH_DATE,
});

export const minusfiltersMonthDate = () => ({
    type: FiltersActionTypes.MINUS_FILTERS_CALENDAR_MONTH_DATE,
});

export const setfiltersDaysMonth = (daysMonth: Moment[]) => ({
    type: FiltersActionTypes.SET_FILTERS_CALENDAR_DAYS_MONTH,
    payload: daysMonth,
});

export const setFiltersFromCalendarDate = (day: Moment) => ({
    type: FiltersActionTypes.SET_FILTERS_FROM_CALENDAR_DATE,
    payload: day,
});

export const setFiltersToCalendarDate = (day: Moment) => ({
    type: FiltersActionTypes.SET_FILTERS_TO_CALENDAR_DATE,
    payload: day,
});
