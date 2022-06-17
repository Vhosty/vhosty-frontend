import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import filters from "../reducers/filters";
import reglog from "../reducers/reglog";

export const rootReducer = combineReducers({
    filters,
    reglog,
    form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
