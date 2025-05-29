import {configureStore} from '@reduxjs/toolkit'
import {StateSchema} from "./StateSchema";
import {counterReducer} from "~entities/counter";
import {userReducer} from "~entities/user";
import {createReducerManager} from "./reducerManager";

export const staticReducers = {
  counter: counterReducer,
  user: userReducer,
}

export  function createReduxStore(initialState?: StateSchema) {

    const reducerManager = createReducerManager(
        staticReducers)

    const store = configureStore<StateSchema>(
        {
        reducer: reducerManager.reduce,
        devTools: import.meta.env.VITE_IS_DEV === "true",
        preloadedState: initialState
    })


  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
  store.reducerManager = reducerManager

    return store
}


export const store = createReduxStore()
export type AppDispatch = typeof store.dispatch