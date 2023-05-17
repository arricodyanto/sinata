import { TDrawerMobileProps } from '@/common/types/drawer'
import { Box, Divider, Drawer, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'

export default function DrawerMobile(props: TDrawerMobileProps) {
    const { listMenu } = props
    const [drawer, setDrawer] = React.useState({
        left: false,
    })  
    const toggleDrawer = (side: 'left', open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
        return;
        }

        setDrawer({ ...drawer, [side]: open })
    }

    const sideList = (
        <Box className='w-[250px] text-white' role="presentation" onClick={toggleDrawer('left', true)} onKeyDown={toggleDrawer('left', false)}>
        {listMenu}
        </Box>
    )
  return (
    <>
        <IconButton edge="start" aria-label="menu" onClick={toggleDrawer('left', true)} className='hover:text-primary text-gray-500 xs:flex md:hidden h-[36px] ml-1'>
            <MenuIcon fontSize='small' />
        </IconButton>
        <Drawer
            anchor="left"
            open={drawer.left}
            onClose={toggleDrawer('left', false)}
            PaperProps={{ sx: {backgroundColor: '#323742'}}}
        >
            <Stack className='flex h-16' justifyContent='center' alignItems='center'>
                <Typography variant='h6' className='text-gray-400' sx={{display:'flex', justifyContent:'center', alignItems:'center', fontSize: 18}}>DASHBOARD SINATA</Typography>
            </Stack>
            <Divider className='border-gray-700 mb-4' />
            {sideList}
        </Drawer>
    </>
  )
}