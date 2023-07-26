import TitlePage from '@/common/components/atoms/TitlePage';
import HeaderBreadcrumbs from '@/common/components/molecules/HeaderBreadcrumbs';
import BalihoForm from '@/common/components/organism/BalihoForm';
import DashboardPanel from '@/common/components/organism/DashboardPanel';
import KonpersForm from '@/common/components/organism/KonpersForm';
import LiveStreamingForm from '@/common/components/organism/LiveStrForm';
import MajalahForm from '@/common/components/organism/MajalahForm';
import OpiniForm from '@/common/components/organism/OpiniForm';
import PeliputanForm from '@/common/components/organism/PeliputanForm';
import PembaruanInfoForm from '@/common/components/organism/PembaruanInfoForm';
import PublikasiAgendaForm from '@/common/components/organism/PublikasiAgendaForm';
import VideotronForm from '@/common/components/organism/VideotronForm';
import { authAddData } from '@/common/middlewares/auth';
import { listMenuAdmin } from '@/pages/admins/dashboard';
import { setOneLayananBaliho } from '@/services/layanan-baliho';
import { setOneLayananKonpers } from '@/services/layanan-konpers';
import { setOneLayananLiveStreaming } from '@/services/layanan-livestreaming';
import { setOneLayananMajalah } from '@/services/layanan-majalah';
import { setOneLayananOpini } from '@/services/layanan-opini';
import { setOneLayananPeliputan } from '@/services/layanan-peliputan';
import { setOneLayananPeminformasi } from '@/services/layanan-peminformasi';
import { setOneLayananPublikasiAgenda } from '@/services/layanan-pubagenda';
import { setOneLayananVideotron } from '@/services/layanan-videotron';
import { Box, Grid, Paper } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export default function TambahAjuanLayanan({ error }: any) {
    const { query, isReady, push, back } = useRouter();
    const { jenis_layanan } = query;
    const onSavePeliputan = async (form: any) => {
        const response = await setOneLayananPeliputan(form);
        if (response.status > 300) {
            toast.error(response.message, {
                theme: 'colored',
            });
        }
        if (response.status < 300) {
            toast.success(response.message, {
                theme: 'colored'
            });
            push('/admins/layanan-humas');
        };
    };

    const onSaveKonpers = async (form: any) => {
        const response = await setOneLayananKonpers(form);
        if (response.status > 300) {
            toast.error(response.message, {
                theme: 'colored',
            });
        }
        if (response.status < 300) {
            toast.success(response.message, {
                theme: 'colored'
            });
            push('/admins/layanan-humas');
        };
    };

    const onSavePeminformasi = async (form: any) => {
        const response = await setOneLayananPeminformasi(form);
        if (response.status > 300) {
            toast.error(response.message, {
                theme: 'colored',
            });
        }
        if (response.status < 300) {
            toast.success(response.message, {
                theme: 'colored'
            });
            push('/admins/layanan-humas');
        };
    };

    const onSaveLiveStreaming = async (form: any) => {
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
            push('/admins/layanan-publikasi');
        };
    };

    const onSavePublikasiAgenda = async (form: any) => {
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
            push('/admins/layanan-publikasi');
        };
    };

    const onSavePublikasiMajalah = async (form: any) => {
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
            push('/admins/layanan-publikasi');
        };
    };

    const onSaveOpini = async (form: any) => {
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
            push('/admins/layanan-publikasi');
        };
    };

    const onSaveVideotron = async (form: any) => {
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
            push('/admins/layanan-media');
        };
    };

    const onSaveBaliho = async (form: any) => {
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
            push('/admins/layanan-media');
        };
    };

    useEffect(() => {
        if (error) {
            const toastId = toast.isActive('errorToast');
            if (!toastId) {
                toast.error(
                    'Maaf Anda tidak diijinkan untuk melihat halaman ini. Hubungi Front Office atau Super Admin untuk meminta bantuan',
                    {
                        theme: 'colored',
                        toastId: 'errorToast', // Set a custom toastId to identify this toast
                    }
                );
            }
            back();
        }
    }, [error]);
    return (
        <Box className='bg-grey'>
            <TitlePage title={isReady ? `Tambah Ajuan ${jenis_layanan} - Sinata` : 'Sinata Loading...'} />
            <DashboardPanel listMenu={listMenuAdmin}>
                <HeaderBreadcrumbs pageHeader={isReady ? `Tambah Ajuan ${jenis_layanan}` : ''} currentPage='Tambah Ajuan'>
                    <Link href='/admins/semua-ajuan' className='text-zinc-900 hover:underline hover:decoration-1 hover:underline-offset-2'>
                        Semua Ajuan
                    </Link>
                </HeaderBreadcrumbs>
                <Grid container spacing={2}>
                    <Grid item spacing={1} xs={12} md={8}>
                        <Paper className='shadow-md xs:p-4 md:p-6'>
                            {jenis_layanan === 'Layanan Peliputan' ? (
                                <PeliputanForm onSave={onSavePeliputan} admin />
                            ) : jenis_layanan === 'Layanan Konferensi Pers' ? (
                                <KonpersForm onSave={onSaveKonpers} admin />
                            ) : jenis_layanan === 'Layanan Pembaruan Informasi' ? (
                                <PembaruanInfoForm onSave={onSavePeminformasi} admin />
                            ) : jenis_layanan === 'Layanan Live Streaming' ? (
                                <LiveStreamingForm onSave={onSaveLiveStreaming} admin />
                            ) : jenis_layanan === 'Layanan Publikasi Agenda' ? (
                                <PublikasiAgendaForm onSave={onSavePublikasiAgenda} admin />
                            ) : jenis_layanan === 'Layanan Publikasi di Majalah' ? (
                                <MajalahForm onSave={onSavePublikasiMajalah} admin />
                            ) : jenis_layanan === 'Layanan Opini di Media' ? (
                                <OpiniForm onSave={onSaveOpini} admin />
                            ) : jenis_layanan === 'Layanan Penayangan Konten di Videotron' ? (
                                <VideotronForm onSave={onSaveVideotron} admin />
                            ) : jenis_layanan === 'Layanan Pemasangan Baliho' ? (
                                <BalihoForm onSave={onSaveBaliho} admin />
                            ) : null}
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
};

export async function getServerSideProps({ req }: any) {
    const { tkn } = req.cookies;
    return authAddData(tkn);
}
