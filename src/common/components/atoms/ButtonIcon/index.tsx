import React from 'react'
import { Button, ButtonProps } from '@mui/material'

interface ButtonIconProps {
    icon: React.ReactNode
    children?: React.ReactNode
}

export default function ButtonIcon(props: ButtonIconProps & Partial<ButtonProps>) {
    const {
        icon,
        children,
        ...buttonProps
    } = props
  return (
    <Button size='small' {...buttonProps} disableElevation className='rounded-md capitalize mb-4 py-1 px-3 min-w-[90px]' startIcon={icon}>{children}</Button>
  )
}
