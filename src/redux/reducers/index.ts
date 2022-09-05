import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import reglog from "../reducers/reglog";
import register from "../reducers/register";
import login from "../reducers/login";
import recovery_password from "../reducers/recovery_password";
import object_page from "../reducers/object_page";
import cities from "../reducers/cities";

// user
import user from "../reducers/user/user";
import userCabinetSetting from "../reducers/user/userCabinetSetting";

// objects
import objects from "../reducers/objects/objects";
import objects_filters_global from "../reducers/objects/objects_filters_global";

export const rootReducer = combineReducers({
	reglog,
	register,
	login,
	recovery_password,
	object_page,
	cities,
	user, userCabinetSetting,
	objects, objects_filters_global,
	form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
