import ButtonBasic from '@/common/components/atoms/ButtonBasic';
import ButtonIcon from '@/common/components/atoms/ButtonIcon';
import DateFieldBasic from '@/common/components/atoms/DateFieldBasic';
import TextfieldLabel from '@/common/components/atoms/TextfieldLabel';
import TimePickerBasic from '@/common/components/atoms/TimePickerBasic';
import TableData from '@/common/components/molecules/TableData';
import TableDataEmpty from '@/common/components/molecules/TableDataSkeleton/TableDataEmpty';
import { dateFormatter, dateStringFormatter, dateTimeFormatter, timeFormatter, timeStrictFormatter } from '@/common/utils/dateFormatter.util';
import { getAllLayananOpini } from '@/services/layanan-opini';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Chip, Fade, FormControl, FormLabel, IconButton, Modal, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';

export default function TableManajemenOpini() {
    const { isReady, push } = useRouter();

    const headers = [
        'Judul Pembahasan', 'User Pemohon', 'Surat Permohonan', 'Bahan Publikasi', 'Disposisi', 'Admin', 'Penerjemah', 'Aksi', 'Status'
    ];
    const columns = [
        { id: 1, label: 'judul_pembahasan' },
        { id: 2, label: 'name', source: 'tb_account' },
        { id: 4, label: 'surat_permohonan' },
        { id: 5, label: 'bahan_publikasi' },
        { id: 6, label: 'disposisi' },
        { id: 9, label: 'admin' },
        { id: 10, label: 'penerjemah' },
    ];
    const api_file = process.env.NEXT_PUBLIC_API_IMG;

    const [data, setData] = useState<Array<any>>([]);
    const [open, setOpen] = React.useState(false);
    const [currIndex, setCurrIndex] = React.useState(0);
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

    const getOpini = useCallback(async () => {
        const params = `limit=${rowsPerPage}&page=${page}`;
        const response = await getAllLayananOpini(params);
        setData(response.data);
        setTotalRow(response.totalRow);
        setRowsPerPage(response.rowsPerPage);
    }, [getAllLayananOpini, page, rowsPerPage]);

    useEffect(() => {
        if (isReady) {
            getOpini();
        }
    }, [isReady, page, rowsPerPage]);

    return (
        <>
            {data.length === 0 ?
                <>
                    <TableDataEmpty headers={headers}
                        addButton={
                            <Link href='/admins/riwayat-ajuan/Layanan Opini di Media/tambah'>
                                <ButtonBasic variant='contained'>Tambahkan Data</ButtonBasic>
                            </Link>
                        } />
                </>
                :
                <TableData headers={headers} columns={columns} rows={data} status={true} actionOnClick={handleOpen}
                    page={page} limit={rowsPerPage} totalRow={totalRow} changedPage={handleChangePage} changedLimit={handleChangeLimit}
                    addButton={
                        <Link href='/admins/riwayat-ajuan/Layanan Opini di Media/tambah'>
                            <ButtonBasic variant='contained'>Tambahkan Data</ButtonBasic>
                        </Link>
                    } />
            }
            <Modal open={open} onClose={handleClose}>
                <Fade in={open}>
                    <Box className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md xs:w-[calc(100%-40px)] md:w-[800px]'>
                        <Stack direction='row' justifyContent='space-between' className='sticky py-2 px-6 bg-gray-100 rounded-t-md'>
                            <Typography id="transition-modal-title" variant="subtitle1" component="h2" className='font-bold'>
                                Manajemen Layanan Opini di Media
                            </Typography>
                            <IconButton onClick={handleClose} aria-label='close' size='small' className='hover:text-primary'>
                                <CloseIcon fontSize='small' />
                            </IconButton>
                        </Stack>
                        <Box sx={{ mt: 2 }} className='max-h-[80vh] overflow-y-auto pb-4 px-6'>
                            {data.filter(row => row.id === currIndex).map(item => {
                                return (
                                    <>
                                        <TextfieldLabel label='Judul Pembahasan' value={item.judul_pembahasan} InputProps={{ readOnly: true }} />
                                        <TextfieldLabel label='User Pemohon' value={item.tb_account.name} InputProps={{ readOnly: true }} />
                                        <FormLabel className='mb-2 text-sm'>Foto Penulis</FormLabel>
                                        <FormLabel className='mb-2 text-sm'>Surat Permohonan</FormLabel>
                                        <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' className='mb-4'>
                                            {item.surat_permohonan ? (
                                                <Link href={`${api_file}/${item.surat_permohonan}`} target='_blank'>
                                                    <Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>{item.surat_permohonan}</Typography>
                                                </Link>
                                            ) : (
                                                <Typography variant='body2' className='italic'>Belum ada data.</Typography>
                                            )}
                                            <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' disabled>Change File</Button>
                                        </Stack>
                                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems='flex-start' className='mb-4'>
                                            {item.foto_penulis ? (
                                                <Link href={`${api_file}/${item.foto_penulis}`} target='blank' className='w-[20rem] mt-2'>
                                                    <Image src={`${api_file}/${item.foto_penulis}`} alt={`${item.judul_kegiatan}`} quality={80} layout='responsive' width={20} height={20} className='rounded-lg' />
                                                </Link>
                                            ) : (
                                                <Typography variant='body2' className='italic'>Belum ada data.</Typography>
                                            )}
                                            <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3 mt-2' disabled>Change File</Button>
                                        </Stack>
                                        <FormLabel className='mb-2 text-sm'>Bahan Publikasi</FormLabel>
                                        <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' className='mb-4'>
                                            {item.bahan_publikasi ? (
                                                <Link href={`${api_file}/${item.bahan_publikasi}`} target='_blank'>
                                                    <Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>{item.bahan_publikasi}</Typography>
                                                </Link>
                                            ) : (
                                                <Typography variant='body2' className='italic'>Belum ada data.</Typography>
                                            )}
                                            <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' disabled>Change File</Button>
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
                                        <Stack direction='row' spacing={1} className='mb-4'>
                                            <FormControl className='w-full'>
                                                <FormLabel className='mb-1 text-sm'>
                                                    Tanggal Terbit
                                                </FormLabel>
                                                <DateFieldBasic value={dayjs(dateFormatter(item.tgl_waktu_upload), 'DD/MM/YYYY')} readOnly />
                                            </FormControl>
                                            <FormControl className='w-full'>
                                                <FormLabel className='mb-1 text-sm'>
                                                    Waktu Terbit
                                                </FormLabel>
                                                <TimePickerBasic value={dayjs(dateTimeFormatter(item.tgl_waktu_upload), 'DD/MM/YYYY hh:mm')} readOnly />
                                            </FormControl>
                                        </Stack>
                                        <Stack direction='row' spacing={1} className='mb-2'>
                                            <TextfieldLabel label='Tautan Berita' value={item.link_berita} InputProps={{ readOnly: true }} />
                                            <TextfieldLabel label='Admin' value={item.admin} InputProps={{ readOnly: true }} />
                                        </Stack>
                                        <TextfieldLabel label='Penerjemah' value={item.penerjemah} InputProps={{ readOnly: true }} />
                                        <Stack direction='row' spacing={1} className='mb-2'>
                                            <TextfieldLabel label='Tautan Terjemahan' value={item.link_terj} InputProps={{ readOnly: true }} />
                                            <TextfieldLabel label='Admin Terjemahan' value={item.admin_terj} InputProps={{ readOnly: true }} />
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
                            <ButtonIcon variant='outlined' icon={<ArrowForwardIcon className='-mr-1' />} onClick={() => push(`/admins/riwayat-ajuan/Layanan Opini di Media/${currIndex}`)}>Lihat Ajuan</ButtonIcon>
                        </Stack>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}
