import TabItem from '@/common/components/atoms/TabItem';
import TabsContainer from '@/common/components/atoms/TabsContainer';
import TitlePage from '@/common/components/atoms/TitlePage';
import HeaderBreadcrumbs from '@/common/components/molecules/HeaderBreadcrumbs';
import DashboardPanel from '@/common/components/organism/DashboardPanel';
import LiveStreamingForm from '@/common/components/organism/LiveStrForm';
import MajalahForm from '@/common/components/organism/MajalahForm';
import OpiniForm from '@/common/components/organism/OpiniForm';
import PublikasiAgendaForm from '@/common/components/organism/PublikasiAgendaForm';
import { getAccountID } from '@/common/utils/decryptToken';
import { listMenuUser } from '@/pages/users/dashboard';
import { setOneLayananLiveStreaming } from '@/services/layanan-livestreaming';
import { setOneLayananMajalah } from '@/services/layanan-majalah';
import { setOneLayananOpini } from '@/services/layanan-opini';
import { setOneLayananPublikasiAgenda } from '@/services/layanan-pubagenda';
import { TabContext, TabPanel } from '@mui/lab';
import { Box, Grid, Paper, Stack } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';

export default function LayananPublikasi() {
    const { push } = useRouter();
    const [value, setValue] = React.useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const onSaveLiveStreaming = async (form: any) => {
        const id_account = getAccountID();
        form.set('id_account', id_account);
        const isJudul = form.get('id_kegiatan') ? true : false;
        if (isJudul) {
            const response = await setOneLayananLiveStreaming(form);
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
            toast.warning('Mohon masukkan Judul Kegiatan Anda.', {
                theme: 'colored',
            });
        }
    };

    const onSavePublikasiAgenda = async (form: any) => {
        const id_account = getAccountID();
        form.set('id_account', id_account);
        const isRequireFilled = form.get('id_kegiatan') && form.get('leaflet_kegiatan') ? true : false;
        if (isRequireFilled) {
            const response = await setOneLayananPublikasiAgenda(form);
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
            toast.warning('Mohon masukkan Judul dan Leaflet Kegiatan Anda.', {
                theme: 'colored',
            });
        }
    };

    const onSavePublikasiMajalah = async (form: any) => {
        const id_account = getAccountID();
        form.set('id_account', id_account);
        const isRequireFilled = form.get('id_kegiatan') && form.get('bahan_publikasi') ? true : false;
        if (isRequireFilled) {
            const response = await setOneLayananMajalah(form);
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
            toast.warning('Mohon masukkan Judul dan Naskah Bahan Publikasi Anda.', {
                theme: 'colored',
            });
        }
    };

    const onSaveOpini = async (form: any) => {
        const id_account = getAccountID();
        form.set('id_account', id_account);
        const isRequireFilled = form.get('judul_pembahasan') && form.get('surat_permohonan') && form.get('foto_penulis') && form.get('bahan_publikasi') ? true : false;
        if (isRequireFilled) {
            const response = await setOneLayananOpini(form);
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
            toast.warning('Mohon masukkan Judul, Surat Permohonan, Foto, dan Naskah Bahan Publikasi Anda.', {
                theme: 'colored',
            });
        }
    };
    return (
        <Box className='bg-grey'>
            <TitlePage title='Layanan Publikasi - Sinata' />
            <DashboardPanel listMenu={listMenuUser}>
                <HeaderBreadcrumbs pageHeader='Ajukan Layanan Publikasi' currentPage='Layanan Publikasi'>
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
                                        <TabItem label='Layanan Live Streaming' value='1' />
                                        <TabItem label='Layanan Publikasi Agenda UNS' value='2' />
                                        <TabItem label='Layanan Publikasi di Majalah UNS' value='3' />
                                        <TabItem label='Layanan Opini di Media' value='4' />
                                    </TabsContainer>
                                </Box>
                                <Stack className='-mx-6'>
                                    <TabPanel value='1'>
                                        <LiveStreamingForm onSave={onSaveLiveStreaming} />
                                    </TabPanel>
                                    <TabPanel value='2'>
                                        <PublikasiAgendaForm onSave={onSavePublikasiAgenda} />
                                    </TabPanel>
                                    <TabPanel value='3'>
                                        <MajalahForm onSave={onSavePublikasiMajalah} />
                                    </TabPanel>
                                    <TabPanel value='4'>
                                        <OpiniForm onSave={onSaveOpini} />
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
