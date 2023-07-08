import ButtonIcon from '@/common/components/atoms/ButtonIcon';
import TableData from '@/common/components/molecules/TableData';
import TableDataEmpty from '@/common/components/molecules/TableDataSkeleton/TableDataEmpty';
import { dateFormatter, dateStringFormatter, timeFormatter, timeStrictFormatter } from '@/common/utils/dateFormatter.util';
import { getAllLayananPeliputan } from '@/services/layanan-peliputan';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Chip, Fade, FormControl, FormLabel, IconButton, Modal, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import DateFieldBasic from '@/common/components/atoms/DateFieldBasic';
import TextfieldLabel from '@/common/components/atoms/TextfieldLabel';
import TimePickerBasic from '@/common/components/atoms/TimePickerBasic';
import ButtonBasic from '@/common/components/atoms/ButtonBasic';

export default function TableManajemenPeliputan() {
    const { isReady, push } = useRouter();

    const headers = [
        'Judul Kegiatan', 'User Pemohon', 'Tanggal Kegiatan', 'Waktu', 'Tempat', 'Disposisi', 'Aksi', 'Status'
    ];
    const columns = [
        { id: 1, label: 'judul_kegiatan', source: 'tb_kegiatan' },
        { id: 2, label: 'name', source: 'tb_account', uppersource: 'tb_kegiatan' },
        { id: 3, label: 'tgl_kegiatan', source: 'tb_kegiatan' },
        { id: 4, label: 'waktu_kegiatan', source: 'tb_kegiatan' },
        { id: 5, label: 'tempat_kegiatan', source: 'tb_kegiatan' },
        { id: 6, label: 'disposisi' },
    ];

    const api_file = process.env.NEXT_PUBLIC_API_IMG;

    const [open, setOpen] = useState(false);
    const [currIndex, setCurrIndex] = useState(0);
    const [data, setData] = useState<Array<any>>([]);

    const handleOpen = (id: number) => {
        setOpen(true);
        setCurrIndex(id);
    };
    const handleClose = () => setOpen(false);

    const [page, setPage] = useState<number>(0);
    const [totalRow, setTotalRow] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(5);

    const handleChangePage = (newPage: number) => {
        setPage(newPage + 1);
    };

    const handleChangeLimit = (limit: number) => {
        setRowsPerPage(limit);
    };

    const getPeliputan = useCallback(async () => {
        const params = `limit=${rowsPerPage}&page=${page}`;
        const response = await getAllLayananPeliputan(params);
        setData(response.data);
        setTotalRow(response.totalRow);
        setRowsPerPage(response.rowsPerPage);
    }, [getAllLayananPeliputan, page, rowsPerPage]);

    useEffect(() => {
        if (isReady) {
            getPeliputan();
        }
    }, [isReady, page, rowsPerPage]);
    return (
        <>
            {data.length === 0 ?
                <>
                    <TableDataEmpty headers={headers}
                        addButton={
                            <Link href='/admins/riwayat-ajuan/Layanan Peliputan/tambah'>
                                <ButtonBasic variant='contained'>Tambahkan Data</ButtonBasic>
                            </Link>
                        } />
                </>
                :
                <TableData headers={headers} columns={columns} rows={data} status={true} actionOnClick={handleOpen}
                    page={page} limit={rowsPerPage} totalRow={totalRow} changedPage={handleChangePage} changedLimit={handleChangeLimit}
                    addButton={
                        <Link href='/admins/riwayat-ajuan/Layanan Peliputan/tambah'>
                            <ButtonBasic variant='contained'>Tambahkan Data</ButtonBasic>
                        </Link>
                    } />
            }
            <Modal open={open} onClose={handleClose}>
                <Fade in={open}>
                    <Box className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md xs:w-[calc(100%-40px)] md:w-[800px]'>
                        <Stack direction='row' justifyContent='space-between' className='sticky py-2 px-6 bg-gray-100 rounded-t-md'>
                            <Typography variant="subtitle1" component="h2" className='font-bold'>
                                Manajemen Layanan Peliputan
                            </Typography>
                            <IconButton onClick={handleClose} aria-label='close' size='small' className='hover:text-primary'>
                                <CloseIcon fontSize='small' />
                            </IconButton>
                        </Stack>
                        <Box sx={{ mt: 2 }} className='max-h-[80vh] overflow-y-auto pb-4 px-6'>
                            {data.filter((row: any) => row.id === currIndex).map((item: any) => {
                                return (
                                    <>
                                        <TextfieldLabel label='Judul Kegiatan' value={item.tb_kegiatan.judul_kegiatan} InputProps={{ readOnly: true }} />
                                        <TextfieldLabel label='Deskripsi Kegiatan' value={item.tb_kegiatan.des_kegiatan} multiline rows={3} InputProps={{ readOnly: true }} />
                                        <Stack direction={'row'} spacing={1}>
                                            <TextfieldLabel label='Sifat Kegiatan' value={item.tb_kegiatan.sifat_kegiatan === 'Terbuka' ? 'Terbuka untuk Umum' : item.tb_kegiatan.sifat_kegiatan} />
                                            <TextfieldLabel label='User Pemohon' value={item.tb_kegiatan.tb_account.name} InputProps={{ readOnly: true }} maxRows={3} />
                                        </Stack>
                                        <Stack direction='row' spacing={1} className='mb-4'>
                                            <FormControl className='w-full'>
                                                <FormLabel className='mb-1 text-sm'>
                                                    Tanggal Kegiatan
                                                </FormLabel>
                                                <DateFieldBasic name='tgl_kegiatan' value={dayjs(dateFormatter(item.tb_kegiatan.tgl_kegiatan), 'DD/MM/YYYY')} readOnly />
                                            </FormControl>
                                            <FormControl className='w-full'>
                                                <FormLabel className='mb-1 text-sm'>
                                                    Waktu Kegiatan
                                                </FormLabel>
                                                <TimePickerBasic value={dayjs(dateFormatter(item.tb_kegiatan.tgl_kegiatan) + ' ' + timeStrictFormatter(item.tb_kegiatan.waktu_kegiatan), 'DD/MM/YYYY hh:mm')} readOnly />
                                            </FormControl>
                                        </Stack>
                                        <TextfieldLabel name='tempat_kegiatan' label='Tempat Kegiatan' value={item.tb_kegiatan.tempat_kegiatan} InputProps={{ readOnly: true }} />
                                        <FormLabel className='mb-2 text-sm'>Surat Permohonan</FormLabel>
                                        <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' className='mb-4'>
                                            {item.tb_kegiatan.surat_permohonan ? (
                                                <Link href={`${api_file}/${item.tb_kegiatan.surat_permohonan}`} target='_blank'>
                                                    <Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>{item.tb_kegiatan.surat_permohonan}</Typography>
                                                </Link>
                                            ) : (
                                                <Typography variant='body2' className='italic'>Belum ada data.</Typography>
                                            )}
                                            <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' disabled>Change File</Button>
                                        </Stack>
                                        <FormLabel className='mb-2 text-sm'>Leaflet Kegiatan</FormLabel>
                                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems='flex-start' className='mb-4'>
                                            {item.leaflet_kegiatan ? (
                                                <Link href={`${api_file}/${item.leaflet_kegiatan}`} target='blank' className='w-[20rem] mt-2'>
                                                    <Image src={`${api_file}/${item.leaflet_kegiatan}`} alt={`${item.tb_kegiatan.judul_kegiatan}`} quality={80} layout='responsive' width={20} height={20} className='rounded-lg' />
                                                </Link>
                                            ) : (
                                                <Typography variant='body2' className='italic'>Belum ada data.</Typography>
                                            )}
                                            <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3 mt-2' disabled>Change File</Button>
                                        </Stack>
                                        <FormLabel className='mb-2 text-sm'>Disposisi</FormLabel>
                                        <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' className='mb-4'>
                                            {item.disposisi ? (
                                                <Link href={`${api_file}/${item.disposisi}`} target='_blank'>
                                                    <Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>{item.disposisi}</Typography>
                                                </Link>
                                            ) : (
                                                <Typography variant='body2' className='italic'>Belum ada data.</Typography>
                                            )}
                                            <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' disabled>Change File</Button>
                                        </Stack>
                                        <Stack direction='row' spacing={1} className='mb-2 mt-6' justifyContent='space-between' alignItems={'center'}>
                                            <Stack direction={'row'} spacing={1}>
                                                <Typography variant='subtitle2' className='font-bold'>Status</Typography>
                                                {
                                                    item.status === 'Pending' ? <Chip label={item.status} size='small' className='bg-pending text-white text-xs' />
                                                        : item.status === 'Approved & On Progress' ? <Chip label={item.status} size='small' className='bg-primary text-white text-xs' />
                                                            : item.status === 'Completed' ? <Chip label={item.status} size='small' className='bg-complete text-white text-xs' />
                                                                : item.status === 'Rejected' ? <Chip label={item.status} size='small' className='bg-error text-white text-xs' />
                                                                    : undefined
                                                }
                                            </Stack>
                                            <Typography variant='caption' className='italic' marginTop={-4}>Diajukan pada {dateStringFormatter(item.createdAt)} - {timeFormatter(item.createdAt)} WIB</Typography>
                                        </Stack>
                                    </>
                                );
                            })}
                        </Box>
                        <Stack direction='row' justifyContent='flex-end' spacing={1} margin={2} marginBottom={1}>
                            <ButtonIcon variant='contained' icon={<CancelIcon className='-mr-1' />} onClick={handleClose}>Tutup</ButtonIcon>
                            <ButtonIcon variant='outlined' icon={<ArrowForwardIcon className='-mr-1' />} onClick={() => push(`/admins/riwayat-ajuan/Layanan Peliputan/${currIndex}`)}>Lihat Ajuan</ButtonIcon>
                        </Stack>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}