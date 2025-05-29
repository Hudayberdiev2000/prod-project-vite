import {configureStore} from '@reduxjs/toolkit'
import {ReduxStoreWithManager, StateSchema} from "./StateSchema";
import {counterReducer} from "~entities/counter";
import {userReducer} from "~entities/user";
import {createReducerManager} from "./reducerManager";

export const staticReducers = {
  counter: counterReducer,
  user: userReducer,
}

const reducerManager = createReducerManager(
    staticReducers)

export  function createReduxStore(initialState?: StateSchema) {

    const store = configureStore(
        {
        reducer: reducerManager.reduce,
        devTools: import.meta.env.VITE_IS_DEV === "true",
        preloadedState: initialState
    }) as ReduxStoreWithManager


    store.reducerManager = reducerManager

    return store
}


export const store = createReduxStore()
