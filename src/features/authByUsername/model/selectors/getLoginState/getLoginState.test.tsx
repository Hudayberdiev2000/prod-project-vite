import { DeepPartial } from "vite-plugin-checker/dist/types"
import { StateSchema } from "~app/providers/StoreProvider"
import { getLoginState } from "./getLoginState"

describe("getLoginState.test", () => {
  it("should return login state", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: "admin",
        password: "123",
        isLoading: true,
        error: "error",
      },
    }

    expect(getLoginState(state as StateSchema)).toEqual({
      username: "admin",
      password: "123",
      isLoading: true,
      error: "error",
    })
  })

  it("should return undefined if no login state", () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginState(state as StateSchema)).toEqual(undefined)
  })
})
