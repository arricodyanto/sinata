import AutocompleteMultiple from '@/common/components/atoms/AutocompleteMultiple';
import AutocompleteTitle from '@/common/components/atoms/AutocompleteTitle';
import ButtonBasic from '@/common/components/atoms/ButtonBasic';
import CollapsibleAlert from '@/common/components/atoms/CollapsibleAlert';
import DialogConfirmation from '@/common/components/atoms/DialogConfirmation';
import FileUpload from '@/common/components/atoms/FileUpload';
import SelectLabel from '@/common/components/atoms/SelectLabel';
import TextfieldLabel from '@/common/components/atoms/TextfieldLabel';
import DisabledFormDataKegiatan from '@/common/components/organism/FormDataKegiatan/DisabledFormDataKegiatan';
import { TFormTambahLayananProps } from '@/common/types';
import { getAccountID } from '@/common/utils/decryptToken';
import {
	nameuserToArray,
	nameuserToString,
} from '@/common/utils/nameuserFormatter.util';
import { getAllUsers } from '@/services/accounts';
import {
	getAllDataKegiatan,
	getAllDataKegiatanUser,
} from '@/services/data-kegiatan';
import { getAllLayananPeliputan } from '@/services/layanan-peliputan';
import { Box, MenuItem, Stack, Typography } from '@mui/material';
import { FilePondFile } from 'filepond';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

const form = new FormData();

export default function PeliputanForm(props: TFormTambahLayananProps) {
	const { onSave, admin } = props;
	const { isReady } = useRouter();

	const isAdmin = admin ? true : false;
	const [autocomplete, setAutocomplete] = useState<string>(''); // Handle autocomplete
	const [dataKegiatan, setDataKegiatan] = useState<Array<any>>([]); // Handle autocomplete
	const [peliputan, setPeliputan] = useState<Array<any>>([]);
	const [users, setUsers] = useState<Array<any>>([]);
	const [kegiatan, setKegiatan] = useState<any>({});
	const [PIC, setPIC] = useState('');

	const getDataKegiatan = useCallback(async () => {
		if (isAdmin) {
			const response = await getAllDataKegiatan();
			setDataKegiatan(response.data);
		}
	}, [getAllDataKegiatan]);

	const id_account = getAccountID();

	const getDataKegiatanUser = useCallback(async () => {
		if (!isAdmin) {
			if (id_account) {
				const response = await getAllDataKegiatanUser(id_account);
				setDataKegiatan(response.data);
			}
		}
	}, [getAllDataKegiatanUser]);

	const getPeliputan = useCallback(async () => {
		const getDateFromRows = kegiatan.tgl_kegiatan;
		const params = `tgl=${getDateFromRows}`;
		const response = await getAllLayananPeliputan(params);
		if (response.error === false) {
			setPeliputan(response.data);
		}
	}, [kegiatan]);

	const getUsers = useCallback(async () => {
		const params = 'role=Admin Role 9';
		const response = await getAllUsers(params);
		setUsers(response.data);
	}, [getAllUsers]);

	useEffect(() => {
		if (isReady) {
			if (isAdmin) {
				getUsers();
				getDataKegiatan();
				getPeliputan();
			}
			if (!isAdmin) {
				getDataKegiatanUser();
			}
		}
	}, [isReady]);

	useEffect(() => {
		if (kegiatan) {
			getPeliputan();
		}
	}, [getPeliputan, kegiatan]);

	const handleJudulChange = (event: any, value: any) => {
		setAutocomplete(value?.judul_kegiatan);
		setKegiatan(value ? value : {});
		form.set('id_kegiatan', value?.id);
	};

	const [open, setOpen] = useState(false);
	const handleDialogOpen = () => {
		setOpen(true);
	};
	const handleDialogClose = () => {
		setOpen(false);
	};

	const handleSubmit = () => {
		onSave(form);
		setOpen(false);
	};

	const handlePICChange = (event: any, value: any) => {
		const newPICArray = value.map((item: any) => item.name || '');
		form.set('pic', nameuserToString(newPICArray));
		setPIC(nameuserToString(newPICArray));
	};

	const isOptionDisabled = (option: any) => {
		const getPIC = peliputan.map((item) => item.pic);
		const stringPIC = nameuserToString(getPIC);
		const formattedPIC = nameuserToArray(stringPIC);
		return (
			nameuserToArray(PIC).some((item: any) => item.name === option.name) ||
			formattedPIC.some((item: any) => item.name === option.name)
		);
	};
	return (
		<Box>
			{!isAdmin ? (
				<CollapsibleAlert
					type='warning'
					className='mb-4'>
					<Typography
						className='text-dark'
						variant='body2'>
						Pastikan Anda telah menambahkan detil informasi kegiatan Anda ke
						sistem! Jika belum, silakan menuju ke halaman{' '}
						<Link
							href='/users/tambah-kegiatan'
							className='underline hover:opacity-75 transition'>
							Tambah Kegiatan
						</Link>
					</Typography>
				</CollapsibleAlert>
			) : (
				<CollapsibleAlert
					type='warning'
					className='mb-4'>
					<Typography
						className='text-dark'
						variant='body2'>
						Pastikan Anda telah menambahkan detil informasi kegiatan Anda ke
						sistem! Jika belum, silakan menuju ke halaman{' '}
						<Link
							href='/admins/daftar-kegiatan/tambah'
							className='underline hover:opacity-75 transition'>
							Tambah Kegiatan
						</Link>
					</Typography>
				</CollapsibleAlert>
			)}
			<AutocompleteTitle
				name='judul_kegiatan'
				label='Judul Kegiatan'
				data={dataKegiatan}
				onChange={handleJudulChange}
			/>
			<DisabledFormDataKegiatan judul_kegiatan={autocomplete} />
			<FileUpload
				name='leaflet_kegiatan'
				label='Leaflet Kegiatan'
				onupdatefiles={(fileItems: FilePondFile[]) => {
					const file = fileItems[0]?.file;
					if (file) {
						form.set('leaflet_kegiatan', file);
					}
				}}
				allowMultiple={false}
				allowReorder={false}
				acceptedFileTypes={['image/png', 'image/jpeg']}
				labelFileTypeNotAllowed='Hanya file JPEG dan PNG yang diijinkan'
			/>
			<FileUpload
				label='Lampiran File'
				onupdatefiles={(fileItems: FilePondFile[]) => {
					const file = fileItems[0]?.file;
					if (file) {
						form.set('bahan_publikasi', file);
					}
				}}
				allowMultiple={false}
				allowReorder={false}
				acceptedFileTypes={[
					'application/pdf',
					'application/msword',
					'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
				]}
				labelFileTypeNotAllowed='Hanya file Doc dan PDF yang diijinkan'
			/>
			{isAdmin ? (
				<>
					<SelectLabel
						label='Status'
						defaultValue='Pending'
						onChange={(event: any) => form.set('status', event.target.value)}>
						<MenuItem
							value=''
							disabled>
							Pilih salah satu
						</MenuItem>
						<MenuItem value='Pending'>Pending</MenuItem>
						<MenuItem value='Approved & On Progress'>
							Approved & On Progress
						</MenuItem>
						<MenuItem value='Completed'>Complete</MenuItem>
						<MenuItem value='Rejected'>Rejected</MenuItem>
					</SelectLabel>
					<FileUpload
						name='disposisi'
						label='Disposisi'
						allowMultiple={false}
						allowReorder={false}
						onupdatefiles={(fileItems: FilePondFile[]) => {
							const file = fileItems[0]?.file;
							if (file) {
								form.set('disposisi', file);
							}
						}}
						acceptedFileTypes={['application/pdf']}
						labelFileTypeNotAllowed='Hanya file PDF yang diijinkan'
					/>
					<AutocompleteMultiple
						name='pic'
						label='PIC'
						data={users}
						getOptionLabel={(data) => data.name}
						getOptionDisabled={isOptionDisabled}
						onChange={handlePICChange}
					/>
					<TextfieldLabel
						label='Keterangan'
						placeholder='Keterangan tambahan jika ajuan layanan ditolak.'
						multiline
						minRows={2}
						maxRows={5}
						onChange={(event: any) =>
							form.set('keterangan', event.target.value)
						}
					/>
					<ButtonBasic
						onClick={handleDialogOpen}
						variant='contained'>
						Tambahkan Ajuan
					</ButtonBasic>
				</>
			) : null}
			{!isAdmin ? (
				<>
					<CollapsibleAlert
						type='info'
						className='mb-4'>
						<Typography
							className='text-dark'
							variant='body2'>
							Sebelum menekan tombol <b>Ajukan Layanan</b>, pastikan data yang
							Anda masukkan sudah benar!
						</Typography>
					</CollapsibleAlert>
					<ButtonBasic
						onClick={handleDialogOpen}
						variant='contained'>
						Ajukan Layanan
					</ButtonBasic>
				</>
			) : null}
			<DialogConfirmation
				title='Tambahkan Data'
				body='Apakah Anda yakin ingin menambahkan data ini? Pastikan semua data telah terisi dengan benar.'
				open={open}
				onClose={handleDialogClose}>
				<Stack
					direction='row'
					spacing={1}
					className='mt-4 px-2 mb-4'>
					<ButtonBasic
						variant='contained'
						onClick={handleDialogClose}>
						Batal
					</ButtonBasic>
					<ButtonBasic
						variant='contained'
						color='success'
						onClick={handleSubmit}>
						Tambahkan
					</ButtonBasic>
				</Stack>
			</DialogConfirmation>
		</Box>
	);
}
