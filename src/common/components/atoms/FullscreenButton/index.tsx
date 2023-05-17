import React from 'react'
import { IconButton } from '@mui/material'
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';

export default function FullscreenButton() {
    const [isFullscreen, setIsFullscreen] = React.useState(false);

    const handleFullscreen = () => {
        if (isFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
        } else {
        document.documentElement.requestFullscreen();
        setIsFullscreen(true);
        }
    }
  return (
    <>
        <IconButton disableRipple sx={{ height: '40px', "&.MuiButtonBase-root:hover": { bgcolor: "transparent"} }}  onClick={handleFullscreen}>
            { !isFullscreen ? <FullscreenOutlinedIcon className='hover:text-primary' /> : <FullscreenExitOutlinedIcon className='text-primary text-[28px]' />}
        </IconButton>
    </>
  )
}
