import {DeepPartial} from "vite-plugin-checker/dist/types";
import {userActions, userReducer, UserSchema} from "~entities/user";
import {expect} from "vitest";

describe('userSlice.test', () => {
    it("should test setAuthData", () => {
        const state: DeepPartial<UserSchema> = {authData: undefined}

        expect(userReducer(state as UserSchema, userActions.setAuthData({
            id: "123",
            username: "addf"
        })
        )).toEqual({authData: {id: "123", username: "addf"}})
    })

    it("should logout", () => {
        const state: DeepPartial<UserSchema> = {authData: {id: "123", username: "addf"}}

        expect(userReducer(state as UserSchema, userActions.logout())).toEqual(
            {authData: undefined}
        )
    })
})