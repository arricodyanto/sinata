import { Box, FormControl, FormLabel, MenuItem, Stack, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import AutocompleteTitle from '@/common/components/atoms/AutocompleteTitle';
import data from '@/json/tb_kegiatan.json';
import TextfieldLabel from '@/common/components/atoms/TextfieldLabel';
import SelectLabel from '@/common/components/atoms/SelectLabel';
import DateFieldBasic from '@/common/components/atoms/DateFieldBasic';
import TimePickerBasic from '@/common/components/atoms/TimePickerBasic';
import dayjs from 'dayjs';
import FileUpload from '@/common/components/atoms/FileUpload';
import CollapsibleAlert from '@/common/components/atoms/CollapsibleAlert';
import ButtonBasic from '@/common/components/atoms/ButtonBasic';
import Link from 'next/link';
import { TFormTambahLayananProps } from '@/common/types';
import { useRouter } from 'next/router';
import { getAllDataKegiatan } from '@/services/data-kegiatan';
import DisabledFormDataKegiatan from '../FormDataKegiatan/DisabledFormDataKegiatan';
import DatePickerBasic from '../../atoms/DatePickerBasic';
import { FilePondFile } from 'filepond';
import DialogConfirmation from '../../atoms/DialogConfirmation';

const form = new FormData();

export default function BalihoForm(props: TFormTambahLayananProps) {
    const { onSave, admin } = props;
    const { isReady } = useRouter();

    const isAdmin = admin ? true : false;
    const [autocomplete, setAutocomplete] = useState<string>(''); // Handle autocomplete
    const [dataKegiatan, setDataKegiatan] = useState<Array<any>>([]); // Handle autocomplete

    const getDataKegiatan = useCallback(async () => {
        const response = await getAllDataKegiatan();
        setDataKegiatan(response.data);
    }, []);

    useEffect(() => {
        if (isReady) {
            getDataKegiatan();
        }
    }, [isReady]);

    const handleJudulChange = (event: any, value: any) => {
        setAutocomplete(value?.judul_kegiatan);
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
    return (
        <Box>
            <CollapsibleAlert type='info' className='mb-4'>
                <Typography className='text-dark' variant='body2'>Pemasangan Baliho dilakukan di 3 titik (Titik A, Titik B, Titik C). Pengajuan Layanan Pemasangan Baliho dikenakan biaya sebesar <b>Rp 250.000,-</b> untuk biaya percetakan dan biaya lainnya. Silakan mentransfer biaya sesuai nominal ke rekening berikut ini.</Typography>
                <Typography className='text-dark' variant='body2' marginTop={1}><b>Rekening Bank Jateng:</b><ul>3333333333 - Humas UNS</ul></Typography>
            </CollapsibleAlert>
            {!isAdmin ? (
                <CollapsibleAlert type='warning' className='mb-4'>
                    <Typography className='text-dark' variant='body2'>Pastikan Anda telah menambahkan detil informasi kegiatan Anda ke sistem! Jika belum, silakan menuju ke halaman <Link href='/users/tambah-kegiatan' className='underline hover:opacity-75 transition'>Tambah Kegiatan</Link></Typography>
                </CollapsibleAlert>
            ) : (
                <CollapsibleAlert type='warning' className='mb-4'>
                    <Typography className='text-dark' variant='body2'>Pastikan Anda telah menambahkan detil informasi kegiatan Anda ke sistem! Jika belum, silakan menuju ke halaman <Link href='/admins/daftar-kegiatan/tambah' className='underline hover:opacity-75 transition'> Tambah Kegiatan</Link></Typography>
                </CollapsibleAlert>
            )}
            <AutocompleteTitle name='judul_kegiatan' label='Judul Kegiatan' data={dataKegiatan} onChange={handleJudulChange} />
            <DisabledFormDataKegiatan judul_kegiatan={autocomplete} />
            <Stack direction='row' spacing={1} className='mb-4'>
                <FormControl className='w-full'>
                    <FormLabel className='mb-1 text-sm'>
                        Tanggal Awal Penayangan
                    </FormLabel>
                    <DatePickerBasic onChange={(value: any) => form.set('tgl_awal', value)} />
                </FormControl>
                <FormControl className='w-full'>
                    <FormLabel className='mb-1 text-sm'>
                        Tanggal Akhir Penayangan
                    </FormLabel>
                    <DatePickerBasic onChange={(value: any) => form.set('tgl_akhir', value)} />
                </FormControl>
            </Stack>
            <FileUpload name='bahan_publikasi' label='Bahan Publikasi' onupdatefiles={(fileItems: FilePondFile[]) => {
                const file = fileItems[0]?.file;
                if (file) {
                    form.set('bahan_publikasi', file);
                }
            }} allowMultiple={false} allowReorder={false} acceptedFileTypes={['image/png', 'image/jpeg', 'video/quicktime', 'video/mp4', 'video/mkv']} labelFileTypeNotAllowed='Hanya file gambar (JPEG, PNG) dan video (MP4, MKV) yang diijinkan' />
            <FileUpload name='bukti_pembayaran' label='Bukti Pembayaran' onupdatefiles={(fileItems: FilePondFile[]) => {
                const file = fileItems[0]?.file;
                if (file) {
                    form.set('bukti_pembayaran', file);
                }
            }} allowMultiple={false} allowReorder={false} acceptedFileTypes={['image/png', 'image/jpeg', 'video/quicktime', 'video/mp4', 'video/mkv']} labelFileTypeNotAllowed='Hanya file gambar (JPEG, PNG) dan video (MP4, MKV) yang diijinkan' />
            {isAdmin ? (
                <>
                    <SelectLabel label='Status' defaultValue='Pending' onChange={(event: any) => form.set('status', event.target.value)}>
                        <MenuItem value='' disabled>Pilih salah satu</MenuItem>
                        <MenuItem value='Pending'>Pending</MenuItem>
                        <MenuItem value='Approved & On Progress'>Approved & On Progress</MenuItem>
                        <MenuItem value='Completed'>Complete</MenuItem>
                        <MenuItem value='Rejected'>Rejected</MenuItem>
                    </SelectLabel>
                    <FileUpload name='disposisi' label='Disposisi' allowMultiple={false} allowReorder={false} onupdatefiles={(fileItems: FilePondFile[]) => {
                        const file = fileItems[0]?.file;
                        if (file) {
                            form.set('disposisi', file);
                        }
                    }} acceptedFileTypes={['application/pdf']} labelFileTypeNotAllowed='Hanya file PDF yang diijinkan' />
                    <FileUpload name='luaran_layanan' label='Luaran Layanan' onupdatefiles={(fileItems: FilePondFile[]) => {
                        const file = fileItems[0]?.file;
                        if (file) {
                            form.set('luaran_layanan', file);
                        }
                    }} allowMultiple={false} allowReorder={false} acceptedFileTypes={['image/png', 'image/jpeg']} labelFileTypeNotAllowed='Hanya file gambar (JPEG, PNG) yang diijinkan' />
                    <ButtonBasic onClick={handleDialogOpen} variant='contained'>Tambahkan Ajuan</ButtonBasic>
                </>
            ) : (
                <>
                    <CollapsibleAlert type='info' className='mb-4'>
                        <Typography className='text-dark' variant='body2'>Sebelum menekan tombol <b>Ajukan Layanan</b>, pastikan data yang Anda masukkan sudah benar!</Typography>
                    </CollapsibleAlert>
                    <ButtonBasic onClick={handleDialogOpen} variant='contained'>Ajukan Layanan</ButtonBasic>
                </>
            )}
            <DialogConfirmation title='Tambahkan Data' body='Apakah Anda yakin ingin menambahkan data ini? Pastikan semua data telah terisi dengan benar.' open={open} onClose={handleDialogClose}>
                <Stack direction='row' spacing={1} className='mt-4 px-2 mb-4'>
                    <ButtonBasic variant='contained' onClick={handleDialogClose}>Batal</ButtonBasic>
                    <ButtonBasic variant='contained' color='success' onClick={handleSubmit}>Tambahkan</ButtonBasic>
                </Stack>
            </DialogConfirmation>
        </Box>
    );
}
