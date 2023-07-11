import React, { useState } from 'react';
import { Avatar, Box, Divider, Grid, IconButton, Modal, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import LinearProgressC from '@/common/components/atoms/LinearProgressC';
import ButtonBasic from '@/common/components/atoms/ButtonBasic';
import Link from 'next/link';
import CloseIcon from '@mui/icons-material/Close';
import TextfieldPass from '@/common/components/atoms/TextfieldPass';
import { TAccountProfileProps } from '@/common/types/account-profile';
import { calculateProfileCompleteness } from '@/common/utils/profileCompleteness';
import { changePasswordUser } from '@/services/accounts';
import { toast } from 'react-toastify';
import { LoadingButton } from '@mui/lab';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

export default function AccountProfile(props: TAccountProfileProps) {
  const router = useRouter();
  const { payload } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const api_image = process.env.NEXT_PUBLIC_API_IMG;
  const completeness = calculateProfileCompleteness(props);

  const [old_password, setOld_password] = useState('');
  const [new_password, setNew_password] = useState('');
  const [confirm_password, setConfirm_password] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    const form = { old_password, new_password, confirm_password };
    try {
      setIsLoading(true);
      const response = await changePasswordUser(payload.account.id, form);
      if (response.error === true) {
        toast.error(response.message, {
          theme: 'colored'
        });
      }
      if (response.error === false) {
        toast.success(response.message, {
          theme: 'colored'
        });
        setOpen(false);
        window.location.reload();
      }
    } finally {
      setIsLoading(false);
    }
  };
  const onLogout = () => {
    Cookies.remove('tkn');
    router.push('/');
  };
  return (
    <>
      <Stack className='justify-center' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Stack direction='column' className='place-items-center my-4 w-4/5'>
          <Avatar alt='Gary Doe' src={`${api_image}/${payload.account.img_profil}`} sx={{ width: 150, height: 150 }} />
          <Typography variant='body1' className='text-dark mt-4 font-bold'>{payload.account.name}</Typography>
          <Typography variant='body2' className='text-dark mb-4'>{payload.account.username}</Typography>
          <Typography variant='body2' className='text-dark'>Lengkapi Profil</Typography>
          <LinearProgressC value={completeness} />
        </Stack>
      </Stack>
      <Divider />
      <Stack direction='column' className='grid place-items-center m-4'>
        <Typography variant='body1' className='text-dark font-bold'>Role Akun</Typography>
        <Typography variant='body2' className='text-dark'>{payload.account.role}</Typography>
      </Stack>
      <Divider />
      <Stack direction='column' className='m-4'>
        <Typography variant='body1' className='text-dark font-bold mb-2'>Informasi Akun</Typography>
        <TableContainer>
          <Table sx={{ minWidth: 250, '& td': { border: 0, paddingY: 1 } }} size='small' padding='none'>
            <TableBody>
              <TableRow>
                <TableCell className='font-bold w-64'>Alamat Email</TableCell>
                <TableCell>{payload.account.email}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-bold'>No. Identitas</TableCell>
                <TableCell>{payload.account.no_identitas}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-bold'>Unit / Fakultas</TableCell>
                <TableCell>{payload.account.unit}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-bold'>Kontak</TableCell>
                <TableCell>{payload.account.kontak}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
      <Stack direction='row' spacing={1} className='flex justify-center mt-8 mb-4'>
        <ButtonBasic variant='contained' color='primary' onClick={handleOpen}>Ubah Kata Sandi</ButtonBasic>
        <ButtonBasic variant='outlined' color='primary' onClick={onLogout}>Sign Out</ButtonBasic>
      </Stack>
      <Modal open={open} onClose={handleClose}>
        <Box className='absolute bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xs:w-[300px] sm:w-[350px] md:w-[500px] min-h-[250px] outline-0 rounded-md overflow-y-auto'>
          <Stack direction='row' spacing={2} className='py-2 px-4 bg-gray-50 rounded-t-md sticky top-0 z-10'>
            <Typography variant='subtitle1' className='text-dark font-bold'>Ubah Kata Sandi</Typography>
            <IconButton onClick={handleClose} aria-label='Close' className='absolute right-1 -translate-y-1'>
              <CloseIcon fontSize='small' />
            </IconButton>
          </Stack>
          <Stack className='pb-4 pt-6 z-20 xs:px-6 md:px-8'>
            <TextfieldPass value={old_password} label='Kata Sandi Lama' onChange={(event: any) => setOld_password(event.target.value)} placeholder='Masukkan kata sandi Anda yang lama' />
            <TextfieldPass value={new_password} label='Kata Sandi Baru' onChange={(event: any) => setNew_password(event.target.value)} placeholder='Masukkan kata sandi Anda yang baru' helperText='Pastikan kata sandi Anda lebih dari 8 karakter' className='-pt-4' />
            <TextfieldPass value={confirm_password} label='Konfirmasi Kata Sandi' onChange={(event: any) => setConfirm_password(event.target.value)} placeholder='Konfirmasi kata sandi Anda yang baru' />
            <Stack direction='row-reverse' spacing={1} marginTop={2} marginBottom={2}>
              {!isLoading ? (
                <ButtonBasic variant='contained' onClick={onSubmit} color='primary'>Simpan</ButtonBasic>
              ) : (
                <LoadingButton loading={isLoading} variant='contained' color='primary'>Simpan</LoadingButton>
              )}
              <ButtonBasic variant='outlined' color='primary' onClick={handleClose}>Batal</ButtonBasic>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}
