export const ADD_COUNTRIES = '@@/countries/ADD_COUNTRIES'
export const ADD_COUNTRY = '@@/countries/ADD_COUNTRY'
export const SET_LOADING = '@@/countries/SET_LOADING'
export const SET_REJECT = '@@/countries/SET_REJECT'

const addCounties = (countries) => ({
   type: ADD_COUNTRIES,
   payload: countries
})

const addCountry = (country) => ({
   type: ADD_COUNTRY,
   payload: country
})

const setLoading = {
   type: SET_LOADING
}

const setError = (reject) => ({
   type: SET_REJECT,
   pyaload: reject
})



export const loadCountries = () => (dispatch, _, { client, api }) => {
   dispatch(setLoading)

   client.get(api.ALL_COUNTRIES)
      .then(({ data }) => dispatch(addCounties(data)))
      .catch(err => dispatch(setError(err.message)))
}