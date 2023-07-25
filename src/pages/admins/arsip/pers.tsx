import AutocompleteCustom from '@/common/components/atoms/AutocompleteCustom';
import ButtonBasic from '@/common/components/atoms/ButtonBasic';
import ButtonIcon from '@/common/components/atoms/ButtonIcon';
import DatePickerBasic from '@/common/components/atoms/DatePickerBasic';
import DialogConfirmation from '@/common/components/atoms/DialogConfirmation';
import SelectLabel from '@/common/components/atoms/SelectLabel';
import TextfieldLabel from '@/common/components/atoms/TextfieldLabel';
import TimePickerBasic from '@/common/components/atoms/TimePickerBasic';
import TitlePage from '@/common/components/atoms/TitlePage';
import HeaderBreadcrumbs from '@/common/components/molecules/HeaderBreadcrumbs';
import TableData from '@/common/components/molecules/TableData';
import TableDataEmpty from '@/common/components/molecules/TableDataSkeleton/TableDataEmpty';
import DashboardPanel from '@/common/components/organism/DashboardPanel';
import DisabledFormDataKegiatan from '@/common/components/organism/FormDataKegiatan/DisabledFormDataKegiatan';
import { authAdmin } from '@/common/middlewares/auth';
import {
	dateFormatter,
	dateISOFormatter,
	dateStringFormatter,
	timeFormatter,
	timeISOFormatter,
	timeStrictFormatter,
} from '@/common/utils/dateFormatter.util';
import { getAccountRole } from '@/common/utils/decryptToken';
import { listMenuAdmin } from '@/pages/admins/dashboard';
import { getAllUsers } from '@/services/accounts';
import {
	deleteOneArsipPers,
	getAllArsipPers,
	updateOneArsipPers,
} from '@/services/arsip-pers';
import { getAllLayananPeliputan } from '@/services/layanan-peliputan';
import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import SaveIcon from '@mui/icons-material/Save';
import {
	Box,
	Button,
	Fade,
	FormControl,
	FormLabel,
	IconButton,
	MenuItem,
	Modal,
	Paper,
	Stack,
	Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function ArsipPers() {
	const { isReady } = useRouter();
	const headers = [
		'No Rilis',
		'Judul Berita',
		'Kategori Berita',
		'Jurnalis',
		'Tanggal Rilis',
		'Waktu Rilis',
		'Admin',
		'Judul Terjemahan',
		'Admin Terjemahan',
		'Aksi',
	];
	const columns = [
		{ id: 2, label: 'no_rilis', source: 'arsip' },
		{ id: 3, label: 'judul_berita' },
		{ id: 4, label: 'kategori' },
		{ id: 5, label: 'jurnalis' },
		{ id: 6, label: 'tgl_upload', source: 'arsip' },
		{ id: 7, label: 'waktu_upload', source: 'arsip' },
		{ id: 8, label: 'admin', source: 'arsip' },
		{ id: 9, label: 'judul_terjemahan', source: 'arsip' },
		{ id: 10, label: 'admin_terj', source: 'arsip' },
	];

	const api_image = process.env.NEXT_PUBLIC_API_IMG;
	const roleAccount = getAccountRole();

	const [page, setPage] = useState<number>(0);
	const [totalRow, setTotalRow] = useState<number>(2);
	const [rowsPerPage, setRowsPerPage] = useState<number>(5);

	const handleChangePage = (newPage: number) => {
		setPage(newPage + 1);
	};

	const handleChangeLimit = (limit: number) => {
		setRowsPerPage(limit);
	};

	const [data, setData] = useState<Array<any>>([]);
	const [autocomplete, setAutocomplete] = useState<string>('');

	const [open, setOpen] = useState(false);
	const [currIndex, setCurrIndex] = useState(0);
	const handleOpen = (id: number) => {
		setOpen(true);
		setCurrIndex(id);
	};
	const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
	};
	const handleClose = () => setOpen(false);

	const [jurnalisData, setJurnalisData] = useState<Array<any>>([]);
	const [adminData, setAdminData] = useState<Array<any>>([]);

	const [openHapus, setOpenHapus] = useState(false);
	const [openSimpan, setOpenSimpan] = useState(false);
	const handleDialogOpen =
		(setState: React.Dispatch<React.SetStateAction<boolean>>) => () => {
			setState(true);
		};
	const handleDialogClose =
		(setState: React.Dispatch<React.SetStateAction<boolean>>) => () => {
			setState(false);
		};

	const [editable, setEditable] = useState(false);
	const handleEdit = () => {
		setEditable(true);
	};
	const handleCancelEdit = () => {
		setEditable(false);
		setOpen(false);
		setOpenSimpan(false);
	};

	const id = currIndex.toString();
	const [originalForm, setOriginalForm] = useState<object>({});
	const [id_peliputan, setId_peliputan] = useState('');
	const [no_rilis, setNo_rilis] = useState('');
	const [judul_berita, setJudul_berita] = useState('');
	const [kategori, setKategori] = useState('');
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
	const [status_publikasi, setStatus_publikasi] = useState('');

	const [detailPeliputan, setDetailPeliputan] = useState<Array<any>>([]);

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

	const onSave = async () => {
		const formattedForm = {
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
		const isSame =
			JSON.stringify(formattedForm) === JSON.stringify(originalForm)
				? true
				: false;

		if (isSame) {
			toast.warning('Tidak ada perubahan pada data.', {
				theme: 'colored',
			});
			handleCancelEdit();
		}
		if (!isSame) {
			const response = await updateOneArsipPers(id, formattedForm);
			if (response.error === true) {
				toast.error(response.message, {
					theme: 'colored',
				});
				handleCancelEdit();
			}
			if (response.error === false) {
				toast.success(response.message, {
					theme: 'colored',
				});
				window.location.reload();
				handleCancelEdit();
			}
		}
	};
	const onDelete = async (id: string) => {
		const response = await deleteOneArsipPers(id);
		if (response.error === false) {
			toast.success('Data berhasil dihapus.', {
				theme: 'colored',
			});
			window.location.reload();
		}
		if (response.error === true) {
			toast.error(response.message, {
				theme: 'colored',
			});
		}
	};

	const getArsipPers = useCallback(async () => {
		const params = `limit=${rowsPerPage}&page=${page}`;
		const response = await getAllArsipPers(params);
		setData(response.data);
		setTotalRow(response.totalRow);
		setRowsPerPage(response.rowsPerPage);
	}, [getAllArsipPers, page, rowsPerPage]);

	const [peliputans, setPeliputans] = useState<Array<any>>([]);

	const getPeliputan = useCallback(async () => {
		const params = 'limit=999';
		const response = await getAllLayananPeliputan(params);
		setPeliputans(response.data);
	}, [getAllLayananPeliputan]);

	const getJurnalis = useCallback(async () => {
		const params = 'role=Admin Role 9&role=Admin Role 3';
		const response = await getAllUsers(params);
		setJurnalisData(response.data);
	}, [getAllUsers]);

	const getAdmins = useCallback(async () => {
		const params = 'role=Admin Role 5';
		const response = await getAllUsers(params);
		setAdminData(response.data);
	}, [getAllUsers]);

	useEffect(() => {
		if (isReady) {
			getArsipPers();
			getJurnalis();
			getAdmins();
			getPeliputan();
		}
	}, [isReady, page, rowsPerPage]);

	useEffect(() => {
		if (data.length > 0) {
			const initialData = data.find((item: any) => item.id === currIndex);
			if (initialData) {
				setOriginalForm({
					id_peliputan: initialData.id_peliputan,
					no_rilis: initialData.no_rilis,
					judul_berita: initialData.judul_berita,
					kategori: initialData.kategori,
					jurnalis: initialData.jurnalis,
					prarilis: initialData.prarilis,
					rilis: initialData.rilis,
					tgl_upload: initialData.tgl_upload,
					waktu_upload: initialData.waktu_upload,
					admin: initialData.admin,
					link_berita: initialData.link_berita,
					judul_terjemahan: initialData.judul_terjemahan,
					penerjemah: initialData.penerjemah,
					naskah_terj: initialData.naskah_terj,
					tgl_upload_terj: initialData.tgl_upload_terj,
					waktu_upload_terj: initialData.waktu_upload_terj,
					admin_terj: initialData.admin_terj,
					link_terj: initialData.link_terj,
					status_publikasi: initialData.status_publikasi,
				});
				setId_peliputan(initialData.id_peliputan);
				setNo_rilis(initialData.no_rilis);
				setJudul_berita(initialData.judul_berita);
				setKategori(initialData.kategori);
				setJurnalis(initialData.jurnalis);
				setPrarilis(initialData.prarilis);
				setRilis(initialData.rilis);
				setTgl_upload(initialData.tgl_upload);
				setWaktu_upload(initialData.waktu_upload);
				setAdmin(initialData.admin);
				setLink_berita(initialData.link_berita);
				setJudul_terjemahan(initialData.judul_terjemahan);
				setPenerjemah(initialData.penerjemah);
				setNaskah_terj(initialData.naskah_terj);
				setTgl_upload_terj(initialData.tgl_upload_terj);
				setWaktu_upload_terj(initialData.waktu_upload_terj);
				setAdmin_terj(initialData.admin_terj);
				setLink_terj(initialData.link_terj);
				setStatus_publikasi(initialData.status_publikasi);
			}
		}
	}, [data, currIndex]);

	return (
		<Box className='bg-grey'>
			<TitlePage title='Arsip Pers - Sinata' />
			<DashboardPanel listMenu={listMenuAdmin}>
				<HeaderBreadcrumbs
					pageHeader='Arsip Pers'
					currentPage='Arsip Pers'>
					<Link
						href=''
						className='text-zinc-900 hover:underline hover:decoration-1 hover:underline-offset-2'>
						Arsip Layanan
					</Link>
				</HeaderBreadcrumbs>
				<Paper className='shadow-md xs:p-4 md:p-6'>
					{data.length === 0 ? (
						<TableDataEmpty
							headers={headers}
							addButton={
								<Link href='/admins/arsip/pers/tambah'>
									<ButtonBasic variant='contained'>Tambah Data</ButtonBasic>
								</Link>
							}
						/>
					) : (
						<TableData
							headers={headers}
							columns={columns}
							rows={data}
							status={false}
							actionOnClick={handleOpen}
							page={page}
							limit={rowsPerPage}
							totalRow={totalRow}
							changedPage={handleChangePage}
							changedLimit={handleChangeLimit}
							addButton={
								<Link href='/admins/arsip/pers/tambah'>
									<ButtonBasic variant='contained'>Tambah Data</ButtonBasic>
								</Link>
							}
						/>
					)}
					<Modal
						open={open}
						onClose={handleClose}
						BackdropProps={{ onClick: handleBackdropClick }}>
						<Fade in={open}>
							<Box className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md xs:w-[calc(100%-40px)] md:w-[800px] lg:w-[1000px]'>
								<Stack
									direction='row'
									justifyContent='space-between'
									className='sticky py-2 px-6 bg-gray-100 rounded-t-md'>
									<Typography
										variant='subtitle1'
										component='h2'
										className='font-bold'>
										Manajemen Arsip Pers
									</Typography>
									<IconButton
										onClick={handleClose}
										aria-label='close'
										size='small'
										className='hover:text-primary'>
										<CloseIcon fontSize='small' />
									</IconButton>
								</Stack>
								<Box
									sx={{ mt: 2 }}
									className='max-h-[80vh] overflow-y-auto pb-4 px-6'>
									{data
										.filter((item: any) => item.id === currIndex)
										.map((data: any) => {
											return (
												<>
													<AutocompleteCustom
														name='judul_kegiatan'
														label='Judul Kegiatan'
														data={peliputans}
														getOptionLabel={(data) =>
															data.tb_kegiatan.judul_kegiatan
														}
														onChange={handleJudulChange}
														defaultValue={peliputans.find(
															(item: any) =>
																item.tb_kegiatan.judul_kegiatan ==
																data.tb_laypeliputan.tb_kegiatan.judul_kegiatan,
														)}
														disabled={
															roleAccount === 'Admin Role 3' ||
															roleAccount === 'Admin Role 5' ||
															roleAccount === 'Admin Role 9' ||
															roleAccount === 'Super Admin'
																? !editable
																: true
														}
													/>
													<DisabledFormDataKegiatan
														judul_kegiatan={autocomplete}
													/>
													{detailPeliputan.length > 0
														? detailPeliputan.map((item: any) => {
																return (
																	<>
																		<FormLabel className='mb-2 text-sm'>
																			Leaflet Kegiatan
																		</FormLabel>
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
																			<MenuItem value='Pending'>
																				Pending
																			</MenuItem>
																			<MenuItem value='Approved & On Progress'>
																				Approved & On Progress
																			</MenuItem>
																			<MenuItem value='Completed'>
																				Complete
																			</MenuItem>
																			<MenuItem value='Rejected'>
																				Rejected
																			</MenuItem>
																		</SelectLabel>
																	</>
																);
														  })
														: null}
													<TextfieldLabel
														name='no_rilis'
														label='No Rilis'
														value={no_rilis}
														onChange={(event: any) =>
															setNo_rilis(event.target.value)
														}
														disabled={
															roleAccount === 'Admin Role 3' ||
															roleAccount === 'Super Admin'
																? !editable
																: true
														}
													/>
													<TextfieldLabel
														name='judul_berita'
														label='Judul Berita'
														value={judul_berita}
														onChange={(event: any) =>
															setJudul_berita(event.target.value)
														}
														disabled={
															roleAccount === 'Admin Role 3' ||
															roleAccount === 'Admin Role 9' ||
															roleAccount === 'Super Admin'
																? !editable
																: true
														}
													/>
													<Stack
														direction='row'
														spacing={1}>
														<SelectLabel
															name='kategori'
															label='Kategori Berita'
															value={kategori}
															onChange={(event: any) =>
																setKategori(event.target.value)
															}
															className='capitalize'
															disabled={
																roleAccount === 'Admin Role 3' ||
																roleAccount === 'Admin Role 5' ||
																roleAccount === 'Admin Role 9' ||
																roleAccount === 'Super Admin'
																	? !editable
																	: true
															}>
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
															data={jurnalisData}
															getOptionLabel={(data) => data.name}
															value={jurnalisData.find(
																(item: any) => item.name == data.jurnalis,
															)}
															onChange={handleJurnalisChange}
															disabled={
																roleAccount === 'Admin Role 3' ||
																roleAccount === 'Admin Role 9' ||
																roleAccount === 'Super Admin'
																	? !editable
																	: true
															}
														/>
													</Stack>
													<TextfieldLabel
														name='prarilis'
														label='Prarilis'
														value={prarilis}
														onChange={(event: any) =>
															setPrarilis(event.target.value)
														}
														multiline
														maxRows={16}
														disabled={
															roleAccount === 'Admin Role 3' ||
															roleAccount === 'Super Admin'
																? !editable
																: true
														}
													/>
													<TextfieldLabel
														name='rilis'
														label='Rilis'
														value={rilis}
														onChange={(event: any) =>
															setRilis(event.target.value)
														}
														multiline
														maxRows={16}
														disabled={
															roleAccount === 'Admin Role 3' ||
															roleAccount === 'Admin Role 9' ||
															roleAccount === 'Super Admin'
																? !editable
																: true
														}
													/>
													<Stack
														direction='row'
														spacing={1}
														className='mb-4'>
														<FormControl className='w-full'>
															<FormLabel className='mb-1 text-sm'>
																Tanggal Rilis
															</FormLabel>
															<DatePickerBasic
																value={dayjs(
																	dateFormatter(tgl_upload),
																	'DD/MM/YYYY',
																)}
																onChange={(value: any) =>
																	setTgl_upload(dateISOFormatter(value))
																}
																disabled={
																	roleAccount === 'Admin Role 5' ||
																	roleAccount === 'Super Admin'
																		? !editable
																		: true
																}
															/>
														</FormControl>
														<FormControl className='w-full'>
															<FormLabel className='mb-1 text-sm'>
																Waktu Rilis
															</FormLabel>
															<TimePickerBasic
																value={dayjs(
																	dateFormatter(tgl_upload) +
																		' ' +
																		timeStrictFormatter(waktu_upload),
																	'DD/MM/YYYY hh:mm',
																)}
																onChange={(value: any) =>
																	setWaktu_upload(timeISOFormatter(value))
																}
																disabled={
																	roleAccount === 'Admin Role 5' ||
																	roleAccount === 'Super Admin'
																		? !editable
																		: true
																}
															/>
														</FormControl>
													</Stack>
													<Stack
														direction='row'
														spacing={1}>
														<AutocompleteCustom
															label='Admin'
															data={adminData}
															onChange={handleAdminChange}
															getOptionLabel={(data) => data.name}
															value={adminData.find(
																(item: any) => item.name == data.admin,
															)}
															disabled={
																roleAccount === 'Admin Role 5' ||
																roleAccount === 'Super Admin'
																	? !editable
																	: true
															}
														/>
														<TextfieldLabel
															name='link_berita'
															label='Tautan Berita'
															value={link_berita}
															onChange={(event: any) =>
																setLink_berita(event.target.value)
															}
															disabled={
																roleAccount === 'Admin Role 5' ||
																roleAccount === 'Super Admin'
																	? !editable
																	: true
															}
														/>
													</Stack>
													<TextfieldLabel
														name='judul_terjemahan'
														label='Judul Terjemahan (EN)'
														value={judul_terjemahan}
														onChange={(event: any) =>
															setJudul_terjemahan(event.target.value)
														}
														disabled={
															roleAccount === 'Admin Role 9' ||
															roleAccount === 'Super Admin'
																? !editable
																: true
														}
													/>
													<AutocompleteCustom
														label='Penerjemah'
														data={jurnalisData}
														onChange={handlePenerjemahChange}
														getOptionLabel={(data) => data.name}
														value={jurnalisData.find(
															(item: any) => item.name == data.penerjemah,
														)}
														disabled={
															roleAccount === 'Admin Role 9' ||
															roleAccount === 'Super Admin'
																? !editable
																: true
														}
													/>
													<TextfieldLabel
														name='naskah_terj'
														label='Naskah Terjemahan'
														value={naskah_terj}
														onChange={(event: any) =>
															setNaskah_terj(event.target.value)
														}
														multiline
														maxRows={16}
														disabled={
															roleAccount === 'Admin Role 9' ||
															roleAccount === 'Super Admin'
																? !editable
																: true
														}
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
																value={dayjs(
																	dateFormatter(tgl_upload_terj),
																	'DD/MM/YYYY',
																)}
																onChange={(value: any) =>
																	setTgl_upload_terj(dateISOFormatter(value))
																}
																disabled={
																	roleAccount === 'Admin Role 5' ||
																	roleAccount === 'Super Admin'
																		? !editable
																		: true
																}
															/>
														</FormControl>
														<FormControl className='w-full'>
															<FormLabel className='mb-1 text-sm'>
																Waktu Rilis Terjemahan
															</FormLabel>
															<TimePickerBasic
																value={dayjs(
																	dateFormatter(tgl_upload_terj) +
																		' ' +
																		timeStrictFormatter(waktu_upload_terj),
																	'DD/MM/YYYY hh:mm',
																)}
																onChange={(value: any) =>
																	setWaktu_upload_terj(timeFormatter(value))
																}
																disabled={
																	roleAccount === 'Admin Role 5' ||
																	roleAccount === 'Super Admin'
																		? !editable
																		: true
																}
															/>
														</FormControl>
													</Stack>
													<Stack
														direction='row'
														spacing={1}>
														<AutocompleteCustom
															label='Admin Terjemahan'
															data={adminData}
															onChange={handleAdminTerjChange}
															getOptionLabel={(data) => data.name}
															value={adminData.find(
																(item: any) => item.name == data.admin_terj,
															)}
															disabled={
																roleAccount === 'Admin Role 5' ||
																roleAccount === 'Super Admin'
																	? !editable
																	: true
															}
														/>
														<TextfieldLabel
															name='link_terj'
															label='Tautan Terjemahan'
															value={link_terj}
															onChange={(event: any) =>
																setLink_terj(event.target.value)
															}
															disabled={
																roleAccount === 'Admin Role 5' ||
																roleAccount === 'Super Admin'
																	? !editable
																	: true
															}
														/>
													</Stack>
													<SelectLabel
														name='status'
														label='Status Publikasi'
														value={status_publikasi}
														onChange={handleStatusPublikasiChange}
														disabled={
															roleAccount === 'Admin Role 5' ||
															roleAccount === 'Super Admin'
																? !editable
																: true
														}>
														<MenuItem value='Pending'>Pending</MenuItem>
														<MenuItem value='ID'>ID</MenuItem>
														<MenuItem value='EN'>EN</MenuItem>
														<MenuItem value='Selesai'>Selesai</MenuItem>
													</SelectLabel>
													<Typography
														variant='caption'
														className='italic mt-2'>
														Terakhir diubah pada{' '}
														{dateStringFormatter(data.updatedAt)} -{' '}
														{timeFormatter(data.updatedAt)} WIB
													</Typography>
													<DialogConfirmation
														title='Hapus'
														body='Apakah Anda yakin ingin menghapus data ini?'
														open={openHapus}
														onClose={handleDialogClose(setOpenHapus)}>
														<Stack
															direction='row'
															spacing={1}
															className='mt-4 px-2 mb-4'>
															<ButtonBasic
																variant='contained'
																onClick={handleDialogClose(setOpenHapus)}>
																Batal
															</ButtonBasic>
															<ButtonBasic
																variant='outlined'
																color='error'
																onClick={() => onDelete(id)}>
																Hapus
															</ButtonBasic>
														</Stack>
													</DialogConfirmation>
													<DialogConfirmation
														title='Ubah Data'
														body='Apakah Anda yakin ingin menyimpan perubahan pada data ini?'
														open={openSimpan}
														onClose={handleDialogClose(setOpenSimpan)}>
														<Stack
															direction='row'
															spacing={1}
															className='mt-4 px-2 mb-4'>
															<ButtonBasic
																variant='contained'
																onClick={handleDialogClose(setOpenSimpan)}>
																Batal
															</ButtonBasic>
															<ButtonBasic
																variant='contained'
																color='success'
																onClick={onSave}>
																Simpan
															</ButtonBasic>
														</Stack>
													</DialogConfirmation>
												</>
											);
										})}
								</Box>
								<Stack
									direction='row'
									justifyContent='flex-end'
									spacing={1}
									marginBottom={1}
									marginTop={2}
									marginRight={2}
									className='sticky'>
									{roleAccount === 'Admin Role 3' ||
									roleAccount === 'Admin Role 5' ||
									roleAccount === 'Admin Role 9' ||
									roleAccount === 'Super Admin' ? (
										<ButtonIcon
											variant='outlined'
											color='error'
											onClick={handleDialogOpen(setOpenHapus)}
											icon={<DeleteIcon className='-mr-1' />}>
											Hapus
										</ButtonIcon>
									) : null}
									{editable ? (
										<>
											<ButtonIcon
												variant='contained'
												color='success'
												onClick={handleDialogOpen(setOpenSimpan)}
												icon={<SaveIcon className='-mr-1' />}>
												Simpan
											</ButtonIcon>
											<ButtonIcon
												variant='contained'
												icon={<CancelIcon className='-mr-1' />}
												onClick={handleCancelEdit}>
												Batal
											</ButtonIcon>
										</>
									) : (
										<>
											{roleAccount === 'Admin Role 3' ||
											roleAccount === 'Admin Role 5' ||
											roleAccount === 'Admin Role 9' ||
											roleAccount === 'Super Admin' ? (
												<ButtonIcon
													variant='contained'
													color='primary'
													onClick={handleEdit}
													icon={<EditRoundedIcon className='-mr-1' />}>
													Ubah
												</ButtonIcon>
											) : null}
										</>
									)}
								</Stack>
							</Box>
						</Fade>
					</Modal>
				</Paper>
			</DashboardPanel>
		</Box>
	);
}

export async function getServerSideProps({ req }: any) {
	const { tkn } = req.cookies;
	return authAdmin(tkn);
}

export const kategoriBerita = [
	'Kegiatan',
	'Berita Terkini',
	'Alumni UNS',
	'Mahasiswa UNS',
	'Akademik',
];
