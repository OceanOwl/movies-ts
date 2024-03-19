import {Axios, AxiosResponse} from "axios";

type IRes<T> = Promise<AxiosResponse<T>>

export type {
    IRes
}