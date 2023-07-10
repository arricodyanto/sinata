import TabItem from '@/common/components/atoms/TabItem';
import TabsContainer from '@/common/components/atoms/TabsContainer';
import TitlePage from '@/common/components/atoms/TitlePage';
import HeaderBreadcrumbs from '@/common/components/molecules/HeaderBreadcrumbs';
import BalihoForm from '@/common/components/organism/BalihoForm';
import DashboardPanel from '@/common/components/organism/DashboardPanel';
import VideotronForm from '@/common/components/organism/VideotronForm';
import { authUser } from '@/common/middlewares/auth';
import { getAccountID } from '@/common/utils/decryptToken';
import { listMenuUser } from '@/pages/users/dashboard';
import { setOneLayananBaliho } from '@/services/layanan-baliho';
import { setOneLayananVideotron } from '@/services/layanan-videotron';
import { TabContext, TabPanel } from '@mui/lab';
import { Box, Grid, Paper, Stack } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';

export default function LayananMedia() {
    const { push } = useRouter();
    const [value, setValue] = React.useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const onSaveVideotron = async (form: any) => {
        const id_account = getAccountID();
        form.set('id_account', id_account);
        const isRequireFilled = form.get('id_kegiatan') && form.get('tgl_awal') && form.get('tgl_akhir') && form.get('bahan_publikasi') ? true : false;
        if (isRequireFilled) {
            const response = await setOneLayananVideotron(form);
            if (response.status > 300) {
                toast.error(response.message, {
                    theme: 'colored',
                });
            }
            if (response.status < 300) {
                toast.success(response.message, {
                    theme: 'colored'
                });
                push('/users/dashboard');
            };
        } else {
            toast.warning('Mohon lengkapi semua data Anda.', {
                theme: 'colored',
            });
        }
    };

    const onSaveBaliho = async (form: any) => {
        const id_account = getAccountID();
        form.set('id_account', id_account);
        const isRequireFilled = form.get('id_kegiatan') && form.get('tgl_awal') && form.get('tgl_akhir') && form.get('bahan_publikasi') && form.get('bukti_pembayaran') ? true : false;
        if (isRequireFilled) {
            const response = await setOneLayananBaliho(form);
            if (response.status > 300) {
                toast.error(response.message, {
                    theme: 'colored',
                });
            }
            if (response.status < 300) {
                toast.success(response.message, {
                    theme: 'colored'
                });
                push('/users/dashboard');
            };
        } else {
            toast.warning('Mohon lengkapi semua data Anda.', {
                theme: 'colored',
            });
        }
    };
    return (
        <Box className='bg-grey'>
            <TitlePage title='Layanan Media - Sinata' />
            <DashboardPanel listMenu={listMenuUser}>
                <HeaderBreadcrumbs pageHeader='Ajukan Layanan Media' currentPage='Layanan Media'>
                    <Link href='#' className='text-zinc-900 hover:underline hover:decoration-1 hover:underline-offset-2'>
                        Ajukan Layanan
                    </Link>
                </HeaderBreadcrumbs>
                <Grid container spacing={2}>
                    <Grid item spacing={1} xs={12} md={8}>
                        <Paper className='shadow-md px-6 py-4'>
                            <TabContext value={value}>
                                <Box className='flex justify-center'>
                                    <TabsContainer onChange={handleChange} value={value}>
                                        <TabItem label='Layanan Penayangan Konten di Videotron' value='1' />
                                        <TabItem label='Layanan Pemasangan Baliho' value='2' />
                                    </TabsContainer>
                                </Box>
                                <Stack className='-mx-6'>
                                    <TabPanel value='1'>
                                        <VideotronForm onSave={onSaveVideotron} />
                                    </TabPanel>
                                    <TabPanel value='2'>
                                        <BalihoForm onSave={onSaveBaliho} />
                                    </TabPanel>
                                </Stack>
                            </TabContext>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper className='shadow-md p-4'>
                            <Image src='https://dummyimage.com/560x1000/e0e0e0/ffffff.jpg&text=Infografis+guideline+(560x1000)' alt='Infografis Panduan' layout='responsive' width={100} height={200} className='rounded-md' />
                        </Paper>
                    </Grid>
                </Grid>
            </DashboardPanel>
        </Box>
    );
}

export async function getServerSideProps({ req }: any) {
    const { tkn } = req.cookies;
    return authUser(tkn);
}
