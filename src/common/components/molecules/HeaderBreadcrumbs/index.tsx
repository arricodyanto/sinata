import { Box, Breadcrumbs, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

type THeaderBreadcrumbsProps = {
    pageHeader: string
    currentPage: string
    children?: React.ReactNode
}

export default function HeaderBreadcrumbs(props: THeaderBreadcrumbsProps) {
    const { pageHeader, currentPage, children } = props
  return (
    <>
        <Grid container marginBottom={3}>
            <Grid item xs={12} md={6}>
                <Typography variant='h6' component='h1'>{pageHeader}</Typography>
            </Grid>
            <Grid item xs={12} md={6} className='flex sm:justify-start md:justify-end'>
                <Breadcrumbs aria-label='breadcrumb' sx={{ color: 'text.secondary'}}>
                    <Link href='/' className='text-zinc-900 hover:underline hover:decoration-1 hover:underline-offset-2'>
                        Sinata
                    </Link>
                    {children}
                    <Typography color='text.secondary'>{currentPage}</Typography>
                </Breadcrumbs>
            </Grid>
        </Grid>
     </>
  )
}
