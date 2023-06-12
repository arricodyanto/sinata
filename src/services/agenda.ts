import axios from "axios";

export async function getKalenderEvents() {
    const HOST = process.env.NEXT_PUBLIC_API_HOST
    const VERSION = process.env.NEXT_PUBLIC_API_VERSION
    const URL = 'publikasi-agenda'
    const response = await axios.get(`${HOST}/${VERSION}/${URL}/lihat?limit=999&status=complete`)
    const axiosResponse = response.data
    return axiosResponse.data
}