import { combineReducers } from 'redux'
import { themeReduser } from './theme/theme-reduser'
import { countriesReduser } from './countries/countries-reduser'
import { controlsReduser } from './controls/controls-reduser'

export const rootReduser = combineReducers({
   theme: themeReduser,
   countries: countriesReduser,
   controls: controlsReduser,
})