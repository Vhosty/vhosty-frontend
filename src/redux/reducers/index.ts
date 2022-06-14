import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import filtersGuestRoom from "../reducers/filtersGuestRoom";
import filtersCalendar from "../reducers/filtersCalendar";
import login from "../reducers/login";

export const rootReducer = combineReducers({
    filtersGuestRoom,
    filtersCalendar,
    login,
    form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
