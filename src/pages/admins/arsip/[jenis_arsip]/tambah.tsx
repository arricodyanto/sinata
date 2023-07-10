import TitlePage from '@/common/components/atoms/TitlePage';
import HeaderBreadcrumbs from '@/common/components/molecules/HeaderBreadcrumbs';
import DashboardPanel from '@/common/components/organism/DashboardPanel';
import TambahArsipDesain from '@/common/components/organism/FormTambah/TambahArsipDesain';
import { formDataFormatter } from '@/common/utils/formDataFormatter';
import { listMenuAdmin } from '@/pages/admins/dashboard';
import { setOneArsipDesain } from '@/services/arsip-desain';
import { Box, Grid, Paper } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

export default function TambahArsip() {
    const { query, isReady, push } = useRouter();
    const { jenis_arsip } = query;

    const originalForm: Array<any> = [];

    const onSaveDesain = async (form: any) => {
        const formattedForm = formDataFormatter(form);
        const isSame = JSON.stringify(formattedForm) === JSON.stringify(originalForm);
        if (isSame) {
            toast.warning('Tidak ada perubahan pada data.', {
                theme: 'colored'
            });
        }
        if (!isSame) {
            const response = await setOneArsipDesain(form);
            if (response.error === true) {
                toast.error(response.message, {
                    theme: 'colored',
                });
            }
            if (response.error === false) {
                toast.success(response.message, {
                    theme: 'colored'
                });
                push('/admins/arsip/desain');
            }
        }
    };

    const onSavePers = async (form: any) => {

    };
    return (
        <Box className='bg-grey'>
            <TitlePage title={isReady ? `Tambah Data ${jenis_arsip} - Sinata` : ''} />
            <DashboardPanel listMenu={listMenuAdmin}>
                <HeaderBreadcrumbs pageHeader={isReady ? `Tambahkan Data ${jenis_arsip}` : ''} currentPage='Tambah Data'>
                    <Link href='/admins/arsip/desain' className='text-zinc-900 hover:underline hover:decoration-1 hover:underline-offset-2'>
                        Daftar Arsip Desain
                    </Link>
                </HeaderBreadcrumbs>
                <Grid container spacing={2}>
                    <Grid item spacing={1} xs={12} md={8}>
                        <Paper className='shadow-md xs:p-4 md:p-6'>
                            {jenis_arsip === 'desain' ? (
                                <TambahArsipDesain onSave={onSaveDesain} />
                            ) : null}
                            {/* <TambahKegiatanForm onSave={handleTambah} admin={true} /> */}
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
