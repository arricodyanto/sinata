import { TFormTambahArsipProps } from '@/common/types';
import { getAllUsers } from '@/services/accounts';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import TextfieldLabel from '../../atoms/TextfieldLabel';
import SelectLabel from '../../atoms/SelectLabel';
import { kategoriDesain } from '@/pages/admins/arsip/desain';
import { FormControl, FormLabel, MenuItem, Stack } from '@mui/material';
import DateTimePickerBasic from '../../atoms/DatePickerBasic/DateTimePickerBasic';
import dayjs from 'dayjs';
import AutocompleteCustom from '../../atoms/AutocompleteCustom';
import { dateISOFormatter, dateTimeFormatter } from '@/common/utils/dateFormatter.util';
import DialogConfirmation from '../../atoms/DialogConfirmation';
import ButtonBasic from '../../atoms/ButtonBasic';
import FileUpload from '../../atoms/FileUpload';
import { FilePondFile } from 'filepond';

const form = new FormData();

export default function TambahArsipDesain(props: TFormTambahArsipProps) {
    const { onSave } = props;
    const { isReady } = useRouter();
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

    const handleStatusChange = (event: any) => {
        form.set('status', event.target.value);
    };

    const [users, setUsers] = useState<Array<any>>([]);
    const getUsers = useCallback(async () => {
        const response = await getAllUsers();
        setUsers(response.data);
    }, []);

    useEffect(() => {
        if (isReady) {
            getUsers();
        }
    }, [isReady]);

    return (
        <>
            <TextfieldLabel name='judul_desain' label='Judul Desain' onChange={(event: any) => form.set('judul_desain', event.target.value)} />
            <AutocompleteCustom name='name' label='User Pemohon' data={users} onChange={handleUserChange} getOptionLabel={(data) => data.name} />
            <SelectLabel name='kategori' label='Kategori Desain' defaultValue={''} className='capitalize' onChange={(event: any) => form.set('kategori', event.target.value)} >
                <MenuItem value='' disabled>Pilih salah satu</MenuItem>
                {kategoriDesain.map((item, index) => <MenuItem value={item} key={index} className='capitalize'>{item}</MenuItem>)}
            </SelectLabel>
            <TextfieldLabel name='keterangan' label='Keterangan' onChange={(event: any) => form.set('keterangan', event.target.value)} multiline minRows={3} maxRows={6} />
            <Stack direction='row' spacing={1}>
                <FormControl className='w-full'>
                    <FormLabel className='mb-1 text-sm'>
                        Deadline Pengerjaan
                    </FormLabel>
                    <DateTimePickerBasic onChange={(value: any) => form.set('deadline', dateISOFormatter(value))} />
                </FormControl>
                <FormControl className='w-full'>
                    <SelectLabel name='status' label='Status' defaultValue={''} onChange={handleStatusChange}>
                        <MenuItem value='' disabled>Pilih salah satu</MenuItem>
                        <MenuItem value='Pending'>Pending</MenuItem>
                        <MenuItem value='Approved & On Progress'>Approved & On Progress</MenuItem>
                        <MenuItem value='Completed'>Complete</MenuItem>
                        <MenuItem value='Rejected'>Rejected</MenuItem>
                    </SelectLabel>
                </FormControl>
            </Stack>
            <FileUpload name='lampiran_file' label='Lampiran File' allowMultiple={false} allowReorder={false} onupdatefiles={(fileItems: FilePondFile[]) => {
                const file = fileItems[0]?.file;
                if (file) {
                    form.set('lampiran_file', file);
                }
            }} />
            <ButtonBasic type='submit' variant='contained' onClick={handleDialogOpen}>Tambahkan Data</ButtonBasic>
            <DialogConfirmation title='Tambahkan Data' body='Apakah Anda yakin ingin menambahkan data ini? Pastikan semua data telah terisi dengan benar.' open={open} onClose={handleDialogClose}>
                <Stack direction='row' spacing={1} className='mt-4 px-2 mb-4'>
                    <ButtonBasic variant='contained' onClick={handleDialogClose}>Batal</ButtonBasic>
                    <ButtonBasic variant='contained' color='success' onClick={handleTambah}>Tambahkan</ButtonBasic>
                </Stack>
            </DialogConfirmation>
        </>
    );
}
