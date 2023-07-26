import AutocompleteCustom from '@/common/components/atoms/AutocompleteCustom';
import ButtonBasic from '@/common/components/atoms/ButtonBasic';
import DatePickerBasic from '@/common/components/atoms/DatePickerBasic';
import DialogConfirmation from '@/common/components/atoms/DialogConfirmation';
import SelectLabel from '@/common/components/atoms/SelectLabel';
import TextfieldLabel from '@/common/components/atoms/TextfieldLabel';
import TimePickerBasic from '@/common/components/atoms/TimePickerBasic';
import DisabledFormDataKegiatan from '@/common/components/organism/FormDataKegiatan/DisabledFormDataKegiatan';
import { TFormTambahArsipProps } from '@/common/types';
import {
	dateISOFormatter,
	timeFormatter,
	timeISOFormatter,
} from '@/common/utils/dateFormatter.util';
import { kategoriBerita } from '@/pages/admins/arsip/pers';
import {
	Button,
	FormControl,
	FormLabel,
	MenuItem,
	Stack,
	Typography,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import CollapsibleAlert from '../../atoms/CollapsibleAlert';
import { getAllUsers } from '@/services/accounts';
import { getAllLayananPeliputan } from '@/services/layanan-peliputan';
import { authArsipPers } from '@/common/middlewares/auth';
import { toast } from 'react-toastify';

export default function TambahArsipPers(props: TFormTambahArsipProps) {
	const { onSave } = props;
	const { isReady, back } = useRouter();
	const [open, setOpen] = useState(false);

	const api_image = process.env.NEXT_PUBLIC_API_IMG;

	const [id_peliputan, setId_peliputan] = useState('');
	const [no_rilis, setNo_rilis] = useState('');
	const [judul_berita, setJudul_berita] = useState('');
	const [kategori, setKategori] = useState('Berita Terkini');
	const [jurnalis, setJurnalis] = useState('');
	const [prarilis, setPrarilis] = useState('');
	const [rilis, setRilis] = useState('');
	const [tgl_upload, setTgl_upload] = useState('');
	const [waktu_upload, setWaktu_upload] = useState('');
	const [admin, setAdmin] = useState('');
	const [link_berita, setLink_berita] = useState('');
	const [judul_terjemahan, setJudul_terjemahan] = useState('');
	const [penerjemah, setPenerjemah] = useState('');
	const [naskah_terj, setNaskah_terj] = useState('');
	const [tgl_upload_terj, setTgl_upload_terj] = useState('');
	const [waktu_upload_terj, setWaktu_upload_terj] = useState('');
	const [admin_terj, setAdmin_terj] = useState('');
	const [link_terj, setLink_terj] = useState('');
	const [status_publikasi, setStatus_publikasi] = useState('Pending');

	const [autocomplete, setAutocomplete] = useState<string>('');

	const handleJudulChange = (event: any, value: any) => {
		setAutocomplete(value?.tb_kegiatan.judul_kegiatan);
		setId_peliputan(value?.id);
		setDetailPeliputan(value ? [value] : []);
	};

	const handleStatusPublikasiChange = (event: any) => {
		setStatus_publikasi(event.target.value);
	};
	const handleJurnalisChange = (event: any, value: any) => {
		setJurnalis(value?.name);
	};
	const handleAdminChange = (event: any, value: any) => {
		setAdmin(value?.name);
	};
	const handlePenerjemahChange = (event: any, value: any) => {
		setPenerjemah(value?.name);
	};
	const handleAdminTerjChange = (event: any, value: any) => {
		setAdmin_terj(value?.name);
	};

	const handleDialogOpen = () => {
		setOpen(true);
	};
	const handleDialogClose = () => {
		setOpen(false);
	};

	const [detailPeliputan, setDetailPeliputan] = useState<Array<any>>([]);
	const [peliputans, setPeliputans] = useState<Array<any>>([]);
	const [users, setUsers] = useState<Array<any>>([]);

	const handleTambah = async () => {
		const form = {
			id_peliputan,
			no_rilis,
			judul_berita,
			kategori,
			jurnalis,
			prarilis,
			rilis,
			tgl_upload,
			waktu_upload,
			admin,
			link_berita,
			judul_terjemahan,
			penerjemah,
			naskah_terj,
			tgl_upload_terj,
			waktu_upload_terj,
			admin_terj,
			link_terj,
			status_publikasi,
		};
		onSave(form);
		setOpen(false);
	};

	const getPeliputan = useCallback(async () => {
		const params = 'limit=999';
		const response = await getAllLayananPeliputan(params);
		setPeliputans(response.data);
	}, [getAllLayananPeliputan]);

	const getUsers = useCallback(async () => {
		const response = await getAllUsers();
		setUsers(response.data);
	}, [getAllUsers]);
	useEffect(() => {
		if (isReady) {
			getUsers();
			getPeliputan();
		}
	}, [isReady]);
	return (
		<>
			<CollapsibleAlert
				type='warning'
				className='mb-4'>
				<Typography
					className='text-dark'
					variant='body2'>
					Pastikan detail informasi kegiatan dan layanan peliputan telah
					ditambahkan pada sistem! Jika belum, silakan menuju ke halaman{' '}
					<Link
						href='/admins/daftar-kegiatan/tambah'
						className='underline hover:opacity-75 transition'>
						Tambah Kegiatan
					</Link>{' '}
					untuk menambahkan data kegiatan.
				</Typography>
			</CollapsibleAlert>
			<AutocompleteCustom
				name='judul_kegiatan'
				label='Judul Kegiatan'
				data={peliputans}
				getOptionLabel={(data) => data.tb_kegiatan.judul_kegiatan}
				onChange={handleJudulChange}
			/>
			<DisabledFormDataKegiatan judul_kegiatan={autocomplete} />
			{detailPeliputan.length > 0
				? detailPeliputan.map((item: any) => {
						return (
							<>
								<FormLabel className='mb-2 text-sm'>Leaflet Kegiatan</FormLabel>
								<Stack
									direction={{ xs: 'column', md: 'row' }}
									spacing={2}
									alignItems='flex-start'
									className='mb-4'>
									{item.leaflet_kegiatan ? (
										<Link
											href={`${api_image}/${item.leaflet_kegiatan}`}
											target='blank'
											className='w-[20rem] mt-2'>
											<Image
												src={`${api_image}/${item.leaflet_kegiatan}`}
												alt={`${item.tb_kegiatan.judul_kegiatan}`}
												quality={80}
												layout='responsive'
												width={20}
												height={20}
												className='rounded-lg'
											/>
										</Link>
									) : (
										<Typography
											variant='body2'
											className='italic'>
											Belum ada data.
										</Typography>
									)}
									<Button
										size='small'
										disableElevation
										className='rounded-md capitalize py-1 px-3 mt-2'
										disabled>
										Change File
									</Button>
								</Stack>
								<SelectLabel
									name='status'
									label='Status Layanan Peliputan'
									defaultValue={item.status}
									disabled>
									<MenuItem value='Pending'>Pending</MenuItem>
									<MenuItem value='Approved & On Progress'>
										Approved & On Progress
									</MenuItem>
									<MenuItem value='Completed'>Complete</MenuItem>
									<MenuItem value='Rejected'>Rejected</MenuItem>
								</SelectLabel>
							</>
						);
				  })
				: null}
			<TextfieldLabel
				name='no_rilis'
				label='No Rilis'
				value={no_rilis}
				onChange={(event: any) => setNo_rilis(event.target.value)}
				placeholder='xx/xxx/xxxxx'
			/>
			<TextfieldLabel
				name='judul_berita'
				label='Judul Berita'
				value={judul_berita}
				onChange={(event: any) => setJudul_berita(event.target.value)}
				placeholder='Judul Berita'
			/>
			<Stack
				direction='row'
				spacing={1}>
				<SelectLabel
					name='kategori'
					label='Kategori Berita'
					value={kategori}
					onChange={(event: any) => setKategori(event.target.value)}
					className='capitalize'>
					<MenuItem
						value=''
						disabled>
						Pilih salah satu
					</MenuItem>
					{kategoriBerita.map((item, index) => (
						<MenuItem
							value={item}
							key={index}
							className='capitalize'>
							{item}
						</MenuItem>
					))}
				</SelectLabel>
				<AutocompleteCustom
					name='jurnalis'
					label='Jurnalis'
					data={users}
					getOptionLabel={(data) => data.name}
					onChange={handleJurnalisChange}
				/>
			</Stack>
			<TextfieldLabel
				name='prarilis'
				label='Prarilis'
				value={prarilis}
				onChange={(event: any) => setPrarilis(event.target.value)}
				multiline
				maxRows={16}
				placeholder='Naskah Prarilis'
			/>
			<TextfieldLabel
				name='rilis'
				label='Rilis'
				value={rilis}
				onChange={(event: any) => setRilis(event.target.value)}
				multiline
				maxRows={16}
				placeholder='Naskah Rilis Berita setelah Editing'
			/>
			<Stack
				direction='row'
				spacing={1}
				className='mb-4'>
				<FormControl className='w-full'>
					<FormLabel className='mb-1 text-sm'>Tanggal Rilis</FormLabel>
					<DatePickerBasic
						onChange={(value: any) => setTgl_upload(dateISOFormatter(value))}
					/>
				</FormControl>
				<FormControl className='w-full'>
					<FormLabel className='mb-1 text-sm'>Waktu Rilis</FormLabel>
					<TimePickerBasic
						onChange={(value: any) => setWaktu_upload(timeISOFormatter(value))}
					/>
				</FormControl>
			</Stack>
			<Stack
				direction='row'
				spacing={1}>
				<AutocompleteCustom
					label='Admin'
					data={users}
					onChange={handleAdminChange}
					getOptionLabel={(data) => data.name}
				/>
				<TextfieldLabel
					name='link_berita'
					label='Tautan Berita'
					value={link_berita}
					onChange={(event: any) => setLink_berita(event.target.value)}
					placeholder='Tautan Berita Terpublikasi'
				/>
			</Stack>
			<TextfieldLabel
				name='judul_terjemahan'
				label='Judul Terjemahan (EN)'
				value={judul_terjemahan}
				onChange={(event: any) => setJudul_terjemahan(event.target.value)}
				placeholder='Judul Berita untuk Bahasa Inggris'
			/>
			<AutocompleteCustom
				label='Penerjemah'
				data={users}
				onChange={handlePenerjemahChange}
				getOptionLabel={(data) => data.name}
			/>
			<TextfieldLabel
				name='naskah_terj'
				label='Naskah Terjemahan'
				value={naskah_terj}
				onChange={(event: any) => setNaskah_terj(event.target.value)}
				multiline
				maxRows={16}
				placeholder='Naskah Terjemahan dari Rilis Berita'
			/>
			<Stack
				direction='row'
				spacing={1}
				className='mb-4'>
				<FormControl className='w-full'>
					<FormLabel className='mb-1 text-sm'>
						Tanggal Rilis Terjemahan
					</FormLabel>
					<DatePickerBasic
						onChange={(value: any) =>
							setTgl_upload_terj(dateISOFormatter(value))
						}
					/>
				</FormControl>
				<FormControl className='w-full'>
					<FormLabel className='mb-1 text-sm'>Waktu Rilis Terjemahan</FormLabel>
					<TimePickerBasic
						onChange={(value: any) =>
							setWaktu_upload_terj(timeFormatter(value))
						}
					/>
				</FormControl>
			</Stack>
			<Stack
				direction='row'
				spacing={1}>
				<AutocompleteCustom
					label='Admin Terjemahan'
					data={users}
					onChange={handleAdminTerjChange}
					getOptionLabel={(data) => data.name}
				/>
				<TextfieldLabel
					name='link_terj'
					label='Tautan Terjemahan'
					value={link_terj}
					onChange={(event: any) => setLink_terj(event.target.value)}
					placeholder='Tautan Berita untuk Bahasa Inggris'
				/>
			</Stack>
			<SelectLabel
				name='status'
				label='Status Publikasi'
				value={status_publikasi}
				onChange={handleStatusPublikasiChange}>
				<MenuItem value='Pending'>Pending</MenuItem>
				<MenuItem value='ID'>ID</MenuItem>
				<MenuItem value='EN'>EN</MenuItem>
				<MenuItem value='Selesai'>Selesai</MenuItem>
			</SelectLabel>
			<ButtonBasic
				type='submit'
				variant='contained'
				onClick={handleDialogOpen}>
				Tambahkan Data
			</ButtonBasic>
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
						onClick={handleTambah}>
						Tambahkan
					</ButtonBasic>
				</Stack>
			</DialogConfirmation>
		</>
	);
}
