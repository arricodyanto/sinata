import { Box, Button, Container, Grid, IconButton, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import PageTitle from '../common/components/atoms/PageTitle'
import GuidelineItems from '../common/components/molecules/GuidelineItems'
import HeaderPages from '../common/components/molecules/HeaderPages'
import Footer from '../common/components/organism/Footer'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import FaqItems from '../common/components/atoms/FaqItems'
import ContainerPage from '../common/components/atoms/ContainerPage'

export default function GuideLines() {
  return (
    <>
      <Box className='bg-white'>
          <HeaderPages titlePage='Panduan - Sistem Informasi Manajemen Pelayanan dan Berita' srcImg='/images/bg-guides.jpg' />
            <ContainerPage>
              <PageTitle title='Panduan' />
              <Box className='mb-6'>
                <Typography variant='h3' className='mb-2 text-gray-600'>
                  Panduan Penggunaan
                </Typography>
                <Typography variant='body1' className='mb-4 text-gray-500 italic'>
                  Anda bisa melihat semua prosedur dan tata cara penggunaan Sistem Informasi Manajemen Pelayanan dan Berita (SINATA) pada halaman ini.
                </Typography>
                <GuidelineItems />
              </Box>
              <Grid container spacing={2}>
                  <Grid item xs={12} md={5} className='mb-8'>
                      <Typography variant='h6' className='font-bold mb-4' color='primary'>
                        Bantuan
                      </Typography>
                      <Typography variant='h3' className='mb-4 text-gray-600'>
                        FAQs
                      </Typography>
                      <Typography variant='body1' className='mb-4 text-gray-600 italic'>
                        Semua pertanyaan yang sering diajukan oleh pengguna SINATA. Jika Anda tidak menemukan jawaban yang Anda cari, silakan hubungi kami.
                      </Typography>
                      <Link href='/about#kontak'>
                        <Button variant='contained' endIcon={<NavigateNextIcon />} size='large'>
                          <Typography variant='body2'>
                            Hubungi Kami
                          </Typography>
                        </Button>
                      </Link>
                  </Grid>
                  <Grid item xs={12} md={7}>
                      <FaqItems />
                  </Grid>
              </Grid>
            </ContainerPage>
          <Footer />
      </Box>
    </>
  )
}
