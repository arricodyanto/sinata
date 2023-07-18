import React, { useState } from 'react';
import { Avatar, Box, Divider, Grid, IconButton, Modal, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import LinearProgressC from '@/common/components/atoms/LinearProgressC';
import ButtonBasic from '@/common/components/atoms/ButtonBasic';
import Link from 'next/link';
import CloseIcon from '@mui/icons-material/Close';
import TextfieldPass from '@/common/components/atoms/TextfieldPass';
import { TAccountProfileProps } from '@/common/types/account-profile';
import { calculateProfileCompleteness } from '@/common/utils/profileCompleteness';
import { changePasswordUser, updateOneUser, updateProfile } from '@/services/accounts';
import { toast } from 'react-toastify';
import { LoadingButton } from '@mui/lab';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import TextfieldLabel from '../../atoms/TextfieldLabel';
import { formDataFormatter } from '@/common/utils/formDataFormatter';
import { delay } from '@/common/utils/delay.util';

export default function AccountProfile(props: TAccountProfileProps) {
  const router = useRouter();
  const { payload } = props;
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [biodataOpen, setBiodataOpen] = useState(false);
  const handleModalOpen = (setState: React.Dispatch<React.SetStateAction<boolean>>) => () => {
    setState(true);
  };
  const handleModalClose = (setState: React.Dispatch<React.SetStateAction<boolean>>) => () => {
    setState(false);
  };
  const api_image = process.env.NEXT_PUBLIC_API_IMG;
  const completeness = calculateProfileCompleteness(props);

  const [old_password, setOld_password] = useState('');
  const [new_password, setNew_password] = useState('');
  const [confirm_password, setConfirm_password] = useState('');

  const [isLoadingPass, setIsLoadingPass] = useState(false);
  const [isLoadingBio, setIsLoadingBio] = useState(false);

  const onLogout = () => {
    Cookies.remove('tkn');
  };

  let originalForm = {
    email: payload.account.email,
    name: payload.account.name,
    no_identitas: payload.account.no_identitas,
    unit: payload.account.unit,
    kontak: payload.account.kontak,
  };
  const [email, setEmail] = useState<string>(payload.account.email);
  const [name, setName] = useState<string>(payload.account.name);
  const [no_identitas, setNo_identitas] = useState<string>(payload.account.no_identitas);
  const [unit, setUnit] = useState<string>(payload.account.unit);
  const [kontak, setKontak] = useState<number>(payload.account.kontak);

  const handleFormChange = (setState: React.Dispatch<React.SetStateAction<any>>) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  const onBiodataSubmit = async () => {
    const formattedForm = { email, name, no_identitas, unit, kontak };
    const isSame = JSON.stringify(formattedForm) === JSON.stringify(originalForm) ? true : false;
    if (isSame) {
      toast.warning('Tidak ada perubahan pada data.', {
        theme: 'colored'
      });
    }
    if (!isSame) {
      try {
        setIsLoadingBio(true);
        const response = await updateProfile(payload.account.id, formattedForm);
        if (response.error === true) {
          toast.error(response.message, {
            theme: 'colored',
          });
          setBiodataOpen(false);
        }
        if (response.error === false) {
          toast.success(response.message, {
            theme: 'colored'
          });
          delay(500);
          toast.info(`Perubahan akan berlaku pada proses sign in berikutnya. \nMohon tunggu, Anda akan dipersilakan untuk sign in kembali.`, {
            theme: 'colored'
          });
          delay(4000);
          Cookies.remove('tkn');
          router.push('/sign-in');
        }
      } finally {
        setIsLoadingBio(false);
      }
    }
  };

  const onPasswordSubmit = async () => {
    const form = { old_password, new_password, confirm_password };
    try {
      setIsLoadingPass(true);
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
        setPasswordOpen(false);
        window.location.reload();
      }
    } finally {
      setIsLoadingPass(false);
    }
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
                <TableCell className='font-bold'>Fakultas / Unit</TableCell>
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
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={1} className='flex justify-center mt-8 mb-4'>
        <ButtonBasic variant='contained' color='primary' onClick={handleModalOpen(setBiodataOpen)}>Ubah Profil</ButtonBasic>
        <ButtonBasic variant='outlined' color='primary' onClick={onLogout}>Sign Out</ButtonBasic>
      </Stack>
      <Modal open={biodataOpen} onClose={handleModalClose(setBiodataOpen)}>
        <Box className='absolute bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xs:w-[300px] sm:w-[350px] md:w-[500px] min-h-[250px] outline-0 rounded-md overflow-y-auto'>
          <Stack direction='row' spacing={2} className='py-2 px-4 bg-gray-50 rounded-t-md sticky top-0 z-10'>
            <Typography variant='subtitle1' className='text-dark font-bold'>Ubah Informasi Profil</Typography>
            <IconButton onClick={handleModalClose(setBiodataOpen)} aria-label='Close' className='absolute right-1 -translate-y-1'>
              <CloseIcon fontSize='small' />
            </IconButton>
          </Stack>
          <Stack className='pb-4 pt-6 z-20 px-6'>
            <TextfieldLabel type='email' label='Alamat Email' value={email} onChange={handleFormChange(setEmail)} placeholder='johndoe@yourmail.com' />
            <TextfieldLabel label='Nama Lengkap' value={name} onChange={handleFormChange(setName)} placeholder='John Doe' />
            <TextfieldLabel label='Nomor Identitas' value={no_identitas} onChange={handleFormChange(setNo_identitas)} placeholder='MM9123777123' />
            <TextfieldLabel label='Fakultas / Unit Kerja' value={unit} onChange={handleFormChange(setUnit)} placeholder='Kantor Pusat UNS' />
            <TextfieldLabel type='number' label='Kontak' value={kontak} onChange={handleFormChange(setKontak)} placeholder='62 88888888' />
            <Stack direction='row-reverse' justifyContent={'space-between'} alignItems={'center'} spacing={1} marginTop={2} marginBottom={2}>
              <Stack direction='row-reverse' spacing={1}>
                {!isLoadingBio ? (
                  <ButtonBasic variant='contained' onClick={onBiodataSubmit} color='primary'>Simpan</ButtonBasic>
                ) : (
                  <LoadingButton loading={isLoadingBio} variant='contained' color='primary'>Simpan</LoadingButton>
                )}
                <ButtonBasic variant='outlined' color='primary' onClick={handleModalClose(setBiodataOpen)}>Batal</ButtonBasic>
              </Stack>
              <Stack className='hover:cursor-pointer'>
                <Typography variant='body2' className='hover:text-primary underline underline-offset-2 text-gray-500 transition ' onClick={handleModalOpen(setPasswordOpen)}>Ubah Kata Sandi</Typography>
              </Stack>
            </Stack>
          </Stack>
          <Modal open={passwordOpen} onClose={handleModalClose(setPasswordOpen)}>
            <Box className='absolute bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xs:w-[320px] sm:w-[370px] md:w-[520px] min-h-[250px] outline-0 rounded-md overflow-y-auto'>
              <Stack direction='row' spacing={2} className='py-2 px-4 bg-gray-50 rounded-t-md sticky top-0 z-10'>
                <Typography variant='subtitle1' className='text-dark font-bold'>Ubah Kata Sandi</Typography>
                <IconButton onClick={handleModalClose(setPasswordOpen)} aria-label='Close' className='absolute right-1 -translate-y-1'>
                  <CloseIcon fontSize='small' />
                </IconButton>
              </Stack>
              <Stack className='pb-4 pt-6 z-20 px-6'>
                <TextfieldPass value={old_password} label='Kata Sandi Lama' onChange={handleFormChange(setOld_password)} placeholder='Masukkan kata sandi Anda yang lama' />
                <TextfieldPass value={new_password} label='Kata Sandi Baru' onChange={handleFormChange(setNew_password)} placeholder='Masukkan kata sandi Anda yang baru' helperText='Pastikan kata sandi Anda lebih dari 8 karakter' className='-pt-4' />
                <TextfieldPass value={confirm_password} label='Konfirmasi Kata Sandi' onChange={handleFormChange(setConfirm_password)} placeholder='Konfirmasi kata sandi Anda yang baru' />
                <Stack direction='row-reverse' spacing={1} marginTop={2} marginBottom={2}>
                  {!isLoadingPass ? (
                    <ButtonBasic variant='contained' onClick={onPasswordSubmit} color='primary'>Simpan</ButtonBasic>
                  ) : (
                    <LoadingButton loading={isLoadingPass} variant='contained' color='primary'>Simpan</LoadingButton>
                  )}
                  <ButtonBasic variant='outlined' color='primary' onClick={handleModalClose(setPasswordOpen)}>Batal</ButtonBasic>
                </Stack>
              </Stack>
            </Box>
          </Modal>
        </Box>
      </Modal>
    </>
  );
}
