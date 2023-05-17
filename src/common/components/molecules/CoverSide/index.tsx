import { Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

type TCoverSideProps = {
    src: string,
    sentence: string,
    subject: string,

}

export default function CoverSide(props: TCoverSideProps ) {
    const {
        src,
        sentence,
        subject
    } = props
  return (
    <> 
        <Image src={src} alt='side hero' layout='fill' objectFit='cover' className='rounded-r-md brightness-75' />
        <Stack className='px-8' justifyContent="flex-end" alignItems="center">
            <Stack className='absolute bottom-[70px]' alignItems='center'>
                <Typography sx={{fontStyle:'italic'}} variant='subtitle1' className='text-white z-10'>
                    {sentence}
                </Typography>
                <Typography variant='caption' className='z-10 text-gray-200'>~ {subject}</Typography>
            </Stack>
        </Stack>
    </>
  )
}
