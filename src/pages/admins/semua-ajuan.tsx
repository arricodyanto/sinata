import TitlePage from '@/common/components/atoms/TitlePage';
import HeaderBreadcrumbs from '@/common/components/molecules/HeaderBreadcrumbs';
import TableRiwayat from '@/common/components/molecules/TableRiwayat';
import DashboardPanel from '@/common/components/organism/DashboardPanel';
import { authAdmin } from '@/common/middlewares/auth';
import { Box, Paper } from '@mui/material';
import Link from 'next/link';
import { listMenuAdmin } from './dashboard';

export default function SemuaAjuan() {
    return (
        <Box className='bg-grey'>
            <TitlePage title='Semua Ajuan Layanan - Sinata' />
            <DashboardPanel listMenu={listMenuAdmin}>
                <HeaderBreadcrumbs pageHeader='Semua Ajuan Layanan' currentPage='Semua Ajuan'>
                    <Link href='' className='text-zinc-900 hover:underline hover:decoration-1 hover:underline-offset-2'>
                        Manajemen Layanan
                    </Link>
                </HeaderBreadcrumbs>
                <Paper className='shadow-md xs:p-4 md:p-6'>
                    <TableRiwayat />
                </Paper>
            </DashboardPanel>
        </Box>
    );
}

export async function getServerSideProps({ req }: any) {
    const { tkn } = req.cookies;
    return authAdmin(tkn);
}