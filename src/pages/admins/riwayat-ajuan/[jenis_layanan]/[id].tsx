import TitlePage from '@/common/components/atoms/TitlePage';
import HeaderBreadcrumbs from '@/common/components/molecules/HeaderBreadcrumbs';
import DashboardPanel from '@/common/components/organism/DashboardPanel';
import LayananPeliputan from '@/common/components/organism/FormEditLayanan/LayananPeliputan';
import { getOneLayananPeliputan } from '@/services/layanan-peliputan';
import { Box, Grid, Paper } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { listMenuAdmin } from '../../dashboard';
import Image from 'next/image';
import { getOneKonpers } from '@/services/layanan-konpers';
import LayananKonpers from '@/common/components/organism/FormEditLayanan/LayananKonpers';
import { getOneLayananPeminformasi } from '@/services/layanan-peminformasi';
import LayananPeminformasi from '@/common/components/organism/FormEditLayanan/LayananPeminformasi';
import { getOneLayananLiveStreaming } from '@/services/layanan-livestreaming';
import LayananLiveStreaming from '@/common/components/organism/FormEditLayanan/LayananLiveStreaming';
import { getOneLayananPublikasiAgenda } from '@/services/layanan-pubagenda';
import LayananPublikasiAgenda from '@/common/components/organism/FormEditLayanan/LayananPublikasiAgenda';
import { getOneLayananMajalah } from '@/services/layanan-majalah';
import LayananPublikasiMajalah from '@/common/components/organism/FormEditLayanan/LayananPublikasiMajalah';
import { getOneLayananOpini } from '@/services/layanan-opini';
import LayananOpini from '@/common/components/organism/FormEditLayanan/LayananOpini';

export default function RiwayatAjuanPage() {
    const { query, isReady } = useRouter();
    const { jenis_layanan, id } = query;

    const [data, setData] = useState<Array<any>>([]);
    const getData = useCallback(async (id: any) => {
        if (jenis_layanan === 'Layanan Peliputan') {
            const response = await getOneLayananPeliputan(id);
            setData(response.data);
        }
        if (jenis_layanan === 'Layanan Konferensi Pers') {
            const response = await getOneKonpers(id);
            setData(response.data);
        }
        if (jenis_layanan === 'Layanan Pembaruan Informasi') {
            const response = await getOneLayananPeminformasi(id);
            setData(response.data);
        }
        if (jenis_layanan === 'Layanan Live Streaming') {
            const response = await getOneLayananLiveStreaming(id);
            setData(response.data);
        }
        if (jenis_layanan === 'Layanan Publikasi Agenda') {
            const response = await getOneLayananPublikasiAgenda(id);
            setData(response.data);
        }
        if (jenis_layanan === 'Layanan Publikasi di Majalah') {
            const response = await getOneLayananMajalah(id);
            setData(response.data);
        }
        if (jenis_layanan === 'Layanan Opini di Media') {
            const response = await getOneLayananOpini(id);
            setData(response.data);
        }
    }, [jenis_layanan, id]);

    useEffect(() => {
        if (isReady) {
            getData(id);
        }
    }, [isReady, getData]);
    return (
        <>
            <Box className='bg-grey'>
                <TitlePage title={isReady ? `Ajuan ${jenis_layanan} - Sinata` : 'Sinata Loading...'} />
                <DashboardPanel listMenu={listMenuAdmin}>
                    <HeaderBreadcrumbs pageHeader='Riwayat Ajuan Layanan' currentPage='Riwayat Ajuan'>
                        <Link href='/admins/semua-ajuan' className='text-zinc-900 hover:underline hover:decoration-1 hover:underline-offset-2'>
                            Semua Ajuan
                        </Link>
                    </HeaderBreadcrumbs>
                    <Grid container spacing={2}>
                        <Grid item spacing={1} xs={12} md={8}>
                            <Paper className='shadow-md xs:p-4 md:p-6'>
                                {jenis_layanan === 'Layanan Peliputan' ? (
                                    <LayananPeliputan data={data} id={id} />
                                ) : jenis_layanan === 'Layanan Konferensi Pers' ? (
                                    <LayananKonpers data={data} id={id} />
                                ) : jenis_layanan === 'Layanan Pembaruan Informasi' ? (
                                    <LayananPeminformasi data={data} id={id} />
                                ) : jenis_layanan === 'Layanan Live Streaming' ? (
                                    <LayananLiveStreaming data={data} id={id} />
                                ) : jenis_layanan === 'Layanan Publikasi Agenda' ? (
                                    <LayananPublikasiAgenda data={data} id={id} />
                                ) : jenis_layanan === 'Layanan Publikasi di Majalah' ? (
                                    <LayananPublikasiMajalah data={data} id={id} />
                                ) : jenis_layanan === 'Layanan Opini di Media' ? (
                                    <LayananOpini data={data} id={id} />
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
        </>
    );
}
