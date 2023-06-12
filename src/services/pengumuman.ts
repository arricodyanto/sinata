import axios from "axios";

export async function getPengumumanList() {
    const HOST = process.env.NEXT_PUBLIC_API_HOST
    const VERSION = process.env.NEXT_PUBLIC_API_VERSION
    const URL = 'arsip-pers'
    const response = await axios.get(`${HOST}/${VERSION}/${URL}/pengumuman?limit=6`)
    const axiosResponse = response.data
    return axiosResponse.data
}