import { Box, FormControl, FormLabel, MenuItem, Stack, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import TextfieldLabel from '../../atoms/TextfieldLabel';
import FileUpload from '../../atoms/FileUpload';
import ButtonBasic from '../../atoms/ButtonBasic';
import CollapsibleAlert from '../../atoms/CollapsibleAlert';
import { TFormTambahLayananProps } from '@/common/types';
import { useRouter } from 'next/router';
import { dateISOFormatter, dateTimeFormatter, timeISOFormatter } from '@/common/utils/dateFormatter.util';
import { getAllUsers } from '@/services/accounts';
import Link from 'next/link';
import { FilePondFile } from 'filepond';
import DateTimePickerBasic from '../../atoms/DatePickerBasic/DateTimePickerBasic';
import dayjs from 'dayjs';
import AutocompleteCustom from '../../atoms/AutocompleteCustom';
import SelectLabel from '../../atoms/SelectLabel';
import DialogConfirmation from '../../atoms/DialogConfirmation';

const form = new FormData();

export default function OpiniForm(props: TFormTambahLayananProps) {
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

  const handleAdminChange = (event: any, value: any) => {
    form.set('admin', value.name);
  };

  const handlePenerjemahChange = (event: any, value: any) => {
    form.set('penerjemah', value.name);
  };
  const handleAdminTerjChange = (event: any, value: any) => {
    form.set('admin_terj', value.name);
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
      <TextfieldLabel label='Judul Pembahasan' onChange={(event: any) => form.set('judul_pembahasan', event.target.value)} placeholder='Judul Pembahasan' />
      {isAdmin ? (
        <AutocompleteCustom name='name' label='User Pemohon' data={users} onChange={handleUserChange} getOptionLabel={(data) => data.name} />
      ) : null}
      <FileUpload name='surat_permohonan' label='Surat Permohonan' allowMultiple={false} allowReorder={false} onupdatefiles={(fileItems: FilePondFile[]) => {
        const file = fileItems[0]?.file;
        if (file) {
          form.set('surat_permohonan', file);
        }
      }} acceptedFileTypes={['application/pdf']} labelFileTypeNotAllowed='Hanya file PDF yang diijinkan' />
      <FileUpload name='foto_penulis' label='Foto Penulis' onupdatefiles={(fileItems: FilePondFile[]) => {
        const file = fileItems[0]?.file;
        if (file) {
          form.set('foto_penulis', file);
        }
      }} allowMultiple={false} allowReorder={false} acceptedFileTypes={['image/png', 'image/jpeg']} labelFileTypeNotAllowed='Hanya file JPEG dan PNG yang diijinkan' />
      <FileUpload name='bahan_publikasi' label='Bahan Publikasi' allowMultiple={false} allowReorder={false} onupdatefiles={(fileItems) => {
        const file = fileItems[0]?.file;
        if (file) {
          form.set('bahan_publikasi', file);
        }
      }} acceptedFileTypes={['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']} labelFileTypeNotAllowed='Hanya file Doc dan PDF yang diijinkan' />
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
          <Stack direction='row' spacing={1}>
            <FormControl className='w-full'>
              <FormLabel className='mb-1 text-sm'>
                Tanggal, Waktu Upload
              </FormLabel>
              <DateTimePickerBasic onChange={(value: any) => form.set('tgl_waktu_upload', value)} />
            </FormControl>
            <AutocompleteCustom label='Admin' data={users} onChange={handleAdminChange} getOptionLabel={(data) => data.name} />
          </Stack>
          <TextfieldLabel label='Tautan Berita' onChange={(event: any) => form.set('link_berita', event.target.value)} multiline maxRows={2} />
          <AutocompleteCustom label='Penerjemah' data={users} onChange={handlePenerjemahChange} getOptionLabel={(data) => data.name} />
          <Stack direction='row' spacing={1}>
            <FormControl className='w-full'>
              <FormLabel className='mb-1 text-sm'>
                Tanggal, Waktu Upload Terjemahan
              </FormLabel>
              <DateTimePickerBasic onChange={(value: any) => form.set('tgl_waktu_upload_terj', value)} />
            </FormControl>
            <AutocompleteCustom label='Admin Terjemahan' data={users} onChange={handleAdminTerjChange} getOptionLabel={(data) => data.name} />
          </Stack>
          <TextfieldLabel label='Tautan Terjemahan' onChange={(event: any) => form.set('link_terj', event.target.value)} multiline maxRows={2} />
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
