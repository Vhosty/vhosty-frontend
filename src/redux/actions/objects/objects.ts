import { Dispatch } from "redux"
import axios from "axios"

import { ObjectsActionTypes, ObjectsActions } from '../../types/IObjects'
import { IObjectBlock } from '../../../models/IObjectBlock'

interface FetchObjectsFilters {
	from: string,
	to: string,
	city: string,
	persons_count: number,
	children_count: number,
	location_id: 1 | 0
}

export const fetchObjects = ({ from, to, city, persons_count, children_count, location_id }: FetchObjectsFilters) => {
	return async (dispatch: Dispatch<ObjectsActions>) => {
		dispatch({
			type: ObjectsActionTypes.SET_OBJECTS_IS_LOADED,
			payload: false
		})

		axios.get(`${process.env.REACT_APP_API_DOMEN}/hotels/catalog/search`, {
			params: {
				checkin_date: from,
				checkout_date: to,
				city_name: city,
				persons_count,
				children_count,
				location_id
			}
		}).then(({ data }) => {
			const result: IObjectBlock[] = data.result

			dispatch({
				type: ObjectsActionTypes.SET_OBJECTS_ITEMS,
				payload: result
			})

			dispatch({
				type: ObjectsActionTypes.SET_OBJECTS_IS_LOADED,
				payload: true
			})
		})
	}
}