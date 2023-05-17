import { Box, IconButton, Popover, Zoom } from '@mui/material'
import React from 'react'

type TIconPopoverProps = {
    alt: string
    height: string
    icon: React.ReactNode
    children: React.ReactNode
}

export default function IconPopover(props: TIconPopoverProps) {
    const { alt, height, icon, children } = props
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const open = Boolean(anchorEl)
    const id = open ? 'simple-popover' : undefined

    const content = () => (
        <Box className='p-4'>
            {children}
        </Box>
    )
    const containerRef = React.useRef(null);

  return (
    <>
        <IconButton disableRipple sx={{ height: `${height}`, "&.MuiButtonBase-root:hover": { bgcolor: "transparent"} }} className={anchorEl? 'text-primary' : 'hover:text-primary'} aria-label={alt} aria-describedby={id} onClick={handleClick}>{icon}</IconButton>
        <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose} className='translate-y-6' anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} transformOrigin={{ vertical: 'top', horizontal: 'center' }} PaperProps={{sx: {boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'}}} TransitionComponent={Zoom}>
            {content()}
        </Popover>
    </>
  )
}
