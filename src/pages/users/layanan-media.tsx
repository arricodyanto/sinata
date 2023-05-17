import { Box, Grid, Paper, Stack } from '@mui/material'
import React from 'react'
import TitlePage from '../../common/components/atoms/TitlePage'
import HeaderBreadcrumbs from '../../common/components/molecules/HeaderBreadcrumbs'
import Link from 'next/link'
import { TabContext, TabPanel } from '@mui/lab'
import TabsContainer from '../../common/components/atoms/TabsContainer'
import TabItem from '../../common/components/atoms/TabItem'
import Image from 'next/image'
import VideotronForm from '../../common/components/organism/VideotronForm'
import BalihoForm from '../../common/components/organism/BalihoForm'
import DashboardPanel from '@/common/components/organism/DashboardPanel'
import { listMenuUser } from './dashboard'

export default function LayananMedia() {
    const [value, setValue] = React.useState('1')
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    }
  return (
    <Box className='bg-grey'>
        <TitlePage title='Layanan Media - Sinata' />
        <DashboardPanel listMenu={listMenuUser}>
            <HeaderBreadcrumbs pageHeader='Ajukan Layanan Media' currentPage='Layanan Media'>
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
                                    <TabItem label='Layanan Penayangan Konten di Videotron' value='1' />
                                    <TabItem label='Layanan Pemasangan Baliho' value='2' />
                                </TabsContainer>
                            </Box>
                            <Stack className='-mx-6'>
                                <TabPanel value='1'>
                                    <VideotronForm />
                                </TabPanel>
                                <TabPanel value='2'>
                                    <BalihoForm />
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
