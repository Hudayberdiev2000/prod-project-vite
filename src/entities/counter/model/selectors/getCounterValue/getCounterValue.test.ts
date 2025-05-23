import {getCounterValue} from "./getCounterValue";
import {DeepPartial} from "vite-plugin-checker/dist/types";
import {StateSchema} from "~app/providers/StoreProvider";

describe('getCounterValue.test', () => {
    it("should return counter value", () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 1
            }
        }
        expect(getCounterValue(state as StateSchema)).toEqual( 1)
    })
})