import React from 'react'
import { Alert, Box, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import dayjs from 'dayjs';
import Link from 'next/link';
import event from '@/json/events.json'
import VisibilityIcon from '@mui/icons-material/Visibility';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';

export default function TodaysEvent() {
    const today = dayjs().format('D/M/YYYY')
    const filteredDate = event.filter((item) => item.date === today)
    
    if (filteredDate.length === 0) {
        return(
            <>
                <Box>
                    <Alert severity='info' className='text-gray-500'>Tidak ada agenda hari ini.</Alert>
                </Box>
            </>
        )
    } else {
        return(
            <>
                {filteredDate.map((item) => {
                    return(
                        <Card key={item.id} className='mb-3 flex'>
                            <CardMedia sx={{ width: { xs: 100, sm: 100 }, height: 140}} component='img' image={`${item.image}`} alt='event-cover'/>
                            <Box className='p-2 relative'>
                            <CardContent sx={{ width: {xs: 230, sm: '100%', md: 230}, padding: 1}}>
                                <Typography variant='subtitle1' fontStyle='bold'>{item.title}</Typography>
                                <Typography variant='caption' color='text.primary' className='truncate'>
                                    <CalendarMonthOutlinedIcon sx={{ fontSize: 10}}/> {item.date}
                                    <ScheduleOutlinedIcon sx={{ fontSize: 10, marginLeft: 1}}/> {item.date}
                                </Typography>
                                <Typography variant='caption' className='leading-[1rem] line-clamp-2 mt-1'>{item.description}</Typography>
                            </CardContent>
                            <CardActions className='h-0 flex bottom-3 right-0 absolute'>
                                <Link href={`${item.link}`}>
                                    <IconButton aria-label='more' color='primary'><VisibilityIcon fontSize='small'/><Typography variant='caption' className='pl-1'>More</Typography></IconButton>
                                </Link>
                            </CardActions>
                            </Box>                        
                        </Card>   
                    )
                })}
            </>
        )
    }    
}
