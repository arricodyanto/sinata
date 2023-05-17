import { Box } from '@mui/material'
import React from 'react'
import EventCard from '@/common/components/molecules/EventCard'
import event from '@/json/events.json'
import { Carousel } from 'react-daisyui'

export default function DaisyCarousel() {
  return (
    <>
        <Carousel display='sequential' className='py-2'>
            { event.map((item) =>  {
                 return (
                    <>
                        <Carousel.Item className='mx-2'>
                            <EventCard eventDate={item.date} eventTime={item.date} eventImage={item.image} eventTitle={item.title} eventDesc={item.description} eventLink={item.link}/>
                        </Carousel.Item>
                    </>
                 )
             })}
        </Carousel>
    </>
  )
}
