import React from 'react'
import { Button, Carousel } from 'react-daisyui'

export default function GuidelineItems() {
    const buttonStyle = (value:string) => {
        return <Button shape='circle' variant='outline' size='sm' className='mt-3'>{value}</Button>
    }
  return (
    <>
        <Carousel display='numbered' className="rounded-box" buttonStyle={buttonStyle}>
            <Carousel.Item src="https://dummyimage.com/1280x720/e0e0e0/ffffff.jpg&text=Infografis+Manual+Sinata+(1280x720)" className='hover:cursor-pointer' title='Infographics 1' alt="Infographics 1" onClick={() => {
              window.open('https://dummyimage.com/1280x720/e0e0e0/ffffff.jpg&text=Infografis+Manual+Sinata+(1280x720)', '_blank')
            }} />                  
            <Carousel.Item src="https://dummyimage.com/1280x720/e0e0e0/ffffff.jpg&text=Infografis+Manual+Sinata+(1280x720)" className='hover:cursor-pointer' title='Infographics 2' alt="Infographics 2" onClick={() => {
              window.open('https://dummyimage.com/1280x720/e0e0e0/ffffff.jpg&text=Infografis+Manual+Sinata+(1280x720)', '_blank')
            }} />                  
            <Carousel.Item src="https://dummyimage.com/1280x720/e0e0e0/ffffff.jpg&text=Infografis+Manual+Sinata+(1280x720)" className='hover:cursor-pointer' title='Infographics 3' alt="Infographics 3" onClick={() => {
              window.open('https://dummyimage.com/1280x720/e0e0e0/ffffff.jpg&text=Infografis+Manual+Sinata+(1280x720)', '_blank')
            }} />                  
            <Carousel.Item src="https://dummyimage.com/1280x720/e0e0e0/ffffff.jpg&text=Infografis+Manual+Sinata+(1280x720)" className='hover:cursor-pointer' title='Infographics 4' alt="Infographics 4" onClick={() => {
              window.open('https://dummyimage.com/1280x720/e0e0e0/ffffff.jpg&text=Infografis+Manual+Sinata+(1280x720)', '_blank')
            }} />                  
        </Carousel>
    </>
  )
}
