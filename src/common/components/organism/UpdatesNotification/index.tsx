import React from 'react'
import { Box, IconButton, Modal, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import UpdateItems from '../../molecules/UpdateItems';
import CollapsibleAlert from '../../atoms/CollapsibleAlert';

export default function UpdatesNotification() {
    const [open, setOpen] = React.useState(true);
    const handleClose = () => setOpen(false);
  return (
    <>
        <Modal open={open} onClose={handleClose} aria-labelledby="updates-modal-title" aria-describedby="updates-modal-description">
            <Box className='absolute bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xs:w-[300px] sm:w-[350px] md:w-[700px] xs:h-[350px] sm:h-[500px] outline-0 rounded-md overflow-y-auto'>
                <Stack id='updates-modal-title' direction="row" spacing={2} className='py-2 px-4 bg-gray-100 rounded-t-md sticky top-0 z-10'>
                    <Typography variant="subtitle1" className='font-bold text-gray-600'>
                        Updates Log!
                    </Typography>
                    <IconButton onClick={handleClose} aria-label='Close' className='absolute right-1 -translate-y-1'>
                        <CloseIcon fontSize='small'/>
                    </IconButton>
                </Stack>
                <Box id='updates-modal-description' className='p-6 z-20'>
                    <CollapsibleAlert title='Keterangan penomoran versi: v(x).(y).(z)' type='info' className='-mx-2 -mt-3 mb-3'>
                        <li>x = perubahan keseluruhan dari sistem</li>
                        <li>y = perbaikan/penambahan halaman</li>
                        <li>x = perubahan/penambahan section dari halaman</li>
                    </CollapsibleAlert>
                    <UpdateItems />
                </Box>
            </Box>
        </Modal>
    </>
  )
}
