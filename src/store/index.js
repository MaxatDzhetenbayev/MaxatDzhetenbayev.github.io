import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import * as api from '../config'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReduser } from "./rootReduser";

export const store = createStore(
   rootReduser,
   composeWithDevTools(applyMiddleware(thunk.withExtraArgument({
      client: axios,
      api
   })))
)