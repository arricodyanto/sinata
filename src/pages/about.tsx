import { Box, Button, Card, CardContent, CardMedia, Container, Grid, IconButton, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import PageTitle from '../common/components/atoms/PageTitle'
import HeaderPages from '../common/components/molecules/HeaderPages'
import StaffCardItem from '../common/components/molecules/StaffCardItem'
import Footer from '../common/components/organism/Footer'
import NearMeIcon from '@mui/icons-material/NearMe';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link'
import ContainerPage from '../common/components/atoms/ContainerPage'

export default function About() {
  return (
    <>
        <Box className='bg-white'>
            <HeaderPages titlePage='Tentang Kami - Sistem Informasi Manajemen Pelayanan dan Berita' srcImg='/images/bg-about.jpg'/>
            <ContainerPage className='mb-10'>
                <PageTitle title='Tentang Kami' />
                <Image src='/images/dokumentasi-1.jpg' alt="Hero's Page" layout='responsive' width={200} height={100} className='rounded-lg shadow-lg'/>
                <Grid container spacing={2} sx={{ marginTop: { xs: 5, lg: 15 }}}>
                    <Grid item xs={12} md={6} className='grid place-items-center'>
                        <Box sx={{ marginX: { xs: 0, md: 0, lg: 5 }}}>
                            <Typography variant='h6' className='font-bold mb-2 italic text-center' >&quot;Membangun relasi dengan hati.&quot;</Typography>
                            <Typography variant='body1' className='text-center text-gray-500 px-6'>
                                Displaced fracture of base of second metacarpal bone. left hand, subsequent encounter for fracture with routine healing.
                                Driver of three-wheeled motor vehicle injured in collision with two- or three-wheeled motor vehicle in traffic accident, sequela.
                                Displaced comminuted fracture of shaft of ulna, right arm, subsequent encounter for closed fracture with routine healing.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ marginTop: { xs: 5, md: 0 }}} className='bg-fixed'>
                        <Image src='/images/dokumentasi-2.jpg' alt="Side Image" layout='responsive' width={200} height={100} className='rounded-lg shadow-lg'/>
                    </Grid>
                </Grid>
            </ContainerPage>
            <Box className='bg-primary pb-20'>
                <ContainerPage>
                    <Box className='pt-10 pb-6'>
                        <Typography variant='h5' className='font-bold text-white'>Staf Kami</Typography>
                    </Box>
                    <Box>
                        <Grid container spacing={2}>
                            <StaffCardItem />
                        </Grid>
                    </Box>
                </ContainerPage>
            </Box>
            <Box id='kontak'>
                <ContainerPage>
                    <Box className='pt-10 pb-6'>
                        <Typography variant='h5' className='font-bold text-primary'>Kontak Kami</Typography>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Typography variant='subtitle1'>Untuk informasi lebih lanjut, Anda bisa mendatangi kantor kami langsung di</Typography>
                            <Paper elevation={1} className='p-10 rounded-3xl shadow-lg mt-4 mb-6'>
                                <Typography variant='body1' className='text-primary mt-2'>Jalan Ir. Sutami 36 Kentingan, Jebres, Surakarta, Jawa Tengah. (Gedung Rektorat, Lantai 1)</Typography>
                                <Link href='https://goo.gl/maps/nD3QwtjDXenjd1oH8' target='_blank'>
                                    <Button variant='outlined' className='mt-4' endIcon={<NearMeIcon />}>Lihat Maps</Button>
                                </Link>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant='subtitle1' className='text-center font-bold'>Atau Anda bisa menghubungi Kami melalui</Typography>
                            <Paper elevation={1} className='p-8 rounded-3xl shadow-lg mt-4'>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} lg={4}>
                                        <Link href='tel:0271646994' target='_blank'>
                                            <Button variant='contained' color='primary' startIcon={<CallIcon />} fullWidth >(0271) 646994</Button>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={12} lg={4}>
                                        <Link href='https://wa.me/6285156723341' target='_blank'>
                                            <Button variant='contained' color='success' startIcon={<WhatsAppIcon />} fullWidth >085156723341</Button>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={12} lg={4}>
                                        <Link href='mailto:humas@mail.uns.ac.id' target='_blank'>
                                            <Button variant='contained' color='error' startIcon={<EmailIcon />} fullWidth >Email</Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </ContainerPage>
            </Box>
            <Footer />
        </Box>
    </>
  )
}
