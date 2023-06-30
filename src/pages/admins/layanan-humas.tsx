import TitlePage from '@/common/components/atoms/TitlePage';
import DashboardPanel from '@/common/components/organism/DashboardPanel';
import { Box, Paper, Stack } from '@mui/material';
import React from 'react';
import { listMenuAdmin } from '@/pages/admins/dashboard';
import HeaderBreadcrumbs from '@/common/components/molecules/HeaderBreadcrumbs';
import Link from 'next/link';
import TabsContainer from '@/common/components/atoms/TabsContainer';
import TabItem from '@/common/components/atoms/TabItem';
import { TabContext, TabPanel } from '@mui/lab';
import TableManajemenPeliputan from '@/common/components/organism/TableManajemenPeliputan';
import TableManajemenKonPers from '@/common/components/organism/TableManejemenKonPers';
import TableManajemenPembaruanInformasi from '@/common/components/organism/TableManajemenPembaruanInformasi';

export default function LayananHumas() {
    const [value, setValue] = React.useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    // Event Search
    const [search, setSearch] = React.useState<string>('');
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
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
