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
import { dateFormatter, timeFormatter, timeStrictFormatter } from '@/common/utils/dateFormatter.util'
import Link from 'next/link'

export default function DetailAgenda() {
  const { query, isReady } = useRouter()

  const api_image = process.env.NEXT_PUBLIC_API_IMG

  const [agenda, setAgenda] = useState<Array<any>>([])
  const [agendaItem, setAgendaItem] = useState<Array<any>>([])

  const getAgenda = useCallback(async () => {
    const data = await getAgendaList()
    setAgenda(data)
  }, [getAgendaList])

  const getOneAgenda = useCallback(async (id: any) => {
      const data = await getAgendaItem(id)
      setAgendaItem(data)
  }, [])
  
  useEffect(() => {
    if(isReady) {
      getOneAgenda(query.id)
      getAgenda()
    }
  }, [isReady, query.id])

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
                    <Stack direction='row' alignItems='center' spacing={2} className='-mt-5' sx={{ display: { xs: 'none', lg: 'flex' }}}>
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
                          <Typography variant='caption' className='pl-1 text-gray-500'>{timeStrictFormatter(item.tb_kegiatan.waktu_kegiatan)} WIB</Typography>
                        </Stack>
                        <Stack direction='row'>
                          <PlaceIcon fontSize='inherit' sx={{ fontSize: 18 }} color='primary'/>
                          <Typography variant='caption' className='pl-1 text-gray-500'>{item.tb_kegiatan.tempat_kegiatan}</Typography>
                        </Stack>
                    </Stack>
                    <Box sx={{ display: { xs: 'block', lg: 'none' }}}>
                      <Stack direction='row' alignItems='center' spacing={2} className='mt-1'>
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
                              <Typography variant='caption' className='pl-1 text-gray-500'>{timeStrictFormatter(item.tb_kegiatan.waktu_kegiatan)} WIB</Typography>
                          </Stack>
                      </Stack>
                      <Stack direction='row' className='mt-1'>
                          <PlaceIcon fontSize='inherit' sx={{ fontSize: 18 }} color='primary'/>
                          <Typography variant='caption' className='pl-1 text-gray-500'>{item.tb_kegiatan.tempat_kegiatan}</Typography>
                      </Stack>
                    </Box>
                    <Box className='mt-6'>
                      <Link href={`${api_image}/${item.leaflet_kegiatan}`} target='blank'>
                        <Image src={`${api_image}/${item.leaflet_kegiatan}`} alt={`Judul Agenda`} quality={80} layout='responsive' width={20} height={20} className='rounded-lg shadow-lg mb-2' />
                      </Link>
                      <Typography variant='body1' className='my-6'>
                        {item.caption}
                      </Typography>
                      <Divider light className='mb-4 border-gray-200' />
                      <Typography variant='caption'>Diajukan pada tanggal {dateFormatter(item.createdAt)} - {timeFormatter(item.createdAt)} WIB</Typography>
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
