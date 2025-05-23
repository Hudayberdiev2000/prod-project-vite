import {counterReducer, counterActions} from './CounterSlice'
import {CounterSchema} from "~entities/counter";

describe('CounterSlice.test', () => {
    it("decrement", () => {
        const state: CounterSchema =  {
                value: 10
            }

        expect(counterReducer(state as CounterSchema, counterActions.decrement())).toEqual({value: 9})
    })

    it("increment", () => {
        const state: CounterSchema =  {
            value: 10
        }

        expect(counterReducer(state as CounterSchema, counterActions.increment())).toEqual({value: 11})
    })

    it("should work with empty state", () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({value: 1})
    })
})