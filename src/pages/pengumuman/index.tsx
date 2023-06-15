import ContainerPage from '@/common/components/atoms/ContainerPage'
import PageTitle from '@/common/components/atoms/PageTitle'
import HeaderPages from '@/common/components/molecules/HeaderPages'
import { Box, Grid, Pagination, Stack, Typography } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import Footer from '@/common/components/organism/Footer'
import { dateFormatter, timeFormatter } from '@/common/utils/dateFormatter.util'
import { getPengumumanAll } from '@/services/pengumuman'
import PengumumanContent from '@/common/components/organism/PengumumanContent'

export default function AllPengumuman() {
    const [pengumumans, setPengumumans] = useState<Array<any>>([]);
    const [page, setPage] = useState<number>(1);
    const [totalRow, setTotalRow] = useState<number>(0);
    
    const count = Math.ceil(totalRow / 12);
    
    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    };
    
    const getPengumumans = useCallback(async () => {
      const params = `limit=12&page=${page}`;
      const data = await getPengumumanAll(params);
      setPengumumans(data.data);
      setTotalRow(data.totalRow);
    }, [page, setPengumumans]);
    
    useEffect(() => {
      getPengumumans();
    }, [getPengumumans]);
    
    // Tambahan useEffect untuk memanggil getPengumumans ketika nilai page berubah
    useEffect(() => {
      getPengumumans();
    }, [page]);
  return (
    <>
        { pengumumans ? pengumumans.map(item => {
            return(
                <Box key={item.id} className="bg-white">
                    <HeaderPages titlePage='Semua Pengumuman - Sinata' srcImg="/images/bg-about.jpg" />
                    <ContainerPage className="mb-10">
                        <PageTitle title="Semua Pengumuman" />
                        <Grid container spacing={2} className='my-4 -mx-1'>
                            <PengumumanContent data={pengumumans} />
                        </Grid>
                        <Stack className='mt-6 mb-4 grid justify-center'>
                            <Pagination count={count} color='primary' size='small' onChange={handleChangePage} showFirstButton showLastButton />
                        </Stack>
                    </ContainerPage>
                    <Footer />
                </Box>
            )
        }) : []}
    </>
  )
}
