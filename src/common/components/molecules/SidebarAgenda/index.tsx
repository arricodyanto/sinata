import { TSidebarAgendaProps } from '@/common/types/sidebar-agenda'
import { Box, Paper, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import PlaceIcon from '@mui/icons-material/Place';
import { dateFormatter, timeStrictFormatter } from '@/common/utils/dateFormatter.util';
import Image from 'next/image';

export default function SidebarAgenda(props: TSidebarAgendaProps) {
    const { data } = props
    const api_image = process.env.NEXT_PUBLIC_API_IMG
  return (
    <>
        { data ? data.map(item => {
            return (
                <>
                    <Link href={`/agenda/${item.id}`}>
                        <Paper elevation={0} variant='outlined' sx={{ borderRadius: 4}} className='px-4 pt-2 pb-4 hover:shadow-md transition mb-4'>
                            <Typography variant='body1' className='text-primary font-bold line-clamp-2'>{item.tb_kegiatan.judul_kegiatan}</Typography>
                            <Stack direction='row' alignItems='center' spacing={2} className='mt-1'>
                                <Stack direction='row'>
                                    <PersonIcon fontSize='inherit' sx={{ fontSize: 18 }} color='primary'/>
                                    <Typography variant='caption' className='pl-1 text-gray-500'>{item.tb_kegiatan.tb_account.name}</Typography>
                                </Stack>
                                <Stack direction='row'>
                                    <EventIcon fontSize='inherit' sx={{ fontSize: 18 }} color='primary'/>
                                    <Typography variant='caption' className='pl-1 text-gray-500'>{dateFormatter(item.tb_kegiatan.tgl_kegiatan)}</Typography>
                                </Stack>
                                <Stack direction='row'>
                                    <AccessTimeIcon fontSize='inherit' sx={{ fontSize: 18 }} color='primary'/>
                                    <Typography variant='caption' className='pl-1 text-gray-500'>{timeStrictFormatter(item.tb_kegiatan.waktu_kegiatan)} WIB</Typography>
                                </Stack>
                            </Stack>
                            <Stack direction='row'>
                                <PlaceIcon fontSize='inherit' sx={{ fontSize: 18 }} color='primary'/>
                                <Typography variant='caption' className='pl-1 text-gray-500'>{item.tb_kegiatan.tempat_kegiatan}</Typography>
                            </Stack>
                            <Stack direction='row' gap={1} alignItems='end' className='mt-1'>
                                <Image src={`${api_image}/${item.leaflet_kegiatan}`} width={55} height={55} alt={item.tb_kegiatan.judul_kegiatan} className='rounded-md' />
                                <Typography variant='body2' className='text-gray-500 mt-2 line-clamp-3'>{item.caption}</Typography>
                            </Stack>
                        </Paper>
                    </Link>

                </>
            )
        }) : []}
    </>
  )
}
