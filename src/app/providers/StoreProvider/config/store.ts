import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from "./StateSchema";
import {counterReducer} from "~entities/counter";
import {userReducer} from "~entities/user";
import {createReducerManager} from "./reducerManager";

export  function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    }

    const reducerManager = createReducerManager(rootReducer)

    const store = configureStore<StateSchema>({
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