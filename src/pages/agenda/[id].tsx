import ContainerPage from '@/common/components/atoms/ContainerPage'
import PageTitle from '@/common/components/atoms/PageTitle'
import HeaderPages from '@/common/components/molecules/HeaderPages'
import Footer from '@/common/components/organism/Footer'
import { Box, Divider, Grid, Stack, Typography } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import PlaceIcon from '@mui/icons-material/Place';
import Image from 'next/image'
import SidebarAgenda from '@/common/components/molecules/SidebarAgenda'
import { useRouter } from 'next/router'
import { getAgendaItem, getAgendaList } from '@/services/agenda'
import { dateFormatter, timeFormatter } from '@/common/utils/dateFormatter.util'

export default function DetailAgenda() {
  const router = useRouter()
  const { id } = router.query

  const api_image = process.env.NEXT_PUBLIC_API_IMG

  const [agenda, setAgenda] = useState<Array<any>>([])
  const [agendaItem, setAgendaItem] = useState<Array<any>>([])

  const getAgenda = useCallback(async () => {
    const data = await getAgendaList()
    setAgenda(data)
  }, [getAgendaList])

  const getOneAgenda = useCallback(async () => {
    if (id) {
      const data = await getAgendaItem(id)
      setAgendaItem(data)
    }
  }, [id])
  
  useEffect(() => {
    getAgenda()
    getOneAgenda()
  }, [getAgenda, getOneAgenda])
  return (
    <>
      { agendaItem ? agendaItem.map(item => {
        return (
          <>
            <Box className='bg-white'>
              <HeaderPages titlePage={`${item.tb_kegiatan.judul_kegiatan} - Sinata`} srcImg="/images/bg-events.jpg" />
              <ContainerPage className='mb-10'>
                <Grid container spacing={4} sx={{ marginBottom: 5, minHeight: '30vh' }}>
                  <Grid item xs={12} md={7} lg={8} className='mb-4'>
                    <PageTitle title={item.tb_kegiatan.judul_kegiatan} />
                    <Stack direction='row' alignItems='center' spacing={2} className='-mt-5'>
                        <Stack direction='row'>
                          <PersonIcon fontSize='inherit' sx={{ fontSize: 18 }} color='primary'/>
                          <Typography variant='caption' className='pl-1 text-gray-500'>{item.tb_kegiatan.tb_account.name}</Typography>
                        </Stack>
                        <Stack direction='row'>
                          <EventIcon fontSize='inherit' sx={{ fontSize: 18 }} color='primary'/>
                          <Typography variant='caption' className='pl-1 text-gray-500'>{dateFormatter(item.tb_kegiatan.tgl_kegiatan)}</Typography>
                        </Stack>
                        <Stack direction='row'>
                          <AccessTimeIcon fontSize='inherit' sx={{ fontSize: 18 }} color='primary'/>
                          <Typography variant='caption' className='pl-1 text-gray-500'>{timeFormatter(item.tb_kegiatan.tgl_kegiatan)} WIB</Typography>
                        </Stack>
                        <Stack direction='row'>
                          <PlaceIcon fontSize='inherit' sx={{ fontSize: 18 }} color='primary'/>
                          <Typography variant='caption' className='pl-1 text-gray-500'>{item.tb_kegiatan.tempat_kegiatan}</Typography>
                        </Stack>
                    </Stack>
                    <Box className='mt-6'>
                      <Box className='max-h-[600px] mb-2'>
                        <Image src={`${api_image}/${item.leaflet_kegiatan}`} alt={`Judul Agenda`} layout='responsive' width={200} height={100} className='rounded-lg shadow-lg' />
                      </Box>
                      <Typography variant='body1' className='mb-6'>
                        {item.caption}
                      </Typography>
                      <Divider light className='mb-4 border-gray-200' />
                      <Typography variant='caption'>Diajukan pada tanggal {dateFormatter(item.tb_kegiatan.tgl_kegiatan)} - {timeFormatter(item.tb_kegiatan.tgl_kegiatan)} WIB</Typography>
                    </Box>            
                  </Grid>
                  <Grid item xs={12} md={5} lg={4} className='xs:mt-[2rem] md:mt-[6rem] lg:mt-[7.5rem]'>
                    <Typography variant='h5' className='text-primary font-bold mb-4'>Agenda Lainnya</Typography>
                    <SidebarAgenda data={agenda} />
                  </Grid>
                </Grid>
              </ContainerPage>
              <Footer />
            </Box>
          </>
        )
      }): []}
    </>
  )
}
