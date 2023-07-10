import TitlePage from '@/common/components/atoms/TitlePage';
import HeaderBreadcrumbs from '@/common/components/molecules/HeaderBreadcrumbs';
import AccountProfile from '@/common/components/organism/AccountProfile';
import DashboardPanel from '@/common/components/organism/DashboardPanel';
import { authAdmin } from '@/common/middlewares/auth';
import { listMenuAdmin } from '@/pages/admins/dashboard';
import { Box, Paper, Stack } from '@mui/material';

export default function Profile(props: any) {
    const { user } = props;
    return (
        <Box className='bg-grey'>
            <TitlePage title='Profil Akun - Sinata' />
            <DashboardPanel listMenu={listMenuAdmin}>
                <HeaderBreadcrumbs pageHeader='Profil Akun Admin' currentPage='Profil Akun' />
                <Stack direction={{ xs: 'column', md: 'row' }} className='grid place-items-center' spacing={2}>
                    <Paper className='shadow-md px-2 py-4 md:max-w-[600px] lg:max-w-[800px] h-fit'>
                        <AccountProfile payload={user} />
                    </Paper>
                </Stack>
            </DashboardPanel>
        </Box>
    );
}

export async function getServerSideProps({ req }: any) {
    const { tkn } = req.cookies;
    return authAdmin(tkn);
}
