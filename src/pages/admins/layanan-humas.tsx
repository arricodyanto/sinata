import TabItem from '@/common/components/atoms/TabItem';
import TabsContainer from '@/common/components/atoms/TabsContainer';
import TitlePage from '@/common/components/atoms/TitlePage';
import HeaderBreadcrumbs from '@/common/components/molecules/HeaderBreadcrumbs';
import DashboardPanel from '@/common/components/organism/DashboardPanel';
import TableManajemenPeliputan from '@/common/components/organism/TableManajemenPeliputan';
import TableManajemenPembaruanInformasi from '@/common/components/organism/TableManajemenPembaruanInformasi';
import TableManajemenKonPers from '@/common/components/organism/TableManejemenKonPers';
import { authAdmin } from '@/common/middlewares/auth';
import { listMenuAdmin } from '@/pages/admins/dashboard';
import { TabContext, TabPanel } from '@mui/lab';
import { Box, Paper, Stack } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export default function LayananHumas() {
    const [value, setValue] = React.useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <Box className='bg-grey'>
            <TitlePage title='Manajemen Layanan Hubungan Masyarakat - Sinata' />
            <DashboardPanel listMenu={listMenuAdmin}>
                <HeaderBreadcrumbs pageHeader='Manajemen Layanan Humas' currentPage='Layanan Humas'>
                    <Link href='' className='text-zinc-900 hover:underline hover:decoration-1 hover:underline-offset-2'>
                        Manajemen Layanan
                    </Link>
                </HeaderBreadcrumbs>
                <Paper className='shadow-md xs:p-4 md:p-6'>
                    <TabContext value={value}>
                        <Box className='flex justify-center'>
                            <TabsContainer onChange={handleChange} value={value}>
                                <TabItem label='Layanan Peliputan' value='1' />
                                <TabItem label='Layanan Konferensi Pers' value='2' />
                                <TabItem label='Layanan Pembaruan Informasi Unit di Laman' value='3' />
                            </TabsContainer>
                        </Box>
                        <Stack className='-mx-6'>
                            <TabPanel value='1'>
                                <TableManajemenPeliputan />
                            </TabPanel>
                            <TabPanel value='2'>
                                <TableManajemenKonPers />
                            </TabPanel>
                            <TabPanel value='3'>
                                <TableManajemenPembaruanInformasi />
                            </TabPanel>
                        </Stack>
                    </TabContext>
                </Paper>
            </DashboardPanel>
        </Box>
    );
}

export async function getServerSideProps({ req }: any) {
    const { tkn } = req.cookies;
    return authAdmin(tkn);
}
