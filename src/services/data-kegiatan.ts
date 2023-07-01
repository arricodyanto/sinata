import callAPI from './config';

const HOST = process.env.NEXT_PUBLIC_API_HOST;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;
const URL = 'data-kegiatan';

export async function getAllDataKegiatan(params?: string) {
  const URLparams = params || '';
  const url = `${HOST}/${VERSION}/${URL}/lihat?${URLparams}`;
  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}

export async function getOneDataKegiatan(id: string) {
  const url = `${HOST}/${VERSION}/${URL}/${id}/lihat`;
  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}
