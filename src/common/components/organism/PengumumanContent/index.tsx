import { Button, Grid, IconButton, Paper, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import pengumuman from '@/json/pengumuman.json'
import { getPengumumanList } from '@/services/pengumuman'
import { dateFormatter, timeFormatter } from '@/common/utils/dateFormatter.util'
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';

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
                const monthString = Intl.DateTimeFormat('en', { month: 'short' }).format(new Date(`${month}`))
                return (
                    <Grid item container xs={12} md={6} key={item.id} className='border border-gray-100 mb-10 p-0'>
                        <Grid item xs={2} className='px-4 md:px-3 -ml-3'>
                            <Paper component={Stack} sx={{display: {xs: 'none', md: 'flex'}}} direction="column" justifyContent="center" className='bg-primary text-center h-16 rounded-none'>
                                <Typography variant='body2' className='font-bold text-light uppercase' sx={{fontSize: {xs: 6, md: 8, lg: 13}}}>
                                    {monthString}
                                </Typography>
                                <Typography variant='caption' className='font-bold text-light -mt-1.5' sx={{fontSize: { xs: 7, md: 9, lg: 14}}}>
                                    {date}
                                </Typography>
                            </Paper>
                            <Paper component={Stack} sx={{display: {xs: 'none', md: 'flex'}}} direction="column" justifyContent="center" elevation={0} className='bg-grey text-center h-10 rounded-none'>
                                <Typography variant='body2' className='font-bold text-gray-400' sx={{fontSize: {xs: 6, md: 8, lg: 13}}}>
                                    {year}
                                </Typography>
                            </Paper>
                            <Paper component={Stack} sx={{display: {xs: 'flex', md: 'none'}}} direction="column" justifyContent="center" className='bg-primary text-center h-16 rounded-none'>
                            </Paper>
                        </Grid>
                        <Grid item xs={10} md={9} className=''>
                            <Link href='/'>
                                <Typography variant='h6' className='font-bold text-primary line-clamp-2 hover:brightness-125 leading-7 text-xl'>{item.judul_pengumuman}</Typography>
                            </Link>
                            <Stack direction='row' alignItems='center' spacing={2} className='mt-1'>
                                <Stack direction='row'>
                                    <PersonIcon fontSize='inherit' sx={{ fontSize: 18 }} color='primary'/>
                                    <Typography variant='caption' className='pl-1 text-gray-500'>Admin</Typography>
                                </Stack>
                                <Stack direction='row'>
                                    <EventIcon fontSize='inherit' sx={{ fontSize: 18 }} color='primary'/>
                                    <Typography variant='caption' className='pl-1 text-gray-500'>{dateFormatter(item.tgl_upload)}</Typography>
                                </Stack>
                                <Stack direction='row'>
                                    <AccessTimeIcon fontSize='inherit' sx={{ fontSize: 18 }} color='primary'/>
                                    <Typography variant='caption' className='pl-1 text-gray-500'>{timeFormatter(item.tgl_upload)} WIB</Typography>
                                </Stack>
                            </Stack>
                            <Typography variant='body2' className='text-gray-500 mt-3 line-clamp-3 leading-5'>{item.content}</Typography>
                            <Link href='/'>
                                <Button variant='outlined' size='small' color='primary' className='mt-4 normal-case'>Baca lebih lanjut</Button>
                            </Link>
                        </Grid>
                    </Grid>
                )
            })   
        }
    </>

  )
}
