import { ADD_COUNTRIES, SET_LOADING, SET_REJECT } from "./countries-actions"


const initialState = {
   status: 'idle',
   list: [],
   error: null
}

export const countriesReduser = (state = initialState, { type, payload }) => {
   switch (type) {
      case ADD_COUNTRIES: {
         return {
            ...state,
            list: payload,
            status: 'received'
         }
      }
      case SET_LOADING: {
         return {
            ...state,
            status: 'loading',
            error: null
         }
      }
      case SET_REJECT: {
         return {
            ...state,
            status: 'reject',
            error: payload,
         }
      }
      default: {
         return state
      }
   }
}