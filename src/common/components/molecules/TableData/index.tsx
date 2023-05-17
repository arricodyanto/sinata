import { Chip, IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material'
import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { TTableDataProps } from '@/common/types/table';
import TextfieldTableSearch from '@/common/components/atoms/TextfieldTableSearch';

export default function TableData(props: TTableDataProps) {
    const {
        headers,
        columns,
        rows,
        status,
        addButton,
        addPublikasiStatus,
        actionOnClick
    } = props

    const statusPublikasi = addPublikasiStatus || false

    // Passing index to other components
    const handleClick = (index:number) => {
        actionOnClick(index)
    }

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

    // Get value from textfield table search
    const [search, setSearch] = React.useState<string>('')
    const handleSearch = (value: string) => {
        setSearch(value)
        setPage(0)
    }
  return (
    <>
        <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={1} marginTop={1} marginBottom={2}>
            <TextfieldTableSearch placeholder='Search...' getValue={handleSearch} />
            {addButton}
        </Stack>
        <TableContainer component={Paper} className='shadow-none'>
            <Table sx={{ minWidth: 650 }} aria-label='Data Table'>
                <TableHead>
                    <TableRow>
                        { headers.map((header, index) => {
                            return (
                                <TableCell key={index} align='center'>{header}</TableCell>
                                )
                            })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.filter((item) => {
                        let match = false;
                        for (const key in item) {
                            if (item[key].toString().toLowerCase().includes(search.toLowerCase())) {
                                match = true;
                                break
                            }
                        }
                        return match
                    })
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                        return (
                            <TableRow hover key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                { columns.map(column => {
                                    return (
                                        <TableCell key={column.id}>
                                            <Typography variant='body2' className='xs:line-clamp-4 md:line-clamp-3'>
                                                {/* {row[column.label]} */}
                                                {/* {column.source ? row[column.source][column.label] : row[column.label]} */}
                                                {column.source ? row[column.source][0][column.label] : row[column.label]}
                                            </Typography>
                                        </TableCell>
                                    )
                                })}
                                <TableCell align='center'>
                                    <IconButton onClick={() => handleClick(row.id)}>
                                        <VisibilityIcon fontSize='small' />
                                    </IconButton>
                                </TableCell>
                                { status === false ? null : (
                                    <>
                                        <TableCell align='center'>{
                                            row.status === 'approved & on progress' ? <Chip label={row.status} size='small' sx={{
                                                height: 'auto',
                                                '& .MuiChip-label': {
                                                  display: 'block',
                                                  whiteSpace: 'normal',
                                                },
                                              }} className='bg-primary w-[100px] text-white text-xs capitalize px-1 py-1' /> 
                                            : row.status === 'complete' ? <Chip label={row.status} size='small' className='bg-complete text-white text-xs capitalize' />
                                            : row.status === 'rejected' ? <Chip label={row.status} size='small' className='bg-error text-white text-xs capitalize' /> : <Chip label='Pending' size='small' className='bg-pending text-white text-xs capitalize' /> 
                                        }</TableCell>
                                    </>
                                )}
                                { statusPublikasi === false ? null : (
                                    <TableCell align='center'>{
                                        row.arsip[0].status_publikasi === 'selesai' ? <Chip label={row.arsip[0].status_publikasi} size='small' className='bg-complete text-white text-xs capitalize' />
                                        : row.arsip[0].status_publikasi === 'ID' ? <Chip label={row.arsip[0].status_publikasi} size='small' className='bg-primary text-white text-xs capitalize' />
                                        : row.arsip[0].status_publikasi === 'EN' ? <Chip label={row.arsip[0].status_publikasi} size='small' className='bg-violet-400 text-white text-xs capitalize' /> : <Chip label='Pending' size='small' className='bg-pending text-white text-xs capitalize' /> 
                                    }</TableCell>
                                    
                                )}
                            </TableRow> 
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[5, 10, 50]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            className='xs:-mx-6 md:-mx-0'
        />
    </>
  )
}
