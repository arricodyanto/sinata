import AutocompleteCustom from '@/common/components/atoms/AutocompleteCustom';
import ButtonBasic from '@/common/components/atoms/ButtonBasic';
import CollapsibleAlert from '@/common/components/atoms/CollapsibleAlert';
import DialogConfirmation from '@/common/components/atoms/DialogConfirmation';
import FileUpload from '@/common/components/atoms/FileUpload';
import SelectLabel from '@/common/components/atoms/SelectLabel';
import TextfieldLabel from '@/common/components/atoms/TextfieldLabel';
import { TFormTambahLayananProps } from '@/common/types';
import { dateISOFormatter, timeISOFormatter } from '@/common/utils/dateFormatter.util';
import { getAllUsers } from '@/services/accounts';
import { Box, MenuItem, Stack, Typography } from '@mui/material';
import { FilePondFile } from 'filepond';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

const form = new FormData();

export default function PembaruanInfoForm(props: TFormTambahLayananProps) {
  const { onSave, admin } = props;

  const { isReady } = useRouter();
  const isAdmin = admin ? true : false;

  const [users, setUsers] = useState<Array<any>>([]); // Handle autocomplete

  const handleUserChange = (event: any, value: any) => {
    form.set('id_account', value.id);
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
          <Typography className='text-dark' variant='body2'>Pastikan Anda telah menambahkan detil informasi kegiatan Anda ke sistem! Jika belum, silakan menuju ke halaman <Link href='/admins/daftar-kegiatan/tambah' className='underline hover:opacity-75 transition'>Tambah Kegiatan</Link></Typography>
        </CollapsibleAlert>
      )}
      <TextfieldLabel label='Judul Permohonan' onChange={(event: any) => form.set('judul_permohonan', event.target.value)} placeholder='Judul Permohonan' />
      {isAdmin ? (
        <AutocompleteCustom name='name' label='User Pemohon' data={users} onChange={handleUserChange} getOptionLabel={(data) => data.name} />
      ) : null}
      <FileUpload name='surat_permohonan' label='Surat Permohonan' allowMultiple={false} allowReorder={false} onupdatefiles={(fileItems: FilePondFile[]) => {
        const file = fileItems[0]?.file;
        if (file) {
          form.set('surat_permohonan', file);
        }
      }} acceptedFileTypes={['application/pdf']} labelFileTypeNotAllowed='Hanya file PDF yang diijinkan' />
      <FileUpload name='bahan_publikasi' label='Bahan Publikasi' allowMultiple={false} allowReorder={false} onupdatefiles={(fileItems: FilePondFile[]) => {
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
          <TextfieldLabel label='Luaran Layanan' onChange={(event: any) => form.set('luaran_layanan', event.target.value)} multiline maxRows={5} />
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
