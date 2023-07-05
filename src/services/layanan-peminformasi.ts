import { StringifyOptions } from 'querystring';
import callAPI from './config';

const HOST = process.env.NEXT_PUBLIC_API_HOST;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;
const URL = 'pembaruan-informasi';

export async function getOneLayananPeminformasi(id: string) {
  const url = `${HOST}/${VERSION}/${URL}/${id}/lihat`;
  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}

export async function updateLayananPeminformasi(id: string, data: any) {
  const url = `${HOST}/${VERSION}/${URL}/${id}/edit`;
  return callAPI({
    url,
    method: 'PUT',
    data,
    token: true,
  });
}
