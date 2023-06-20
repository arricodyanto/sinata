import callAPI from './config';

const HOST = process.env.NEXT_PUBLIC_API_HOST;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;
const URL = 'publikasi-agenda';

export async function getKalenderEvents() {
  const url = `${HOST}/${VERSION}/${URL}/kalenderdata?limit=300`;
  return callAPI({
    url,
    method: 'GET',
  });
}

export async function getAgendaList() {
  const url = `${HOST}/${VERSION}/${URL}/lihat`;

  return callAPI({
    url,
    method: 'GET',
  });
}

export async function getAgendaItem(id: any) {
  const url = `${HOST}/${VERSION}/${URL}/${id}/lihat`;

  return callAPI({
    url,
    method: 'GET',
  });
}

export async function getAllAgenda(params: string) {
  const URLparams = params || '';
  const url = `${HOST}/${VERSION}/${URL}/lihat/?${URLparams}`;

  return callAPI({
    url,
    method: 'GET',
  });
}
