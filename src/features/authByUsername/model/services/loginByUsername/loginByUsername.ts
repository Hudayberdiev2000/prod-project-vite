import {createAsyncThunk} from "@reduxjs/toolkit";
import {User, userActions} from "~entities/user";
import i18n from "~shared/config/i18n/i18n";
import {USER_LOCAL_STORAGE_KEY} from "~shared/const/localStorage";
import {ThunkConfig} from "~app/providers/StoreProvider";

interface LoginByUsernameProps {
    username: string,
    password: string,
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, {extra, dispatch, rejectWithValue}) => {
        try {
            const res = await extra.api.post<User>('/login', authData)
            if(!res.data) throw new Error()

            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(res.data))
            dispatch(userActions.setAuthData(res.data))
        return res.data;
        } catch (e) {
            console.log(e)
            return  rejectWithValue(i18n.t('Username or Password is incorrect'))
        }
    }
)