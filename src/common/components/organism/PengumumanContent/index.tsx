import { Grid, Paper, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import pengumuman from '@/json/pengumuman.json'

export default function PengumumanContent() {
  return (
    <>
        {
            pengumuman.map((item) => {
                const date = item.date
                const month = date.split('/')[1]
                const monthString = Intl.DateTimeFormat('en', { month: 'short' }).format(new Date(`${month}`))
                return (
                    <Grid item container xs={12} md={6} key={item.id} className='border border-gray-100 mb-10 p-0'>
                        <Grid item xs={2} className='px-4 md:px-3'>
                            <Paper component={Stack} direction="column" justifyContent="center" className='bg-primary text-center h-16 rounded-none'>
                                <Typography variant='body2' className='font-bold text-light uppercase' sx={{fontSize: {xs: 6, md: 8, lg: 13}}}>
                                    {monthString}
                                </Typography>
                            </Paper>
                            <Paper component={Stack} sx={{display: {xs: 'none', sm: 'none', md: 'flex'}}} direction="column" justifyContent="center" elevation={0} className='bg-grey text-center h-16 rounded-none'>
                                <Typography variant='caption' className='text-gray-600' sx={{fontSize: 6}}>
                                    {item.date}
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={9} className=''>
                            <Link href='/'>
                                <Typography variant='h6' className='font-bold text-primary line-clamp-2 hover:brightness-125 leading-6'>{item.title}</Typography>
                            </Link>
                            <Typography variant='body2' className='text-gray-500 mt-4 line-clamp-3 leading-4'>{item.content}</Typography>
                        </Grid>
                    </Grid>
                )
            })   
        }
    </>

  )
}
