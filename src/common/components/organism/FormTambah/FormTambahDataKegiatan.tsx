import SelectLabel from '@/common/components/atoms/SelectLabel';
import TextfieldLabel from '@/common/components/atoms/TextfieldLabel';
import TimePickerBasic from '@/common/components/atoms/TimePickerBasic';
import { dateISOFormatter, timeISOFormatter } from '@/common/utils/dateFormatter.util';
import { FormControl, FormLabel, MenuItem, Stack } from '@mui/material';
import { FilePondFile } from 'filepond';
import { useState } from 'react';
import ButtonBasic from '../../atoms/ButtonBasic';
import DatePickerBasic from '../../atoms/DatePickerBasic';
import DialogConfirmation from '../../atoms/DialogConfirmation';
import FileUpload from '../../atoms/FileUpload';

const form = new FormData();

export default function FormTambahKegiatan() {
    const [open, setOpen] = useState(false);
    const handleDialogOpen = () => {
        setOpen(true);
    };
    const handleDialogClose = () => {
        setOpen(false);
    };

    const handleAjukan = async () => {

    };
    return (
        <>
            <TextfieldLabel name='judul_kegiatan' label='Judul Kegiatan' defaultValue='' onChange={(event: any) => form.set('judul_kegiatan', event.target.value)} />
            <TextfieldLabel name='des_kegiatan' label='Deskripsi Kegiatan' defaultValue='' onChange={(event: any) => form.set('des_kegiatan', event.target.value)} multiline maxRows={8} />
            <SelectLabel name='sifat_kegiatan' label='Sifat Kegiatan' defaultValue='' onChange={(event: any) => form.set('sifat_kegiatan', event.target.value)} >
                <MenuItem value='Terbuka'>Terbuka untuk Umum</MenuItem>
                <MenuItem value='Undangan'>Undangan</MenuItem>
            </SelectLabel>
            <Stack direction='row' spacing={1} className='mb-6'>
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
            <TextfieldLabel label='Tempat Kegiatan' defaultValue='' onChange={(event: any) => form.set('tempat_kegiatan', event.target.value)} />
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
            <DialogConfirmation title='Ubah Data' body='Apakah Anda yakin ingin menyimpan perubahan pada data ini?' open={open} onClose={handleDialogClose}>
                <Stack direction='row' spacing={1} className='mt-4 px-2'>
                    <ButtonBasic variant='contained' onClick={handleDialogClose}>Batal</ButtonBasic>
                    <ButtonBasic variant='contained' color='success' onClick={handleAjukan}>Simpan</ButtonBasic>
                </Stack>
            </DialogConfirmation>
        </>
    );
}
