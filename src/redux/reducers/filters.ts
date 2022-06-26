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

    return state;
};

export default filters;
