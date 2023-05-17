import React from 'react'
import Link from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import IconPopover from '../IconPopover';
import { Avatar, Box, Chip, Divider, Stack, Typography } from '@mui/material';

export default function AvatarNavIcon() {
  return (
    <>
        <IconPopover height='auto' alt='user-icon' icon={
            <>
                <Avatar alt='John Doe' src='/images/avatar/avatar-4.jpg' />
                <Stack direction='row' alignItems='center' sx={{ display: {xs: 'none', md: 'flex'}}}>
                    <Typography variant='body2' className='ml-2 text-gray-500'>Gary Doe</Typography>
                    <ExpandMoreIcon className='text-gray-500 text-base' />
                </Stack>
            </>
        }>
            <Box className='xs:w-[85vw] md:w-52'>
                <Stack direction='row' alignItems='center' justifyContent='space-between'>
                    <Typography variant='body2' className='text-gray-600 font-medium'>Selamat Datang!</Typography>
                    <Chip label='User' variant='filled' color='primary' sx={{ height: 14}} className='text-[10px]' />
                </Stack>
                <Box className='mt-4'>
                    <Link href=''>
                        <Stack direction='row' alignItems='center' className='hover:text-primary text-gray-500 mb-2'>
                            <PersonOutlinedIcon className='text-[16px]' />
                            <Typography variant='body2' className='ml-2'>Profil Akun</Typography>
                        </Stack>
                    </Link>
                    <Link href=''>
                        <Stack direction='row' alignItems='center' className='hover:text-primary text-gray-500'>
                            <LockOutlinedIcon className='text-[16px]' />
                            <Typography variant='body2' className='ml-2'>Kunci Layar</Typography>
                        </Stack>
                    </Link>
                    <Divider light className='my-3'/>
                    <Link href='/sign-in'>
                        <Stack direction='row' alignItems='center' className='hover:text-primary text-gray-500'>
                            <LogoutOutlinedIcon className='text-[16px]' />
                            <Typography variant='body2' className='ml-2'>Sign Out</Typography>
                        </Stack>
                    </Link>
                </Box>
            </Box>
        </IconPopover>
    </>
  )
}
