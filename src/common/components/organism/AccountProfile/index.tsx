import ButtonBasic from '@/common/components/atoms/ButtonBasic';
import FileUpload from '@/common/components/atoms/FileUpload';
import LinearProgressC from '@/common/components/atoms/LinearProgressC';
import TextfieldLabel from '@/common/components/atoms/TextfieldLabel';
import TextfieldPass from '@/common/components/atoms/TextfieldPass';
import { TAccountProfileProps } from '@/common/types/account-profile';
import { delay } from '@/common/utils/delay.util';
import { calculateProfileCompleteness } from '@/common/utils/profileCompleteness';
import { changeAvatar, changePasswordUser, updateProfile } from '@/services/accounts';
import CloseIcon from '@mui/icons-material/Close';
import { LoadingButton } from '@mui/lab';
import { Avatar, Box, Button, Divider, IconButton, Modal, Stack, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import { FilePondFile } from 'filepond';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

function ModalChangePassword(props: { id: string; }) {
  const { id } = props;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isLoadingPass, setIsLoadingPass] = useState(false);

  const [old_password, setOld_password] = useState('');
  const [new_password, setNew_password] = useState('');
  const [confirm_password, setConfirm_password] = useState('');

  const handleFormChange = (setState: React.Dispatch<React.SetStateAction<any>>) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  const onPasswordSubmit = async () => {
    const form = { old_password, new_password, confirm_password };
    try {
      setIsLoadingPass(true);
      const response = await changePasswordUser(id, form);
      if (response.error === true) {
        toast.error(response.message, {
          theme: 'colored'
        });
      }
      if (response.error === false) {
        toast.success(response.message, {
          theme: 'colored'
        });
        handleClose();
        window.location.reload();
      }
    } finally {
      setIsLoadingPass(false);
    }
  };
  return (
    <>
      <Typography variant='body2' className='hover:text-primary underline underline-offset-2 text-gray-500 transition ' onClick={handleOpen}>Ubah Kata Sandi</Typography>
      <Modal open={open} onClose={handleClose}>
        <Box className='absolute bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xs:w-[320px] sm:w-[370px] md:w-[520px] min-h-[250px] outline-0 rounded-md overflow-y-auto'>
          <Stack direction='row' spacing={2} className='py-2 px-4 bg-gray-50 rounded-t-md sticky top-0 z-10'>
            <Typography variant='subtitle1' className='text-dark font-bold'>Ubah Kata Sandi</Typography>
            <IconButton onClick={handleClose} aria-label='Close' className='absolute right-1 -translate-y-1'>
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
              <ButtonBasic variant='outlined' color='primary' onClick={handleClose}>Batal</ButtonBasic>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}

function ModalChangeAvatar(props: { id: string; }) {
  const { push } = useRouter();
  const { id } = props;
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const avatar = new FormData();

  const onAvatarSave = async () => {
    const isEmpty = !avatar ? true : false;
    if (isEmpty) {
      toast.warning('Tidak ada perubahan pada data.', {
        theme: 'colored'
      });
    }
    if (!isEmpty) {
      try {
        setIsLoading(true);
        const response = await changeAvatar(id, avatar);
        if (response.error === true) {
          toast.error(response.message, {
            theme: 'colored',
          });
          setOpen(false);
        }
        if (response.error === false) {
          toast.success(response.message, {
            theme: 'colored'
          });
          delay(1000);
          toast.info(`Perubahan akan berlaku pada proses sign in berikutnya. \nMohon tunggu, Anda akan dipersilakan untuk sign in kembali.`, {
            theme: 'colored'
          });
          delay(4000);
          Cookies.remove('tkn');
          push('/sign-in');
        }
      } finally {
        setIsLoading(false);
      }
    };
  };

  return (
    <>
      <Button variant='outlined' size='small' color='primary' onClick={handleOpen} className='capitalize py-[0.1rem] px-2 text-[10px] rounded-full'>Ubah Avatar</Button>
      <Modal open={open} onClose={handleClose}>
        <Box className='absolute bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xs:w-[320px] sm:w-[370px] md:w-[520px] min-h-[150px] outline-0 rounded-md overflow-y-auto'>
          <Stack direction='row' spacing={2} className='py-2 px-4 bg-gray-50 rounded-t-md sticky top-0 z-10'>
            <Typography variant='subtitle1' className='text-dark font-bold'>Ubah Avatar</Typography>
            <IconButton onClick={handleClose} aria-label='Close' className='absolute right-1 -translate-y-1'>
              <CloseIcon fontSize='small' />
            </IconButton>
          </Stack>
          <Stack className='pb-4 pt-6 z-20 px-6'>
            <FileUpload allowMultiple={false} allowReorder={false} onupdatefiles={(fileItems: FilePondFile[]) => {
              const file = fileItems[0]?.file;
              if (file) {
                avatar.set('img_profil', file);
                // setAvatar(file);
              }
            }} acceptedFileTypes={['image/png', 'image/jpeg']} labelFileTypeNotAllowed='Hanya file JPEG dan PNG yang diijinkan' />
            <Stack direction='row-reverse' spacing={1} marginTop={2} marginBottom={2}>
              {!isLoading ? (
                <ButtonBasic variant='contained' color='primary' onClick={onAvatarSave}>Simpan</ButtonBasic>
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

export default function AccountProfile(props: TAccountProfileProps) {
  const { payload } = props;
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const api_image = process.env.NEXT_PUBLIC_API_IMG;
  const completeness = calculateProfileCompleteness(props);

  const [isLoadingBio, setIsLoadingBio] = useState(false);

  const onLogout = () => {
    Cookies.remove('tkn');
    router.push('/sign-in');
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
          setOpen(false);
        }
        if (response.error === false) {
          toast.success(response.message, {
            theme: 'colored'
          });
          delay(1000);
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

  return (
    <>
      <Stack className='justify-center' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Stack direction='column' className='place-items-center my-4 w-4/5'>
          <Avatar alt={payload.account.name} src={`${api_image}/${payload.account.img_profil}`} sx={{ width: 150, height: 150 }} />
          <Typography variant='body1' className='text-dark mt-4 font-bold'>{payload.account.name}</Typography>
          <Typography variant='body2' className='text-dark mb-2'>{payload.account.username}</Typography>
          <ModalChangeAvatar id={payload.account.id} />
          <Typography variant='body2' className='text-dark mt-4'>Lengkapi Profil</Typography>
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
        <ButtonBasic variant='contained' color='primary' onClick={handleOpen}>Ubah Profil</ButtonBasic>
        <ButtonBasic variant='outlined' color='primary' onClick={onLogout}>Sign Out</ButtonBasic>
      </Stack>
      <Modal open={open} onClose={handleClose}>
        <Box className='absolute bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xs:w-[300px] sm:w-[350px] md:w-[500px] min-h-[250px] outline-0 rounded-md overflow-y-auto'>
          <Stack direction='row' spacing={2} className='py-2 px-4 bg-gray-50 rounded-t-md sticky top-0 z-10'>
            <Typography variant='subtitle1' className='text-dark font-bold'>Ubah Informasi Profil</Typography>
            <IconButton onClick={handleClose} aria-label='Close' className='absolute right-1 -translate-y-1'>
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
                <ButtonBasic variant='outlined' color='primary' onClick={handleClose}>Batal</ButtonBasic>
              </Stack>
              <Stack className='hover:cursor-pointer'>
                <ModalChangePassword id={payload.account.id} />
              </Stack>
            </Stack>
          </Stack>

        </Box>
      </Modal>
    </>
  );
}
