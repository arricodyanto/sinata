import React from 'react'
import { Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import staff from '@/json/staffData.json'


export default function StaffCardItem() {
  return (
    <>
        {
            staff.map((item) => {
                if (item.id % 2 === 0 ) {
                    return (
                        <Grid key={item.id} item xs={6} md={3} className='mt-16 -mb-16'>
                            <Card sx={{ maxWidth: '100%', backgroundColor: 'transparent'}} className='shadow-none text-white rounded-none justify-self-center'>
                                <CardMedia sx={{ height: 250 }} image={item.image} title='People Names' className='rounded-md'/>
                                <CardContent className='px-0'>
                                    <Typography variant='h6' className='font-bold'>{item.name}</Typography>
                                    <Typography variant='body1' className='text-gray-100 mb-2'>{item.job_title}</Typography>
                                    <IconButton aria-label='More Button' size='small' sx={{color: '#e5e7eb'}}><VisibilityIcon fontSize='small'/></IconButton>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                } else {
                    return (
                        <Grid key={item.id} item xs={6} md={3} className=''>
                            <Card sx={{ maxWidth: '100%', backgroundColor: 'transparent'}} className='shadow-none text-white rounded-none justify-self-center'>
                                <CardMedia sx={{ height: 250 }} image={item.image} title='People Names' className='rounded-md'/>
                                <CardContent className='px-0'>
                                    <Typography variant='h6' className='font-bold'>{item.name}</Typography>
                                    <Typography variant='body1' className='text-gray-100 mb-2'>{item.job_title}</Typography>
                                    <IconButton aria-label='More Button' size='small' sx={{color: '#e5e7eb'}}><VisibilityIcon fontSize='small'/></IconButton>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                }
            })
        }
    </>
  )
}
