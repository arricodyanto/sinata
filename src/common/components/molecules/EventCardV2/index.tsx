import { TEventCardV2Props } from '@/common/types/event-card'
import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import PlaceIcon from '@mui/icons-material/Place';
import { timeFormatter } from '@/common/utils/dateFormatter.util';


export default function EventCardV2(props: TEventCardV2Props) {
    const {
        image, visibility, publisher, avatar, title, description, date, time, location, link
    } = props
  return (
    <>
        <Card sx={{ maxWidth: 400 }} variant="elevation" className="rounded-xl shadow-lg border relative" >
            <Box className="relative">
                <CardMedia component="img" image={image} alt="Event Image" sx={{ objectFit: 'cover', height: 250 }} className='brightness-80' />
                <Box className="bg-white/80 py-1 px-2 absolute top-0 left-0 m-3 rounded-xl flex backdrop-blur-sm border border-solid border-gray-200 shadow-md">
                    { visibility === 'Terbuka' ? 
                        <Typography variant="caption" className="text-gray-600 font-medium">
                            🌐 Terbuka untuk Umum
                        </Typography>
                        : 
                        <Typography variant="caption" className="text-gray-600 font-medium">
                            ✉️ Undangan
                        </Typography>
                    }
                </Box>
                <Box className="bg-white/80 py-1 px-3 absolute bottom-0 right-0 m-3 rounded-md flex backdrop-blur-sm border border-solid border-gray-200 shadow-md">
                    <Avatar alt={publisher} src={avatar} sx={{ width: 20, height: 20 }} className='mr-1'/>
                    <Typography variant="body2" className="text-gray-500 font-bold">
                        {publisher}
                    </Typography>
                </Box>
            </Box>
            <CardContent className="max-h-52 pb-0">
                <Link href={`${link}`}>
                    <Typography variant="h6" color="primary" className="mb-1 font-bold line-clamp-2 leading-6 hover:brightness-125 transition" >
                        {title}
                    </Typography>
                </Link>
                <Typography variant="body2" className="leading-[1rem] line-clamp-3 mt-2" >
                    {description}
                </Typography>
                <Divider className="mt-4 mb-2"/>
                <Stack direction='row' alignItems='center' spacing={2}>
                    <Stack direction='row'>
                        <EventIcon fontSize='inherit' sx={{ fontSize: 18 }} color='primary'/>
                        <Typography variant='caption' className='pl-1 text-gray-500'>{date}</Typography>
                    </Stack>
                    <Stack direction='row'>
                        <AccessTimeIcon fontSize='inherit' sx={{ fontSize: 18 }} color='primary'/>
                        <Typography variant='caption' className='pl-1 text-gray-500'>{time} WIB</Typography>
                    </Stack>
                </Stack>
                <Stack direction='row' className='mt-1'>
                    <PlaceIcon fontSize='inherit' sx={{ fontSize: 18 }} color='primary'/>
                    <Typography variant='caption' className='pl-1 text-gray-500'>{location}</Typography>
                </Stack>
            </CardContent>
            <CardActions className="px-3 justify-center mt-2">
                <Link href={`${link}`}>
                    <Button variant="text" color="primary">
                        Lihat Detail
                    </Button>
                </Link>
            </CardActions>
        </Card>
    </>
  )
}
