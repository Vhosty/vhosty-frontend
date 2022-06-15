import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import filtersGuestRoom from "../reducers/filtersGuestRoom";
import filtersCalendar from "../reducers/filtersCalendar";
import reglog from "../reducers/reglog";

export const rootReducer = combineReducers({
    filtersGuestRoom,
    filtersCalendar,
    reglog,
    form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
