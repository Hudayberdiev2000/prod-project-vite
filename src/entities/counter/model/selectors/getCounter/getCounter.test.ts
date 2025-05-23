import {getCounter} from "./getCounter";
import {DeepPartial} from "vite-plugin-checker/dist/types";
import {StateSchema} from "~app/providers/StoreProvider";

describe('getCounter', () => {
    it("should return counter", () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 1
            }
        }
        expect(getCounter(state as StateSchema)).toEqual({value: 1})
    })
})
