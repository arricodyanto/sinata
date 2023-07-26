import { AutocompleteProps } from '@mui/material';

export type AutocompleteTitleProps = Partial<
	AutocompleteProps<any, boolean, boolean, boolean>
> & {
	label?: string;
	name?: string;
	data: {
		id: number;
		id_account: number;
		judul_kegiatan: string;
		des_kegiatan: string;
		sifat_kegiatan: string;
		tgl_kegiatan: string;
		tempat_kegiatan: string;
		waktu_kegiatan: string;
		surat_permohonan: string;
		sik: string;
	}[];
};

export type AutocompleteCustomProps = Partial<
	AutocompleteProps<any, boolean, boolean, boolean>
> & {
	label?: string;
	name?: string;
	getOptionDisabled?: any;
	data: {
		id: number;
		username: string;
		email: string;
		name: string;
		password: string;
		no_identitas: string;
		unit: string;
		token: string;
		role: string;
		kontak: string;
		img_profil: string;
	}[];
};
