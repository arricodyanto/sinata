import { Button } from '@mui/material';
import React from 'react'
import FullscreenButton from '@/common/components/atoms/FullscreenButton';
import AvatarNavIcon from '@/common/components/molecules/AvatarNavIcon';
import NotifNavIcon from '@/common/components/molecules/NotifNavIcon';
import SearchNavIcon from '@/common/components/molecules/SearchNavIcon';

export default function AppnavMenu() {
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
    // const data = [
    //     { title: 'Hello' },
    //     { title: 'World' },
    //     { title: 'Hello World' },
    //     { title: 'Hello World2' },
    // ]

  return (
    <>  
        <SearchNavIcon />
        <FullscreenButton />
        <NotifNavIcon />
        <AvatarNavIcon />
        {/* <InputSearch /> */}
    </>
  )
}
