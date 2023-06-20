import axios, { AxiosRequestConfig } from 'axios'

export default async function callAPI({ url, method, data }: AxiosRequestConfig) {
    const response = await axios({
        url,
        method,
        data
    }).catch((err) => err.response)

    if(response.status > 300) {
        const res = {
            error: true,
            message: response.data.message,
            data: null
        }
        return res
    }

    if(response.data.page) {
        const res = {
            error: false,
            page: response.data.page,
            totalPage: response.data.totalPage,
            totalRow: response.data.totalRow,
            rowsPerPage: response.data.rowsPerPage,
            message: response.data.message,
            data: response.data.data
        }
        return res
    }

    const res = {
        error: false,
        message: response.data.message,
        data: response.data.data
    }
    return res

}
