import axios from "axios";

export async function getPengumumanList() {
    const HOST = process.env.NEXT_PUBLIC_API_HOST
    const VERSION = process.env.NEXT_PUBLIC_API_VERSION
    const URL = 'pengumuman'
    const response = await axios.get(`${HOST}/${VERSION}/${URL}`)
    const axiosResponse = response.data
    return axiosResponse.data
}

export async function getPengumumanItem(id: any) {
    const HOST = process.env.NEXT_PUBLIC_API_HOST
    const VERSION = process.env.NEXT_PUBLIC_API_VERSION
    const URL = 'pengumuman'
    const response = await axios.get(`${HOST}/${VERSION}/${URL}/${id}`)
    const axiosResponse = response.data
    return axiosResponse.data
}