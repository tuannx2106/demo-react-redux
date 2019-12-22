import * as types from '../constants/action-types'

const initialState = {
  id: null,
  logoUrl: '',
  name: 'K.O.I Thé',
  address: '',
  district: '',
  city: '',
  phone: '',
  redInvoice: {
    name: '',
    address: '',
    district: '',
    city: '',
    taxCode: ''
  }
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_STORE:
      return { ...state, ...action.store }
    case types.EDIT_STORE:
      return { ...state, ...action.store }
    default:
      return state
  }
}