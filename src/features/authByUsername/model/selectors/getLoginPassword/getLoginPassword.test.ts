import { DeepPartial } from "vite-plugin-checker/dist/types"
import { StateSchema } from "~app/providers/StoreProvider"
import { getLoginPassword } from "./getLoginPassword"

describe("getLoginPassword.test", () => {
  it("should return password", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: "123456",
      },
    }
    expect(getLoginPassword(state as StateSchema)).toEqual("123456")
  })

  it("should return empty string if no password", () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginPassword(state as StateSchema)).toEqual("")
  })
})
