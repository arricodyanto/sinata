import callAPI from './config';

const HOST = process.env.NEXT_PUBLIC_API_HOST;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;
const URL = 'arsip-pers';

export async function getAllArsipPers(params?: string) {
	const URLparams = params || '';
	const url = `${HOST}/${VERSION}/${URL}/lihat?${URLparams}`;
	return callAPI({
		url,
		method: 'GET',
		token: true,
	});
}

export async function getOneArsipPers(id: string) {
	const url = `${HOST}/${VERSION}/${URL}/${id}/lihat`;
	return callAPI({
		url,
		method: 'GET',
		token: true,
	});
}

export async function setOneArsipPers(data: any) {
	const url = `${HOST}/${VERSION}/${URL}/tambah`;
	return callAPI({
		url,
		method: 'POST',
		data,
		token: true,
	});
}

export async function updateOneArsipPers(id: string, data: any) {
	const url = `${HOST}/${VERSION}/${URL}/${id}/edit`;
	return callAPI({
		url,
		method: 'PUT',
		data,
		token: true,
	});
}

export async function deleteOneArsipPers(id: string) {
	const url = `${HOST}/${VERSION}/${URL}/${id}/delete`;
	return callAPI({
		url,
		method: 'DELETE',
		token: true,
	});
}

export async function getAllArsipPersUser(id_account: string, params?: string) {
	const URLparams = params || '';
	const url = `${HOST}/${VERSION}/${URL}/user/${id_account}/lihat?${URLparams}`;
	return callAPI({
		url,
		method: 'GET',
		token: true,
	});
}
