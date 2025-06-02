import {DeepPartial} from "vite-plugin-checker/dist/types";
import {StateSchema} from "~app/providers/StoreProvider";
import {expect} from "vitest";
import {getUserAuthData} from "~entities/user";

describe('getUserAuthData.test', () => {
    it("should return authData", () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: {
                    id: "123",
                    username: "addf"
                }
            }
        }

        expect(getUserAuthData(state as StateSchema)).toEqual({
            id: "123", username: "addf"
        })
    })

    it("should return undefined when there is not authData", () => {
        const state: DeepPartial<StateSchema> = {
            user: {authData: undefined}
        }
        expect(getUserAuthData(state as StateSchema)).toBe(undefined)
    })
})