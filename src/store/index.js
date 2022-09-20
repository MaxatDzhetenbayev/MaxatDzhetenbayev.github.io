import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import * as api from '../config'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReduser } from "./rootReduser";
import { loadStorage, saveState } from "./loacalStorage";

export const configureStore = () => {
   const persistedState = loadStorage()


   const store = createStore(
      rootReduser,
      persistedState,
      composeWithDevTools(applyMiddleware(thunk.withExtraArgument({
         client: axios,
         api
      })))
   )

   store.subscribe(() => {
      saveState({
         theme: store.getState().theme,
      })
   })


   return store
}

