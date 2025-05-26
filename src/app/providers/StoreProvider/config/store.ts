import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from "./StateSchema";
import {counterReducer} from "~entities/counter";
import {userReducer} from "~entities/user";

export  function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer
    }
    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: import.meta.env.VITE_IS_DEV === "true",
        preloadedState: initialState
    })
}

