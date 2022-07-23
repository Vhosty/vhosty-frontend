import {
	ObjectsFiltersGlobalGuestKidsItem,
	ObjectsFiltersGlobalGuestItem,
	ObjectsFiltersGlobalState,
	ObjectsFiltersGlobalActionTypes,
	ObjectsFiltersGlobalActions,
} from "../../types/IObjectsFiltersGlobal";

const initialState: ObjectsFiltersGlobalState = {
	isParse: false,
	city: "",
	guestRoom: [{ adultsCount: 1, kids: [] }],
	date: {
		from: "",
		to: ""
	},
	flexibleDate: false
};

const objects_filters_global = (state = initialState, action: ObjectsFiltersGlobalActions) => {
	if (action.type === ObjectsFiltersGlobalActionTypes.SET_OBJECTS_FILTERS_GLOBAL_IS_PARSE) {
		return {
			...state,
			isParse: action.payload,
		};
	}

	if (action.type === ObjectsFiltersGlobalActionTypes.SET_OBJECTS_FILTERS_GLOBAL_CITY) {
		return {
			...state,
			city: action.payload,
		};
	}

	if (action.type === ObjectsFiltersGlobalActionTypes.SET_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM) {
		return {
			...state,
			guestRoom: action.payload,
		};
	}

	if (action.type === ObjectsFiltersGlobalActionTypes.ADD_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM) {
		return {
			...state,
			guestRoom: [...state.guestRoom, action.payload],
		};
	}

	if (action.type === ObjectsFiltersGlobalActionTypes.DELETE_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM) {
		const newGuestRoom: ObjectsFiltersGlobalGuestItem[] = [];

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
		action.type === ObjectsFiltersGlobalActionTypes.PLUS_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM_ADULTS_COUNT
	) {
		state.guestRoom[action.payload].adultsCount++;

		return {
			...state,
		};
	}

	if (
		action.type === ObjectsFiltersGlobalActionTypes.MINUS_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM_ADULTS_COUNT
	) {
		if (state.guestRoom[action.payload].adultsCount > 1) {
			state.guestRoom[action.payload].adultsCount--;
		}

		return {
			...state,
		};
	}

	if (action.type === ObjectsFiltersGlobalActionTypes.ADD_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM_KIDS) {
		state.guestRoom[action.payload.index].kids = [
			...state.guestRoom[action.payload.index].kids,
			action.payload.kidsItem,
		];

		return {
			...state,
		};
	}

	if (action.type === ObjectsFiltersGlobalActionTypes.DELETE_OBJECTS_FILTERS_GLOBAL_GUEST_ROOM_KIDS) {
		const newGuestRoomKids: ObjectsFiltersGlobalGuestKidsItem[] = [];

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

	if (action.type === ObjectsFiltersGlobalActionTypes.SET_OBJECTS_FILTERS_GLOBAL_DATE) {
		return {
			...state,
			date: action.payload,
		};
	}

	if (action.type === ObjectsFiltersGlobalActionTypes.SET_OBJECTS_FILTERS_GLOBAL_FLEXIBLE_DATE) {
		return {
			...state,
			flexibleDate: action.payload,
		};
	}

	return state;
};

export default objects_filters_global;
