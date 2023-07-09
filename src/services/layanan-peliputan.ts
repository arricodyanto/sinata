import callAPI from './config';

const HOST = process.env.NEXT_PUBLIC_API_HOST;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;
const URL = 'peliputan';

export async function getAllLayananPeliputan(params?: string) {
  const URLparams = params || '';
  const url = `${HOST}/${VERSION}/${URL}/lihat?${URLparams}`;
  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}

export async function getOneLayananPeliputan(id: string) {
  const url = `${HOST}/${VERSION}/${URL}/${id}/lihat`;
  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}

export async function setOneLayananPeliputan(data: any) {
  const url = `${HOST}/${VERSION}/${URL}/tambah`;
  return callAPI({
    url,
    method: 'POST',
    data,
    token: true,
  });
}

export async function deleteOneLayananPeliputan(id: string) {
  const url = `${HOST}/${VERSION}/${URL}/${id}/delete`;
  return callAPI({
    url,
    method: 'DELETE',
    token: true,
  });
}

export async function updateLayananPeliputan(id: string, data: any) {
  const url = `${HOST}/${VERSION}/${URL}/${id}/edit`;
  return callAPI({
    url,
    method: 'PUT',
    data,
    token: true,
  });
}
