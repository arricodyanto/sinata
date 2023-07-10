import callAPI from './config';

const HOST = process.env.NEXT_PUBLIC_API_HOST;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;
const URL = 'publikasi-agenda';

export async function getAllLayananPublikasiAgenda(params?: string) {
  const URLparams = params || '';
  const url = `${HOST}/${VERSION}/${URL}/lihat?${URLparams}`;
  return callAPI({
    url,
    method: 'GET',
  });
}

export async function getOneLayananPublikasiAgenda(id: string) {
  const url = `${HOST}/${VERSION}/${URL}/${id}/lihat`;
  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}

export async function setOneLayananPublikasiAgenda(data: any) {
  const url = `${HOST}/${VERSION}/${URL}/tambah`;
  return callAPI({
    url,
    method: 'POST',
    data,
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

export async function getKalenderEvents(params?: string) {
  const URLparams = params || 'limit=999';
  const url = `${HOST}/${VERSION}/${URL}/kalenderdata?${URLparams}`;
  return callAPI({
    url,
    method: 'GET',
  });
}

export async function getAllLayananPublikasiAgendaUser(
  id: string,
  params?: string,
) {
  const URLparams = params || '';
  const url = `${HOST}/${VERSION}/${URL}/user/${id}/lihat?${URLparams}`;
  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}
