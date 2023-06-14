import axios from "axios";

const HOST = process.env.NEXT_PUBLIC_API_HOST
const VERSION = process.env.NEXT_PUBLIC_API_VERSION
const URL = 'publikasi-agenda'

export async function getKalenderEvents() {
    const response = await axios.get(`${HOST}/${VERSION}/${URL}/kalenderdata?limit=999`)
    const axiosResponse = response.data
    return axiosResponse.data
}

export async function getAgendaList() {
    const response = await axios.get(`${HOST}/${VERSION}/${URL}/lihat`)
    const axiosResponse = response.data
    return axiosResponse.data
}

export async function getAgendaItem(id: any) {
    const response = await axios.get(`${HOST}/${VERSION}/${URL}/${id}/lihat`)
    const axiosResponse = response.data
    return axiosResponse.data
}