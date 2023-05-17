import { Alert, AlertColor, AlertProps, AlertTitle, Box, BoxProps, Collapse, IconButton, Typography } from '@mui/material';
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

type TCollapsibleAlertProps = {
    type: AlertColor
    title?: string
    children: React.ReactNode
}

export default function CollapsibleAlert(props: TCollapsibleAlertProps & Partial<AlertProps> & Partial<BoxProps>) {
    const [open, setOpen] = React.useState(true);
    const { 
        type, 
        title, 
        children,
        ...boxProps
     } = props
  return (
    <>
        <Box {...boxProps}>
            <Collapse in={open}>
                <Alert severity={type} action={
                    <IconButton aria-label='close' color='inherit' size='small' onClick={() => {setOpen(false)}}>
                        <CloseIcon fontSize='inherit' />
                    </IconButton>
                }>
                    <AlertTitle className='text-sm mb-0'>
                        {title}
                    </AlertTitle>
                    <Typography variant='caption' className='text-gray-500'>
                        {children}
                    </Typography>
                </Alert>
            </Collapse>
        </Box>
    </>
  )
}
