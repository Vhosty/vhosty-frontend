import { UserState, UserActionTypes, UserActions } from '../../types/IUser';

const initialState: UserState = {
	isLoadedUser: false,

	user: {
		first_name: "",
		last_name: "",
		email: "",
		phone: "",
		id: 0,
		phone_is_verified: false,
		email_is_verified: false
	}
}

const user = (state = initialState, action: UserActions) => {
	if (action.type === UserActionTypes.SET_USER) {
		return {
			...state,
			isLoadedUser: true,
			user: action.payload
		}
	}

	return state
}

export default user