import {Moment} from "moment";

export interface filtersItemKidsItem {
    age: number;
}

export interface filtersItem {
    adultsCount: number;
    kids: filtersItemKidsItem[];
}

interface filtersState {
    date: Moment;

    from: {date: Moment; active: boolean; selected: boolean};
    to: {date: Moment};

    daysMonth: Moment[];
}

export interface FiltersState {
    calendar: filtersState;
    guestRoom: filtersItem[];
}

export enum FiltersActionTypes {
    ADD_FILTERS_GUEST_ROOM = "ADD_FILTERS_GUEST_ROOM",
    DELETE_FILTERS_GUEST_ROOM = "DELETE_FILTERS_GUEST_ROOM",
    PLUS_FILTERS_GUEST_ROOM_ADULTS_COUNT = "PLUS_FILTERS_GUEST_ROOM_ADULTS_COUNT",
    MINUS_FILTERS_GUEST_ROOM_ADULTS_COUNT = "MINUS_FILTERS_GUEST_ROOM_ADULTS_COUNT",
    ADD_FILTERS_GUEST_ROOM_KIDS = "ADD_FILTERS_GUEST_ROOM_KIDS",
    DELETE_FILTERS_GUEST_ROOM_KIDS = "DELETE_FILTERS_GUEST_ROOM_KIDS",

    PLUS_FILTERS_CALENDAR_MONTH_DATE = "PLUS_FILTERS_CALENDAR_MONTH_DATE",
    MINUS_FILTERS_CALENDAR_MONTH_DATE = "MINUS_FILTERS_CALENDAR_MONTH_DATE",
    SET_FILTERS_CALENDAR_DAYS_MONTH = "SET_FILTERS_CALENDAR_DAYS_MONTH",

    SET_FILTERS_FROM_CALENDAR_DATE = "SET_FILTERS_FROM_CALENDAR_DATE",

    SET_FILTERS_TO_CALENDAR_DATE = "SET_FILTERS_TO_CALENDAR_DATE",
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

interface plusfiltersMonthDate {
    type: FiltersActionTypes.PLUS_FILTERS_CALENDAR_MONTH_DATE;
}

interface minusfiltersMonthDate {
    type: FiltersActionTypes.MINUS_FILTERS_CALENDAR_MONTH_DATE;
}

interface setfiltersDaysMonth {
    type: FiltersActionTypes.SET_FILTERS_CALENDAR_DAYS_MONTH;
    payload: Moment[];
}

interface setFiltersFromCalendarDate {
    type: FiltersActionTypes.SET_FILTERS_FROM_CALENDAR_DATE;
    payload: Moment;
}

interface setFiltersToCalendarDate {
    type: FiltersActionTypes.SET_FILTERS_TO_CALENDAR_DATE;
    payload: Moment;
}

export type FiltersActions =
    | addfilters
    | deletefilters
    | plusfiltersAdultsCount
    | minusfiltersAdultsCount
    | addfiltersKids
    | deletefiltersKids
    | plusfiltersMonthDate
    | minusfiltersMonthDate
    | setfiltersDaysMonth
    | setFiltersFromCalendarDate
    | setFiltersToCalendarDate;
