import {StateSchema} from "~app/providers/StoreProvider";

export const getCounter = (State: StateSchema) => State.counter;