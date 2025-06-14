import {Country, Currency} from "~shared/const/common";

export interface Profile {
    "first": string,
    "lastName": string,
    "age": 22,
    "currency": Currency   ,
    "country": Country,
    "city": string,
    "username": string,
    "avater": string
}

export interface ProfileSchema {
    data?: Profile,
    isLoading: boolean,
    error?: string,
    readonly : boolean
}