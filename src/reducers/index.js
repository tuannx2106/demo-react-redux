import * as types from '../constants/action-types'

const initialState = {
  currentStore: {
    id: null,
    logoUrl: '',
    name: 'K.O.I Thé',
    address: '521 Hồ Tùng Mậu',
    district: '1',
    city: 'HCM',
    phone: '(338) 886-9944',
    redInvoice: {
      name: 'K.O.I Thé International Company',
      address: '9682 Wakuhust Avenue Arlington Height IL 60004',
      district: '',
      city: '',
      taxCode: 'P7774499'
    }
  }
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_STORE:
      return { ...state.currentStore, ...action.store }
    case types.EDIT_STORE:
      return { ...state.currentStore, ...action.store }
    default:
      return state
  }
}