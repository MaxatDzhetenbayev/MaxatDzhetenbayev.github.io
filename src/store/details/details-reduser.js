import { SET_LOADING, SET_ERROR, SET_COUNTRY, CLEAR_COUNTRY, SET_NEIGHBORS } from "./details-actions";

const initialState = {
   currentCountry: null,
   neighbors: [],
   status: IdleDeadline,
   error: null
}

export const detailsReduser = (state = initialState, { type, payload }) => {
   switch (type) {
      case SET_LOADING: {
         return {
            ...state,
            status: 'loading',
            error: null
         }
      }
      case SET_ERROR: {
         return {
            ...state,
            error: payload,
            status: 'reject'
         }
      }
      case SET_COUNTRY: {
         return {
            ...state,
            currentCountry: payload,
            status: 'received'
         }
      }
      case SET_NEIGHBORS: {
         return {
            ...state,
            neighbors: payload
         }
      }
      case CLEAR_COUNTRY: {
         return initialState
      }
      default:
         return state
   }
}