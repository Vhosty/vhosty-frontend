import { UserState, UserActionTypes, UserActions } from '../../types/IUser';

const initialState: UserState = {
	user: {
		first_name: "",
		last_name: "",
		email: "",
		phone: "",
		id: 0,
		phone_is_verified: false,
		email_is_verified: false
	},

	isLoadedUser: false,
	isPendingUser: true,

	bookings: [],
	isLoadedBookings: false
}

const user = (state = initialState, action: UserActions) => {
	if (action.type === UserActionTypes.SET_USER) {
		return {
			...state,
			user: action.payload,
			isLoadedUser: true,
		}
	}
	
	if (action.type === UserActionTypes.SET_USER_IS_PENDING) {
		return {
			...state,
			isPendingUser: action.payload,
		}
	}

	if (action.type === UserActionTypes.SET_USER_BOOKINGS) {
		return {
			...state,
			bookings: action.payload,
			isLoadedBookings: true,
		}
	}

	return state
}

export default user