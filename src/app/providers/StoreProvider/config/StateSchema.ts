import {CounterSchema} from "~entities/counter";
import {UserSchema} from "~entities/user";
import {LoginSchema} from "~features/authByUsername";
import {AnyAction, EnhancedStore, Reducer, ReducersMapObject} from "@reduxjs/toolkit";

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    loginForm?: LoginSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction) => StateSchema,
    add: (key: StateSchemaKey, reducer: Reducer) => void,
    remove: (key: StateSchemaKey) => void,
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reduxManager: ReducerManager
}

