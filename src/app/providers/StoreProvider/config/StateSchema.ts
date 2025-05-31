import {CounterSchema} from "~entities/counter";
import {UserSchema} from "~entities/user";
import {LoginSchema} from "~features/authByUsername";
import { EnhancedStore, Reducer} from "@reduxjs/toolkit";
import {staticReducers} from "~app/providers/StoreProvider/config/store";
import {createReducerManager} from "~app/providers/StoreProvider/config/reducerManager";
import {ProfileSchema} from "~entities/profile";
import {AxiosInstance} from "axios";
import {NavigateFunction} from "react-router-dom";

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    loginForm?: LoginSchema,
    profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema

export type Reducers = Record<StateSchemaKey, Reducer>

export type StaticReducers = typeof  staticReducers

export type ReducerManager = ReturnType<typeof createReducerManager>

export interface ThunkExtraArg {
    api: AxiosInstance,
    navigate?: NavigateFunction
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateSchema;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}