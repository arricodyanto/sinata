import ContainerPage from '@/common/components/atoms/ContainerPage';
import PageTitle from '@/common/components/atoms/PageTitle';
import HeaderPages from '@/common/components/molecules/HeaderPages';
import Footer from '@/common/components/organism/Footer';
import { Box, Grid, Stack, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getPengumumanItem, getPengumumanList } from '@/services/pengumuman';
import { TPengumuman } from '@/services/data-types/pengumumanItem';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import { dateFormatter, timeFormatter } from '@/common/utils/dateFormatter.util';
import SidebarPengumuman from '@/common/components/molecules/SidebarPengumuman';

export default function PengumumanView() {
  const { query, isReady } = useRouter()

  const [pengumuman, setPengumuman] = useState<TPengumuman | null>(null)
  const [pengumumanList, setPengumumanList] = useState<Array<any>>([])

  const getPengumuman = useCallback(async (id: any) => {
    const data = await getPengumumanItem(id);
    setPengumuman(data);    
  }, [])

  const getPengumumans = useCallback(async () => {
    const data = await getPengumumanList()
    setPengumumanList(data)
  }, [])

  useEffect(() => {
    if(isReady) {
      getPengumuman(query.id)
      getPengumumans()
    }
  }, [isReady, query.id]);

  if (!pengumuman) {
    return null; // Tampilkan loading atau komponen lain saat data masih diambil
  }

  return (
    <Box key={pengumuman.id} className="bg-white">
      <HeaderPages titlePage={`${pengumuman.judul_pengumuman} - Sinata`} srcImg="/images/bg-about.jpg" />
      <ContainerPage className="mb-10">
        <Grid container spacing={4} sx={{ marginBottom: 5, minHeight: '30vh' }}>
          <Grid item xs={12} md={7} lg={8} className='mb-4'>
            <PageTitle title={`${pengumuman.judul_pengumuman}`} />
            <Stack direction='row' alignItems='center' spacing={2} className='-mt-5 mb-6'>
                <Stack direction='row'>
                    <PersonIcon fontSize='inherit' sx={{ fontSize: 18 }} color='primary'/>
                    <Typography variant='caption' className='pl-1 text-gray-500'>Admin</Typography>
                </Stack>
                <Stack direction='row'>
                    <EventIcon fontSize='inherit' sx={{ fontSize: 18 }} color='primary'/>
                    <Typography variant='caption' className='pl-1 text-gray-500'>{dateFormatter(pengumuman.tgl_upload)}</Typography>
                </Stack>
                <Stack direction='row'>
                    <AccessTimeIcon fontSize='inherit' sx={{ fontSize: 18 }} color='primary'/>
                    <Typography variant='caption' className='pl-1 text-gray-500'>{timeFormatter(pengumuman.tgl_upload)} WIB</Typography>
                </Stack>
            </Stack>
            <Typography variant='body1'>
              {pengumuman.content}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} lg={4} className='xs:mt-[2rem] md:mt-[6rem] lg:mt-[7.5rem]'>
            <Typography variant='h5' className='text-primary font-bold mb-4'>Pengumuman Lainnya</Typography>
            <SidebarPengumuman data={pengumumanList} />
          </Grid>
        </Grid>
      </ContainerPage>
      <Footer />
    </Box>
  );
}
