import { Stack, Typography } from '@mui/material';
import React from 'react';

export default function NotAuthorized() {
    return (
        <Stack className='grid place-items-center w-screen h-screen'>
            <Typography variant='h5'>Akses Tidak Diijinkan.</Typography>
        </Stack>
    );
}
