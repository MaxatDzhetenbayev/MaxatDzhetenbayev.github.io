import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
   list: [],
   status: 'idle',
   error: null,
}

export const loadCountries = createAsyncThunk(
   '@@countries/load-countries',
   async (_, { extra: { api, client } }) => {
      return client.get(api.ALL_COUNTRIES)

   }
)


const countriesSlice = createSlice({
   name: '@@countries',
   initialState,
   extraReducers: (builders) => {
      builders
         .addCase(loadCountries.pending, (state, action) => {
            state.status = 'loading'
            state.error = null
         })
         .addCase(loadCountries.rejected, (state, action) => {
            state.error = action.payload || action.meta.error
            state.status = 'rejected'
         })
         .addCase(loadCountries.fulfilled, (state, action) => {
            state.list = action.payload.data
            state.status = 'received'
         })

   }
})

export const countriesReduser = countriesSlice.reducer


export const selectAllCountries = state => state.countries.list

export const selectCountriesInfo = state => ({
   status: state.countries.status,
   error: state.countries.error,
   qty: state.countries.list.length
})

export const selectVisibleCountries = (state, { search = '', filter = '' }) => {
   return state.countries.list.filter(country => (
      country.name.toLowerCase().includes(search.toLowerCase()) && country.region.includes(filter)
   ))
}