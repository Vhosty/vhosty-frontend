import moment from "moment";
import "moment/locale/ru";

import {
    filtersItemKidsItem,
    filtersItem,
    FiltersState,
    FiltersActions,
    FiltersActionTypes,
} from "../types/IFilters";

const initialState: FiltersState = {
    calendar: {
        date: moment(),

        from: {
            date: moment(),
            active: false,
            selected: false,
        },

        to: {
            date: moment(),
        },

        daysMonth: [],
    },

    guestRoom: [{adultsCount: 1, kids: []}],
};

const filters = (state = initialState, action: FiltersActions) => {
    if (action.type === FiltersActionTypes.ADD_FILTERS_GUEST_ROOM) {
        return {
            ...state,
            guestRoom: [...state.guestRoom, action.payload],
        };
    }

    if (action.type === FiltersActionTypes.DELETE_FILTERS_GUEST_ROOM) {
        const newGuestRoom: filtersItem[] = [];

        state.guestRoom.map((item, index) => {
            if (index !== action.payload || index === 0) {
                newGuestRoom.push(item);
            }
        });

        return {
            ...state,
            guestRoom: [...newGuestRoom],
        };
    }

    if (
        action.type === FiltersActionTypes.PLUS_FILTERS_GUEST_ROOM_ADULTS_COUNT
    ) {
        state.guestRoom[action.payload].adultsCount++;

        return {
            ...state,
        };
    }

    if (
        action.type === FiltersActionTypes.MINUS_FILTERS_GUEST_ROOM_ADULTS_COUNT
    ) {
        if (state.guestRoom[action.payload].adultsCount > 1) {
            state.guestRoom[action.payload].adultsCount--;
        }

        return {
            ...state,
        };
    }

    if (action.type === FiltersActionTypes.ADD_FILTERS_GUEST_ROOM_KIDS) {
        state.guestRoom[action.payload.index].kids = [
            ...state.guestRoom[action.payload.index].kids,
            action.payload.kidsItem,
        ];

        return {
            ...state,
        };
    }

    if (action.type === FiltersActionTypes.DELETE_FILTERS_GUEST_ROOM_KIDS) {
        const newGuestRoomKids: filtersItemKidsItem[] = [];

        state.guestRoom[action.payload.itemIndex].kids.map((item, index) => {
            if (index !== action.payload.kidsItemIndex) {
                newGuestRoomKids.push(item);
            }
        });

        state.guestRoom[action.payload.itemIndex].kids = newGuestRoomKids;

        return {
            ...state,
        };
    }

    if (action.type === FiltersActionTypes.PLUS_FILTERS_CALENDAR_MONTH_DATE) {
        if (
            moment(state.calendar.date).format("MM") ===
                moment().format("MM") &&
            parseInt(moment(state.calendar.date).format("YYYY")) ===
                parseInt(moment().format("YYYY")) + 1
        ) {
            return state;
        }

        return {
            ...state,
            calendar: {
                ...state.calendar,
                date: moment(state.calendar.date).add(1, "month"),
            },
        };
    }

    if (action.type === FiltersActionTypes.MINUS_FILTERS_CALENDAR_MONTH_DATE) {
        if (
            moment(state.calendar.date).format("MM") ===
                moment().format("MM") &&
            parseInt(moment(state.calendar.date).format("YYYY")) ===
                parseInt(moment().format("YYYY"))
        ) {
            return state;
        }

        return {
            ...state,
            calendar: {
                ...state.calendar,
                date: moment(state.calendar.date).subtract(1, "month"),
            },
        };
    }

    if (action.type === FiltersActionTypes.SET_FILTERS_CALENDAR_DAYS_MONTH) {
        return {
            ...state,
            calendar: {...state.calendar, daysMonth: action.payload},
        };
    }

    if (action.type === FiltersActionTypes.SET_FILTERS_FROM_CALENDAR_DATE) {
        return {
            ...state,
            calendar: {
                ...state.calendar,
                from: {
                    ...state.calendar.from,
                    date: action.payload,
                    active: true,
                    selected: true,
                },
                to: {
                    ...state.calendar.to,
                    date: action.payload,
                },
            },
        };
    }

    if (action.type === FiltersActionTypes.SET_FILTERS_TO_CALENDAR_DATE) {
        return {
            ...state,
            calendar: {
                ...state.calendar,

                from: {
                    ...state.calendar.from,
                    active: false,
                },
                to: {
                    ...state.calendar.to,
                    date: action.payload,
                },
            },
        };
    }

    return state;
};

export default filters;
