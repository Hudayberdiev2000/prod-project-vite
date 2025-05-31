import axios from "axios";
import {USER_LOCAL_STORAGE_KEY} from "~shared/const/localStorage";

const isDev = import.meta.env.VITE_IS_DEV === "true"

const baseURL = isDev ? 'http://localhost:8000' : 'https://api.example.com'

export const $api = axios.create({
    baseURL,
    headers: {
        authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY)
    }
})