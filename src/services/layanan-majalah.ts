import callAPI from './config';

const HOST = process.env.NEXT_PUBLIC_API_HOST;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;
const URL = 'majalah';

export async function getAllLayananMajalah(params?: string) {
  const URLparams = params || '';
  const url = `${HOST}/${VERSION}/${URL}/lihat/?${URLparams}`;
  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}

export async function getOneLayananMajalah(id: string) {
  const url = `${HOST}/${VERSION}/${URL}/${id}/lihat`;
  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}

export async function updateLayananMajalah(id: string, data: any) {
  const url = `${HOST}/${VERSION}/${URL}/${id}/edit`;
  return callAPI({
    url,
    method: 'PUT',
    data,
    token: true,
  });
}

export async function deleteOneLayananMajalah(id: string) {
  const url = `${HOST}/${VERSION}/${URL}/${id}/delete`;
  return callAPI({
    url,
    method: 'DELETE',
    token: true,
  });
}
