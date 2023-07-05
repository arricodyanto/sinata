import callAPI from './config';

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
      file: item.leaflet_kegiatan,
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
      tgl_kegiatan: item.tgl_kegiatan,
      waktu_kegiatan: item.waktu_kegiatan,
      tempat_kegiatan: item.tempat_kegiatan,
      status: item.status,
      createdAt: item.createdAt,
    };
  });

  const dataResults = [
    ...modifiedPeliputan,
    ...modifiedKonpers,
    ...modifiedPeminformasi,
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

  //   async function getKonpers() {
  //     const response = await callAPI({
  //       url: `${HOST}/${VERSION}/peliputan/lihat`,
  //       method: 'GET',
  //       token: true,
  //     });
  //     return response;
  //   }
}
