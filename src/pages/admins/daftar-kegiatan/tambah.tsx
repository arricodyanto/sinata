import TitlePage from '@/common/components/atoms/TitlePage';
import HeaderBreadcrumbs from '@/common/components/molecules/HeaderBreadcrumbs';
import DashboardPanel from '@/common/components/organism/DashboardPanel';
import TambahKegiatanForm from '@/common/components/organism/FormTambah/TambahKegiatanForm';
import { formDataFormatter } from '@/common/utils/formDataFormatter';
import { listMenuAdmin } from '@/pages/admins/dashboard';
import { setOneDataKegiatan } from '@/services/data-kegiatan';
import { Box, Grid, Paper } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

export default function TambahDataKegiatan() {
    const router = useRouter();
    const emptyForm = [
        { judul_kegiatan: '' },
        { des_kegiatan: '' },
        { tempat_kegiatan: '' },
    ];
    const handleTambah = async (form: any) => {
        const formattedForm = formDataFormatter(form);
        const isUser = form.get('id_account') !== null ? true : false;
        const isEmpty = Array.isArray(formattedForm) && formattedForm.length === 0 || JSON.stringify(formattedForm) === JSON.stringify(emptyForm);

        if (isEmpty) {
            toast.error('Tidak ada data yang tambahkan. Mohon masukkan data dengan benar.', {
                theme: 'colored',
            });
        }
        if (!isEmpty) {
            if (formattedForm[0].judul_kegiatan || formattedForm[0].sifat_kegiatan || formattedForm[0].tgl_kegiatan || formattedForm[0].waktu_kegiatan || formattedForm[0].surat_permohonan || formattedForm[0].sik) {
                if (!isUser) {
                    toast.error('Error! User tidak ditemukan', {
                        theme: 'colored',
                    });
                } else {
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
                        router.push('/admins/daftar-kegiatan');
                    }
                }
            } else {
                toast.error('Harap isi semua data.', {
                    theme: 'colored',
                });
            }
        }
    };
    return (
        <Box className='bg-grey'>
            <TitlePage title='Tambah Data Kegiatan - Sinata' />
            <DashboardPanel listMenu={listMenuAdmin}>
                <HeaderBreadcrumbs pageHeader='Tambahkan Data Kegiatan' currentPage='Tambah Data'>
                    <Link href='/admins/daftar-kegiatan' className='text-zinc-900 hover:underline hover:decoration-1 hover:underline-offset-2'>
                        Daftar Kegiatan
                    </Link>
                </HeaderBreadcrumbs>
                <Grid container spacing={2}>
                    <Grid item spacing={1} xs={12} md={8}>
                        <Paper className='shadow-md xs:p-4 md:p-6'>
                            <TambahKegiatanForm onSave={handleTambah} admin={true} />
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
