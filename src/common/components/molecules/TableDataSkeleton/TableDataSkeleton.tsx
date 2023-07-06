import { TTableDataSkeletonProps } from '@/common/types/table'
import { Paper, Skeleton, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

export default function TableDataSkeleton(props: TTableDataSkeletonProps) {
    const { headers } = props
  return (
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
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    { Array.from({length: headers.length}).map((_, index) => (
                        <TableCell key={index}>
                            <Skeleton className='w-full' />
                        </TableCell>
                    )) }
                </TableRow>
            </TableBody>
        </Table>
        <Stack direction='row-reverse' className='mt-4'>
            <Skeleton variant='text' width={200} />
        </Stack>
    </TableContainer>
  )
}
