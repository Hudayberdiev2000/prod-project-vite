import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from "./StateSchema";
import {counterReducer} from "~entities/counter";
import {userReducer} from "~entities/user";
import {loginReducer} from "~features/authByUsername";

export  function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer
    }
    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: import.meta.env.VITE_IS_DEV === "true",
        preloadedState: initialState
    })
}


export const store = createReduxStore()
export type AppDispatch = typeof store.dispatch