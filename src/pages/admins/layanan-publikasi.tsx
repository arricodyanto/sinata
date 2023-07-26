import TabItem from '@/common/components/atoms/TabItem';
import TabsContainer from '@/common/components/atoms/TabsContainer';
import TitlePage from '@/common/components/atoms/TitlePage';
import HeaderBreadcrumbs from '@/common/components/molecules/HeaderBreadcrumbs';
import DashboardPanel from '@/common/components/organism/DashboardPanel';
import TableManajemenLiveStreaming from '@/common/components/organism/TableManajemenLiveStreaming';
import TableManajemenOpini from '@/common/components/organism/TableManajemenOpini';
import TableManajemenPublikasiAgenda from '@/common/components/organism/TableManajemenPublikasiAgenda';
import TableManajemenPublikasiMajalah from '@/common/components/organism/TableManajemenPublikasiMajalah';
import { authAdmin } from '@/common/middlewares/auth';
import { listMenuAdmin } from '@/pages/admins/dashboard';
import { TabContext, TabPanel } from '@mui/lab';
import { Box, Paper, Stack } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export default function LayananPublikasi() {
	const [value, setValue] = React.useState('1');
	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};
	return (
		<Box className='bg-grey'>
			<TitlePage title='Manajemen Layanan Publikasi - Sinata' />
			<DashboardPanel listMenu={listMenuAdmin}>
				<HeaderBreadcrumbs
					pageHeader='Manajemen Layanan Publikasi'
					currentPage='Layanan Humas'>
					<Link
						href=''
						className='text-zinc-900 hover:underline hover:decoration-1 hover:underline-offset-2'>
						Manajemen Layanan
					</Link>
				</HeaderBreadcrumbs>
				<Paper className='shadow-md xs:p-4 md:p-6'>
					<TabContext value={value}>
						<Box className='flex justify-center'>
							<TabsContainer
								onChange={handleChange}
								value={value}>
								<TabItem
									label='Layanan Live Streaming'
									value='1'
								/>
								<TabItem
									label='Layanan Publikasi Agenda di Media UNS'
									value='2'
								/>
								<TabItem
									label='Layanan Publikasi di Majalah UNS'
									value='3'
								/>
								<TabItem
									label='Layanan Opini di Media'
									value='4'
								/>
							</TabsContainer>
						</Box>
						<Stack className='-mx-6'>
							<TabPanel value='1'>
								<TableManajemenLiveStreaming />
							</TabPanel>
							<TabPanel value='2'>
								<TableManajemenPublikasiAgenda />
							</TabPanel>
							<TabPanel value='3'>
								<TableManajemenPublikasiMajalah />
							</TabPanel>
							<TabPanel value='4'>
								<TableManajemenOpini />
							</TabPanel>
						</Stack>
					</TabContext>
				</Paper>
			</DashboardPanel>
		</Box>
	);
}

export async function getServerSideProps({ req }: any) {
	const { tkn } = req.cookies;
	return authAdmin(tkn);
}
