import { Grid, Paper, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import pengumuman from '@/json/pengumuman.json'
import { getPengumumanList } from '@/services/pengumuman'
import { dateFormatter } from '@/common/utils/dateFormatter.util'

export default function PengumumanContent() {

    const [pengumumanData, setPengumumanData] = useState<Array<any>>([])
    
    const getPengumumanData = useCallback(async () => {
        const data = await getPengumumanList()
        setPengumumanData(data)
    }, [getPengumumanList])

    useEffect(() => {
        getPengumumanData()
    }, [])
  return (
    <>
        {
            pengumumanData.map((item) => {
                const dateString = item.tgl_upload
                const dateTypes = new Date(dateString)
                const month = dateTypes.getMonth() + 1
                const date = dateTypes.toLocaleString('id-ID', { day: '2-digit' })
                const year = dateTypes.getFullYear()
                // const month = date.split('/')[1]
                const monthString = Intl.DateTimeFormat('en', { month: 'short' }).format(new Date(`${month}`))
                return (
                    <Grid item container xs={12} md={6} key={item.id} className='border border-gray-100 mb-10 p-0'>
                        <Grid item xs={2} className='px-4 md:px-3'>
                            <Paper component={Stack} direction="column" justifyContent="center" className='bg-primary text-center h-16 rounded-none'>
                                <Typography variant='body2' className='font-bold text-light uppercase' sx={{fontSize: {xs: 6, md: 8, lg: 13}}}>
                                    {year}
                                </Typography>
                            </Paper>
                            <Paper component={Stack} sx={{display: {xs: 'none', sm: 'none', md: 'flex'}}} direction="column" justifyContent="center" elevation={0} className='bg-grey text-center h-16 rounded-none'>
                                <Typography variant='body2' className='font-bold text-gray-600 uppercase' sx={{fontSize: {xs: 6, md: 8, lg: 13}}}>
                                    {monthString}
                                </Typography>
                                <Typography variant='caption' className='font-bold text-gray-600 -mt-1.5' sx={{fontSize: { xs: 7, md: 9, lg: 14}}}>
                                    {date}
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={9} className=''>
                            <Link href='/'>
                                <Typography variant='h6' className='font-bold text-primary line-clamp-2 hover:brightness-125 leading-6'>{item.judul_berita}</Typography>
                            </Link>
                            <Typography variant='body2' className='text-gray-500 mt-4 line-clamp-3 leading-4'>{item.rilis}</Typography>
                        </Grid>
                    </Grid>
                )
            })   
        }
    </>

  )
}
