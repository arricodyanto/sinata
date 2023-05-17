import { Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type THeaderProps = {
    header: string
    subheader: string
}

export default function HeaderBox(props: THeaderProps) {
    const {
        header,
        subheader
    } = props
  return (
    <>
        <Link href='/' className='inline-block'>
            <Image src='/images/logo-color.png' width={150} height={50} alt='Site Logo' />
        </Link>
        <Typography className='mb-[1px]' mt={2} variant='subtitle1'>{header}</Typography>
        <Typography variant='body2'>{subheader}</Typography>

    </>
  )
}
