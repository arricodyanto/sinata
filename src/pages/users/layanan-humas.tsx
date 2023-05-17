import { TabContext, TabPanel } from '@mui/lab'
import { Box, Grid, Paper, Stack } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import TabItem from '../../common/components/atoms/TabItem'
import TabsContainer from '../../common/components/atoms/TabsContainer'
import TitlePage from '../../common/components/atoms/TitlePage'
import HeaderBreadcrumbs from '../../common/components/molecules/HeaderBreadcrumbs'
import PeliputanForm from '../../common/components/organism/PeliputanForm'
import Image from 'next/image'
import KonpersForm from '../../common/components/organism/KonpersForm'
import PembaruanInfoForm from '../../common/components/organism/PembaruanInfoForm'
import DashboardPanel from '@/common/components/organism/DashboardPanel'
import { listMenuUser } from './dashboard'

export default function LayananHumas() {
    const [value, setValue] = React.useState('1')
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    }
  return (
    <Box className='bg-grey'>
        <TitlePage title='Layanan Hubungan Masyarakat - Sinata' />
        <DashboardPanel listMenu={listMenuUser}>
            <HeaderBreadcrumbs pageHeader='Ajukan Layanan Humas' currentPage='Layanan Humas'>
                <Link href='#' className='text-zinc-900 hover:underline hover:decoration-1 hover:underline-offset-2'>
                    Ajukan Layanan
                </Link>
            </HeaderBreadcrumbs>
            <Grid container spacing={2}>
                <Grid item spacing={1} xs={12} md={8}>
                    <Paper className='shadow-md px-6 py-4'>
                        <TabContext value={value}>
                            <Box className='flex justify-center'>
                                <TabsContainer onChange={handleChange} value={value}>
                                    <TabItem label='Layanan Peliputan' value='1' />
                                    <TabItem label='Layanan Konferensi Pers' value='2' />
                                    <TabItem label='Layanan Pembaruan Informasi Unit di Laman' value='3' />
                                </TabsContainer>
                            </Box>
                            <Stack className='-mx-6'>
                                <TabPanel value='1'>
                                    <PeliputanForm />
                                </TabPanel>
                                <TabPanel value='2'>
                                    <KonpersForm />
                                </TabPanel>
                                <TabPanel value='3'>
                                    <PembaruanInfoForm />
                                </TabPanel>
                            </Stack>
                        </TabContext>
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
  )
}
