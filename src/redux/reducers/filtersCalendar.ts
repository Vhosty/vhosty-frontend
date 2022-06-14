import moment from "moment";
import "moment/locale/ru";

import {
    FiltersCalendarState,
    FiltersCalendarStateActions,
    FiltersCalendarStateActionTypes,
} from "../types/filters/IFiltersCalendar";

const initialState: FiltersCalendarState = {
    date: moment(),

    from: {
        date: moment(),
        active: false,
    },
    // toDate: moment(),

    daysMonth: [],
};

const filtersCalendar = (
    state = initialState,
    action: FiltersCalendarStateActions
) => {
    if (
        action.type ===
        FiltersCalendarStateActionTypes.PLUS_FILTERS_CALENDAR_MONTH_DATE
    ) {
        if (
            moment(state.date).format("MM") === moment().format("MM") &&
            parseInt(moment(state.date).format("YYYY")) ===
                parseInt(moment().format("YYYY")) + 1
        ) {
            return state;
        }

        return {
            ...state,
            date: moment(state.date).add(1, "month"),
        };
    }

    if (
        action.type ===
        FiltersCalendarStateActionTypes.MINUS_FILTERS_CALENDAR_MONTH_DATE
    ) {
        if (
            moment(state.date).format("MM") === moment().format("MM") &&
            parseInt(moment(state.date).format("YYYY")) ===
                parseInt(moment().format("YYYY"))
        ) {
            return state;
        }

        return {
            ...state,
            date: moment(state.date).subtract(1, "month"),
        };
    }

    if (
        action.type ===
        FiltersCalendarStateActionTypes.SET_FILTERS_CALENDAR_DAYS_MONTH
    ) {
        return {
            ...state,
            daysMonth: action.payload,
        };
    }

    if (
        action.type ===
        FiltersCalendarStateActionTypes.SET_FILTERS_FROM_CALENDAR_DATE
    ) {
        return {
            ...state,
            from: {
                ...state.from,
                date: action.payload,
            },
        };
    }

    if (
        action.type ===
        FiltersCalendarStateActionTypes.SET_FILTERS_FROM_CALENDAR_DATE_ACTION
    ) {
        return {
            ...state,
            from: {
                ...state.from,
                active: action.payload,
            },
        };
    }

    // if (
    //     action.type ===
    //     FiltersCalendarStateActionTypes.SET_FILTERS_TO_CALENDAR_DATE
    // ) {
    //     return {
    //         ...state,
    //         toDate: action.payload,
    //     };
    // }

    return state;
};

export default filtersCalendar;
