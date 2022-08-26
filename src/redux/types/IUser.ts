import { User } from '../../models/IUser';

export interface UserState {
	user: User,
	isLoadedUser: boolean,

	bookings: any
	isLoadedBookings: boolean
}

export enum UserActionTypes {
	SET_USER = "SET_USER",
	SET_USER_BOOKINGS = "SET_USER_BOOKINGS",
}

interface setUser {
	type: UserActionTypes.SET_USER
	payload: User
}

interface setUserBookings {
	type: UserActionTypes.SET_USER_BOOKINGS
	payload: any
}

export type UserActions = setUser | setUserBookings