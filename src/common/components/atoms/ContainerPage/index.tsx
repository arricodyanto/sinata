import React from 'react'
import { Container, ContainerProps } from '@mui/material'

type TContainerPageProps = {
    className?: string
    children?: React.ReactNode
}

export default function ContainerPage(props: TContainerPageProps & Partial<ContainerProps>) {
    const { 
        className, 
        children,
        ...containerProps
     } = props
  return (
    <Container {...containerProps} sx={{ maxWidth: {xs: 'calc(100vw-20px)', md: 800, lg: 1150}}} className={className}>
        {children}
    </Container>
  )
}
