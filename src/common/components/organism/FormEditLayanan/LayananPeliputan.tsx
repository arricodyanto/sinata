import AutocompleteCustom from '@/common/components/atoms/AutocompleteCustom';
import AutocompleteTitle from '@/common/components/atoms/AutocompleteTitle';
import ButtonBasic from '@/common/components/atoms/ButtonBasic';
import ButtonIcon from '@/common/components/atoms/ButtonIcon';
import DialogConfirmation from '@/common/components/atoms/DialogConfirmation';
import FileUpload from '@/common/components/atoms/FileUpload';
import SelectLabel from '@/common/components/atoms/SelectLabel';
import TextfieldLabel from '@/common/components/atoms/TextfieldLabel';
import DisabledFormDataKegiatan from '@/common/components/organism/FormDataKegiatan/DisabledFormDataKegiatan';
import { TFormEditLayananProps } from '@/common/types';
import { dateStringFormatter, timeFormatter, timeStrictFormatter } from '@/common/utils/dateFormatter.util';
import { getAccountID, getAccountRole } from '@/common/utils/decryptToken';
import { formDataFormatter } from '@/common/utils/formDataFormatter';
import { getAllUsers } from '@/services/accounts';
import { getAllDataKegiatan, getAllDataKegiatanUser } from '@/services/data-kegiatan';
import { deleteOneLayananPeliputan, getAllLayananPeliputan, updateLayananPeliputan } from '@/services/layanan-peliputan';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Button, Chip, FormControl, FormLabel, MenuItem, Stack, Typography } from '@mui/material';
import { FilePondFile } from 'filepond';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AutocompleteMultiple from '../../atoms/AutocompleteMultiple';
import { nameuserToArray, nameuserToString } from '@/common/utils/nameuserFormatter.util';
import StatusStepper from '../../atoms/StatusStepper';
import AccordionCustom from '../../atoms/AccordionCustom';
import { getAllArsipPersUser } from '@/services/arsip-pers';

const form = new FormData();

export default function LayananPeliputan(props: TFormEditLayananProps) {
	const { data, id, admin } = props;
	let rows = data;
	const isAdmin = admin ? true : false;

	const { isReady, push } = useRouter();
	const api_image = process.env.NEXT_PUBLIC_API_IMG;

	const roleAccount = getAccountRole();

	// Editable File Input
	const [leaflet, setLeaflet] = useState(false);
	const [bahanPublikasi, setBahanPublikasi] = useState(false);
	const [disposisi, setDisposisi] = useState(false);
	const [editable, setEditable] = useState(false);

	const [autocomplete, setAutocomplete] = useState<string>(''); // Handle autocomplete
	const [dataKegiatan, setDataKegiatan] = useState<Array<any>>([]); // Handle autocomplete
	const [arsip, setArsip] = useState<Array<any>>([]);
	const [peliputan, setPeliputan] = useState<Array<any>>([]);
	const [users, setUsers] = useState<Array<any>>([]);
	const [PIC, setPIC] = useState('');

	const handlePICChange = (event: any, value: any) => {
		const newPICArray = value.map((item: any) => item.name || '');
		form.set('pic', nameuserToString(newPICArray));
		setPIC(nameuserToString(newPICArray));
	};

	const handleStatusChange = (event: any) => {
		form.set('status', event.target.value);
	};

	const originalForm: Array<any> = [];

	const onSave = async () => {
		const formattedForm = formDataFormatter(form);
		const isSame = JSON.stringify(formattedForm) === JSON.stringify(originalForm);

		if (isSame === true) {
			toast.warning('Tidak ada perubahan pada data.', {
				theme: 'colored',
			});
		}
		if (isSame === false) {
			const response = await updateLayananPeliputan(id, form);
			if (response.error === true) {
				toast.error(response.message, {
					theme: 'colored',
				});
			}
			if (response.error === false) {
				toast.success(response.message, {
					theme: 'colored',
				});
				isAdmin ? push('/admins/layanan-humas') : push('/users/profile');
			}
		}
		setOpenSimpan(false);
	};

	const handleJudulChange = (event: any, value: any) => {
		setAutocomplete(value?.judul_kegiatan);
		form.set('id_kegiatan', value?.id);
	};

	const handleEdit = () => {
		setEditable(true);
	};

	const handleCancelEdit = () => {
		setEditable(false);
	};

	const judulFromProps = data.map((item) => item.tb_kegiatan.judul_kegiatan);
	const getDataKegiatan = useCallback(async () => {
		if (isAdmin) {
			const response = await getAllDataKegiatan();
			setDataKegiatan(response.data);
			if (judulFromProps.length > 0) {
				setAutocomplete(judulFromProps[0]);
			}
		}
	}, [getAllDataKegiatan]);

	const id_account = getAccountID();

	const getDataKegiatanUser = useCallback(async () => {
		if (!isAdmin) {
			if (id_account) {
				const response = await getAllDataKegiatanUser(id_account);
				setDataKegiatan(response.data);
				if (judulFromProps.length > 0) {
					setAutocomplete(judulFromProps[0]);
				}
			}
		}
	}, [getAllDataKegiatanUser]);

	const getDataArsipUser = useCallback(async () => {
		if (data.length > 0) {
			const id_account = data.map((item) => item.tb_kegiatan.id_account);
			if (id_account) {
				const response = await getAllArsipPersUser(id_account[0]);
				setArsip(response.data);
			}
		}
	}, [data]);

	const getPeliputan = useCallback(async () => {
		if (data.length > 0) {
			const getDateFromRows = rows.map((item) => item.tb_kegiatan.tgl_kegiatan);
			const params = `tgl_kegiatan=${getDateFromRows[0]}`;
			const response = await getAllLayananPeliputan(params);
			if (response.error === false) {
				setPeliputan(response.data);
			}
		}
	}, [data]);

	const getUsers = useCallback(async () => {
		const params = 'role=Admin Role 9&role=Admin Role 3';
		const response = await getAllUsers(params);
		setUsers(response.data);
	}, [getAllUsers]);

	useEffect(() => {
		if (isReady) {
			if (isAdmin) {
				getDataKegiatan();
				getUsers();
				getPeliputan();
			}
			if (!isAdmin) {
				getDataKegiatanUser();
			}
			getDataArsipUser();
		}
	}, [isReady, rows]);

	useEffect(() => {
		if (judulFromProps.length > 0) {
			setAutocomplete(judulFromProps[0]);
		}
		if (rows) {
			setPIC(nameuserToString(rows.map((item) => item.pic)));
		}
	}, [rows]);

	if (!rows) {
		return null;
	}

	const [openHapus, setOpenHapus] = useState(false);
	const [openSimpan, setOpenSimpan] = useState(false);
	const handleDialogOpen = (setState: React.Dispatch<React.SetStateAction<boolean>>) => () => {
		setState(true);
	};
	const handleDialogClose = (setState: React.Dispatch<React.SetStateAction<boolean>>) => () => {
		setState(false);
	};

	const handleDelete = async (id: string) => {
		await deleteOneLayananPeliputan(id);
		toast.success('Data berhasil dihapus.', {
			theme: 'colored',
		});
		isAdmin ? push('/admins/layanan-humas') : push('/users/profile');
	};

	const isOptionDisabled = (option: any) => {
		const getPIC = peliputan.map((item) => item.pic);
		const stringPIC = nameuserToString(getPIC);
		const formattedPIC = nameuserToArray(stringPIC);
		return nameuserToArray(PIC).some((item: any) => item.name === option.name) || formattedPIC.some((item: any) => item.name === option.name);
	};
	return (
		<>
			<Typography
				variant='h5'
				className='mb-6'>
				Layanan Peliputan
			</Typography>
			{rows.map((data: any) => {
				return (
					<>
						<AutocompleteTitle
							name='judul_kegiatan'
							label='Judul Kegiatan'
							data={dataKegiatan}
							onChange={handleJudulChange}
							defaultValue={dataKegiatan.find((item: any) => item.id == data.id_kegiatan)}
							disabled={roleAccount === 'User' || roleAccount === 'Admin Role 2' || roleAccount === 'Super Admin' ? !editable : true}
						/>
						<DisabledFormDataKegiatan judul_kegiatan={autocomplete} />
						{leaflet === false ? (
							<>
								<FormLabel className='mb-2 text-sm'>Leaflet Kegiatan</FormLabel>
								<Stack
									direction={{ xs: 'column', md: 'row' }}
									spacing={2}
									alignItems='flex-start'
									className='mb-4'>
									{data.leaflet_kegiatan ? (
										<Link
											href={`${api_image}/${data.leaflet_kegiatan}`}
											target='blank'
											className='w-[20rem] mt-2'>
											<Image
												src={`${api_image}/${data.leaflet_kegiatan}`}
												alt={`${data.tb_kegiatan.judul_kegiatan}`}
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
										onClick={() => setLeaflet(true)}
										disabled={roleAccount === 'User' || roleAccount === 'Admin Role 2' || roleAccount === 'Super Admin' ? !editable : true}>
										Change File
									</Button>
								</Stack>
							</>
						) : (
							<>
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
								<Stack
									direction='row-reverse'
									className='-mt-2'>
									<Button
										size='small'
										disableElevation
										className='rounded-md capitalize py-1 px-3'
										onClick={() => setLeaflet(false)}
										disabled={!editable}>
										Cancel
									</Button>
								</Stack>
							</>
						)}
						{bahanPublikasi === false ? (
							<>
								<FormLabel className='mb-2 text-sm'>Lampiran File</FormLabel>
								<Stack className='mb-4'>
									<Stack
										direction='row'
										spacing={1}
										justifyContent='space-between'
										alignItems='center'
										className=''>
										{data.bahan_publikasi ? (
											<Link
												href={`${api_image}/${data.bahan_publikasi}`}
												target='_blank'>
												<Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>
													{data.bahan_publikasi}
												</Typography>
											</Link>
										) : (
											<Typography
												variant='body2'
												className='italic'>
												Tidak ada data.
											</Typography>
										)}
										<Button
											size='small'
											disableElevation
											className='rounded-md capitalize py-1 px-3'
											onClick={() => setBahanPublikasi(true)}
											disabled={roleAccount === 'User' || roleAccount === 'Admin Role 2' || roleAccount === 'Super Admin' ? !editable : true}>
											Change File
										</Button>
									</Stack>
									<Typography
										variant='caption'
										className='italic'>
										Tambahkan file jika terdapat sudah terdapat naskah berita dari acara.
									</Typography>
								</Stack>
							</>
						) : (
							<>
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
									acceptedFileTypes={['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']}
									labelFileTypeNotAllowed='Hanya file Doc dan PDF yang diijinkan'
								/>
								<Stack
									direction='row-reverse'
									className='-mt-2'>
									<Button
										size='small'
										disableElevation
										className='rounded-md capitalize py-1 px-3'
										onClick={() => setBahanPublikasi(false)}
										disabled={!editable}>
										Cancel
									</Button>
								</Stack>
							</>
						)}
						{isAdmin ? (
							<>
								{editable ? (
									<>
										<FormControl className='w-full'>
											<SelectLabel
												name='status'
												label='Status'
												defaultValue={data.status}
												onChange={handleStatusChange}
												disabled={
													roleAccount === 'Admin Role 1' ||
													roleAccount === 'Admin Role 2' ||
													roleAccount === 'Admin Role 3' ||
													roleAccount === 'Admin Role 6' ||
													roleAccount === 'Admin Role 9' ||
													roleAccount === 'Super Admin'
														? false
														: true
												}>
												<MenuItem value='Pending'>Pending</MenuItem>
												<MenuItem value='Approved & On Progress'>Approved & On Progress</MenuItem>
												<MenuItem value='Completed'>Complete</MenuItem>
												<MenuItem value='Rejected'>Rejected</MenuItem>
											</SelectLabel>
										</FormControl>
									</>
								) : (
									<>
										<StatusStepper
											label='Status'
											status={data.status}
										/>
									</>
								)}
								{disposisi === false ? (
									<>
										<FormLabel className='mb-2 text-sm'>Disposisi</FormLabel>
										<Stack
											direction='row'
											spacing={1}
											justifyContent='space-between'
											alignItems='center'
											className='mb-4'>
											{data.disposisi ? (
												<Link
													href={`${api_image}/${data.disposisi}`}
													target='_blank'>
													<Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>{data.disposisi}</Typography>
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
												className='rounded-md capitalize py-1 px-3'
												onClick={() => setDisposisi(true)}
												disabled={roleAccount === 'Admin Role 6' || roleAccount === 'Super Admin' ? !editable : true}>
												Change File
											</Button>
										</Stack>
									</>
								) : (
									<>
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
										<Stack
											direction='row-reverse'
											className='-mt-2 mb-4'>
											<Button
												size='small'
												disableElevation
												className='rounded-md capitalize py-1 px-3'
												onClick={() => setDisposisi(false)}
												disabled={!editable}>
												Cancel
											</Button>
										</Stack>
									</>
								)}
								<AutocompleteMultiple
									name='pic'
									label='PIC'
									data={users}
									getOptionLabel={(data) => data.name}
									defaultValue={data.pic ? nameuserToArray(data.pic) : []}
									getOptionDisabled={isOptionDisabled}
									onChange={handlePICChange}
									disabled={roleAccount === 'Admin Role 3' || roleAccount === 'Admin Role 6' || roleAccount === 'Super Admin' ? !editable : true}
								/>
								<TextfieldLabel
									label='Keterangan'
									placeholder='Keterangan tambahan jika ajuan layanan ditolak.'
									defaultValue={data.keterangan}
									multiline
									minRows={2}
									maxRows={5}
									onChange={(event: any) => form.set('keterangan', event.target.value)}
									disabled={roleAccount === 'Admin Role 2' || roleAccount === 'Admin Role 6' || roleAccount === 'Super Admin' ? !editable : true}
								/>
							</>
						) : (
							<>
								<AutocompleteMultiple
									name='pic'
									label='PIC'
									data={users}
									getOptionLabel={(data) => data.name}
									defaultValue={data.pic ? nameuserToArray(data.pic) : []}
									getOptionDisabled={isOptionDisabled}
									onChange={handlePICChange}
									disabled
								/>
								<StatusStepper
									label='Status'
									status={data.status}
								/>
								<TextfieldLabel
									label='Keterangan'
									placeholder='Keterangan tambahan.'
									multiline
									minRows={2}
									maxRows={5}
									disabled
								/>
							</>
						)}
						<Stack>
							<FormLabel className='mb-1 text-sm'>Luaran Layanan</FormLabel>
							{arsip.length !== 0 ? (
								<>
									{arsip.map((item) => {
										return (
											<Box key={item.id}>
												<AccordionCustom
													title={
														<Stack
															direction={'row'}
															justifyContent={'space-between'}
															alignItems={'center'}
															spacing={1}
															className='w-full'>
															<Typography
																variant='body2'
																sx={{ color: 'text.primary' }}>
																ID - {item.judul_berita}
															</Typography>
															<Typography
																variant='body2'
																sx={{ color: 'text.secondary', width: '33%' }}>
																{dateStringFormatter(item.tgl_upload)}
															</Typography>
														</Stack>
													}
													content={
														<>
															<Typography
																variant='body2'
																color={'text.secondary'}
																marginBottom={2}>
																Tautan Berita:
															</Typography>
															<Link
																href={item.link_berita}
																target='blank'>
																<Typography
																	variant='body2'
																	color={'text.secondary'}
																	className='hover:text-primary hover:underline hover:underline-offset-2 transition'>
																	{item.link_berita}
																</Typography>
															</Link>
															<Typography
																variant='body2'
																color={'text.secondary'}
																className='mt-2 italic'>
																Dipublikasikan oleh <b>{item.admin}</b> pada pukul {timeStrictFormatter(item.waktu_upload)} WIB
															</Typography>
														</>
													}
												/>
												{item.judul_terjemahan ? (
													<AccordionCustom
														title={
															<Stack
																direction={'row'}
																justifyContent={'space-between'}
																alignItems={'center'}
																spacing={1}
																className='w-full'>
																<Typography
																	variant='body2'
																	sx={{ color: 'text.primary' }}>
																	EN - {item.judul_terjemahan}
																</Typography>
																<Typography
																	variant='body2'
																	sx={{
																		color: 'text.secondary',
																		width: '33%',
																	}}>
																	{dateStringFormatter(item.tgl_upload_terj)}
																</Typography>
															</Stack>
														}
														content={
															<>
																<Typography
																	variant='body2'
																	color={'text.secondary'}
																	marginBottom={2}>
																	Tautan Terjemahan:
																</Typography>
																<Link
																	href={item.link_terj}
																	target='blank'>
																	<Typography
																		variant='body2'
																		color={'text.secondary'}
																		className='hover:text-primary hover:underline hover:underline-offset-2 transition'>
																		{item.link_terj}
																	</Typography>
																</Link>
																<Typography
																	variant='body2'
																	color={'text.secondary'}
																	className='mt-2 italic'>
																	Dipublikasikan oleh <b>{item.admin_terj}</b> pada pukul {timeStrictFormatter(item.waktu_upload_terj)} WIB
																</Typography>
															</>
														}
													/>
												) : (
													<Typography
														variant='body2'
														marginTop={1}>
														Versi terjemahan (EN) belum tersedia.
													</Typography>
												)}
											</Box>
										);
									})}
								</>
							) : (
								<Typography variant='body2'>Belum ada data.</Typography>
							)}
						</Stack>
						<Stack
							direction='row'
							justifyContent='flex-end'
							spacing={1}
							marginTop={6}>
							{roleAccount === 'User' ||
							roleAccount === 'Super Admin' ||
							roleAccount === 'Admin Role 2' ||
							roleAccount === 'Admin Role 3' ||
							roleAccount === 'Admin Role 6' ||
							roleAccount === 'Admin Role 9' ? (
								<>
									{editable ? (
										<Stack
											direction='row'
											spacing={1}>
											<ButtonIcon
												variant='contained'
												color='success'
												onClick={handleDialogOpen(setOpenSimpan)}
												icon={<SaveIcon className='-mr-1' />}>
												Simpan
											</ButtonIcon>
											<ButtonIcon
												variant='contained'
												color='primary'
												onClick={handleCancelEdit}
												icon={<CancelIcon className='-mr-1' />}>
												Batal
											</ButtonIcon>
										</Stack>
									) : (
										<ButtonIcon
											variant='contained'
											color='primary'
											onClick={handleEdit}
											icon={<EditRoundedIcon className='-mr-1' />}>
											Ubah
										</ButtonIcon>
									)}
									{roleAccount === 'User' || roleAccount === 'Admin Role 2' || roleAccount === 'Super Admin' ? (
										<ButtonIcon
											variant='outlined'
											color='error'
											onClick={handleDialogOpen(setOpenHapus)}
											icon={<DeleteIcon className='-mr-1' />}>
											Hapus
										</ButtonIcon>
									) : null}
								</>
							) : null}
						</Stack>
						<Typography
							variant='caption'
							className='italic'
							marginTop={-4}>
							Terakhir diubah pada {dateStringFormatter(data.updatedAt)} - {timeFormatter(data.updatedAt)} WIB
						</Typography>
						<DialogConfirmation
							title='Hapus'
							body='Apakah Anda yakin ingin menghapus data ini?'
							open={openHapus}
							onClose={handleDialogClose(setOpenHapus)}>
							<Stack
								direction='row'
								spacing={1}
								className='mt-4 px-2'>
								<ButtonBasic
									variant='contained'
									onClick={handleDialogClose(setOpenHapus)}>
									Batal
								</ButtonBasic>
								<ButtonBasic
									variant='outlined'
									color='error'
									onClick={() => handleDelete(data.id)}>
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
								className='my-4 px-2'>
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
		</>
	);
}
