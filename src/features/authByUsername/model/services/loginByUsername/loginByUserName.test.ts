import axios from "axios";
import {loginByUsername} from "./loginByUsername";
import {expect} from "vitest";
import {userActions} from "~entities/user";
import {TestAsyncThunk} from "~shared/lib/test/TestAsyncThunk/TestAsyncThunk";

vi.mock('axios')

const mockedAxios = vi.mocked(axios, true);

describe('loginByUserName.test', () => {
    it("should login successfully", async  () => {
        const userValue = { username: "123", id: "123" }
        mockedAxios.post.mockResolvedValue({data: userValue})

        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk({username: "123", password: "123"})

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(userValue)
    })

    it("error login", async  () => {
        mockedAxios.post.mockResolvedValue({ status: 403 })

        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk({username: "123", password: "123"})

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('error')
    })
})