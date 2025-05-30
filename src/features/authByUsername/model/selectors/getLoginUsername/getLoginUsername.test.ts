import { DeepPartial } from "vite-plugin-checker/dist/types"
import { StateSchema } from "~app/providers/StoreProvider"
import { getLoginUsername } from "./getLoginUsername"

describe("getLoginUsername.test", () => {
  it("should return username", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: "admin",
      },
    }
    expect(getLoginUsername(state as StateSchema)).toEqual("admin")
  })

  it("should return empty string if no username", () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUsername(state as StateSchema)).toEqual("")
  })
})
