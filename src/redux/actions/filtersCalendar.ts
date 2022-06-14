import {Moment} from "moment";

import {FiltersCalendarStateActionTypes} from "../types/filters/IFiltersCalendar";

export const plusFiltersCalendarMonthDate = () => ({
    type: FiltersCalendarStateActionTypes.PLUS_FILTERS_CALENDAR_MONTH_DATE,
});

export const minusFiltersCalendarMonthDate = () => ({
    type: FiltersCalendarStateActionTypes.MINUS_FILTERS_CALENDAR_MONTH_DATE,
});

export const setFiltersCalendarDaysMonth = (daysMonth: Moment[]) => ({
    type: FiltersCalendarStateActionTypes.SET_FILTERS_CALENDAR_DAYS_MONTH,
    payload: daysMonth,
});

export const setFiltersFromCalendarDate = (day: Moment) => ({
    type: FiltersCalendarStateActionTypes.SET_FILTERS_FROM_CALENDAR_DATE,
    payload: day,
});

export const setFiltersFromCalendarDateAction = (status: boolean) => ({
    type: FiltersCalendarStateActionTypes.SET_FILTERS_FROM_CALENDAR_DATE_ACTION,
    payload: status,
});

export const setFiltersToCalendarDate = (day: Moment) => ({
    type: FiltersCalendarStateActionTypes.SET_FILTERS_TO_CALENDAR_DATE,
    payload: day,
});
