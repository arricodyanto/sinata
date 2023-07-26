import { getAccountID } from '@/common/utils/decryptToken';
import callAPI from './config';
import { getAllLayananKonpersUser } from './layanan-konpers';
import { getAllLayananPeliputanUser } from './layanan-peliputan';
import { getAllLayananPeminformasiUser } from './layanan-peminformasi';
import { getAllLayananLiveStreamingUser } from './layanan-livestreaming';
import { getAllLayananPublikasiAgendaUser } from './layanan-pubagenda';
import {
	getAllLayananMajalah,
	getAllLayananMajalahUser,
} from './layanan-majalah';
import { getAllLayananOpini, getAllLayananOpiniUser } from './layanan-opini';
import { getAllLayananVideotronUser } from './layanan-videotron';
import { getAllLayananBalihoUser } from './layanan-baliho';

const HOST = process.env.NEXT_PUBLIC_API_HOST;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

export async function getAllRiwayatAjuan(params: string) {
	async function getPeliputan() {
		const response = await callAPI({
			url: `${HOST}/${VERSION}/peliputan/lihat`,
			method: 'GET',
			token: true,
		});
		return response;
	}
	const peliputan = await getPeliputan();
	const modifiedPeliputan = peliputan.data.map((item: any) => {
		return {
			id: item.id,
			id_account: item.tb_kegiatan.id_account,
			pemohon: item.tb_kegiatan.tb_account.username,
			jenis_layanan: 'Layanan Peliputan',
			judul: item.tb_kegiatan.judul_kegiatan,
			file: item.bahan_publikasi,
			tgl_kegiatan: item.tb_kegiatan.tgl_kegiatan,
			waktu_kegiatan: item.tb_kegiatan.waktu_kegiatan,
			tempat_kegiatan: item.tb_kegiatan.tempat_kegiatan,
			status: item.status,
			createdAt: item.createdAt,
		};
	});

	async function getKonpers() {
		const response = await callAPI({
			url: `${HOST}/${VERSION}/konpers/lihat`,
			method: 'GET',
			token: true,
		});
		return response;
	}
	const konpers = await getKonpers();
	const modifiedKonpers = konpers.data.map((item: any) => {
		return {
			id: item.id,
			id_account: item.id_account,
			pemohon: item.tb_account.username,
			jenis_layanan: 'Layanan Konferensi Pers',
			judul: item.judul_kegiatan,
			file: item.surat_permohonan,
			tgl_kegiatan: item.tgl_kegiatan,
			waktu_kegiatan: item.waktu_kegiatan,
			tempat_kegiatan: item.tempat_kegiatan,
			status: item.status,
			createdAt: item.createdAt,
		};
	});

	async function getPeminformasi() {
		const response = await callAPI({
			url: `${HOST}/${VERSION}/pembaruan-informasi/lihat`,
			method: 'GET',
			token: true,
		});
		return response;
	}
	const peminformasi = await getPeminformasi();
	const modifiedPeminformasi = peminformasi.data.map((item: any) => {
		return {
			id: item.id,
			id_account: item.id_account,
			pemohon: item.tb_account.username,
			jenis_layanan: 'Layanan Pembaruan Informasi',
			judul: item.judul_permohonan,
			file: item.bahan_publikasi,
			tgl_kegiatan: null,
			waktu_kegiatan: null,
			tempat_kegiatan: null,
			status: item.status,
			createdAt: item.createdAt,
		};
	});

	async function getLiveStreaming() {
		const response = await callAPI({
			url: `${HOST}/${VERSION}/live-streaming/lihat`,
			method: 'GET',
			token: true,
		});
		return response;
	}
	const liveStreaming = await getLiveStreaming();
	const modifiedLiveStreaming = liveStreaming.data.map((item: any) => {
		return {
			id: item.id,
			id_account: item.tb_kegiatan.id_account,
			pemohon: item.tb_kegiatan.tb_account.username,
			jenis_layanan: 'Layanan Live Streaming',
			judul: item.tb_kegiatan.judul_kegiatan,
			file: item.thumbnail_kegiatan,
			tgl_kegiatan: item.tb_kegiatan.tgl_kegiatan,
			waktu_kegiatan: item.tb_kegiatan.waktu_kegiatan,
			tempat_kegiatan: item.tb_kegiatan.tempat_kegiatan,
			status: item.status,
			createdAt: item.createdAt,
		};
	});

	async function getPublikasiAgenda() {
		const response = await callAPI({
			url: `${HOST}/${VERSION}/publikasi-agenda/lihat`,
			method: 'GET',
			token: true,
		});
		return response;
	}
	const publikasiAgenda = await getPublikasiAgenda();
	const modifiedPublikasiAgenda = publikasiAgenda.data.map((item: any) => {
		return {
			id: item.id,
			id_account: item.tb_kegiatan.id_account,
			pemohon: item.tb_kegiatan.tb_account.username,
			jenis_layanan: 'Layanan Publikasi Agenda',
			judul: item.tb_kegiatan.judul_kegiatan,
			file: item.leaflet_kegiatan,
			tgl_kegiatan: item.tb_kegiatan.tgl_kegiatan,
			waktu_kegiatan: item.tb_kegiatan.waktu_kegiatan,
			tempat_kegiatan: item.tb_kegiatan.tempat_kegiatan,
			status: item.status,
			createdAt: item.createdAt,
		};
	});

	async function getPublikasMajalah() {
		const response = await callAPI({
			url: `${HOST}/${VERSION}/majalah/lihat`,
			method: 'GET',
			token: true,
		});
		return response;
	}
	const publikasiMajalah = await getPublikasMajalah();
	const modifiedPublikasiMajalah = publikasiMajalah.data.map((item: any) => {
		return {
			id: item.id,
			id_account: item.tb_kegiatan.id_account,
			pemohon: item.tb_kegiatan.tb_account.username,
			jenis_layanan: 'Layanan Publikasi di Majalah',
			judul: item.tb_kegiatan.judul_kegiatan,
			file: item.bahan_publikasi,
			tgl_kegiatan: item.tb_kegiatan.tgl_kegiatan,
			waktu_kegiatan: item.tb_kegiatan.waktu_kegiatan,
			tempat_kegiatan: item.tb_kegiatan.tempat_kegiatan,
			status: item.status,
			createdAt: item.createdAt,
		};
	});

	async function getOpini() {
		const response = await callAPI({
			url: `${HOST}/${VERSION}/opini/lihat`,
			method: 'GET',
			token: true,
		});
		return response;
	}
	const opini = await getOpini();
	const modifiedOpini = opini.data.map((item: any) => {
		return {
			id: item.id,
			id_account: item.id_account,
			pemohon: item.tb_account.username,
			jenis_layanan: 'Layanan Opini di Media',
			judul: item.judul_pembahasan,
			file: item.bahan_publikasi,
			tgl_kegiatan: null,
			waktu_kegiatan: null,
			tempat_kegiatan: null,
			status: item.status,
			createdAt: item.createdAt,
		};
	});

	async function getVideotron() {
		const response = await callAPI({
			url: `${HOST}/${VERSION}/videotron/lihat`,
			method: 'GET',
			token: true,
		});
		return response;
	}

	const videotron = await getVideotron();
	const modifiedVideotron = videotron.data.map((item: any) => {
		return {
			id: item.id,
			id_account: item.tb_kegiatan.id_account,
			pemohon: item.tb_kegiatan.tb_account.username,
			jenis_layanan: 'Layanan Penayangan Konten di Videotron',
			judul: item.tb_kegiatan.judul_kegiatan,
			file: item.bahan_publikasi,
			tgl_kegiatan: item.tb_kegiatan.tgl_kegiatan,
			waktu_kegiatan: item.tb_kegiatan.waktu_kegiatan,
			tempat_kegiatan: item.tb_kegiatan.tempat_kegiatan,
			status: item.status,
			createdAt: item.createdAt,
		};
	});

	async function getBaliho() {
		const response = await callAPI({
			url: `${HOST}/${VERSION}/baliho/lihat`,
			method: 'GET',
			token: true,
		});
		return response;
	}
	const baliho = await getBaliho();
	const modifiedBaliho = baliho.data.map((item: any) => {
		return {
			id: item.id,
			id_account: item.tb_kegiatan.id_account,
			pemohon: item.tb_kegiatan.tb_account.username,
			jenis_layanan: 'Layanan Pemasangan Baliho',
			judul: item.tb_kegiatan.judul_kegiatan,
			file: item.bahan_publikasi,
			tgl_kegiatan: item.tb_kegiatan.tgl_kegiatan,
			waktu_kegiatan: item.tb_kegiatan.waktu_kegiatan,
			tempat_kegiatan: item.tb_kegiatan.tempat_kegiatan,
			status: item.status,
			createdAt: item.createdAt,
		};
	});

	const dataResults = [
		...modifiedPeliputan,
		...modifiedKonpers,
		...modifiedPeminformasi,
		...modifiedLiveStreaming,
		...modifiedPublikasiAgenda,
		...modifiedPublikasiMajalah,
		...modifiedOpini,
		...modifiedVideotron,
		...modifiedBaliho,
	];

	const sortedResults = dataResults.sort((a, b) => {
		const dateA = new Date(a.createdAt).getTime();
		const dateB = new Date(b.createdAt).getTime();
		return dateB - dateA;
	});

	const URLparams = new URLSearchParams(params);

	const page = parseInt(URLparams.get('page') || '0', 10);
	const rowsPerPage = parseInt(URLparams.get('rowsPerPage') || '5', 10);
	const startIndex = page * rowsPerPage;
	const endIndex = startIndex + rowsPerPage;
	const slicedData = sortedResults.slice(startIndex, endIndex);

	const totalRow = sortedResults.length;
	const totalPage = Math.ceil(totalRow / rowsPerPage);

	const results = {
		error: false,
		message: 'Berhasil menampilkan Riwayat Ajuan Layanan',
		page: page,
		totalPage: totalPage,
		totalRow: totalRow,
		rowsPerPage: rowsPerPage,
		data: slicedData,
	};

	return results;
}

export async function getAllRiwayatAjuanUser(params: string) {
	const id_account = getAccountID();
	const epParams = 'limit=50';

	let modifiedPeliputan = [];
	let modifiedKonpers = [];
	let modifiedPeminformasi = [];
	let modifiedLiveStreaming = [];
	let modifiedPublikasiAgenda = [];
	let modifiedPublikasiMajalah = [];
	let modifiedOpini = [];
	let modifiedVideotron = [];
	let modifiedBaliho = [];

	if (id_account) {
		const peliputan = await getAllLayananPeliputanUser(id_account, epParams);
		if (peliputan.data) {
			modifiedPeliputan = peliputan.data.map((item: any) => {
				return {
					id: item.id,
					id_account: item.tb_kegiatan.id_account,
					pemohon: item.tb_kegiatan.tb_account.username,
					jenis_layanan: 'Layanan Peliputan',
					judul: item.tb_kegiatan.judul_kegiatan,
					file: item.leaflet_kegiatan,
					tgl_kegiatan: item.tb_kegiatan.tgl_kegiatan,
					waktu_kegiatan: item.tb_kegiatan.waktu_kegiatan,
					tempat_kegiatan: item.tb_kegiatan.tempat_kegiatan,
					status: item.status,
					createdAt: item.createdAt,
				};
			});
		}

		const konpers = await getAllLayananKonpersUser(id_account, epParams);
		if (konpers.data) {
			modifiedKonpers = konpers.data.map((item: any) => {
				return {
					id: item.id,
					id_account: item.id_account,
					pemohon: item.tb_account.username,
					jenis_layanan: 'Layanan Konferensi Pers',
					judul: item.judul_kegiatan,
					file: item.surat_permohonan,
					tgl_kegiatan: item.tgl_kegiatan,
					waktu_kegiatan: item.waktu_kegiatan,
					tempat_kegiatan: item.tempat_kegiatan,
					status: item.status,
					createdAt: item.createdAt,
				};
			});
		}

		const peminformasi = await getAllLayananPeminformasiUser(
			id_account,
			epParams,
		);
		if (konpers.data) {
			modifiedPeminformasi = peminformasi.data.map((item: any) => {
				return {
					id: item.id,
					id_account: item.id_account,
					pemohon: item.tb_account.username,
					jenis_layanan: 'Layanan Pembaruan Informasi',
					judul: item.judul_permohonan,
					file: item.bahan_publikasi,
					tgl_kegiatan: null,
					waktu_kegiatan: null,
					tempat_kegiatan: null,
					status: item.status,
					createdAt: item.createdAt,
				};
			});
		}

		const liveStreaming = await getAllLayananLiveStreamingUser(
			id_account,
			epParams,
		);
		if (liveStreaming.data) {
			modifiedLiveStreaming = liveStreaming.data.map((item: any) => {
				return {
					id: item.id,
					id_account: item.tb_kegiatan.id_account,
					pemohon: item.tb_kegiatan.tb_account.username,
					jenis_layanan: 'Layanan Live Streaming',
					judul: item.tb_kegiatan.judul_kegiatan,
					file: item.thumbnail_kegiatan,
					tgl_kegiatan: item.tb_kegiatan.tgl_kegiatan,
					waktu_kegiatan: item.tb_kegiatan.waktu_kegiatan,
					tempat_kegiatan: item.tb_kegiatan.tempat_kegiatan,
					status: item.status,
					createdAt: item.createdAt,
				};
			});
		}

		const publikasiAgenda = await getAllLayananPublikasiAgendaUser(
			id_account,
			epParams,
		);
		if (publikasiAgenda.data) {
			modifiedPublikasiAgenda = publikasiAgenda.data.map((item: any) => {
				return {
					id: item.id,
					id_account: item.tb_kegiatan.id_account,
					pemohon: item.tb_kegiatan.tb_account.username,
					jenis_layanan: 'Layanan Publikasi Agenda',
					judul: item.tb_kegiatan.judul_kegiatan,
					file: item.leaflet_kegiatan,
					tgl_kegiatan: item.tb_kegiatan.tgl_kegiatan,
					waktu_kegiatan: item.tb_kegiatan.waktu_kegiatan,
					tempat_kegiatan: item.tb_kegiatan.tempat_kegiatan,
					status: item.status,
					createdAt: item.createdAt,
				};
			});
		}

		const publikasiMajalah = await getAllLayananMajalahUser(
			id_account,
			epParams,
		);
		if (publikasiMajalah.data) {
			modifiedPublikasiMajalah = publikasiMajalah.data.map((item: any) => {
				return {
					id: item.id,
					id_account: item.tb_kegiatan.id_account,
					pemohon: item.tb_kegiatan.tb_account.username,
					jenis_layanan: 'Layanan Publikasi di Majalah',
					judul: item.tb_kegiatan.judul_kegiatan,
					file: item.bahan_publikasi,
					tgl_kegiatan: item.tb_kegiatan.tgl_kegiatan,
					waktu_kegiatan: item.tb_kegiatan.waktu_kegiatan,
					tempat_kegiatan: item.tb_kegiatan.tempat_kegiatan,
					status: item.status,
					createdAt: item.createdAt,
				};
			});
		}

		const opini = await getAllLayananOpiniUser(id_account, epParams);
		if (opini.data) {
			modifiedOpini = opini.data.map((item: any) => {
				return {
					id: item.id,
					id_account: item.id_account,
					pemohon: item.tb_account.username,
					jenis_layanan: 'Layanan Opini di Media',
					judul: item.judul_pembahasan,
					file: item.bahan_publikasi,
					tgl_kegiatan: null,
					waktu_kegiatan: null,
					tempat_kegiatan: null,
					status: item.status,
					createdAt: item.createdAt,
				};
			});
		}

		const videotron = await getAllLayananVideotronUser(id_account, epParams);
		if (videotron.data) {
			modifiedVideotron = videotron.data.map((item: any) => {
				return {
					id: item.id,
					id_account: item.tb_kegiatan.id_account,
					pemohon: item.tb_kegiatan.tb_account.username,
					jenis_layanan: 'Layanan Penayangan Konten di Videotron',
					judul: item.tb_kegiatan.judul_kegiatan,
					file: item.bahan_publikasi,
					tgl_kegiatan: item.tb_kegiatan.tgl_kegiatan,
					waktu_kegiatan: item.tb_kegiatan.waktu_kegiatan,
					tempat_kegiatan: item.tb_kegiatan.tempat_kegiatan,
					status: item.status,
					createdAt: item.createdAt,
				};
			});
		}

		const baliho = await getAllLayananBalihoUser(id_account, epParams);
		if (baliho.data) {
			modifiedBaliho = baliho.data.map((item: any) => {
				return {
					id: item.id,
					id_account: item.tb_kegiatan.id_account,
					pemohon: item.tb_kegiatan.tb_account.username,
					jenis_layanan: 'Layanan Pemasangan Baliho',
					judul: item.tb_kegiatan.judul_kegiatan,
					file: item.bahan_publikasi,
					tgl_kegiatan: item.tb_kegiatan.tgl_kegiatan,
					waktu_kegiatan: item.tb_kegiatan.waktu_kegiatan,
					tempat_kegiatan: item.tb_kegiatan.tempat_kegiatan,
					status: item.status,
					createdAt: item.createdAt,
				};
			});
		}

		const dataResults = [
			...modifiedPeliputan,
			...modifiedKonpers,
			...modifiedPeminformasi,
			...modifiedLiveStreaming,
			...modifiedPublikasiAgenda,
			...modifiedPublikasiMajalah,
			...modifiedOpini,
			...modifiedVideotron,
			...modifiedBaliho,
		];

		const sortedResults = dataResults.sort((a, b) => {
			const dateA = new Date(a.createdAt).getTime();
			const dateB = new Date(b.createdAt).getTime();
			return dateB - dateA;
		});

		const URLparams = new URLSearchParams(params);

		const page = parseInt(URLparams.get('page') || '0', 10);
		const rowsPerPage = parseInt(URLparams.get('rowsPerPage') || '5', 10);
		const startIndex = page * rowsPerPage;
		const endIndex = startIndex + rowsPerPage;
		const slicedData = sortedResults.slice(startIndex, endIndex);

		const totalRow = sortedResults.length;
		const totalPage = Math.ceil(totalRow / rowsPerPage);

		const results = {
			error: false,
			message: 'Berhasil menampilkan Riwayat Ajuan Layanan',
			page: page,
			totalPage: totalPage,
			totalRow: totalRow,
			rowsPerPage: rowsPerPage,
			data: slicedData,
		};

		return results;
	}
}
