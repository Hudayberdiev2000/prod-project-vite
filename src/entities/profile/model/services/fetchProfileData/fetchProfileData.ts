import {createAsyncThunk} from "@reduxjs/toolkit";
import i18n from "~shared/config/i18n/i18n";
import {ThunkConfig} from "~app/providers/StoreProvider";
import {Profile} from "../../types/profile";


export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const  {extra, rejectWithValue} = thunkAPI
        try {
            const res = await extra.api.get<Profile>('/login')

            return res.data
        } catch (e) {
            console.log(e)
            return  rejectWithValue(i18n.t('Username or Password is incorrect'))
        }
    }
)