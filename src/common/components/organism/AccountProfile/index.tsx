import React from 'react'
import { Avatar, Box, Divider, Grid, IconButton, Modal, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import LinearProgressC from '@/common/components/atoms/LinearProgressC'
import ButtonBasic from '@/common/components/atoms/ButtonBasic'
import Link from 'next/link'
import CloseIcon from '@mui/icons-material/Close';
import TextfieldPass from '@/common/components/atoms/TextfieldPass'
import { TAccountProfileProps } from '@/common/types/account-profile'

export default function AccountProfile(props: TAccountProfileProps) {
  const {
    data,
  } = props
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const user = 3
  return (
    <>
      { data.filter((item) => item.id === user).map(item => {
          return (
            <>
              <Stack direction='column' className='grid place-items-center m-4'>
                  <Avatar alt='Gary Doe' src='/images/avatar/avatar-4.jpg' sx={{ width: 150, height: 150 }} />
                  <Typography variant='body1' className='text-dark mt-4 font-bold'>{item.name}</Typography>
                  <Typography variant='body2' className='text-dark mb-4'>{item.username}</Typography>
                  <Typography variant='body2' className='text-dark'>Lengkapi Profil</Typography>
                  <LinearProgressC value={70} />
              </Stack>
              <Divider />
              <Stack direction='column' className='grid place-items-center m-4'>
                  <Typography variant='body1' className='text-dark font-bold'>Role Akun</Typography>
                  <Typography variant='body2' className='text-dark'>{ item.role == 'user' ? 'User' : 'Admin' }</Typography>
              </Stack>
              <Divider />
              <Stack direction='column' className='m-4'>
                  <Typography variant='body1' className='text-dark font-bold mb-2'>Informasi Akun</Typography>
                  <TableContainer>
                    <Table sx={{ minWidth: 250, '& td': { border: 0, paddingY: 1 } }} size='small' padding='none'>
                      <TableBody>
                              <TableRow>
                                <TableCell className='font-bold'>Alamat Email</TableCell>
                                <TableCell>{item.email}</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className='font-bold'>No. Identitas</TableCell>
                                <TableCell>{item.no_identitas}</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className='font-bold'>Unit/ Fakultas</TableCell>
                                <TableCell>{item.unit}</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className='font-bold'>Kontak</TableCell>
                                <TableCell>{item.kontak}</TableCell>
                              </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  {/* <Grid container spacing={1} className='flex justify-center'>
                      <Grid item xs={3.5}>
                          <Typography variant='body2' className='text-dark font-bold mb-2 truncate'>Alamat Email</Typography>
                          <Typography variant='body2' className='text-dark font-bold mb-2 truncate'>No.Identitas</Typography>
                          <Typography variant='body2' className='text-dark font-bold mb-2 truncate'>Unit/ Fakultas</Typography>
                          <Typography variant='body2' className='text-dark font-bold mb-2 truncate'>Kontak</Typography>
                      </Grid>
                      <Grid item xs={8.5}>
                        { data.filter((item) => item.id === user).map(item => {
                          return (
                            <>
                              <Typography key={item.id} variant='body2' className='text-dark mb-2 truncate'>{item.email}</Typography>
                              <Typography key={item.id} variant='body2' className='text-dark mb-2 truncate'>{item.no_identitas}</Typography>
                              <Typography key={item.id} variant='body2' className='text-dark mb-2 truncate'>{item.unit}</Typography>
                              <Typography key={item.id} variant='body2' className='text-dark mb-2 truncate'>{item.kontak}</Typography>
                            </>
                          )
                        })}
                      </Grid>
                  </Grid> */}
              </Stack>
              <Stack direction='row' spacing={1} className='flex justify-center mt-8'>
                  <ButtonBasic variant='contained' color='primary' onClick={handleOpen}>Ubah Kata Sandi</ButtonBasic>
                  <Link href='/sign-in'>
                    <ButtonBasic variant='outlined' color='primary'>Sign Out</ButtonBasic>
                  </Link>
              </Stack>
              <Modal open={open} onClose={handleClose}>
                <Box className='absolute bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xs:w-[300px] sm:w-[350px] md:w-[500px] min-h-[250px] outline-0 rounded-md overflow-y-auto'>
                  <Stack direction='row' spacing={2} className='py-2 px-4 bg-gray-50 rounded-t-md sticky top-0 z-10'>
                    <Typography variant='subtitle1' className='text-dark font-bold'>Ubah Kata Sandi</Typography>
                      <IconButton onClick={handleClose} aria-label='Close' className='absolute right-1 -translate-y-1'>
                        <CloseIcon fontSize='small'/>
                      </IconButton>
                  </Stack>
                  <Stack className='pb-4 pt-6 z-20 xs:px-6 md:px-8'>
                    <TextfieldPass name='old_password' label='Kata Sandi Lama' placeholder='Masukkan kata sandi Anda yang lama' />
                    <TextfieldPass name='new_password' label='Kata Sandi Baru' placeholder='Masukkan kata sandi Anda yang baru' helperText='Pastikan kata sandi Anda lebih dari 8 karakter' className='-pt-4' />
                    <TextfieldPass label='Konfirmasi Kata Sandi' placeholder='Konfirmasi kata sandi Anda yang baru' />
                    <Stack direction='row-reverse' spacing={1} marginTop={2}>
                      <ButtonBasic variant='contained' color='primary'>Simpan</ButtonBasic>
                      <ButtonBasic variant='outlined' color='primary' onClick={handleClose}>Batal</ButtonBasic>
                    </Stack>
                  </Stack>
                </Box>
              </Modal>
            </>
          )
        })}

    </>
  )
}
