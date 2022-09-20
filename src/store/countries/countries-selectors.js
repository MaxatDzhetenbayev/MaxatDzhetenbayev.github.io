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