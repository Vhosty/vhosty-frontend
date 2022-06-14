import {Moment} from "moment";

export interface FiltersCalendarState {
    date: Moment;

    from: {date: Moment; active: boolean};
    // toDate: Moment;

    daysMonth: Moment[];
}

export enum FiltersCalendarStateActionTypes {
    PLUS_FILTERS_CALENDAR_MONTH_DATE = "PLUS_FILTERS_CALENDAR_MONTH_DATE",
    MINUS_FILTERS_CALENDAR_MONTH_DATE = "MINUS_FILTERS_CALENDAR_MONTH_DATE",
    SET_FILTERS_CALENDAR_DAYS_MONTH = "SET_FILTERS_CALENDAR_DAYS_MONTH",

    SET_FILTERS_FROM_CALENDAR_DATE = "SET_FILTERS_FROM_CALENDAR_DATE",
    SET_FILTERS_FROM_CALENDAR_DATE_ACTION = "SET_FILTERS_FROM_CALENDAR_DATE_ACTION",

    SET_FILTERS_TO_CALENDAR_DATE = "SET_FILTERS_TO_CALENDAR_DATE",
}

interface plusFiltersCalendarMonthDate {
    type: FiltersCalendarStateActionTypes.PLUS_FILTERS_CALENDAR_MONTH_DATE;
}

interface minusFiltersCalendarMonthDate {
    type: FiltersCalendarStateActionTypes.MINUS_FILTERS_CALENDAR_MONTH_DATE;
}

interface setFiltersCalendarDaysMonth {
    type: FiltersCalendarStateActionTypes.SET_FILTERS_CALENDAR_DAYS_MONTH;
    payload: Moment[];
}

interface setFiltersFromCalendarDate {
    type: FiltersCalendarStateActionTypes.SET_FILTERS_FROM_CALENDAR_DATE;
    payload: Moment;
}

interface setFiltersFromCalendarDateAction {
    type: FiltersCalendarStateActionTypes.SET_FILTERS_FROM_CALENDAR_DATE_ACTION;
    payload: boolean;
}

interface setFiltersToCalendarDate {
    type: FiltersCalendarStateActionTypes.SET_FILTERS_TO_CALENDAR_DATE;
    payload: Moment;
}

export type FiltersCalendarStateActions =
    | plusFiltersCalendarMonthDate
    | minusFiltersCalendarMonthDate
    | setFiltersCalendarDaysMonth
    | setFiltersFromCalendarDate
    | setFiltersToCalendarDate
    | setFiltersFromCalendarDateAction;
