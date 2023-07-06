import callAPI from './config';

const HOST = process.env.NEXT_PUBLIC_API_HOST;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;
const URL = 'arsip-pers';

export async function getOneArsipPers(id: string) {
  const url = `${HOST}/${VERSION}/${URL}/${id}/lihat`;
  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}
