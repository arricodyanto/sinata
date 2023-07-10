import TitlePage from '@/common/components/atoms/TitlePage';
import HeaderBreadcrumbs from '@/common/components/molecules/HeaderBreadcrumbs';
import TableKegiatan from '@/common/components/molecules/TableKegiatan';
import DashboardPanel from '@/common/components/organism/DashboardPanel';
import { authAdmin } from '@/common/middlewares/auth';
import { listMenuAdmin } from '@/pages/admins/dashboard';
import { Box, Paper } from '@mui/material';
import Link from 'next/link';

export default function DaftarKegiatan() {
    return (
        <Box className='bg-grey'>
            <TitlePage title='Daftar Kegiatan - Sinata' />
            <DashboardPanel listMenu={listMenuAdmin}>
                <HeaderBreadcrumbs pageHeader='Daftar Kegiatan' currentPage='Daftar Kegiatan'>
                    <Link href='' className='text-zinc-900 hover:underline hover:decoration-1 hover:underline-offset-2'>
                        Manajemen Data Kegiatan
                    </Link>
                </HeaderBreadcrumbs>
                <Paper className='shadow-md px-6 py-4'>
                    <TableKegiatan admin />
                </Paper>
            </DashboardPanel>
        </Box>
    );
}

export async function getServerSideProps({ req }: any) {
    const { tkn } = req.cookies;
    return authAdmin(tkn);
}
