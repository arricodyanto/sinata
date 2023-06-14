import { Paper, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import { dateFormatter, timeFormatter } from '@/common/utils/dateFormatter.util';
import { TPengumuman } from '@/services/data-types/pengumumanItem';
import { TPengumumanProps } from '@/common/types/pengumuman-item';

export default function SidebarItem(props: TPengumumanProps) {
    const { data } = props
    const [pengumuman, setPengumuman] = useState(data)
  return (
    <>
        {pengumuman.map((item:any) => {
            return(
                <>
                    <Link href={`/pengumuman/${item.id}`}>
                        <Paper elevation={0} variant='outlined' sx={{ borderRadius: 4}} className='px-4 py-2 hover:shadow-md transition mb-4'>
                            <Typography variant='body1' className='text-primary font-bold line-clamp-2'>{item.judul_pengumuman}</Typography>
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
                            <Typography variant='body2' className='text-gray-500 mt-2 line-clamp-2'>{item.content}</Typography>
                        </Paper>
                    </Link>
                </>
            )
        })}
    </>
  )
}
