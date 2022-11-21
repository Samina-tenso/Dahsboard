import axios, { Axios, AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import { useEffect, useState } from "react"
//Type is use defined type
export async function useAxiosFetch<Type>(params: AxiosRequestConfig<any>): Promise<Type | null> {
    axios.defaults.baseURL = "http://localhost:3000";
    try {
        const response = await axios.request<Type>(params)
        console.log(response)
        return response.data

    } catch (AxiosError) {
        console.log(AxiosError)
        return null

    }
}
