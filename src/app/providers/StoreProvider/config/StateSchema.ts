import {CounterSchema} from "~entities/counter";
import {UserSchema} from "~entities/user";
import {LoginSchema} from "~features/authByUsername";
import {Action, EnhancedStore, Reducer,  ThunkDispatch} from "@reduxjs/toolkit";
import {staticReducers} from "~app/providers/StoreProvider/config/store";
import {createReducerManager} from "~app/providers/StoreProvider/config/reducerManager";

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    loginForm?: LoginSchema
}

export type StateSchemaKey = keyof StateSchema

export type Reducers = Record<StateSchemaKey, Reducer>

export type StaticReducers = typeof  staticReducers

export type ReducerManager = ReturnType<typeof createReducerManager>

export interface AppStore extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export type AppDispatch = ThunkDispatch<StateSchema, undefined, Action>

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reduxManager: ReducerManager
}

