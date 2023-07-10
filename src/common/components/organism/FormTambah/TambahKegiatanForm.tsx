import AutocompleteCustom from '@/common/components/atoms/AutocompleteCustom';
import ButtonBasic from '@/common/components/atoms/ButtonBasic';
import DatePickerBasic from '@/common/components/atoms/DatePickerBasic';
import DialogConfirmation from '@/common/components/atoms/DialogConfirmation';
import FileUpload from '@/common/components/atoms/FileUpload';
import SelectLabel from '@/common/components/atoms/SelectLabel';
import TextfieldLabel from '@/common/components/atoms/TextfieldLabel';
import TimePickerBasic from '@/common/components/atoms/TimePickerBasic';
import { TTambahKegiatanFormProps } from '@/common/types';
import { dateISOFormatter, timeISOFormatter } from '@/common/utils/dateFormatter.util';
import { getAllUsers } from '@/services/accounts';
import { FormControl, FormLabel, MenuItem, Stack } from '@mui/material';
import { FilePondFile } from 'filepond';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

const form = new FormData();

export default function TambahKegiatanForm(props: TTambahKegiatanFormProps) {
    const { onSave, admin } = props;
    const { isReady } = useRouter();
    const isAdmin = admin ? true : false;

    const [open, setOpen] = useState(false);
    const handleDialogOpen = () => {
        setOpen(true);
    };
    const handleDialogClose = () => {
        setOpen(false);
    };

    const handleTambah = async () => {
        onSave(form);
        setOpen(false);
    };

    const handleUserChange = (event: any, value: any) => {
        form.set('id_account', value?.id);
    };

    const [users, setUsers] = useState<Array<any>>([]);
    if (isAdmin) {
        const getUsers = useCallback(async () => {
            const response = await getAllUsers();
            setUsers(response.data);
        }, []);

        useEffect(() => {
            if (isReady) {
                getUsers();
            }
        }, [isReady]);
    }

    return (
        <>
            <TextfieldLabel name='judul_kegiatan' label='Judul Kegiatan' onChange={(event: any) => form.set('judul_kegiatan', event.target.value)} placeholder='Judul kegiatan dari agenda yang akan ditambahkan' />
            <TextfieldLabel name='des_kegiatan' label='Deskripsi Kegiatan' onChange={(event: any) => form.set('des_kegiatan', event.target.value)} placeholder='Penjelasan secara singkata inti dari agenda yang diselenggarakan' multiline maxRows={8} />
            <SelectLabel name='sifat_kegiatan' label='Sifat Kegiatan' defaultValue='default' onChange={(event: any) => form.set('sifat_kegiatan', event.target.value)}>
                <MenuItem value='Terbuka'>Terbuka untuk Umum</MenuItem>
                <MenuItem value='Undangan'>Undangan</MenuItem>
            </SelectLabel>
            <Stack direction='row' spacing={1} className='mb-4'>
                <FormControl className='w-full'>
                    <FormLabel className='mb-1 text-sm'>
                        Tanggal Kegiatan
                    </FormLabel>
                    <DatePickerBasic onChange={(value: any) => form.set('tgl_kegiatan', dateISOFormatter(value))} />
                </FormControl>
                <FormControl className='w-full'>
                    <FormLabel className='mb-1 text-sm'>
                        Waktu Kegiatan
                    </FormLabel>
                    <TimePickerBasic onChange={(value: any) => form.set('waktu_kegiatan', timeISOFormatter(value))} />
                </FormControl>
            </Stack>
            <TextfieldLabel label='Tempat Kegiatan' placeholder='Lokasi / tempat dari kegiatan dilaksanakan' onChange={(event: any) => form.set('tempat_kegiatan', event.target.value)} />
            {admin ? (
                <AutocompleteCustom name='name' label='User Pemohon' data={users} onChange={handleUserChange} getOptionLabel={(data) => data.name} />
            ) : null}
            <FileUpload name='surat_permohonan' label='Surat Permohonan' onupdatefiles={(fileItems: FilePondFile[]) => {
                const file = fileItems[0]?.file;
                if (file) {
                    form.set('surat_permohonan', file);
                }
            }} allowMultiple={false} allowReorder={false} acceptedFileTypes={['application/pdf']} labelFileTypeNotAllowed='Hanya file PDF yang diijinkan' />
            <FileUpload name='sik' label='Surat Ijin Kegiatan' onupdatefiles={(fileItems: FilePondFile[]) => {
                const file = fileItems[0]?.file;
                if (file) {
                    form.set('sik', file);
                }
            }} allowMultiple={false} allowReorder={false} acceptedFileTypes={['application/pdf']} labelFileTypeNotAllowed='Hanya file PDF yang diijinkan' />
            <ButtonBasic type='submit' variant='contained' onClick={handleDialogOpen}>Tambahkan Data</ButtonBasic>
            <DialogConfirmation title='Tambahkan Data' body='Apakah Anda yakin ingin menambahkan data ini? Pastikan semua data telah terisi dengan benar.' open={open} onClose={handleDialogClose}>
                <Stack direction='row' spacing={1} className='mt-4 px-2'>
                    <ButtonBasic variant='contained' onClick={handleDialogClose}>Batal</ButtonBasic>
                    <ButtonBasic variant='contained' color='success' onClick={handleTambah}>Tambahkan</ButtonBasic>
                </Stack>
            </DialogConfirmation>
        </>
    );
}
