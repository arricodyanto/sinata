import TitlePage from '@/common/components/atoms/TitlePage';
import HeaderBreadcrumbs from '@/common/components/molecules/HeaderBreadcrumbs';
import DashboardPanel from '@/common/components/organism/DashboardPanel';
import TambahArsipDesain from '@/common/components/organism/FormTambah/TambahArsipDesain';
import TambahArsipPers from '@/common/components/organism/FormTambah/TambahArsipPers';
import { authAdmin, authArsipPers } from '@/common/middlewares/auth';
import { formDataFormatter } from '@/common/utils/formDataFormatter';
import { listMenuAdmin } from '@/pages/admins/dashboard';
import { setOneArsipDesain } from '@/services/arsip-desain';
import { setOneArsipPers } from '@/services/arsip-pers';
import { Box, Grid, Paper } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export default function TambahArsip({ error }: any) {
	const { query, isReady, push, back } = useRouter();
	const { jenis_arsip } = query;

	const originalForm: Array<any> = [];

	useEffect(() => {
		if (error) {
			const toastId = toast.isActive('errorToast');
			if (!toastId) {
				toast.error(
					'Maaf Anda tidak diijinkan untuk melihat halaman ini. Hubungi Front Office atau Super Admin untuk meminta bantuan',
					{
						theme: 'colored',
						toastId: 'errorToast', // Set a custom toastId to identify this toast
					},
				);
			}
			back();
		}
	}, [error]);

	const onSaveDesain = async (form: any) => {
		const formattedForm = formDataFormatter(form);
		const isSame =
			JSON.stringify(formattedForm) === JSON.stringify(originalForm);
		if (isSame) {
			toast.warning('Tidak ada perubahan pada data.', {
				theme: 'colored',
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
					theme: 'colored',
				});
				push('/admins/arsip/desain');
			}
		}
	};

	const originalPersForm = {
		id_peliputan: '',
		no_rilis: '',
		judul_berita: '',
		kategori: 'Berita Terkini',
		jurnalis: '',
		prarilis: '',
		rilis: '',
		tgl_upload: '',
		waktu_upload: '',
		admin: '',
		link_berita: '',
		judul_terjemahan: '',
		penerjemah: '',
		naskah_terj: '',
		tgl_upload_terj: '',
		waktu_upload_terj: '',
		admin_terj: '',
		link_terj: '',
		status_publikasi: 'Pending',
	};
	const onSavePers = async (form: any) => {
		const isSame = JSON.stringify(form) === JSON.stringify(originalPersForm);
		if (isSame) {
			toast.warning('Tidak ada perubahan pada data.', {
				theme: 'colored',
			});
		}
		if (!isSame) {
			const response = await setOneArsipPers(form);
			if (response.error === true) {
				toast.error(response.message, {
					theme: 'colored',
				});
			}
			if (response.error === false) {
				toast.success(response.message, {
					theme: 'colored',
				});
				push('/admins/arsip/pers');
			}
		}
	};
	return (
		<Box className='bg-grey'>
			<TitlePage title={isReady ? `Tambah Data ${jenis_arsip} - Sinata` : ''} />
			<DashboardPanel listMenu={listMenuAdmin}>
				<HeaderBreadcrumbs
					pageHeader={isReady ? `Tambahkan Data ${jenis_arsip}` : ''}
					currentPage='Tambah Data'>
					<Link
						href='/admins/arsip/desain'
						className='text-zinc-900 hover:underline hover:decoration-1 hover:underline-offset-2'>
						Daftar Arsip Desain
					</Link>
				</HeaderBreadcrumbs>
				<Grid
					container
					spacing={2}>
					<Grid
						item
						spacing={1}
						xs={12}
						md={8}>
						<Paper className='shadow-md xs:p-4 md:p-6'>
							{jenis_arsip === 'desain' ? (
								<TambahArsipDesain onSave={onSaveDesain} />
							) : jenis_arsip === 'pers' ? (
								<TambahArsipPers onSave={onSavePers} />
							) : null}
						</Paper>
					</Grid>
					<Grid
						item
						xs={12}
						md={4}>
						<Paper className='shadow-md p-4'>
							<Image
								src='https://dummyimage.com/560x1000/e0e0e0/ffffff.jpg&text=Infografis+guideline+(560x1000)'
								alt='Infografis Panduan'
								layout='responsive'
								width={100}
								height={200}
								className='rounded-md'
							/>
						</Paper>
					</Grid>
				</Grid>
			</DashboardPanel>
		</Box>
	);
}

export async function getServerSideProps({ req, params }: any) {
	const { tkn } = req.cookies;
	const { jenis_arsip } = params;

	if (jenis_arsip === 'pers') {
		return authArsipPers(tkn);
	} else if (jenis_arsip === 'desain') {
		return authAdmin(tkn);
	}

	return authAdmin(tkn);
}
