import { Box, FormControl, FormLabel, MenuItem, Stack, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import TextfieldLabel from '../../atoms/TextfieldLabel';
import FileUpload from '../../atoms/FileUpload';
import DatePickerBasic from '../../atoms/DatePickerBasic';
import TimePickerBasic from '../../atoms/TimePickerBasic';
import ButtonBasic from '../../atoms/ButtonBasic';
import CollapsibleAlert from '../../atoms/CollapsibleAlert';
import { TFormTambahLayananProps } from '@/common/types';
import { useRouter } from 'next/router';
import AutocompleteCustom from '../../atoms/AutocompleteCustom';
import { getAllUsers } from '@/services/accounts';
import { dateISOFormatter, timeISOFormatter } from '@/common/utils/dateFormatter.util';
import SelectLabel from '../../atoms/SelectLabel';
import { FilePondFile } from 'filepond';
import Link from 'next/link';
import DialogConfirmation from '../../atoms/DialogConfirmation';

const form = new FormData();

export default function KonpersForm(props: TFormTambahLayananProps) {
    const { onSave, admin } = props;

    const { isReady } = useRouter();
    const isAdmin = admin ? true : false;

    const [users, setUsers] = useState<Array<any>>([]); // Handle autocomplete

    const handleUserChange = (event: any, value: any) => {
        form.set('id_account', value.id);
    };

    const handleDateChange = (value: any) => {
        form.set('tgl_kegiatan', dateISOFormatter(value));
    };

    const handleTimeChange = (value: any) => {
        form.set('waktu_kegiatan', timeISOFormatter(value));
    };

    const getUsers = useCallback(async () => {
        const response = await getAllUsers();
        setUsers(response.data);
    }, []);

    useEffect(() => {
        if (isReady) {
            getUsers();
        }
    }, [isReady]);

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

    return (
        <Box>
            {!isAdmin ? (
                <CollapsibleAlert type='warning' className='mb-4'>
                    <Typography className='text-dark' variant='body2'>Pastikan Anda telah menambahkan detil informasi kegiatan Anda ke sistem! Jika belum, silakan menuju ke halaman <Link href='/users/tambah-kegiatan' className='underline hover:opacity-75 transition'>Tambah Kegiatan</Link></Typography>
                </CollapsibleAlert>
            ) : (
                <CollapsibleAlert type='warning' className='mb-4'>
                    <Typography className='text-dark' variant='body2'>Pastikan Anda telah menambahkan detil informasi kegiatan Anda ke sistem! Jika belum, silakan menuju ke halaman <Link href='/admins/daftar-kegiatan/tambah' className='underline hover:opacity-75 transition'> Tambah Kegiatan</Link></Typography>
                </CollapsibleAlert>
            )}
            <TextfieldLabel name='judul_kegiatan' label='Judul Konferensi Pers' onChange={(event: any) => form.set('judul_kegiatan', event.target.value)} placeholder='Judul Konferensi Pers' />
            {isAdmin ? (
                <AutocompleteCustom name='name' label='User Pemohon' data={users} onChange={handleUserChange} getOptionLabel={(data) => data.name} />
            ) : null}
            <Stack direction='row' spacing={1} className='mb-4'>
                <FormControl className='w-full'>
                    <FormLabel className='mb-1 text-sm'>
                        Tanggal Kegiatan
                    </FormLabel>
                    <DatePickerBasic onChange={handleDateChange} />
                </FormControl>
                <FormControl className='w-full'>
                    <FormLabel className='mb-1 text-sm'>
                        Waktu Kegiatan
                    </FormLabel>
                    <TimePickerBasic onChange={handleTimeChange} />
                </FormControl>
            </Stack>
            <TextfieldLabel name='tempat_kegiatan' label='Tempat Kegiatan' onChange={(event: any) => form.set('tempat_kegiatan', event.target.value)} placeholder='Tempat Kegiatan' />
            {isAdmin ? (
                <SelectLabel label='Status' defaultValue='Pending' onChange={(event: any) => form.set('status', event.target.value)}>
                    <MenuItem value='' disabled>Pilih salah satu</MenuItem>
                    <MenuItem value='Pending'>Pending</MenuItem>
                    <MenuItem value='Approved & On Progress'>Approved & On Progress</MenuItem>
                    <MenuItem value='Completed'>Complete</MenuItem>
                    <MenuItem value='Rejected'>Rejected</MenuItem>
                </SelectLabel>
            ) : null}
            <FileUpload name='surat_permohonan' label='Surat Permohonan' allowMultiple={false} allowReorder={false} onupdatefiles={(fileItems: FilePondFile[]) => {
                const file = fileItems[0]?.file;
                if (file) {
                    form.set('surat_permohonan', file);
                }
            }} acceptedFileTypes={['application/pdf']} labelFileTypeNotAllowed='Hanya file PDF yang diijinkan' />
            <FileUpload name='leaflet_kegiatan' label='Leaflet Kegiatan' allowMultiple={false} allowReorder={false} onupdatefiles={(fileItems: FilePondFile[]) => {
                const file = fileItems[0]?.file;
                if (file) {
                    form.set('leaflet_kegiatan', file);
                }
            }} acceptedFileTypes={['image/png', 'image/jpeg']} labelFileTypeNotAllowed='Hanya file JPEG dan PNG yang diijinkan' />
            {!isAdmin ? (
                <>
                    <CollapsibleAlert type='info' className='mb-4'>
                        <Typography className='text-dark' variant='body2'>Sebelum menekan tombol <b>Ajukan Layanan</b>, pastikan data yang Anda masukkan sudah benar!</Typography>
                    </CollapsibleAlert>
                    <ButtonBasic type='submit' variant='contained'>Ajukan Layanan</ButtonBasic>
                </>
            ) : null}
            {isAdmin ? (
                <ButtonBasic onClick={handleDialogOpen} variant='contained'>Tambahkan Ajuan</ButtonBasic>
            ) : null}
            <DialogConfirmation title='Tambahkan Data' body='Apakah Anda yakin ingin menambahkan data ini? Pastikan semua data telah terisi dengan benar.' open={open} onClose={handleDialogClose}>
                <Stack direction='row' spacing={1} className='mt-4 px-2 mb-4'>
                    <ButtonBasic variant='contained' onClick={handleDialogClose}>Batal</ButtonBasic>
                    <ButtonBasic variant='contained' color='success' onClick={handleSubmit}>Tambahkan</ButtonBasic>
                </Stack>
            </DialogConfirmation>
        </Box>
    );
}
