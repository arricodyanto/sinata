import axios from "axios";

const HOST = process.env.NEXT_PUBLIC_API_HOST
const VERSION = process.env.NEXT_PUBLIC_API_VERSION
const URL = 'pengumuman'

export async function getPengumumanList() {
    const response = await axios.get(`${HOST}/${VERSION}/${URL}`)
    const axiosResponse = response.data
    return axiosResponse.data
}

export async function getPengumumanItem(id: any) {
    const response = await axios.get(`${HOST}/${VERSION}/${URL}/${id}`)
    const axiosResponse = response.data
    return axiosResponse.data
}

export async function getPengumumanAll(params: string) {
    const URLparams = params || ''
    const response = await axios.get(`${HOST}/${VERSION}/${URL}/?${URLparams}`)
    const axiosResponse = response.data
    return axiosResponse
}