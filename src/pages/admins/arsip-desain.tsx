import React from 'react'
import tb_arsipdesain from '@/json/tb_arsipdesain.json'
import tb_account from '@/json/tb_account.json'
import { Box, Button, Fade, FormControl, FormLabel, IconButton, MenuItem, Modal, Paper, Skeleton, Stack, Typography } from '@mui/material'
import TitlePage from '@/common/components/atoms/TitlePage'
import DashboardPanel from '@/common/components/organism/DashboardPanel'
import { listMenuAdmin } from './dashboard'
import HeaderBreadcrumbs from '@/common/components/molecules/HeaderBreadcrumbs'
import Link from 'next/link'
import TableDataSkeleton from '@/common/components/molecules/TableDataSkeleton'
import TableData from '@/common/components/molecules/TableData'
import ButtonIcon from '@/common/components/atoms/ButtonIcon'
import TextfieldLabel from '@/common/components/atoms/TextfieldLabel'
import CloseIcon from '@mui/icons-material/Close'
import DeleteIcon from '@mui/icons-material/Delete'
import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Cancel'
import AutocompleteCustom from '@/common/components/atoms/AutocompleteCustom'
import SelectLabel from '@/common/components/atoms/SelectLabel'
import DatePickerBasic from '@/common/components/atoms/DatePickerBasic'
import dayjs from 'dayjs'
import FileUpload from '@/common/components/atoms/FileUpload'

export default function ArsipDesain() {
    // Table Data props
    const headers = [
        'ID', 'Judul Desain', 'User Pemohon', 'Kategori Desain', 'Keterangan', 'Deadline', 'Lampiran File', 'Aksi', 'Status'
    ]

    const columns = [
        { id: 1, label: 'id' },
        { id: 2, label: 'judul_desain' },
        { id: 3, label: 'name' },
        { id: 4, label: 'kategori' },
        { id: 5, label: 'keterangan' },
        { id: 6, label: 'deadline' },
        { id: 8, label: 'lampiran_file' },
    ]

     // Fetch data from local json
     const combinedData = tb_arsipdesain.map((obj1: any) => {
        const match = tb_account.find((obj2: any) => obj1.id_account === obj2.id)
        return { ...obj1, ...match }
    })

    const filteredData = combinedData.filter((row:any) => {
        return row.status != ''
    })

    const [data, setData] = React.useState(filteredData)

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

    const [lampiran, setLampiran] = React.useState(false)
  return (
    <Box className='bg-grey'>
        <TitlePage title='Arsip Desain - Sinata' />
        <DashboardPanel listMenu={listMenuAdmin}>
            <HeaderBreadcrumbs pageHeader='Arsip Desain' currentPage='Arsip Desain'>
                <Link href='' className='text-zinc-900 hover:underline hover:decoration-1 hover:underline-offset-2'>
                    Arsip Layanan
                </Link>
            </HeaderBreadcrumbs>
            <Paper className='shadow-md xs:p-4 md:p-6'>
                { rows.length === 0 ? 
                    <>
                        <Skeleton variant='rounded' width={210} height={25} className='mb-6' />
                        <TableDataSkeleton headers={headers} />
                    </>
                    :
                    <TableData headers={headers} columns={columns} rows={rows} status={true} actionOnClick={handleOpen} addButton={true} />
                }
                <Modal open={open} onClose={handleClose} BackdropProps={{ onClick: handleBackdropClick}}>
                    <Fade in={open}>
                        <Box className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md xs:w-[calc(100%-40px)] md:w-[800px]'>
                            <Stack direction='row' justifyContent='space-between' className='sticky py-2 px-6 bg-gray-100 rounded-t-md'>
                                <Typography variant="subtitle1" component="h2" className='font-bold'>
                                    Manajemen Arsip Desain
                                </Typography>
                                <IconButton onClick={handleClose} aria-label='close' size='small' className='hover:text-primary'>
                                    <CloseIcon fontSize='small' />
                                </IconButton>
                            </Stack>
                            <Box sx={{ mt: 2 }} className='max-h-[80vh] overflow-y-auto pb-4 px-6'>
                                { rows.filter((item:any) => item.id === currIndex).map((data:any) => {
                                    return(
                                        <>
                                            <TextfieldLabel name='id' label='ID Pengajuan' defaultValue={data.id} disabled />
                                            <AutocompleteCustom name='name' label='User Pemohon' data={rows} getOptionLabel={(data) => data.name} defaultValue={rows.find((item:any) => item.name == data.name)} freeSolo />
                                            <SelectLabel name='kategori' label='Kategori Desain' defaultValue={data.kategori} className='capitalize'>
                                                <MenuItem value='' disabled>Pilih salah satu</MenuItem>
                                                {kategoriDesain.map((item, index) => <MenuItem value={item} key={index} className='capitalize'>{item}</MenuItem>)}
                                            </SelectLabel>
                                            <TextfieldLabel name='keterangan' label='Keterangan' defaultValue={data.keterangan} multiline minRows={3} maxRows={6} />
                                            <Stack direction='row' spacing={1}>
                                                <FormControl className='w-full'>
                                                    <FormLabel className='mb-1 text-sm'>
                                                        Deadline Pengerjaan
                                                    </FormLabel>
                                                    <DatePickerBasic value={dayjs(data.deadline, 'DD/MM/YYYY')} />
                                                </FormControl>
                                                <SelectLabel name='status' label='Status' defaultValue={data.status}>
                                                    <MenuItem value='pending'>Pending</MenuItem>
                                                    <MenuItem value='approved & on progress'>Approved & On Progress</MenuItem>
                                                    <MenuItem value='complete'>Complete</MenuItem>
                                                    <MenuItem value='rejected'>Rejected</MenuItem>
                                                </SelectLabel>
                                            </Stack>
                                            { lampiran === false ? (
                                                    <>
                                                    <FormLabel className='mb-2 text-sm'>Lampiran File</FormLabel>
                                                    <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' className='mb-4'>
                                                        <Link href='/' target='_blank'>
                                                            <Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>{data.lampiran_file}</Typography>
                                                        </Link>
                                                        <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setLampiran(true)}>Change File</Button>
                                                    </Stack>
                                                    </>
                                                ) : (
                                                    <>
                                                    <FileUpload name='lampiran_file' label='Lampiran File' />
                                                    <Stack direction='row-reverse' className='-mt-2 mb-4'>
                                                        <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setLampiran(false)}>Cancel</Button>
                                                    </Stack>
                                                    </>
                                                )
                                            }

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
            </Paper>
        </DashboardPanel>
    </Box>
  )
}

const kategoriDesain = [
    'leaflet',
    'digital',
    'spanduk'
]