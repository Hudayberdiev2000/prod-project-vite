import { DeepPartial } from "vite-plugin-checker/dist/types"
import { StateSchema } from "~app/providers/StoreProvider"
import { getLoginLoading } from "./getLoginLoading"

describe("getLoginLoading.test", () => {
  it("should return true when loading", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    }
    expect(getLoginLoading(state as StateSchema)).toEqual(true)
  })

  it("should return false when not loading", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: false,
      },
    }
    expect(getLoginLoading(state as StateSchema)).toEqual(false)
  })

  it("should return false if state is empty", () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginLoading(state as StateSchema)).toEqual(false)
  })
})
