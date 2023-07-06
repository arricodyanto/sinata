import React, { useCallback, useEffect, useState } from 'react';
import { Alert, Box, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import Link from 'next/link';
import { dateFormatter, timeStrictFormatter } from '@/common/utils/dateFormatter.util';
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import { getAllLayananPublikasiAgenda } from '@/services/layanan-pubagenda';

export default function TodaysEvent() {
    const [agenda, setAgenda] = useState<Array<any>>([]);

    const getAgenda = useCallback(async () => {
        const response = await getAllLayananPublikasiAgenda();
        setAgenda(response.data);
    }, [getAllLayananPublikasiAgenda]);

    useEffect(() => {
        getAgenda();
    }, [getAgenda]);

    const today = dayjs().format('DD/MM/YYYY');
    const filteredDate = agenda.filter((item) => {
        return dateFormatter(item.tb_kegiatan.tgl_kegiatan) === today;
    });

    const api_image = process.env.NEXT_PUBLIC_API_IMG;

    if (filteredDate.length === 0) {
        return (
            <>
                <Box>
                    <Alert severity='info' className='text-gray-500'>Tidak ada agenda hari ini.</Alert>
                </Box>
            </>
        );
    } else {
        return (
            <>
                {filteredDate.map((item) => {
                    return (
                        <Link href={`/agenda/${item.id}`}>
                            <Card key={item.id} variant='outlined' className='mb-3 flex hover:shadow-md rounded-lg'>
                                <CardMedia sx={{ width: { xs: 100, sm: 100 }, height: 140 }} component='img' image={`${api_image}/${item.leaflet_kegiatan}`} alt='event-cover' />
                                <Box className='relative'>
                                    <CardContent sx={{ width: { xs: 230, sm: '100%', md: 230 } }} className='py-2 px-3'>
                                        <Typography variant='subtitle1' className='text-primary font-bold leading-5 line-clamp-2'>{item.tb_kegiatan.judul_kegiatan}</Typography>
                                        <Stack direction='row' alignItems='center' spacing={1} className='mt-1'>
                                            <Stack direction='row'>
                                                <EventIcon fontSize='inherit' sx={{ fontSize: 18 }} color='primary' />
                                                <Typography variant='caption' className='pl-1 text-gray-500'>{dateFormatter(item.tb_kegiatan.tgl_kegiatan)}</Typography>
                                            </Stack>
                                            <Stack direction='row'>
                                                <AccessTimeIcon fontSize='inherit' sx={{ fontSize: 18 }} color='primary' />
                                                <Typography variant='caption' className='pl-1 text-gray-500'>{timeStrictFormatter(item.tb_kegiatan.waktu_kegiatan)} WIB</Typography>
                                            </Stack>
                                        </Stack>
                                        <Stack direction='row'>
                                            <PlaceIcon fontSize='inherit' sx={{ fontSize: 18 }} color='primary' />
                                            <Typography variant='caption' className='pl-1 text-gray-500 line-clamp-1'>{item.tb_kegiatan.tempat_kegiatan}</Typography>
                                        </Stack>
                                        <Typography variant='caption' className='leading-[1rem] line-clamp-2 mt-1'>{item.caption}</Typography>
                                    </CardContent>
                                </Box>
                            </Card>
                        </Link>
                    );
                })}
            </>
        );
    }
}
