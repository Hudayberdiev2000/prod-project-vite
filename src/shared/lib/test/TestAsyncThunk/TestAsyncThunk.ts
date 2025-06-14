import {AsyncThunkAction, Dispatch} from "@reduxjs/toolkit";
import {StateSchema} from "~app/providers/StoreProvider";

type ActionCreatorType<Return, Arg, RejectedValue> = (
    arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: Dispatch
    getState: () => StateSchema
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>

    constructor(actionCreator: ActionCreatorType<
        Return, Arg, RejectedValue
    >
    ) {
        this.actionCreator = actionCreator
        this.dispatch = vi.fn()
        this.getState = vi.fn()
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg)
        return await action(
            this.dispatch, this.getState,undefined
        )
    }
}