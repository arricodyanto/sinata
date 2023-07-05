export type TRiwayatKegiatanProps = {
  rows: {
    judulKegiatan: string;
    deskripsi: string;
    tanggal: string;
    waktu: string;
    tempat: string;
  }[];
};

type TColumn = {
  id: number;
  label: string;
  source?: string;
};

type TRow = {
  [key: string]: any;
};

export type TTableDataProps = {
  headers: string[];
  columns: TColumn[];
  rows: TRow[];
  status: Boolean;
  addButton?: React.ReactNode;
  addPublikasiStatus?: boolean;
  page: number;
  limit: number;
  totalRow: number;
  actionOnClick: (index: number) => void;
  changedPage: (page: number) => void;
  changedLimit: (limit: number) => void;
};

export type TTableDataSkeletonProps = {
  headers: string[];
  addButton?: React.ReactNode;
};
