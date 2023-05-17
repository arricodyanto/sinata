import React from 'react'
import { Box, Chip, Fade, IconButton, InputAdornment, Modal, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import TextfieldBasic from '@/common/components/atoms/TextfieldBasic';
import DatePickerBasic from '@/common/components/atoms/DatePickerBasic';
import TimePickerBasic from '@/common/components/atoms/TimePickerBasic';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import ButtonIcon from '@/common/components/atoms/ButtonIcon';
import dayjs from 'dayjs';

type TRiwayatAjuanProps = {
    rows: {
        jenisLayanan: string
        judulKegiatan: string
        tanggal: string
        waktu: string
        tempat: string
        status: string
    }[]
}

export default function TableRiwayat(props: TRiwayatAjuanProps) {
    const { rows } = props
    const [data, setData] = React.useState<Array<any>>(rows);
    const [open, setOpen] = React.useState(false);
    const [currIndex, setCurrIndex] = React.useState(0)
    const handleOpen = (index:number) => {
        setOpen(true)
        setCurrIndex(index)
        // console.log(index)
    }
    const handleClose = () => setOpen(false)

    React.useEffect(() => {
        fetch('https://644827f77bb84f5a3e53de81.mockapi.io/api/v1/tb_laypubagenda')
        .then(response => response.json())
        .then(data => setData(data))
    })

     // Table Pagination
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5)

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }
  return (
    <>
        <TableContainer component={Paper} className='shadow-none overflow-x-auto'>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Jenis Layanan</TableCell>
                    <TableCell>Judul Kegiatan</TableCell>
                    <TableCell align='center'>Tanggal</TableCell>
                    <TableCell align='center'>Waktu</TableCell>
                    <TableCell>Tempat</TableCell>
                    <TableCell align='center'>Aksi</TableCell>
                    <TableCell align='center'>Status</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                    <TableRow hover key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                            {row.sifat_kegiatan}
                        </TableCell>
                        <TableCell>{row.judul_kegiatan}</TableCell>
                        <TableCell align='center'>{row.tgl_kegiatan}</TableCell>
                        <TableCell align='center'>{row.waktu_kegiatan}</TableCell>
                        <TableCell>{row.tempat_kegiatan}</TableCell>
                        <TableCell align='center'>
                            <IconButton onClick={() => handleOpen(index)} aria-label='view-more' size='small' className='hover:text-primary'>
                                <VisibilityIcon fontSize='small' />
                            </IconButton>
                        </TableCell>
                        <TableCell align='center'>{
                            <Chip label='Pending' size='small' className='bg-primary text-white text-xs' /> 
                        }</TableCell>
                    </TableRow>
                ))}
                {/* {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                    <TableRow hover key={row.judulKegiatan} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                            {row.jenisLayanan}
                        </TableCell>
                        <TableCell>{row.judulKegiatan}</TableCell>
                        <TableCell align='center'>{row.tanggal}</TableCell>
                        <TableCell align='center'>{row.waktu}</TableCell>
                        <TableCell>{row.tempat}</TableCell>
                        <TableCell align='center'>
                            <IconButton onClick={() => handleOpen(index)} aria-label='view-more' size='small' className='hover:text-primary'>
                                <VisibilityIcon fontSize='small' />
                            </IconButton>
                        </TableCell>
                        <TableCell align='center'>{
                            row.status === 'Pending' ? <Chip label={row.status} size='small' className='bg-primary text-white text-xs' /> 
                            : row.status === 'On Progress' ? <Chip label={row.status} size='small' className='bg-pending text-white text-xs' /> 
                            : row.status === 'Completed' ? <Chip label={row.status} size='small' className='bg-complete text-white text-xs' /> : undefined
                        }</TableCell>
                    </TableRow>
                ))} */}
                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <Modal open={open} onClose={handleClose}>
            <Fade in={open}>
                <Box className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white py-4 px-6 rounded-md xs:w-[calc(100%-40px)] md:w-[600px]'>
                    <Stack direction='row' justifyContent='space-between' className='sticky'>
                        <Typography id="transition-modal-title" variant="subtitle1" component="h2" className='font-bold'>
                            Riwayat Layanan
                        </Typography>
                        <IconButton onClick={handleClose} aria-label='close' size='small' className='hover:text-primary'>
                            <CloseIcon fontSize='small' />
                        </IconButton>
                    </Stack>
                    <Box id="transition-modal-description" sx={{ mt: 2 }}>
                        { rows.filter((item, i) => i === currIndex).map(data => {
                            return(
                                <>
                                    <TextfieldBasic label='Jenis Layanan' defaultValue={data.jenisLayanan} disabled />
                                    <TextfieldBasic label='Judul Kegiatan' defaultValue={data.judulKegiatan} InputProps={{ endAdornment: (<InputAdornment position='end'><SearchIcon /></InputAdornment>)}} />
                                    <Stack direction='row' spacing={1} className='mb-6'>
                                        <DatePickerBasic label='Tanggal Kegiatan' defaultValue={dayjs(data.tanggal, 'DD/MM/YYYY')} />
                                        <TimePickerBasic label='Waktu Kegiatan' defaultValue={dayjs(data.tanggal+' '+data.waktu, 'DD/MM/YYYY hh:mm')} />
                                    </Stack>
                                    <TextfieldBasic label='Tempat Kegiatan' defaultValue={data.tempat} />
                                    <Stack direction='row' spacing={1} className='mb-2'>
                                        <Typography variant='subtitle2' className='font-bold'>Status</Typography>
                                        {
                                            data.status === 'Pending' ? <Chip label={data.status} size='small' className='bg-primary text-white text-xs' /> 
                                            : data.status === 'On Progress' ? <Chip label={data.status} size='small' className='bg-pending text-white text-xs' /> 
                                            : data.status === 'Completed' ? <Chip label={data.status} size='small' className='bg-complete text-white text-xs' /> : undefined
                                        }
                                    </Stack>
                                </>
                            )
                        })}
                        <Stack direction='row' justifyContent='flex-end' spacing={1} marginBottom={1}>
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
