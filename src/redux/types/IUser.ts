import { User } from '../../models/IUser';

export interface UserState {
	isLoadedUser: boolean
	user: User
}

export enum UserActionTypes {
	SET_USER = "SET_USER"
}

interface setUser {
	type: UserActionTypes.SET_USER
	payload: User
}

export type UserActions = setUser