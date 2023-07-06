import TitlePage from '@/common/components/atoms/TitlePage';
import DashboardPanel from '@/common/components/organism/DashboardPanel';
import { Box, Button, Fade, FormLabel, IconButton, MenuItem, Modal, Paper, Skeleton, Stack, Typography } from '@mui/material';
import React from 'react';
import { listMenuAdmin } from './dashboard';
import HeaderBreadcrumbs from '@/common/components/molecules/HeaderBreadcrumbs';
import Link from 'next/link';
import account from '@/json/tb_account.json';
import TableDataSkeleton from '@/common/components/molecules/TableDataSkeleton/TableDataSkeleton';
import TableData from '@/common/components/molecules/TableData';
import TextfieldLabel from '@/common/components/atoms/TextfieldLabel';
import ButtonIcon from '@/common/components/atoms/ButtonIcon';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import FileUpload from '@/common/components/atoms/FileUpload';
import SelectLabel from '@/common/components/atoms/SelectLabel';

export default function ManajemenAkun() {
    // Table Data props
    const headers = [
        'ID', 'Nama Lengkap', 'Username', 'Alamat Email', 'No Identitas', 'Unit/Fakultas', 'Role', 'Kontak', 'Aksi'
    ];
    const columns = [
        { id: 1, label: 'id' },
        { id: 2, label: 'name' },
        { id: 3, label: 'username' },
        { id: 4, label: 'email' },
        { id: 5, label: 'no_identitas' },
        { id: 6, label: 'unit' },
        { id: 7, label: 'role' },
        { id: 8, label: 'kontak' }
    ];

    const [data, setData] = React.useState<Array<any>>(account);
    const rows = data.slice().reverse().map((row: any) => row);

    // Modal state
    const [open, setOpen] = React.useState(false);
    const [currIndex, setCurrIndex] = React.useState(0);
    const handleOpen = (id: number) => {
        setOpen(true);
        setCurrIndex(id);
    };
    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };
    const handleClose = () => setOpen(false);

    // Editable File Input
    const [avatar, setAvatar] = React.useState(false);
    return (
        <Box className='bg-grey'>
            <TitlePage title='Manajemen Akun Pengguna - Sinata' />
            <DashboardPanel listMenu={listMenuAdmin}>
                <HeaderBreadcrumbs pageHeader='Manajemen Akun Pengguna' currentPage='Manajemen Akun' />
                <Paper className='shadow-md xs:p-4 md:p-6'>
                    {rows.length === 0 ?
                        <>
                            <Skeleton variant='rounded' width={210} height={25} className='mb-6' />
                            <TableDataSkeleton headers={headers} />
                        </>
                        :
                        <TableData headers={headers} columns={columns} rows={rows} status={false} actionOnClick={handleOpen} />
                    }
                    <Modal open={open} onClose={handleClose} BackdropProps={{ onClick: handleBackdropClick }}>
                        <Fade in={open}>
                            <Box className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md xs:w-[calc(100%-40px)] md:w-[800px]'>
                                <Stack direction='row' justifyContent='space-between' className='sticky py-2 px-6 bg-gray-100 rounded-t-md'>
                                    <Typography variant="subtitle1" component="h2" className='font-bold'>
                                        Manajemen Akun Pengguna
                                    </Typography>
                                    <IconButton onClick={handleClose} aria-label='close' size='small' className='hover:text-primary'>
                                        <CloseIcon fontSize='small' />
                                    </IconButton>
                                </Stack>
                                <Box sx={{ mt: 2 }} className='max-h-[80vh] overflow-y-auto pb-4 px-6'>
                                    {rows.filter((item: any) => item.id === currIndex).map((data: any) => {
                                        return (
                                            <>
                                                <TextfieldLabel name='id' label='ID User' defaultValue={data.id} disabled />
                                                {avatar == false && data.img_profil != null ? (
                                                    <>
                                                        <FormLabel className='mb-2 text-sm'>Foto Profil</FormLabel>
                                                        <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' className='mb-4'>
                                                            <Link href='/' target='_blank'>
                                                                <Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>{data.img_profil}</Typography>
                                                            </Link>
                                                            <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setAvatar(true)}>Change File</Button>
                                                        </Stack>
                                                    </>
                                                ) : (
                                                    <>
                                                        <FileUpload name='img_profil' label='Foto Profil' allowMultiple={false} acceptedFileTypes={['image/png', 'image/jpeg']} labelFileTypeNotAllowed='Hanya file JPEG dan PNG yang diijinkan' />
                                                        <Stack direction='row-reverse' className='-mt-2 mb-4'>
                                                            <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setAvatar(false)}>Cancel</Button>
                                                        </Stack>
                                                    </>
                                                )
                                                }
                                                <Stack direction='row' spacing={1} className='mb-2'>
                                                    <TextfieldLabel name='username' label='Username' defaultValue={data.username} />
                                                    <TextfieldLabel name='name' label='Nama Lengkap' defaultValue={data.name} />
                                                </Stack>
                                                <TextfieldLabel type='email' name='email' label='Alamat Email' defaultValue={data.email} />
                                                <TextfieldLabel name='no_identitas' label='No Identitas' defaultValue={data.no_identitas} />
                                                <TextfieldLabel name='unit' label='Unit/Fakultas' defaultValue={data.unit} />
                                                <SelectLabel name='role' label='Role Akun' defaultValue={data.role}>
                                                    <MenuItem value='user'>User</MenuItem>
                                                    <MenuItem value='super admin'>Super Admin</MenuItem>
                                                    <MenuItem value='admin role 1'>Admin Role 1</MenuItem>
                                                    <MenuItem value='admin role 2'>Admin Role 2</MenuItem>
                                                    <MenuItem value='admin role 3'>Admin Role 3</MenuItem>
                                                    <MenuItem value='admin role 4'>Admin Role 4</MenuItem>
                                                    <MenuItem value='admin role 5'>Admin Role 5</MenuItem>
                                                    <MenuItem value='admin role 6'>Admin Role 6</MenuItem>
                                                    <MenuItem value='admin role 7'>Admin Role 7</MenuItem>
                                                    <MenuItem value='admin role 8'>Admin Role 8</MenuItem>
                                                    <MenuItem value='admin role 9'>Admin Role 9</MenuItem>
                                                </SelectLabel>
                                                <TextfieldLabel type='tel' name='kontak' label='Kontak' defaultValue={data.kontak} />
                                            </>
                                        );
                                    })}
                                    <Stack direction='row' justifyContent='flex-end' spacing={1} marginBottom={1} marginTop={4}>
                                        <ButtonIcon variant='outlined' color='error' icon={<DeleteIcon className='-mr-1' />}>Hapus</ButtonIcon>
                                        <ButtonIcon variant='contained' icon={<CancelIcon className='-mr-1' />} onClick={handleClose}>Tutup</ButtonIcon>
                                        <ButtonIcon variant='contained' color='success' icon={<SaveIcon className='-mr-1' />}>Simpan</ButtonIcon>
                                    </Stack>
                                </Box>
                            </Box>
                        </Fade>
                    </Modal>
                </Paper>
            </DashboardPanel>
        </Box>
    );
}
