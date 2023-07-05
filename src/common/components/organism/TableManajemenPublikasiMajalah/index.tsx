import React from 'react';
import data1 from '@/json/tb_kegiatan.json';
import data2 from '@/json/tb_account.json';
import data3 from '@/json/tb_laymajalah.json';
import { Box, Button, Fade, FormControl, FormLabel, IconButton, MenuItem, Modal, Skeleton, Stack, Typography } from '@mui/material';
import TableDataSkeleton from '@/common/components/molecules/TableDataSkeleton/TableDataSkeleton';
import TableData from '@/common/components/molecules/TableData';
import TextfieldLabel from '@/common/components/atoms/TextfieldLabel';
import Link from 'next/link';
import FileUpload from '@/common/components/atoms/FileUpload';
import AutocompleteTitle from '@/common/components/atoms/AutocompleteTitle';
import AutocompleteCustom from '@/common/components/atoms/AutocompleteCustom';
import SelectLabel from '@/common/components/atoms/SelectLabel';
import DateFieldBasic from '@/common/components/atoms/DateFieldBasic';
import TimePickerBasic from '@/common/components/atoms/TimePickerBasic';
import ButtonIcon from '@/common/components/atoms/ButtonIcon';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import dayjs from 'dayjs';

export default function TableManajemenPublikasiMajalah() {
    // Table Data props
    const headers = [
        'ID', 'Judul Kegiatan', 'User Pemohon', 'Tanggal Kegiatan', 'Waktu', 'Tempat', 'Bahan Publikasi', 'Disposisi', 'Luaran Layanan', 'Aksi', 'Status'
    ];
    const columns = [
        { id: 1, label: 'id' },
        { id: 2, label: 'judul_kegiatan' },
        { id: 3, label: 'name' },
        { id: 4, label: 'tgl_kegiatan' },
        { id: 5, label: 'waktu_kegiatan' },
        { id: 6, label: 'tempat_kegiatan' },
        { id: 7, label: 'bahan_publikasi' },
        { id: 8, label: 'disposisi' },
        { id: 9, label: 'luaran_layanan' }
    ];

    // Fetch data from local json
    const combinedData = data1.map((obj1: any) => {
        const match2 = data2.find((obj2: any) => obj1.id_account === obj2.id);
        const match3 = data3.find((obj3: any) => obj1.id === obj3.id_kegiatan);
        return { ...obj1, ...match2, ...match3 };
    });

    const filteredData = combinedData.filter((row: any) => {
        return row.status != null;
    });

    const [data, setData] = React.useState<Array<any>>(filteredData);
    const rows = data.slice().reverse().map((row: any) => row);

    // Handle Judul Kegiatan Autocomplete
    const [judul, setJudul] = React.useState<any>();
    const handleJudulChange = (event: any, value: any) => {
        if (value == null) setJudul(value);
        if (value != null) setJudul(value.judul_kegiatan);
    };

    // Modal state
    const [open, setOpen] = React.useState(false);
    const [currIndex, setCurrIndex] = React.useState(0);
    const handleOpen = (id: number) => {
        setOpen(true);
        setCurrIndex(id);
        setJudul(rows.filter((item: any) => item.id == id).map(item => item.judul_kegiatan)[0]);
    };
    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };
    const handleClose = () => setOpen(false);

    // Editable File Input
    const [bahan, setBahan] = React.useState(false);
    const [disposisi, setDisposisi] = React.useState(false);
    const [luaran, setLuaran] = React.useState(false);
    return (
        <>
            {rows.length === 0 ?
                <>
                    <Skeleton variant='rounded' width={210} height={25} className='mb-6' />
                    <TableDataSkeleton headers={headers} />
                </>
                :
                <TableData headers={headers} columns={columns} rows={rows} status={true} actionOnClick={handleOpen} />
            }
            <Modal open={open} onClose={handleClose} BackdropProps={{ onClick: handleBackdropClick }}>
                <Fade in={open}>
                    <Box className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md xs:w-[calc(100%-40px)] md:w-[800px] lg:w-[1000px]'>
                        <Stack direction='row' justifyContent='space-between' className='sticky py-2 px-6 bg-gray-100 rounded-t-md'>
                            <Typography variant="subtitle1" component="h2" className='font-bold'>
                                Manajemen Layanan Publikasi di Majalah UNS
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
                                        <AutocompleteTitle name='judul_kegiatan' label='Judul Kegiatan' data={rows} onChange={handleJudulChange} defaultValue={rows.find((item: any) => item.id === currIndex)} />
                                        <AutocompleteCustom name='name' label='User Pemohon' data={rows} getOptionLabel={(data) => data.name} defaultValue={rows.find((item: any) => item.name == data.name)} />
                                        {rows.filter((row: any) => row.judul_kegiatan == judul).map((item: any) => {
                                            return (
                                                <>
                                                    <TextfieldLabel name='des_kegiatan' label='Deskripsi Kegiatan' value={item.des_kegiatan} multiline rows={3} disabled />
                                                    <SelectLabel name='sifat_kegiatan' label='Sifat Kegiatan' value={item.sifat_kegiatan} disabled>
                                                        <MenuItem value='terbuka'>Terbuka untuk Umum</MenuItem>
                                                        <MenuItem value='undangan'>Undangan</MenuItem>
                                                    </SelectLabel>
                                                    <Stack direction='row' spacing={1} className='mb-6'>
                                                        <FormControl className='w-full'>
                                                            <FormLabel className='mb-1 text-sm'>
                                                                Tanggal Kegiatan
                                                            </FormLabel>
                                                            <DateFieldBasic name='tgl_kegiatan' value={dayjs(item.tgl_kegiatan, 'DD/MM/YYYY')} disabled />
                                                        </FormControl>
                                                        <FormControl className='w-full'>
                                                            <FormLabel className='mb-1 text-sm'>
                                                                Waktu Kegiatan
                                                            </FormLabel>
                                                            <TimePickerBasic value={dayjs(item.tgl_kegiatan + ' ' + item.waktu_kegiatan, 'DD/MM/YYYY hh:mm')} disabled />
                                                        </FormControl>
                                                    </Stack>
                                                    <Stack direction='row' spacing={1}>
                                                        <TextfieldLabel name='tempat_kegiatan' label='Tempat Kegiatan' value={item.tempat_kegiatan} disabled />
                                                        <SelectLabel name='status' label='Status' defaultValue={data.status}>
                                                            <MenuItem value='pending'>Pending</MenuItem>
                                                            <MenuItem value='approved & on progress'>Approved & On Progress</MenuItem>
                                                            <MenuItem value='complete'>Complete</MenuItem>
                                                            <MenuItem value='rejected'>Rejected</MenuItem>
                                                        </SelectLabel>
                                                    </Stack>
                                                    <FormControl className='w-full'>
                                                        <FormLabel className='mb-2 text-sm'>Surat Permohonan</FormLabel>
                                                        <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' className='mb-4'>
                                                            <Link href='/' target='_blank'>
                                                                <Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>{item.surat_permohonan}</Typography>
                                                            </Link>
                                                            <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' disabled>Change File</Button>
                                                        </Stack>
                                                    </FormControl>
                                                </>
                                            );
                                        })}
                                        {bahan == false && data.bahan_publikasi != null ? (
                                            <>
                                                <FormLabel className='mb-2 text-sm'>Bahan Publikasi</FormLabel>
                                                <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' className='mb-4'>
                                                    <Link href='/' target='_blank'>
                                                        <Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>{data.bahan_publikasi}</Typography>
                                                    </Link>
                                                    <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setBahan(true)}>Change File</Button>
                                                </Stack>
                                            </>
                                        ) : (
                                            <>
                                                <FileUpload name='bahan_publikasi' label='Bahan Publikasi' allowMultiple={false} allowReorder={false} acceptedFileTypes={['application/pdf']} labelFileTypeNotAllowed='Hanya file PDF yang diijinkan' />
                                                {data.bahan_publikasi != null ? (
                                                    <Stack direction='row-reverse' className='-mt-2'>
                                                        <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setBahan(false)}>Cancel</Button>
                                                    </Stack>
                                                ) : null}
                                            </>
                                        )
                                        }
                                        {disposisi == false ? (
                                            <>
                                                <FormLabel className='mb-2 text-sm'>Disposisi</FormLabel>
                                                <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' className='mb-4'>
                                                    <Link href='/' target='_blank'>
                                                        <Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>{data.disposisi}</Typography>
                                                    </Link>
                                                    <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setDisposisi(true)}>Change File</Button>
                                                </Stack>
                                            </>
                                        ) : (
                                            <>
                                                <FileUpload name='disposisi' label='Disposisi' allowMultiple={false} allowReorder={false} acceptedFileTypes={['application/pdf']} labelFileTypeNotAllowed='Hanya file PDF yang diijinkan' />
                                                <Stack direction='row-reverse' className='-mt-2 mb-4'>
                                                    <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setDisposisi(false)}>Cancel</Button>
                                                </Stack>
                                            </>
                                        )
                                        }
                                        {luaran == false ? (
                                            <>
                                                <FormLabel className='mb-2 text-sm'>Luaran Layanan</FormLabel>
                                                <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' className='mb-4'>
                                                    <Link href='/' target='_blank'>
                                                        <Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>{data.luaran_layanan}</Typography>
                                                    </Link>
                                                    <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setLuaran(true)}>Change File</Button>
                                                </Stack>
                                            </>
                                        ) : (
                                            <>
                                                <FileUpload name='luaran_layanan' label='Luaran Layanan' allowMultiple={false} allowReorder={false} acceptedFileTypes={['application/pdf']} labelFileTypeNotAllowed='Hanya file PDF yang diijinkan' />
                                                <Stack direction='row-reverse' className='-mt-2 mb-4'>
                                                    <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setLuaran(false)}>Cancel</Button>
                                                </Stack>
                                            </>
                                        )
                                        }
                                    </>
                                );
                            })}
                            <Stack direction='row' justifyContent='flex-end' spacing={1} marginBottom={1} marginTop={4}>
                                <ButtonIcon variant='outlined' color='error' icon={<DeleteIcon className='-mr-1' />}>Hapus</ButtonIcon>
                                <ButtonIcon variant='contained' icon={<CancelIcon className='-mr-1' />} onClick={handleClose}>Tutup</ButtonIcon>
                                <ButtonIcon variant='contained' color='success' icon={<SaveIcon className='-mr-1' />}>Simpan</ButtonIcon>
                            </Stack>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}
