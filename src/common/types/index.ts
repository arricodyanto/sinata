import React from 'react';
import { FilePondProps } from 'react-filepond';

export type TTableRiwayatProps = {
	rows: {
		jenisLayanan: string;
		judulKegiatan: string;
		tanggal: string;
		waktu: string;
		tempat: string;
		status: string;
	}[];
};

export type TFormEditLayananProps = {
	data: Array<any>;
	id: any;
	admin?: boolean;
};

export type TDisabledFormDataKegiatanProps = {
	judul_kegiatan: string;
};

export type TDialogConfirmation = {
	title?: string;
	body: string;
	open: boolean;
	onClose: () => void;
	children?: React.ReactNode;
};

export type TFileUploadProps = Partial<FilePondProps> & {
	label?: string;
};

export type TTambahKegiatanFormProps = {
	onSave: (form: any) => void;
	admin?: Boolean;
};

export type TTambahAkunFormProps = {
	onSave: (form: object) => void;
	isLoading?: boolean;
};

export type TFormTambahLayananProps = {
	onSave: (form: any) => void;
	admin?: boolean;
};

export type TFormTambahArsipProps = {
	onSave: (form: any) => void;
};

export type TTableKegiatanProps = {
	admin?: boolean;
};

export type TStatusStepperProps = {
	label?: string;
	status: string;
};
