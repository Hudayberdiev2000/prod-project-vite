import {configureStore, ThunkDispatch, UnknownAction} from '@reduxjs/toolkit'
import {ReduxStoreWithManager, StateSchema, ThunkExtraArg} from "./StateSchema";
import {counterReducer} from "~entities/counter";
import {userReducer} from "~entities/user";
import {createReducerManager} from "./reducerManager";
import {$api} from "~shared/api/api";
import {NavigateFunction} from "react-router-dom";

export const staticReducers = {
  counter: counterReducer,
  user: userReducer,
}

const reducerManager = createReducerManager(
    staticReducers)

export  function createReduxStore(
    initialState?: StateSchema,
    navigate?: NavigateFunction
) {

    const store = configureStore(
        {
        reducer: reducerManager.reduce,
        devTools: import.meta.env.VITE_IS_DEV === "true",
        preloadedState: initialState,
            middleware: (getDefaultMiddleware) => getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: $api,
                        navigate,
                    }
                }
            }),
    }) as ReduxStoreWithManager


    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ThunkDispatch<StateSchema, ThunkExtraArg, UnknownAction>;