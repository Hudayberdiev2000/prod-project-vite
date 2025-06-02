import {loginReducer, LoginSchema} from "~features/authByUsername";
import {DeepPartial} from "vite-plugin-checker/dist/types";
import {expect} from "vitest";
import {loginActions} from "~features/authByUsername/model/slice/loginSlice";

describe('loginSlice.test', () => {
    it("test set username", () => {
      const state: DeepPartial<LoginSchema> = { username: "123" }
        expect(loginReducer(state as LoginSchema,
            loginActions.setUsername('121212')
            )).toEqual({ username: "121212"})
    })

    it("test set password", () => {
        const state: DeepPartial<LoginSchema> = { password: "123" }
        expect(loginReducer(state as LoginSchema,
            loginActions.setPassword('121212')
        )).toEqual({ password: "121212"})
    })
})