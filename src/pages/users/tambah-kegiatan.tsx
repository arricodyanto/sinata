import { Box, Grid, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CollapsibleAlert from '../../common/components/atoms/CollapsibleAlert';
import TitlePage from '../../common/components/atoms/TitlePage';
import HeaderBreadcrumbs from '../../common/components/molecules/HeaderBreadcrumbs';
import TambahKegiatanForm from '../../common/components/organism/FormTambah/TambahKegiatanForm';
import DashboardPanel from '@/common/components/organism/DashboardPanel';
import { listMenuUser } from './dashboard';

export default function TambahKegiatan() {
    return (
        <>
            <Box className='bg-grey'>
                <TitlePage title='Tambah Kegiatan - Sinata' />
                <DashboardPanel listMenu={listMenuUser}>
                    <HeaderBreadcrumbs pageHeader='Tambah Kegiatan' currentPage='Tambah Kegiatan'>
                        <Link href='/users/tambah-kegiatan' className='text-zinc-900 hover:underline hover:decoration-1 hover:underline-offset-2'>
                            Riwayat
                        </Link>
                    </HeaderBreadcrumbs>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8}>
                            <Paper className='shadow-md px-6 py-4'>
                                <CollapsibleAlert type='info' className='-mx-2 mb-2'>
                                    <Typography variant='body2' className='text-dark'>
                                        Sebelum mengajukan layanan, harap pastikan judul dan detail acara Anda sudah terdaftar pada sistem !
                                    </Typography>
                                </CollapsibleAlert>
                                <Box>
                                    <TambahKegiatanForm onSave={() => { }} />
                                </Box>
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
