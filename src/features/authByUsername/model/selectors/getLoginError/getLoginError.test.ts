import {DeepPartial} from "vite-plugin-checker/dist/types";
import {StateSchema} from "~app/providers/StoreProvider";
import {getLoginError} from "./getLoginError";

describe('getLoginError.test', () => {
    it("should return error", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: "error"
            }
        }
        expect(getLoginError(state as StateSchema)).toEqual('error')
    })

    it("should return error", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginError(state as StateSchema)).toEqual(undefined)
    })
})