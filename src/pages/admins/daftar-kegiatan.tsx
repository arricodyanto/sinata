import TitlePage from '@/common/components/atoms/TitlePage'
import DashboardPanel from '@/common/components/organism/DashboardPanel'
import { Box, Button, Fade, FormControl, FormLabel, IconButton, MenuItem, Modal, Paper, Stack, TableCell, Typography } from '@mui/material'
import React from 'react'
import { listMenuAdmin } from '@/pages/admins/dashboard'
import HeaderBreadcrumbs from '@/common/components/molecules/HeaderBreadcrumbs'
import Link from 'next/link'
import TableData from '@/common/components/molecules/TableData'
import CloseIcon from '@mui/icons-material/Close'
import DeleteIcon from '@mui/icons-material/Delete'
import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Cancel'
import dayjs from 'dayjs'
import TimePickerBasic from '@/common/components/atoms/TimePickerBasic'
import ButtonIcon from '@/common/components/atoms/ButtonIcon'
import SelectLabel from '@/common/components/atoms/SelectLabel'
import TextfieldLabel from '@/common/components/atoms/TextfieldLabel'
import DateFieldBasic from '@/common/components/atoms/DateFieldBasic'
import FileUpload from '@/common/components/atoms/FileUpload'
import ButtonBasic from '@/common/components/atoms/ButtonBasic'

export default function DaftarKegiatan() {
    const headers = [
        'ID', 'Judul Kegiatan', 'Deskripsi Kegiatan', 'User', 'Sifat Acara', 'Tanggal Kegiatan', 'Waktu', 'Tempat', 'Aksi'
    ]
    const columns = [
        { id: 1, label: 'id' },
        { id: 2, label: 'judul_kegiatan' },
        { id: 3, label: 'des_kegiatan' },
        { id: 4, label: 'id_account' },
        { id: 5, label: 'sifat_kegiatan' },
        { id: 6, label: 'tgl_kegiatan' },
        { id: 7, label: 'waktu_kegiatan' },
        { id: 8, label: 'tempat_kegiatan' },
    ]
    const [data, setData] = React.useState<any>([])
    React.useEffect(() => {
        fetch('https://644827f77bb84f5a3e53de81.mockapi.io/api/v1/tb_kegiatan')
        .then(response => response.json())
        .then(data => setData(data))
    }, [])
    const rows = data.slice().reverse().map((row:any) => row)
    
    // Modal state
    const [open, setOpen] = React.useState(false);
    const [currIndex, setCurrIndex] = React.useState(0)
    const handleOpen = (index:number) => {
        setOpen(true)
        setCurrIndex(index)
        // console.log(index)
    }
    const handleClose = () => setOpen(false)

    // Editable File Input
    const [permohonan, setPermohonan] = React.useState(false)
    const [sik, setSik] = React.useState(false)
  return (
    <Box className='bg-grey'>
        <TitlePage title='Daftar Kegiatan - Sinata' />
        <DashboardPanel listMenu={listMenuAdmin}>
            <HeaderBreadcrumbs pageHeader='Daftar Kegiatan' currentPage='Daftar Kegiatan'>
                <Link href='' className='text-zinc-900 hover:underline hover:decoration-1 hover:underline-offset-2'>
                    Manajemen Kegiatan
                </Link>
            </HeaderBreadcrumbs>
            <Paper className='shadow-md px-6 py-4'>
                {/* <TableKegiatan rows={rows} /> */}
                <TableData headers={headers} columns={columns} rows={rows} actionOnClick={handleOpen} status={false} addButton={
                    <Link href=''>
                        <ButtonBasic variant='contained'>Tambahkan Kegiatan</ButtonBasic>
                    </Link>
                } />
                <Modal open={open} onClose={handleClose}>
                    <Fade in={open}>
                        <Box className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md xs:w-[calc(100%-40px)] md:w-[600px]'>
                            <Stack direction='row' justifyContent='space-between' className='sticky py-2 px-6 bg-gray-100 rounded-t-md'>
                                <Typography id="transition-modal-title" variant="subtitle1" component="h2" className='font-bold'>
                                    Daftar Seluruh Kegiatan
                                </Typography>
                                <IconButton onClick={handleClose} aria-label='close' size='small' className='hover:text-primary'>
                                    <CloseIcon fontSize='small' />
                                </IconButton>
                            </Stack>
                            <Box id="transition-modal-description" sx={{ mt: 2 }} className='max-h-[80vh] overflow-auto pb-4 px-6'>
                                { rows.filter((item:any, i:number) => i === currIndex).map((data:any) => {
                                    return(
                                        <>
                                            <TextfieldLabel name='id' label='ID Kegiatan' defaultValue={data.id} disabled />
                                            <TextfieldLabel name='judul_kegiatan' label='Judul Kegiatan' defaultValue={data.judul_kegiatan} />
                                            <TextfieldLabel name='des_kegiatan' label='Deskripsi Kegiatan' defaultValue={data.des_kegiatan} multiline rows={3} />
                                            <SelectLabel name='sifat_kegiatan' label='Sifat Kegiatan' defaultValue='get'>
                                                <MenuItem value='get' className='hidden'>{data.sifat_kegiatan}</MenuItem>
                                                <MenuItem value='terbuka'>Terbuka untuk Umum</MenuItem>
                                                <MenuItem value='undangan'>Undangan</MenuItem>
                                            </SelectLabel>
                                            <Stack direction='row' spacing={1} className='mb-6'>
                                                <FormControl className='w-full'>
                                                    <FormLabel className='mb-1 text-sm'>
                                                        Tanggal Kegiatan
                                                    </FormLabel>
                                                    <DateFieldBasic name='tgl_kegiatan' value={dayjs(data.tgl_kegiatan, 'DD/MM/YYYY')} />
                                                </FormControl>
                                                <FormControl className='w-full'>
                                                    <FormLabel className='mb-1 text-sm'>
                                                        Waktu Kegiatan
                                                    </FormLabel>
                                                    <TimePickerBasic value={dayjs(data.tgl_kegiatan+' '+data.waktu_kegiatan, 'DD/MM/YYYY hh:mm')} />
                                                </FormControl>
                                            </Stack>
                                            <TextfieldLabel label='Tempat Kegiatan' defaultValue={data.sifat_kegiatan} />
                                            { permohonan == false ? (
                                                <>
                                                    <FormLabel className='mb-2 text-sm'>Surat Permohonan</FormLabel>
                                                    <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' className='mb-4'>
                                                        <Link href='/' target='_blank'>
                                                            <Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>{data.surat_permohonan}</Typography>
                                                        </Link>
                                                        <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setPermohonan(true)}>Change File</Button>
                                                    </Stack>
                                                </>
                                            ) : (
                                                <>
                                                    <FileUpload name='surat_permohonan' label='Surat Permohonan' allowMultiple={false} allowReorder={false} acceptedFileTypes={['application/pdf']} labelFileTypeNotAllowed='Hanya file PDF yang diijinkan' />
                                                    <Stack direction='row-reverse' className='-mt-2'>
                                                        <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setPermohonan(false)}>Cancel</Button>
                                                    </Stack>
                                                </>
                                            )}
                                            { sik == false ? (
                                                <>
                                                    <FormLabel className='mb-2 text-sm'>Surat Ijin Kegiatan</FormLabel>
                                                    <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' className='mb-8'>
                                                        <Link href='/' target='_blank'>
                                                            <Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>{data.sik}</Typography>
                                                        </Link>
                                                        <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setSik(true)}>Change File</Button>
                                                    </Stack>
                                                </>
                                            ) : (
                                                <>
                                                    <FileUpload name='sik' label='Surat Ijin Kegiatan' allowMultiple={false} allowReorder={false} acceptedFileTypes={['application/pdf']} labelFileTypeNotAllowed='Hanya file PDF yang diijinkan' />
                                                    <Stack direction='row-reverse' className='-mt-2 mb-4'>
                                                        <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setSik(false)}>Cancel</Button>
                                                    </Stack>
                                                </>
                                            )}
                                        </>
                                    )
                                })}
                                <Stack direction='row' justifyContent='flex-end' spacing={1} marginBottom={1} marginTop={2}>
                                    <ButtonIcon variant='outlined' color='error' icon={<DeleteIcon className='-mr-1' />}>Hapus</ButtonIcon>
                                    <ButtonIcon variant='contained' icon={<CancelIcon className='-mr-1'/>} onClick={handleClose}>Tutup</ButtonIcon>
                                    <ButtonIcon variant='contained' color='success' icon={<SaveIcon className='-mr-1' />}>Simpan</ButtonIcon>
                                </Stack>
                            </Box>
                        </Box>
                    </Fade>
                </Modal>
            </Paper>
        </DashboardPanel>
    </Box>
  )
}
