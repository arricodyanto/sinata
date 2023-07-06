import callAPI from './config';

const HOST = process.env.NEXT_PUBLIC_API_HOST;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;
const URL = 'publikasi-agenda';

export async function getOneLayananPublikasiAgenda(id: string) {
  const url = `${HOST}/${VERSION}/${URL}/${id}/lihat`;
  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}

export async function updateLayananPublikasiAgenda(id: string, data: any) {
  const url = `${HOST}/${VERSION}/${URL}/${id}/edit`;
  return callAPI({
    url,
    method: 'PUT',
    data,
    token: true,
  });
}

export async function deleteOneLayananPublikasi(id: string) {
  const url = `${HOST}/${VERSION}/${URL}/${id}/delete`;
  return callAPI({
    url,
    method: 'DELETE',
    token: true,
  });
}
