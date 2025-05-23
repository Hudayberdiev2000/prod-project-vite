import { configureStore } from '@reduxjs/toolkit'
import {StateSchema} from "./StateSchema";
import {counterReducer} from "~entities/counter";

export  function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer
        },
        devTools: import.meta.env.VITE_IS_DEV === "true",
        preloadedState: initialState
    })
}

