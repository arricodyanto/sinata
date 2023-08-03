import ButtonIcon from '@/common/components/atoms/ButtonIcon';
import ButtonSplit from '@/common/components/atoms/ButtonSplit';
import DatePickerBasic from '@/common/components/atoms/DatePickerBasic';
import TextfieldLabel from '@/common/components/atoms/TextfieldLabel';
import TimePickerBasic from '@/common/components/atoms/TimePickerBasic';
import TableData from '@/common/components/molecules/TableData';
import TableDataEmpty from '@/common/components/molecules/TableDataSkeleton/TableDataEmpty';
import TableDataSkeleton from '@/common/components/molecules/TableDataSkeleton/TableDataSkeleton';
import { TTableKegiatanProps } from '@/common/types';
import {
	dateFormatter,
	dateStringFormatter,
	timeStrictFormatter,
} from '@/common/utils/dateFormatter.util';
import { getAccountID, getAccountRole } from '@/common/utils/decryptToken';
import {
	getAllRiwayatAjuan,
	getAllRiwayatAjuanStrict,
	getAllRiwayatAjuanUser,
} from '@/services/riwayat-ajuan';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';
import {
	Box,
	Button,
	Chip,
	Fade,
	FormControl,
	FormLabel,
	IconButton,
	Modal,
	Skeleton,
	Stack,
	Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

export default function TableRiwayat(props: TTableKegiatanProps) {
	const { admin } = props;
	const isAdmin = admin ? true : false;

	const router = useRouter();
	const [data, setData] = useState<Array<any>>([]);
	const [open, setOpen] = useState(false);
	const [currIndex, setCurrIndex] = useState(0);
	const handleOpen = (index: number) => {
		setOpen(true);
		setCurrIndex(index);
	};
	const handleClose = () => setOpen(false);

	const api_image = process.env.NEXT_PUBLIC_API_IMG;

	// Table Pagination
	const [page, setPage] = useState<number>(0);
	const [totalRow, setTotalRow] = useState<number>(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);

	const handleChangePage = (newPage: number) => {
		setPage(newPage);
	};

	const handleChangeLimit = (limit: number) => {
		setRowsPerPage(limit);
	};

	const tableHeaders = [
		'Jenis Layanan',
		'Judul',
		'Tanggal Kegiatan',
		' Waktu',
		'Tempat',
		'Aksi',
		'Status',
	];

	const tableColumns = [
		{ id: 1, label: 'jenis_layanan' },
		{ id: 2, label: 'judul' },
		{ id: 3, label: 'tgl_kegiatan' },
		{ id: 4, label: 'waktu_kegiatan' },
		{ id: 5, label: 'tempat_kegiatan' },
	];

	const ajuanOptions = isAdmin
		? [
				'Tambahkan Layanan Humas',
				'Tambahkan Layanan Publikasi',
				'Tambahkan Layanan Media',
		  ]
		: [
				'Ajukan Layanan Humas',
				'Ajukan Layanan Publikasi',
				'Ajukan Layanan Media',
		  ];
	const redirect = isAdmin
		? [
				'/admins/layanan-humas',
				'/admins/layanan-publikasi',
				'/admins/layanan-media',
		  ]
		: [
				'/users/layanan-humas',
				'/users/layanan-publikasi',
				'/users/layanan-media',
		  ];

	const getRiwayatAjuan = useCallback(async () => {
		if (isAdmin) {
			const params = `page=${page}&rowsPerPage=${rowsPerPage}`;
			const response = await getAllRiwayatAjuan(params);
			setData(response.data);
			setTotalRow(response.totalRow);
			setPage(response.page);
		}
	}, [setData, page, rowsPerPage]);

	const getRiwayanAjuanUser = useCallback(async () => {
		if (!isAdmin) {
			const params = `page=${page}&rowsPerPage=${rowsPerPage}`;
			const response = await getAllRiwayatAjuanUser(params);
			if (response) {
				setData(response.data);
				setTotalRow(response.totalRow);
				setPage(response.page);
			}
		}
	}, [setData, page, rowsPerPage]);

	const getUserRole = getAccountRole();

	const getRiwayatAjuanStrict = useCallback(async () => {
		if (getUserRole === 'Admin Role 9') {
			const params = `page=${page}&rowsPerPage=${rowsPerPage}`;
			const response = await getAllRiwayatAjuanStrict(params);
			console.log(response);
			if (response) {
				setData(response.data);
				setTotalRow(response.totalRow);
				setPage(response.page);
			}
		}
	}, [setData, page, rowsPerPage]);

	useEffect(() => {
		if (router.isReady) {
			if (isAdmin) {
				if (getUserRole === 'Admin Role 9') {
					getRiwayatAjuanStrict();
				} else {
					getRiwayatAjuan();
				}
			}
			if (!isAdmin) {
				getRiwayanAjuanUser();
			}
		}
	}, [router.isReady, page, rowsPerPage]);
	return (
		<>
			{router.isReady ? (
				<>
					{data.length === 0 ? (
						<TableDataEmpty headers={tableHeaders} />
					) : (
						<TableData
							headers={tableHeaders}
							columns={tableColumns}
							rows={data}
							status={true}
							actionOnClick={handleOpen}
							page={page}
							limit={rowsPerPage}
							totalRow={totalRow}
							changedPage={handleChangePage}
							changedLimit={handleChangeLimit}
							addButton={
								<Stack direction='row-reverse'>
									<ButtonSplit
										options={ajuanOptions}
										redirect={redirect}
									/>
								</Stack>
							}
						/>
					)}
				</>
			) : (
				<>
					<Skeleton
						variant='rounded'
						width={210}
						height={25}
						className='mb-6'
					/>
					<TableDataSkeleton headers={tableHeaders} />
				</>
			)}
			<Modal
				open={open}
				onClose={handleClose}>
				<Fade in={open}>
					<Box className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white py-4 px-6 rounded-md xs:w-[calc(100%-40px)] md:w-[600px]'>
						<Stack
							direction='row'
							justifyContent='space-between'
							className='sticky'>
							<Typography
								id='transition-modal-title'
								variant='subtitle1'
								component='h2'
								className='font-bold'>
								Riwayat Layanan
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
							id='transition-modal-description'
							sx={{ mt: 2 }}>
							{data
								.filter((item) => item.id === currIndex)
								.map((item) => {
									return (
										<>
											<TextfieldLabel
												label='Jenis Layanan'
												defaultValue={item.jenis_layanan}
												InputProps={{ readOnly: true }}
											/>
											<TextfieldLabel
												label='Judul'
												defaultValue={item.judul}
												InputProps={{ readOnly: true }}
												maxRows={3}
											/>
											{item.tgl_kegiatan ? (
												<>
													<Stack
														direction='row'
														spacing={1}
														className='mb-6'>
														<FormControl className='w-full'>
															<FormLabel className='mb-1 text-sm'>
																Tanggal Kegiatan
															</FormLabel>
															<DatePickerBasic
																defaultValue={dayjs(
																	dateFormatter(item.tgl_kegiatan),
																	'DD/MM/YYYY',
																)}
																readOnly
															/>
														</FormControl>
														<FormControl className='w-full'>
															<FormLabel className='mb-1 text-sm'>
																Waktu Kegiatan
															</FormLabel>
															<TimePickerBasic
																defaultValue={dayjs(
																	dateFormatter(item.tgl_kegiatan) +
																		' ' +
																		timeStrictFormatter(item.waktu_kegiatan),
																	'DD/MM/YYYY hh:mm',
																)}
																readOnly
															/>
														</FormControl>
													</Stack>
													<TextfieldLabel
														label='Tempat Kegiatan'
														defaultValue={item.tempat_kegiatan}
														InputProps={{ readOnly: true }}
													/>
												</>
											) : null}
											<FormLabel className='mb-2 -mt-2 text-sm'>
												Lampiran File Pemohon
											</FormLabel>
											<Stack
												direction='row'
												spacing={1}
												justifyContent='space-between'
												alignItems='center'>
												{item.file ? (
													<>
														<Link
															href={`${api_image}/${item.file}`}
															target='_blank'>
															<Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>
																{item.file}
															</Typography>
														</Link>
														<Link
															href={`${api_image}/${item.file}`}
															target='_blank'>
															<Button
																size='small'
																disableElevation
																className='rounded-md capitalize py-1 px-3 min-w-[90px]'>
																Open File
															</Button>
														</Link>
													</>
												) : (
													<Typography
														variant='body2'
														className='italic'>
														Belum ada data.
													</Typography>
												)}
											</Stack>
											<Stack
												direction='row'
												spacing={1}
												justifyContent='space-between'
												alignItems='baseline'
												className='mb-4'>
												<Stack
													direction='row'
													spacing={1}
													className='mb-2 mt-6'>
													<Typography
														variant='subtitle2'
														className='font-bold'>
														Status
													</Typography>
													{item.status === 'Pending' ? (
														<Chip
															label={item.status}
															size='small'
															className='bg-pending text-white text-xs'
														/>
													) : item.status === 'Approved & On Progress' ? (
														<Chip
															label={item.status}
															size='small'
															className='bg-primary text-white text-xs'
														/>
													) : item.status === 'Completed' ? (
														<Chip
															label={item.status}
															size='small'
															className='bg-complete text-white text-xs'
														/>
													) : item.status === 'Rejected' ? (
														<Chip
															label={item.status}
															size='small'
															className='bg-error text-white text-xs'
														/>
													) : undefined}
												</Stack>
												<Typography
													variant='caption'
													className='text-right italic'>
													Diajukan oleh {item.pemohon} pada{' '}
													{dateStringFormatter(item.createdAt)}
												</Typography>
											</Stack>
											<Stack
												direction='row'
												justifyContent='flex-end'
												spacing={1}
												marginBottom={1}
												marginTop={3}>
												<ButtonIcon
													variant='contained'
													icon={<CancelIcon className='-mr-1' />}
													onClick={handleClose}>
													Tutup
												</ButtonIcon>
												<ButtonIcon
													variant='outlined'
													icon={<ArrowForwardIcon className='-mr-1' />}
													onClick={() =>
														router.push(
															`/${isAdmin ? 'admins' : 'users'}/riwayat-ajuan/${
																item.jenis_layanan
															}/${item.id}`,
														)
													}>
													Lihat Ajuan
												</ButtonIcon>
											</Stack>
										</>
									);
								})}
						</Box>
					</Box>
				</Fade>
			</Modal>
		</>
	);
}
