import CollapsibleAlert from '@/common/components/atoms/CollapsibleAlert';
import TitlePage from '@/common/components/atoms/TitlePage';
import HeaderBreadcrumbs from '@/common/components/molecules/HeaderBreadcrumbs';
import DashboardPanel from '@/common/components/organism/DashboardPanel';
import TambahKegiatanForm from '@/common/components/organism/FormTambah/TambahKegiatanForm';
import { authUser } from '@/common/middlewares/auth';
import { getPayloadData } from '@/common/utils/decryptToken';
import { formDataFormatter } from '@/common/utils/formDataFormatter';
import { listMenuUser } from '@/pages/users/dashboard';
import { setOneDataKegiatan } from '@/services/data-kegiatan';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function TambahKegiatan() {
    const router = useRouter();
    const [id_account, setId_account] = useState('');

    const payload = getPayloadData();
    useEffect(() => {
        if (payload) {
            setId_account(payload.account.id);
        }
    }, [payload]);

    const emptyForm = [
        { judul_kegiatan: '' },
        { des_kegiatan: '' },
        { tempat_kegiatan: '' },
    ];

    const handleTambah = async (form: any) => {
        const formattedForm = formDataFormatter(form);
        form.set('id_account', id_account);
        const isEmpty = Array.isArray(formattedForm) && formattedForm.length === 0 && JSON.stringify(formattedForm) === JSON.stringify(emptyForm);
        if (isEmpty) {
            toast.error('Tidak ada data yang tambahkan. Mohon masukkan data dengan benar.', {
                theme: 'colored',
            });
        }
        if (!isEmpty) {
            const isRequiredFilled = form.get('judul_kegiatan') && form.get('surat_permohonan') && form.get('sik') && form.get('tgl_kegiatan') && form.get('waktu_kegiatan') ? true : false;
            if (isRequiredFilled) {
                const response = await setOneDataKegiatan(form);
                if (response.status > 300) {
                    toast.error(response.message, {
                        theme: 'colored',
                    });
                }
                if (response.status < 300) {
                    toast.success(response.message, {
                        theme: 'colored'
                    });
                    router.push('/users/riwayat-kegiatan');
                }
            } else {
                toast.error('Harap isi semua data.', {
                    theme: 'colored',
                });
            }
        }
    };
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
                                <TambahKegiatanForm onSave={handleTambah} />
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

export async function getServerSideProps({ req }: any) {
    const { tkn } = req.cookies;
    return authUser(tkn);
}  