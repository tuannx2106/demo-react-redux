import * as types from '../constants/action-types'

export const fetchStore = store => ({ type: types.FETCH_STORE, store })
export const editStore = store => ({ type: types.EDIT_STORE, store })