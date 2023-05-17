import { Box } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Appnav from '../../organism/Appnav'

type THeaderPagesProps = {
    titlePage: string
    srcImg: string
}

export default function HeaderPages(props: THeaderPagesProps) {
    const {
        titlePage,
        srcImg
    } = props
  return (
    <>
        <Head>
            <title>{titlePage}</title>
            <meta name="description" content="Sinata - Sistem Inforamasi Manajemenen Pelayanan dan Berita" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box sx={{ height: {xs: '7rem', md: '10rem'}}} className='w-screen relative'>
            <Appnav />
            <Image src={srcImg} alt="Hero's Site" layout='fill' objectFit='cover' className='pt-0 brightness-[0.3] rounded-br-[7rem]'/>
        </Box>
    </>

  )
}
