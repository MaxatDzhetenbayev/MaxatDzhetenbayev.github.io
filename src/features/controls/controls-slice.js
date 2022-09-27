import { createSlice } from '@reduxjs/toolkit'



const initialState = {
   filter: '',
   search: '',
}

const controlsSlice = createSlice({
   name: '@@contrlos',
   initialState,
   reducers: {
      setSearch: (state, action) => {
         return state.search = action.payload
      },
      setFilter: (state, action) => {
         return state.filter = action.payload
      }
   }
})

export const { setSearch, setFilter } = controlsSlice.actions
export const controlsReduser = controlsSlice.reducer


export const selectControls = state => state.controls