import { Dispatch } from "react"
import axios from "axios"

import { ObjectPageActionTypes, ObjectPageActions } from '../types/IObjectPage'

export const fetchObjectPageItemById = (id: string) => {
	return async (dispatch: Dispatch<ObjectPageActions>) => {
		dispatch(({
			type: ObjectPageActionTypes.SET_OBJECT_PAGE_IS_LOADED,
			payload: false
		}))

		axios.get(`${process.env.REACT_APP_API_DOMEN}/hotels/catalog/${id}`).then(({ data }) => {
			dispatch(({
				type: ObjectPageActionTypes.SET_OBJECT_PAGE_ITEM_BY_ID,
				payload: data
			}))
			
			dispatch(({
				type: ObjectPageActionTypes.SET_OBJECT_PAGE_IS_LOADED,
				payload: true
			}))
		})
	}
}