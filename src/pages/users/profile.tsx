import TitlePage from '@/common/components/atoms/TitlePage';
import HeaderBreadcrumbs from '@/common/components/molecules/HeaderBreadcrumbs';
import AccountProfile from '@/common/components/organism/AccountProfile';
import DashboardPanel from '@/common/components/organism/DashboardPanel';
import UsersTab from '@/common/components/organism/UsersTabs';
import { authUser } from '@/common/middlewares/auth';
import { Box, Paper, Stack } from '@mui/material';
import { listMenuUser } from './dashboard';

export default function Profile(props: any) {
    const { user } = props;
    return (
        <Box className='bg-grey'>
            <TitlePage title='Profil Akun - Sinata' />
            <DashboardPanel listMenu={listMenuUser}>
                <HeaderBreadcrumbs pageHeader='Profil Akun' currentPage='Profil Akun' />
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                    <Paper className='shadow-md px-6 py-4 max-w-[450px] h-fit'>
                        <AccountProfile payload={user} />
                    </Paper>
                    <Paper className='shadow-md px-6 py-4 w-full'>
                        <UsersTab />
                    </Paper>
                </Stack>
            </DashboardPanel>
        </Box>
    );
}

export async function getServerSideProps({ req }: any) {
    const { tkn } = req.cookies;
    return authUser(tkn);
}