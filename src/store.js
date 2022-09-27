import { configureStore } from '@reduxjs/toolkit'
import axios from 'axios'
import * as api from './config'
import { themeReduser } from './features/theme/theme-slice'
import { controlsReduser } from './features/controls/controls-slice'
import { countriesReduser } from './features/countries/countries-slice'
import { detailsReduser } from './features/details/details-slice'
import { loadStorage, saveState } from './loacalStorage'



const persisStore = loadStorage()

export const store = configureStore({
   reducer: {
      theme: themeReduser,
      controls: controlsReduser,
      countries: countriesReduser,
      details: detailsReduser,
   },
   preloadedState: persisStore,
   devTools: true,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
         extraArgument: {
            client: axios,
            api
         }
      },
      serializableCheck: false,
   }),
})

store.subscribe(() => {
   saveState({
      theme: store.getState().theme
   })
})

