import React from 'react'
import data1 from '@/json/tb_opini.json'
import data2 from '@/json/tb_account.json'
import { Box, Button, Fade, FormControl, FormLabel, IconButton, MenuItem, Modal, Skeleton, Stack, Typography } from '@mui/material'
import TableDataSkeleton from '../../molecules/TableDataSkeleton'
import TableData from '../../molecules/TableData'
import TextfieldLabel from '../../atoms/TextfieldLabel'
import AutocompleteCustom from '../../atoms/AutocompleteCustom'
import Link from 'next/link'
import FileUpload from '../../atoms/FileUpload'
import ButtonIcon from '../../atoms/ButtonIcon'
import DeleteIcon from '@mui/icons-material/Delete'
import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Cancel'
import CloseIcon from '@mui/icons-material/Close'
import DateFieldBasic from '../../atoms/DateFieldBasic'
import TimePickerBasic from '../../atoms/TimePickerBasic'
import dayjs from 'dayjs'
import SelectLabel from '../../atoms/SelectLabel'

export default function TableManajemenOpini() {
    // Table Data Props
    const headers = [
        'ID', 'Judul Pembahasan', 'User Pemohon', 'Surat Permohonan', 'Bahan Publikasi', 'Disposisi', 'Tanggal Terbit', 'Waktu Terbit', 'Admin', 'Penerjemah', 'Aksi', 'Status'
    ]
    const columns = [
        { id: 1, label: 'id' },
        { id: 2, label: 'judul_pembahasan' },
        { id: 3, label: 'name' },
        { id: 4, label: 'surat_permohonan' },
        { id: 5, label: 'bahan_publikasi' },
        { id: 6, label: 'disposisi' },
        { id: 7, label: 'tgl_upload' },
        { id: 8, label: 'waktu_upload' },
        { id: 9, label: 'admin' },
        { id: 10, label: 'penerjemah' },
    ]

    // Fetch data from local json
    const combinedData = data1.map((obj1: any) => {
        const match = data2.find((obj2: any) => obj1.id_account === obj2.id)
        return { ...obj1, ...match }
    })

    const [data, setData] = React.useState(combinedData)

    const rows = data.slice().reverse().map((row:any) => row)

    // Modal state
    const [open, setOpen] = React.useState(false);
    const [currIndex, setCurrIndex] = React.useState(0)
    const handleOpen = (id:number) => {
        setOpen(true)
        setCurrIndex(id)
    }
    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
    }
    const handleClose = () => setOpen(false)

    // Editable File Input
    const [fotoPenulis, setFotoPenulis] = React.useState(false)
    const [suratPermohonan, setSuratPermohonan] = React.useState(false)
    const [bahan, setBahan] = React.useState(false)
    const [disposisi, setDisposisi] = React.useState(false)
    
  return (
    <>
        { rows.length === 0 ?
            <>
                <Skeleton variant='rounded' width={210} height={25} className='mb-6' />
                <TableDataSkeleton headers={headers} />
            </>
            :
            <TableData headers={headers} columns={columns} rows={rows} status={true} actionOnClick={handleOpen} />        
        }
        <Modal open={open} onClose={handleClose} BackdropProps={{ onClick: handleBackdropClick }}>
            <Fade in={open}>
                <Box className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md xs:w-[calc(100%-40px)] md:w-[800px]'>
                    <Stack direction='row' justifyContent='space-between' className='sticky py-2 px-6 bg-gray-100 rounded-t-md'>
                        <Typography id="transition-modal-title" variant="subtitle1" component="h2" className='font-bold'>
                            Manajemen Layanan Opini di Media
                        </Typography>
                        <IconButton onClick={handleClose} aria-label='close' size='small' className='hover:text-primary'>
                            <CloseIcon fontSize='small' />
                        </IconButton>
                    </Stack>
                    <Box sx={{ mt: 2 }} className='max-h-[80vh] overflow-y-auto pb-4 px-6'>
                        { rows.filter(item => item.id === currIndex).map(data => {
                            return (
                            <>
                                <TextfieldLabel name='id' label='ID Pengajuan' defaultValue={data.id} disabled />
                                <TextfieldLabel name='judul_pembahasan' label='Judul Pembahasan' defaultValue={data.judul_pembahasan} />
                                <AutocompleteCustom name='name' label='User Pemohon' data={rows} getOptionLabel={(data) => data.name} defaultValue={rows.find((item:any) => item.name == data.name)} />
                                { fotoPenulis === false ? (
                                        <>
                                        <FormLabel className='mb-2 text-sm'>Foto Penulis</FormLabel>
                                        <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' className='mb-4'>
                                            <Link href='/' target='_blank'>
                                                <Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>{data.foto_penulis}</Typography>
                                            </Link>
                                            <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setFotoPenulis(true)}>Change File</Button>
                                        </Stack>
                                        </>
                                    ) : (
                                        <>
                                        <FileUpload name='foto_penulis' label='Foto Penulis' allowMultiple={false} allowReorder={false} acceptedFileTypes={['image/png', 'image/jpeg']} labelFileTypeNotAllowed='Hanya file JPEG dan PNG yang diijinkan' />
                                        <Stack direction='row-reverse' className='-mt-2 mb-4'>
                                            <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setFotoPenulis(false)}>Cancel</Button>
                                        </Stack>
                                        </>
                                    )
                                }
                                { suratPermohonan === false ? (
                                        <>
                                            <FormLabel className='mb-2 text-sm'>Surat Permohonan</FormLabel>
                                            <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' className='mb-4'>
                                                <Link href='/' target='_blank'>
                                                    <Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>{data.surat_permohonan}</Typography>
                                                </Link>
                                                <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setSuratPermohonan(true)}>Change File</Button>
                                            </Stack>
                                        </>
                                    ) : (
                                        <>
                                        <FileUpload name='surat_permohonan' label='Surat Permohonan' allowMultiple={false} allowReorder={false} acceptedFileTypes={['application/pdf']} labelFileTypeNotAllowed='Hanya file PDF yang diijinkan' />
                                        <Stack direction='row-reverse' className='-mt-2 mb-4'>
                                            <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setSuratPermohonan(false)}>Cancel</Button>
                                        </Stack>
                                        </>
                                    )
                                }
                                { bahan == false ? (
                                        <>
                                            <FormLabel className='mb-2 text-sm'>Bahan Publikasi</FormLabel>
                                            <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' className='mb-4'>
                                                <Link href='/' target='_blank'>
                                                    <Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>{data.bahan_publikasi}</Typography>
                                                </Link>
                                                <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setBahan(true)}>Change File</Button>
                                            </Stack>
                                        </>
                                    ) : (
                                        <>
                                            <FileUpload name='bahanPublikasi' label='bahanPublikasi' allowMultiple={false} allowReorder={false} acceptedFileTypes={['application/pdf']} labelFileTypeNotAllowed='Hanya file PDF yang diijinkan' />
                                            <Stack direction='row-reverse' className='-mt-2 mb-4'>
                                                <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setBahan(false)}>Cancel</Button>
                                            </Stack>
                                        </>
                                )}
                                { disposisi == false ? (
                                    <>
                                        <FormLabel className='mb-2 text-sm'>Disposisi</FormLabel>
                                        <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' className='mb-4'>
                                            <Link href='/' target='_blank'>
                                                <Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>{data.disposisi}</Typography>
                                            </Link>
                                            <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setDisposisi(true)}>Change File</Button>
                                        </Stack>
                                    </>
                                ) : (
                                    <>
                                        <FileUpload name='disposisi' label='Disposisi' allowMultiple={false} allowReorder={false} acceptedFileTypes={['application/pdf']} labelFileTypeNotAllowed='Hanya file PDF yang diijinkan' />
                                        <Stack direction='row-reverse' className='-mt-2 mb-4'>
                                            <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setDisposisi(false)}>Cancel</Button>
                                        </Stack>
                                    </>
                                )}
                                <SelectLabel name='status' label='Status' defaultValue={data.status}>
                                    <MenuItem value='pending'>Pending</MenuItem>
                                    <MenuItem value='approved & on progress'>Approved & On Progress</MenuItem>
                                    <MenuItem value='complete'>Complete</MenuItem>
                                    <MenuItem value='rejected'>Rejected</MenuItem>
                                </SelectLabel>
                                <Stack direction='row' spacing={1} className='mb-4'>
                                    <FormControl className='w-full'>
                                        <FormLabel className='mb-1 text-sm'>
                                            Tanggal Terbit
                                        </FormLabel>
                                        <DateFieldBasic name='tgl_kegiatan' defaultValue={dayjs(data.tgl_upload, 'DD/MM/YYYY')} />
                                    </FormControl>
                                    <FormControl className='w-full'>
                                        <FormLabel className='mb-1 text-sm'>
                                            Waktu Terbit
                                        </FormLabel>
                                        <TimePickerBasic defaultValue={dayjs(data.tgl_upload+' '+data.waktu_upload, 'DD/MM/YYYY hh:mm')} />
                                    </FormControl>
                                </Stack>
                                <Stack direction='row' spacing={1} className='mb-2'>
                                    <TextfieldLabel name='link_berita' label='Tautan Berita' defaultValue={data.link_berita} />
                                    <AutocompleteCustom name='admin' label='Admin' data={rows} getOptionLabel={(data) => data.admin} defaultValue={rows.find((item:any) => item.admin == data.admin)} />
                                </Stack>
                                <Stack direction='row' spacing={1} className='mb-6'>
                                    <TextfieldLabel name='link_terj' label='Tautan terjemahan' defaultValue={data.link_terj} />
                                    <AutocompleteCustom name='penerjemah' label='Penerjemah' data={rows} getOptionLabel={(data) => data.penerjemah} defaultValue={rows.find((item:any) => item.penerjemah == data.penerjemah)} />
                                </Stack>
                            </>
                            )
                        })}
                        <Stack direction='row' justifyContent='flex-end' spacing={1} marginBottom={1} marginTop={4}>
                            <ButtonIcon variant='outlined' color='error' icon={<DeleteIcon className='-mr-1' />}>Hapus</ButtonIcon>
                            <ButtonIcon variant='contained' icon={<CancelIcon className='-mr-1'/>} onClick={handleClose}>Tutup</ButtonIcon>
                            <ButtonIcon variant='contained' color='success' icon={<SaveIcon className='-mr-1' />}>Simpan</ButtonIcon>
                        </Stack>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    </>
  )
}
