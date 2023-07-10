import TitlePage from '@/common/components/atoms/TitlePage';
import HeaderBreadcrumbs from '@/common/components/molecules/HeaderBreadcrumbs';
import DashboardPanel from '@/common/components/organism/DashboardPanel';
import TambahAkunForm from '@/common/components/organism/TambahAkunForm';
import { authAdmin } from '@/common/middlewares/auth';
import { listMenuAdmin } from '@/pages/admins/dashboard';
import { setOneUser } from '@/services/accounts';
import { Box, Grid, Paper } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function TambahDataAkun() {
    const router = useRouter();
    const emptyForm = {
        username: '',
        name: '',
        email: '',
        password: '',
        no_identitas: '',
        unit: '',
        role: 'User',
        kontak: '',
    };

    const [isLoading, setIsLoading] = useState(false);

    const handleTambah = async (form: any) => {
        const isEmpty = JSON.stringify(form) === JSON.stringify(emptyForm);

        if (isEmpty) {
            toast.warning('Tidak ada yang dimasukkan.', {
                theme: 'colored'
            });
        }
        if (!isEmpty) {
            if (form.username === '' || form.email === '' || form.password === '') {
                toast.warning('Harap masukkan username, alamat email, dan kata sandi Anda.', {
                    theme: 'colored'
                });
            } else {
                try {
                    setIsLoading(true);
                    const response = await setOneUser(form);
                    if (response.status > 300) {
                        toast.error(response.message, {
                            theme: 'colored',
                        });
                    }
                    if (response.status < 300) {
                        toast.success(response.message, {
                            theme: 'colored'
                        });
                    }
                } finally {
                    setIsLoading(false);
                    router.push('/admins/manajemen-akun');
                }
            }
        }
    };
    return (
        <Box className='bg-grey'>
            <TitlePage title='Tambah Data Akun - Sinata - Sinata' />
            <DashboardPanel listMenu={listMenuAdmin}>
                <HeaderBreadcrumbs pageHeader='Tambahkan Data Akun' currentPage='Tambah Data'>
                    <Link href='/admins/manajemen-akun' className='text-zinc-900 hover:underline hover:decoration-1 hover:underline-offset-2'>
                        Daftar Akun
                    </Link>
                </HeaderBreadcrumbs>
                <Grid container spacing={2}>
                    <Grid item spacing={1} xs={12} md={8}>
                        <Paper className='shadow-md xs:p-4 md:p-6'>
                            <TambahAkunForm onSave={handleTambah} isLoading={isLoading} />
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
    return authAdmin(tkn);
}
