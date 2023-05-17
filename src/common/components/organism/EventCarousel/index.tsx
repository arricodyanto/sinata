import { Box, Button } from '@mui/material'
import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
}

const items = [
    <Image src={'/images/hero-5.jpg'} key='0' alt="Hero's Site" width={120} height={120}/>,
    <div className="item" key='1' data-value="1">1</div>,
    <div className="item" key='2' data-value="2">2</div>,
    <div className="item" key='3' data-value="3">3</div>,
    <div className="item" key='4' data-value="4">4</div>,
    <div className="item" key='5' data-value="5">5</div>,
]
export default function EventCarousel() {

    const renderPrevButton = ({isDisabled}:any) => {
        return <Button className='p-4 absolute left-0 top-0'><ArrowBackIosIcon /></Button>
    }

    const renderNextButton = ({isDisabled}:any) => {
        return <Button className='p-4 absolute right-0 top-0'><ArrowForwardIosIcon /></Button>
    }
  return (
    <Box>
    <Box>
        <AliceCarousel mouseTracking items={items} responsive={responsive} disableDotsControls renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}/>
    </Box>
    </Box>
  )
}
