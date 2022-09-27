import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const initialState = {
   currentCountry: null,
   neighbors: [],
   status: 'idle',
   error: null
}

export const LoadCurrentCountry = createAsyncThunk(
   '@@details/load-current-country',
   async (name, { extra: { api, client } }) => {
      return client.get(api.searchByCountry(name))
   }
)

export const loadNeighbors = createAsyncThunk(
   '@@details/load-neighbors',
   async (borders, { extra: { api, client } }) => {
      return client.get(api.filterByCode(borders))

   }
)


const detailsSlice = createSlice({
   name: '@@details',
   initialState,
   reducers: {
      clearCountry: (state, action) => {
         return initialState
      }
   },
   extraReducers: (builders) => {
      builders
         .addCase(LoadCurrentCountry.pending, (state, action) => {
            state.status = 'loading'
            state.error = null
         })
         .addCase(LoadCurrentCountry.fulfilled, (state, action) => {
            state.currentCountry = action.payload.data[0]
            state.status = 'received'
         })
         .addCase(loadNeighbors.fulfilled, (state, action) => {
            state.neighbors = action.payload.data.map(country => country.name)
         })
   }
})

export const { clearCountry } = detailsSlice.actions


export const selectCurrentCountry = (state) => state.details.currentCountry

export const selectNeighbors = (state) => state.details.neighbors

export const selectDetails = (state) => state.details

export const detailsReduser = detailsSlice.reducer