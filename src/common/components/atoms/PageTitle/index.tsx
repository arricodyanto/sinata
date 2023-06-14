import { Typography, TypographyProps } from '@mui/material'
import React from 'react'

type TPageTitleProps = TypographyProps & {
    title: string
}

export default function PageTitle(props: TPageTitleProps) {
    const { title } = props
  return (
    <>
        <Typography variant='h4' className='font-bold my-8 border-b-4' color='primary'>{title}</Typography>
    </>
  )
}
