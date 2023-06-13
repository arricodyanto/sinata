import { Box, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import Link from 'next/link'
import React from 'react'
import { dateFormatter, timeFormatter } from '@/common/utils/dateFormatter.util';
// import event from '../../../json/events.json'

type TFilteredDate = {
  id: number
  title: String
  date: Date
  description: String
  image: String
  link: String
}

type EventModalItemsProps = {
  filteredDate: TFilteredDate[]
}

export default function EventModalItems(props: EventModalItemsProps) {
  const { filteredDate } = props
  const api_image = process.env.NEXT_PUBLIC_API_IMG
  return (
  <>
    { filteredDate.map((item) => {
      return (
        <Card key={item.id} className='mb-3' sx={{ display: 'flex'}}>
            <CardMedia sx={{ width: { xs: 100, sm: 120 }, height: 140}} component='img' image={`${api_image}/${item.image}`} alt='event-cover'/>
            <Box className='p-2 relative'>
              <CardContent sx={{ width: {xs: 150, sm: 210, md: 335}, height: 120, padding: 1}}>
                <Typography variant='subtitle1' fontStyle='bold' className='truncate text-primary brightness-95'>{item.title}</Typography>
                <Typography variant='caption' color='text.primary' className='truncate xs:text-[10px] sm:text-[13px]'>
                    <CalendarMonthOutlinedIcon sx={{ fontSize: 10}} color='primary'/> {dateFormatter(item.date)}
                    <ScheduleOutlinedIcon sx={{ fontSize: 10, marginLeft: 1}} color='primary'/> {timeFormatter(item.date)} WIB
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
