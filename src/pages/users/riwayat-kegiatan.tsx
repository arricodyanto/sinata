import { Box, Paper } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import TitlePage from '@/common/components/atoms/TitlePage';
import HeaderBreadcrumbs from '@/common/components/molecules/HeaderBreadcrumbs';
import TableKegiatan from '@/common/components/molecules/TableKegiatan';
import rows from '@/json/riwayatKegiatan.json';
import DashboardPanel from '@/common/components/organism/DashboardPanel';
import { listMenuUser } from './dashboard';
import { authUser } from '@/common/middlewares/auth';

export default function RiwayatKegiatan() {
    return (
        <>
            <Box className='bg-grey'>
                <TitlePage title='Riwayat Kegiatan - Sinata' />
                <DashboardPanel listMenu={listMenuUser}>
                    <HeaderBreadcrumbs pageHeader='Riwayat Kegiatan' currentPage='Riwayat Kegiatan'>
                        <Link href='/users/riwayat-kegiatan' className='text-zinc-900 hover:underline hover:decoration-1 hover:underline-offset-2'>
                            Riwayat
                        </Link>
                    </HeaderBreadcrumbs>
                    <Paper className='shadow-md px-6 py-4'>
                        <TableKegiatan rows={rows} />
                    </Paper>
                </DashboardPanel>
            </Box>
        </>
    );
}

export async function getServerSideProps({ req }: any) {
    const { tkn } = req.cookies;
    return authUser(tkn);
}  
