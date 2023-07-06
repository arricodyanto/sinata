import { Chip, IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { TTableDataSkeletonProps } from '@/common/types/table';
import TextfieldTableSearch from '@/common/components/atoms/TextfieldTableSearch';
import { dateFormatter, timeStrictFormatter } from '@/common/utils/dateFormatter.util';

export default function TableDataEmpty(props: TTableDataSkeletonProps) {
    const {
        headers,
        addButton
    } = props;

    // Get value from textfield table search
    const [search, setSearch] = React.useState<string>('');
    const handleSearch = (value: string) => {
        setSearch(value);
    };

    return (
        <>
            <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={1} marginTop={1} marginBottom={2}>
                <TextfieldTableSearch placeholder='Search...' getValue={handleSearch} />
                {addButton}
            </Stack>
            <TableContainer component={Paper} className='shadow-none mb-6'>
                <Table sx={{ minWidth: 650 }} aria-label='Data Table'>
                    <TableHead>
                        <TableRow>
                            {headers.map((header, index) => {
                                return (
                                    <TableCell key={index} align='center'>{header}</TableCell>
                                );
                            })}
                        </TableRow>
                    </TableHead>
                </Table>
                <Typography variant='body2' className='italic text-center'>Tidak ada data</Typography>
            </TableContainer>
        </>
    );
}
