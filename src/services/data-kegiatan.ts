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

export async function setOneDataKegiatan(data: any) {
  const url = `${HOST}/${VERSION}/${URL}/tambah`;
  return callAPI({
    url,
    method: 'POST',
    token: true,
    data,
  });
}

export async function updateOneDataKegiatan(id: string, data: any) {
  const url = `${HOST}/${VERSION}/${URL}/${id}/edit`;
  return callAPI({
    url,
    method: 'PUT',
    data,
    token: true,
  });
}

export async function deleteOneDataKegiatan(id: string) {
  const url = `${HOST}/${VERSION}/${URL}/${id}/delete`;
  return callAPI({
    url,
    method: 'DELETE',
    token: true,
  });
}

export async function getAllDataKegiatanUser(id: string, params?: string) {
  const URLparams = params || '';
  const url = `${HOST}/${VERSION}/${URL}/user/${id}/lihat?${URLparams}`;
  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}
