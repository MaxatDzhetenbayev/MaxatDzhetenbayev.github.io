import { SET_SEARCH, SET_FILTER } from "./controls-actions"


const initialState = {
   search: '',
   filter: ''
}

export const controlsReduser = (state = initialState, { type, payload }) => {
   switch (type) {
      case SET_SEARCH: {
         return {
            ...state,
            search: payload
         }
      }
      case SET_FILTER: {
         return {
            ...state,
            filter: payload
         }
      }
      default: {
         return state
      }
   }
}