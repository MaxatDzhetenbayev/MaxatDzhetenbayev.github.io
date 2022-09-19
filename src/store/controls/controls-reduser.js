import { SET_SEARCH } from "./controls-actions"


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

      default: {
         return state
      }
   }
}