import { Box, Divider, Grid, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import TitlePage from '@/common/components/atoms/TitlePage';
import FlowCard from '@/common/components/molecules/FlowCard';
import HeaderBreadcrumbs from '@/common/components/molecules/HeaderBreadcrumbs';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import BasicDonutChart from '@/common/components/atoms/BasicDonutChart';
import DaisyCarousel from '@/common/components/organism/DaisyCarousel';
import TableRiwayat from '@/common/components/molecules/TableRiwayat';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import rows from '@/json/riwayatAjuan.json';
import DashboardPanel from '@/common/components/organism/DashboardPanel';

export default function Dashboard() {
  const [loginInfo, setLoginInfo] = React.useState('');
  React.useEffect(() => {
    const login = localStorage.getItem("loginInfo");
    if (login) {
      setLoginInfo(JSON.parse(login));
    }
  }, []);
  // console.log(loginInfo)
  const dark = '#1f2937';
  const primary = '#0ea5e9';
  const pending = '#f59e0b';
  const complete = '#22c55e';
  const data = [
    { x: 'Jan', y: 40 },
    { x: 'Feb', y: 30 },
    { x: 'Mar', y: 45 },
    { x: 'Apr', y: 50 },
    { x: 'May', y: 35 },
    { x: 'Jun', y: 55 },
  ];
  const data1 = [
    { x: 'Jan', y: 1 },
    { x: 'Feb', y: 2 },
    { x: 'Mar', y: 1 },
    { x: 'Apr', y: 3 },
    { x: 'May', y: 2 },
    { x: 'Jun', y: 3 },
  ];
  const data2 = [
    { x: 'Jan', y: 71 },
    { x: 'Feb', y: 23 },
    { x: 'Mar', y: 63 },
    { x: 'Apr', y: 51 },
    { x: 'May', y: 27 },
    { x: 'Jun', y: 33 },
  ];
  const donutData = [
    { x: 'Layanan Peliputan', y: 71 },
    { x: 'Layanan Konferensi Pers', y: 0 },
    { x: 'Layanan Pembaruan Informasi Unit di Laman', y: 0 },
    { x: 'Layanan Live Streaming', y: 17 },
    { x: 'Layanan Publikasi di Medsos & Laman UNS', y: 27 },
    { x: 'Layanan Publikasi Majalah di UNS', y: 7 },
    { x: 'Layanan Opini di Media', y: 0 },
    { x: 'Layanan Penayangan Konten di Videotron', y: 17 },
    { x: 'Layanan Pemasangan Baliho', y: 2 },
  ];
  return (
    <>
      <Box className='bg-grey'>
        <TitlePage title='Dashboard User - Sinata' />
        <DashboardPanel listMenu={listMenuUser}>
          <HeaderBreadcrumbs pageHeader='Dashboard' currentPage='Dashboard' />
          <Grid container marginBottom={{ xs: 2, md: 4 }} rowSpacing={2} columnSpacing={4}>
            <Grid item xs={12} md={4}>
              <FlowCard text={dark} lineColor={primary} data={data} headline='Layanan diajukan' icon={<ArrowCircleDownOutlinedIcon fontSize='large' className='text-primary' />} />
            </Grid>
            <Grid item xs={12} md={4}>
              <FlowCard text={dark} lineColor={pending} data={data1} headline='Layanan dalam proses' icon={<PendingOutlinedIcon fontSize='large' className='text-pending' />} />
            </Grid>
            <Grid item xs={12} md={4}>
              <FlowCard text={dark} lineColor={complete} data={data2} headline='Layanan selesai' icon={<CheckCircleOutlinedIcon fontSize='large' className='text-complete' />} />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Paper className='shadow-md px-6 py-4'>
                <Typography variant='subtitle1' color='text.primary' className='font-bold mb-4 leading-5'>Layanan Yang Diajukan</Typography>
                <Stack justifyContent='center' alignItems='center'>
                  <BasicDonutChart data={donutData} />
                </Stack>
              </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper className='shadow-md px-6 py-4'>
                <Typography variant='subtitle1' color='text.primary' className='font-bold mb-4 leading-5'>Riwayat Layanan</Typography>
                <TableRiwayat rows={rows} />
              </Paper>
            </Grid>
          </Grid>
          <Paper className='shadow-md px-6 py-4 mt-3'>
            <Typography variant='subtitle1' color='text.primary' className='font-bold mb-2 leading-5'>Agenda Terkini</Typography>
            <Box className='justify-center flex'>
              <DaisyCarousel />
            </Box>
          </Paper>
        </DashboardPanel>
      </Box>
    </>
  );
}

export const listMenuUser = [
  {
    id: 1,
    subheader: '',
    title: 'Dashboard',
    icon: <HomeOutlinedIcon sx={{ color: '#9ca3af' }} fontSize='small' />,
    link: '/users/dashboard',
    divider: <Divider light className='border-gray-600 mx-5 mb-4' />,
    subItem: [],
  },
  {
    id: 2,
    subheader: 'Layanan',
    title: 'Riwayat',
    icon: <DateRangeOutlinedIcon sx={{ color: '#9ca3af' }} fontSize='small' />,
    link: '',
    divider: null,
    subItem: [
      {
        id: 1,
        subtitle: 'Riwayat Kegiatan',
        link: '/users/riwayat-kegiatan',
      },
      {
        id: 2,
        subtitle: 'Tambah Kegiatan',
        link: '/users/tambah-kegiatan',
      },
    ],
  },
  {
    id: 3,
    subheader: '',
    title: 'Ajukan Layanan',
    icon: <AssignmentOutlinedIcon sx={{ color: '#9ca3af' }} fontSize='small' />,
    link: '',
    divider: <Divider light className='border-gray-600 mx-5 mb-4' />,
    subItem: [
      {
        id: 1,
        subtitle: 'Layanan Hubungan Masyarakat',
        link: '/users/layanan-humas',
      },
      {
        id: 2,
        subtitle: 'Layanan Publikasi',
        link: '/users/layanan-publikasi',
      },
      {
        id: 3,
        subtitle: 'Layanan Media',
        link: '/users/layanan-media',
      }
    ],
  },
  {
    id: 4,
    subheader: 'Akun',
    title: 'Profil Akun',
    icon: <PersonOutlinedIcon sx={{ color: '#9ca3af' }} fontSize='small' />,
    link: '/users/profile',
    divider: null,
    subItem: [],
  },
  {
    id: 5,
    subheader: '',
    title: 'Sign Out',
    icon: <LogoutOutlinedIcon sx={{ color: '#9ca3af' }} fontSize='small' />,
    link: '/sign-in',
    divider: null,
    subItem: [],
  },
];
