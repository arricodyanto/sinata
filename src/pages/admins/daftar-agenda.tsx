import ButtonBasic from '@/common/components/atoms/ButtonBasic';
import TitlePage from '@/common/components/atoms/TitlePage';
import EventCardV2 from '@/common/components/molecules/EventCardV2';
import HeaderBreadcrumbs from '@/common/components/molecules/HeaderBreadcrumbs';
import DashboardPanel from '@/common/components/organism/DashboardPanel';
import { authAdmin } from '@/common/middlewares/auth';
import { listMenuAdmin } from '@/pages/admins/dashboard';
import { getKalenderEvents } from '@/services/layanan-pubagenda';
import { Box, Grid, Pagination, Paper, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

export default function DaftarAgenda() {
    const { isReady } = useRouter();
    const [data, setData] = useState<Array<any>>([]);
    const [page, setPage] = useState<number>(1);
    const [totalRow, setTotalRow] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(12);

    const handleChangePage = (event: any, newPage: number) => {
        setPage(newPage);
    };

    const getAllPublishedAgenda = useCallback(async () => {
        const URLparams = `limit=${rowsPerPage}&page=${page}`;
        const response = await getKalenderEvents(URLparams);
        setData(response.data);
        setTotalRow(response.totalRow);
        setRowsPerPage(response.rowsPerPage);
    }, [getKalenderEvents, page, rowsPerPage]);

    useEffect(() => {
        if (isReady) {
            getAllPublishedAgenda();
        }
    }, [isReady, page, rowsPerPage]);

    const api_image = process.env.NEXT_PUBLIC_API_IMG;
    return (
        <Box className='bg-grey'>
            <TitlePage title='Daftar Agenda Terpublikasi - Sinata' />
            <DashboardPanel listMenu={listMenuAdmin}>
                <HeaderBreadcrumbs pageHeader='Daftar Agenda Terpublikasi' currentPage='Daftar Agenda'>
                    <Link href='' className='text-zinc-900 hover:underline hover:decoration-1 hover:underline-offset-2'>
                        Manajemen Kegiatan
                    </Link>
                </HeaderBreadcrumbs>
                <Paper className='shadow-md px-6 py-4'>
                    <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={1} marginTop={1} marginBottom={2}>
                        <Typography variant='h5'>Agenda Terpublikasi</Typography>
                        <Stack direction={'row'} spacing={1}>
                            <Link href={'/admins/riwayat-ajuan/Layanan Publikasi Agenda/tambah'}>
                                <ButtonBasic variant='contained'>Tambah Data</ButtonBasic>
                            </Link>
                            <ButtonBasic variant='outlined'>Export</ButtonBasic>
                        </Stack>
                    </Stack>
                    <Grid container spacing={2}>
                        {data.map(item => {
                            return (
                                <>
                                    <Grid item key={item.id} xs={12} md={6} lg={3}>
                                        <EventCardV2 id={item.id} image={`${api_image}/${item.leaflet_kegiatan}`} visibility={item.sifat_kegiatan} publisher={item.name} avatar={item.img_profil}
                                            title={item.title} description={item.description} date={item.date} time={item.time} location={item.tempat} />
                                    </Grid>
                                </>
                            );
                        })}
                    </Grid>
                    <Stack className='mt-6 mb-4 grid justify-center'>
                        <Pagination count={totalRow} color='primary' size='small' onChange={handleChangePage} showFirstButton showLastButton />
                    </Stack>
                </Paper>
            </DashboardPanel>
        </Box>
    );
}

export async function getServerSideProps({ req }: any) {
    const { tkn } = req.cookies;
    return authAdmin(tkn);
}
