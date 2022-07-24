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
	location_id: 1 | 0,
	page: number,
	isFirst: boolean
}

export const fetchObjects = ({ from, to, city, persons_count, children_count, location_id, page, isFirst }: FetchObjectsFilters) => {
	return async (dispatch: Dispatch<ObjectsActions>) => {
		if (isFirst) {
			dispatch({
				type: ObjectsActionTypes.SET_OBJECTS_FIRST_IS_LOADED,
				payload: false
			})
		} else {
			dispatch({
				type: ObjectsActionTypes.SET_OBJECTS_IS_LOADED,
				payload: false
			})
		}

		axios.get(`${process.env.REACT_APP_API_DOMEN}/hotels/catalog/search`, {
			params: {
				checkin_date: from,
				checkout_date: to,
				city_name: city,
				persons_count,
				children_count,
				location_id,
				page
			}
		}).then(({ data }) => {
			const result: IObjectBlock[] = data.result
			const totalCount: number = data.count

			dispatch({
				type: ObjectsActionTypes.SET_OBJECTS_TOTAL_COUNT_ITEMS,
				payload: totalCount
			})

			dispatch({
				type: ObjectsActionTypes.SET_OBJECTS_ITEMS,
				payload: result
			})

			if (isFirst) {
				dispatch({
					type: ObjectsActionTypes.SET_OBJECTS_FIRST_IS_LOADED,
					payload: true
				})
			}

			dispatch({
				type: ObjectsActionTypes.SET_OBJECTS_IS_LOADED,
				payload: true
			})
		})
	}
}

export const setObjectsPage = (page: number) => ({
	type: ObjectsActionTypes.SET_OBJECTS_PAGE,
	payload: page
})

export const setObjectsIsOpenImageBox = (status: boolean) => ({
	type: ObjectsActionTypes.SET_OBJECTS_IS_OPEN_IMAGE_BOX,
	payload: status
})

export const setObjectsCurrentIndexBlockImageBox = (number: number) => ({
	type: ObjectsActionTypes.SET_OBJECTS_CURRENT_INDEX_BLOCK_IMAGE_BOX,
	payload: number
})