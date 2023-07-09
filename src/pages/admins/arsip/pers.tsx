import React from 'react';
import tb_peliputan from '@/json/tb_laypeliputan.json';
import TableDataSkeleton from '@/common/components/molecules/TableDataSkeleton/TableDataSkeleton';
import { Box, Chip, Fade, FormControl, FormLabel, IconButton, MenuItem, Modal, Paper, Skeleton, Stack, TableCell, Typography } from '@mui/material';
import TableData from '@/common/components/molecules/TableData';
import TitlePage from '@/common/components/atoms/TitlePage';
import DashboardPanel from '@/common/components/organism/DashboardPanel';
import { listMenuAdmin } from '../dashboard';
import HeaderBreadcrumbs from '@/common/components/molecules/HeaderBreadcrumbs';
import Link from 'next/link';
import TextfieldLabel from '@/common/components/atoms/TextfieldLabel';
import ButtonIcon from '@/common/components/atoms/ButtonIcon';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
// import { kategoriBerita } from '@/common/components/organism/TableManajemenPeliputan';
import SelectLabel from '@/common/components/atoms/SelectLabel';
import AutocompleteCustom from '@/common/components/atoms/AutocompleteCustom';
import DateFieldBasic from '@/common/components/atoms/DateFieldBasic';
import TimePickerBasic from '@/common/components/atoms/TimePickerBasic';
import dayjs from 'dayjs';

export default function ArsipPers() {
    // Table Data props
    const headers = [
        'ID', 'No Rilis', 'Judul Berita', 'Kategori Berita', 'Jurnalis', 'Tanggal Rilis', 'Waktu Rilis', 'Admin', 'Judul Terjemahan', 'Admin Terjemahan', 'Aksi', 'Status'
    ];
    const columns = [
        { id: 1, label: 'id' },
        { id: 2, label: 'no_rilis', source: 'arsip' },
        { id: 3, label: 'judul_berita' },
        { id: 4, label: 'kategori' },
        { id: 5, label: 'jurnalis' },
        { id: 6, label: 'tgl_upload', source: 'arsip' },
        { id: 7, label: 'waktu_upload', source: 'arsip' },
        { id: 8, label: 'admin', source: 'arsip' },
        { id: 9, label: 'judul_terjemahan', source: 'arsip' },
        { id: 10, label: 'admin_terj', source: 'arsip' }
    ];

    const filteredData = tb_peliputan.filter((row: any) => {
        return row.arsip.length != 0;
    });

    const [data, setData] = React.useState<Array<any>>(filteredData);
    const rows = data.slice().reverse().map((row: any) => row);

    // Modal state
    const [open, setOpen] = React.useState(false);
    const [currIndex, setCurrIndex] = React.useState(0);
    const handleOpen = (id: number) => {
        setOpen(true);
        setCurrIndex(id);
    };
    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };
    const handleClose = () => setOpen(false);
    return (
        <Box className='bg-grey'>
            <TitlePage title='Arsip Pers - Sinata' />
            <DashboardPanel listMenu={listMenuAdmin}>
                <HeaderBreadcrumbs pageHeader='Arsip Pers' currentPage='Arsip Pers'>
                    <Link href='' className='text-zinc-900 hover:underline hover:decoration-1 hover:underline-offset-2'>
                        Arsip Layanan
                    </Link>
                </HeaderBreadcrumbs>
                <Paper className='shadow-md xs:p-4 md:p-6'>
                    {rows.length === 0 ?
                        <>
                            <Skeleton variant='rounded' width={210} height={25} className='mb-6' />
                            <TableDataSkeleton headers={headers} />
                        </>
                        :
                        <TableData headers={headers} columns={columns} rows={rows} status={false} actionOnClick={handleOpen} addButton={true} />
                    }
                    <Modal open={open} onClose={handleClose} BackdropProps={{ onClick: handleBackdropClick }}>
                        <Fade in={open}>
                            <Box className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md xs:w-[calc(100%-40px)] md:w-[800px] lg:w-[1000px]'>
                                <Stack direction='row' justifyContent='space-between' className='sticky py-2 px-6 bg-gray-100 rounded-t-md'>
                                    <Typography variant="subtitle1" component="h2" className='font-bold'>
                                        Manajemen Arsip Pers
                                    </Typography>
                                    <IconButton onClick={handleClose} aria-label='close' size='small' className='hover:text-primary'>
                                        <CloseIcon fontSize='small' />
                                    </IconButton>
                                </Stack>
                                <Box sx={{ mt: 2 }} className='max-h-[80vh] overflow-y-auto pb-4 px-6'>
                                    {rows.filter((item: any) => item.id === currIndex).map((data: any) => {
                                        return (
                                            <>
                                                <TextfieldLabel name='id' label='ID Pengajuan' defaultValue={data.id} disabled />
                                                <TextfieldLabel name='no_rilis' label='No Rilis' defaultValue={data.arsip[0].no_rilis} />
                                                <TextfieldLabel name='judul_berita' label='Judul Berita (ID)' defaultValue={data.judul_berita} />
                                                <Stack direction='row' spacing={1}>
                                                    <SelectLabel name='kategori' label='Kategori Berita' defaultValue={data.kategori} className='capitalize'>
                                                        <MenuItem value='' disabled>Pilih salah satu</MenuItem>
                                                        {kategoriBerita.map((item, index) => <MenuItem value={item} key={index} className='capitalize'>{item}</MenuItem>)}
                                                    </SelectLabel>
                                                    <AutocompleteCustom name='jurnalis' label='Jurnalis' data={rows} getOptionLabel={(data) => data.jurnalis} defaultValue={rows.find((item: any) => item.jurnalis == data.jurnalis)} />
                                                </Stack>
                                                <Stack direction='row' spacing={1} className='mb-4'>
                                                    <FormControl className='w-full'>
                                                        <FormLabel className='mb-1 text-sm'>
                                                            Tanggal Rilis
                                                        </FormLabel>
                                                        <DateFieldBasic name='tgl_upload' value={dayjs(data.arsip[0].tgl_upload, 'DD/MM/YYYY')} />
                                                    </FormControl>
                                                    <FormControl className='w-full'>
                                                        <FormLabel className='mb-1 text-sm'>
                                                            Waktu Rilis
                                                        </FormLabel>
                                                        <TimePickerBasic value={dayjs(data.arsip[0].tgl_upload + ' ' + data.arsip[0].waktu_upload, 'DD/MM/YYYY hh:mm')} />
                                                    </FormControl>
                                                </Stack>
                                                <Stack direction='row' spacing={1}>
                                                    <AutocompleteCustom name='admin' label='Admin' data={rows} getOptionLabel={(data) => data.arsip[0].admin} defaultValue={rows.find((item: any) => item.arsip[0].admin == data.arsip[0].admin)} />
                                                    <TextfieldLabel name='link_berita' label='Tautan Berita' defaultValue={data.arsip[0].link_berita} />
                                                </Stack>
                                                <TextfieldLabel name='judul_terjemahan' label='Judul Terjemahan (EN)' defaultValue={data.arsip[0].judul_terjemahan} />
                                                <AutocompleteCustom name='penerjemah' label='Penerjemah' data={rows} getOptionLabel={(data) => data.arsip[0].penerjemah} defaultValue={rows.find((item: any) => item.arsip[0].penerjemah == data.arsip[0].penerjemah)} />
                                                <Stack direction='row' spacing={1} className='mb-4'>
                                                    <FormControl className='w-full'>
                                                        <FormLabel className='mb-1 text-sm'>
                                                            Tanggal Rilis Terjemahan
                                                        </FormLabel>
                                                        <DateFieldBasic name='tgl_upload_terj' value={dayjs(data.arsip[0].tgl_upload_terj, 'DD/MM/YYYY')} />
                                                    </FormControl>
                                                    <FormControl className='w-full'>
                                                        <FormLabel className='mb-1 text-sm'>
                                                            Waktu Rilis Terjemahan
                                                        </FormLabel>
                                                        <TimePickerBasic value={dayjs(data.arsip[0].tgl_upload_terj + ' ' + data.arsip[0].waktu_upload_terj, 'DD/MM/YYYY hh:mm')} />
                                                    </FormControl>
                                                </Stack>
                                                <Stack direction='row' spacing={1}>
                                                    <AutocompleteCustom name='admin_terj' label='Admin Terjemahan' data={rows} getOptionLabel={(data) => data.arsip[0].admin_terj} defaultValue={rows.find((item: any) => item.arsip[0].admin_terj == data.arsip[0].admin_terj)} />
                                                    <TextfieldLabel name='link_terj' label='Tautan Terjemahan' defaultValue={data.arsip[0].link_terj} />
                                                </Stack>
                                                <SelectLabel name='status' label='Status' defaultValue={data.arsip[0].status_publikasi}>
                                                    <MenuItem value='pending'>Pending</MenuItem>
                                                    <MenuItem value='ID'>ID</MenuItem>
                                                    <MenuItem value='EN'>EN</MenuItem>
                                                    <MenuItem value='selesai'>Selesai</MenuItem>
                                                </SelectLabel>
                                            </>
                                        );
                                    })}
                                    <Stack direction='row' justifyContent='flex-end' spacing={1} marginBottom={1} marginTop={2}>
                                        <ButtonIcon variant='outlined' color='error' icon={<DeleteIcon className='-mr-1' />}>Hapus</ButtonIcon>
                                        <ButtonIcon variant='contained' icon={<CancelIcon className='-mr-1' />} onClick={handleClose}>Tutup</ButtonIcon>
                                        <ButtonIcon variant='contained' color='success' icon={<SaveIcon className='-mr-1' />}>Simpan</ButtonIcon>
                                    </Stack>
                                </Box>
                            </Box>
                        </Fade>
                    </Modal>
                </Paper>
            </DashboardPanel>
        </Box>
    );
}

export const kategoriBerita = [
    'Kegiatan',
    'Berita Terkini',
    'Alumni UNS',
    'Mahasiswa UNS',
    'Akademik'
];

