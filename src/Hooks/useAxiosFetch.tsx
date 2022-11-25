import axios, { Axios, AxiosError, AxiosRequestConfig } from "axios"

export async function useAxiosFetch<Type>(params: AxiosRequestConfig<any>): Promise<Type | null> {
    axios.defaults.baseURL = "http://localhost:3000";
    try {
        const response = await axios.request<Type>(params)
        console.log(response.status)
        return response.data

    } catch (AxiosError) {
        console.log(AxiosError)
        return null

    }
}
