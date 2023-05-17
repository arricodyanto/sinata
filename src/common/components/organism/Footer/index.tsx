import React from 'react'
import { Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';
import Image from 'next/image';
import ContainerPage from '../../atoms/ContainerPage';

export default function Footer() {
    var year = new Date().getFullYear()
  return (
    <Box className=' bg-gray-800 text-white mt-12'>
        <ContainerPage className='pt-12 px-8'>
            <Grid container>
                <Grid item xs={12} md={6} className='mb-8'>
                    <Stack direction='row'>
                        <Typography variant='h5' className='font-bold'>SINATA</Typography>
                        <Typography variant='body2' className='align-bottom'>&copy;</Typography>
                    </Stack>
                    <Typography variant='subtitle1' className='mt-10 italic'>&quot;Every civitas can publish theirs here!&quot;</Typography>
                    <Typography variant='caption' className='mt-0'>~ Public Relation UNS</Typography>
                    <Divider />
                    <Link href='/sign-in'>
                        <Button variant='contained' sx={{borderRadius: 0, width: { xs: '75%', md: '50%'}}} size='large' className='mt-3 h-[45px] capitalize rounded-md' endIcon={<ArrowForwardIcon fontSize='small' />}>Ajukan Layanan</Button>
                    </Link>
                </Grid>
                <Grid item container xs={12} md={6} spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h6' className='font-bold text-primary'>Kontak</Typography>
                        {/* <Stack component='img' src={logo} sx={{width: {xs: 100, md: 150}, height: {xs: 100, md: 150}}} /> */}
                        <Link href='/'>
                            <Image src='/images/logo-light.png' width={150} height={50} alt="Site's Logo" className='mt-4'/>
                        </Link>
                        <Typography variant='body2' className='mt-4'>Gedung Rektorat</Typography>
                        <Typography variant='body2' className=''>Jalan Ir. Sutami 36 Kentingan, Jebres, Surakarta, Jawa Tengah.</Typography>
                        <Typography variant='body2' className='ml-1 mt-2'><PhoneIcon sx={{fontSize: 13}} className='mr-2'/>(0271) 646994</Typography>
                        <Typography variant='body2' className='ml-1 hover:brightness-90'><Link href='https://wa.me/6285156723341'><WhatsAppIcon sx={{fontSize: 13}} className='mr-2'/>(+62) 851-5672-3341</Link></Typography>
                        <Typography variant='body2' className='ml-1 hover:brightness-90'><Link href='mailto:humas@mail.uns.ac.id'><EmailIcon sx={{fontSize: 13}} className='mr-2'/>humas@mail.uns.ac.id</Link></Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h6' className='font-bold text-primary'>Layanan Kami</Typography>
                        <Box className='mt-4'>
                            <Link href='/' className='hover:brightness-90'>
                                <li className='mb-2'>Layanan Hubungan Masyarakat</li>
                            </Link>
                            <Link href='/' className='hover:brightness-90'>
                                <li className='mb-2'>Layanan Publikasi</li>
                            </Link>
                            <Link href='/' className='hover:brightness-90'>
                                <li className='mb-2'>Layanan Media</li>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Divider className='mt-12 border-gray-700 -mx-16' />
            <Box className='text-center pb-4'>
                <Typography variant='body2' className='mt-4 text-center text-xs'>&copy; {year} SINATA. All Rights Reserved.</Typography>
                <Typography variant='caption' className='text-center text-xs'>Developed with <span className='text-primary'>hearts</span> by <Link href='https://github.com/arricodyanto' className='hover:brightness-90'>Arrico Handyanto</Link></Typography>
            </Box>
        </ContainerPage>
    </Box>
  )
}
