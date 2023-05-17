import TitlePage from '@/common/components/atoms/TitlePage'
import DashboardPanel from '@/common/components/organism/DashboardPanel'
import { Box, Grid, IconButton, Pagination, Paper, Stack, TablePagination } from '@mui/material'
import React from 'react'
import { listMenuAdmin } from '@/pages/admins/dashboard'
import HeaderBreadcrumbs from '@/common/components/molecules/HeaderBreadcrumbs'
import Link from 'next/link'
import ButtonBasic from '@/common/components/atoms/ButtonBasic'
import EventCardV2 from '@/common/components/molecules/EventCardV2'
import eventData from '@/json/events.json'
import TextfieldTableSearch from '@/common/components/atoms/TextfieldTableSearch'
import CloseIcon from '@mui/icons-material/Close'

export default function DaftarAgenda() {
    const [min, setMin] = React.useState(0)
    const [max, setMax] = React.useState(11)
    const [data, setData] = React.useState<Array<any>>([])
    const count = Math.ceil(data.length / 12)
    
    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        if (value >= 2) {
            setMin((value - 1) * 12)
            setMax(((value - 1)*12)+11)
        } else if ( value == 1) {
            setMin(0)
            setMax(11)
        }
      }
    
    React.useEffect(() => {
        fetch('https://644827f77bb84f5a3e53de81.mockapi.io/api/v1/tb_laypubagenda')
        .then(response => response.json())
        .then(data => setData(data))
    }, [])

    // Get value from textfield table search
    const [search, setSearch] = React.useState<string>('')
    const handleSearch = (value: string) => {
        setSearch(value)
    }
  return (
    <Box className='bg-grey'>
        <TitlePage title='Daftar Agenda Terpublikasi - Sinata' />
        <DashboardPanel listMenu={listMenuAdmin}>
            <HeaderBreadcrumbs pageHeader='Daftar Agenda Terpublikasi' currentPage='Daftar Agenda'>
                <Link href='' className='text-zinc-900 hover:underline hover:decoration-1 hover:underline-offset-2'>
                    Manajemen Kegiatan
                </Link>
            </HeaderBreadcrumbs>
            <Paper className='shadow-md px-6 py-4'>
                <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={1} marginTop={1} marginBottom={2}>
                    <TextfieldTableSearch placeholder='Search...' getValue={handleSearch} />
                    <ButtonBasic variant='contained'>Export</ButtonBasic>
                </Stack>
                <Grid container spacing={2}>
                    { data.filter((item) => {
                        let match = false;
                        for (const key in item) {
                            if (item[key].toString().toLowerCase().includes(search.toLowerCase())) {
                                match = true;
                                break;
                            }
                        }
                        return match;
                    })
                    .slice(0).reverse().filter((item, index) => index >= min && index <= max).map(item => {
                        return (
                            <>
                                <Grid item key={item.id} xs={12} md={3}>
                                    <EventCardV2 image={item.leaflet_kegiatan} visibility={item.sifat_kegiatan} publisher={item.name} avatar={item.img_profil} title={item.judul_kegiatan}
                                     description={item.des_kegiatan} date={item.tgl_kegiatan} time={item.waktu_kegiatan} location={item.tempat_kegiatan} />
                                </Grid>
                            </>
                        )
                    })}
                </Grid>
                <Stack className='mt-6 mb-4 grid justify-center'>
                    <Pagination count={count} color='primary' size='small' onChange={handleChangePage} showFirstButton showLastButton />
                </Stack>
            </Paper>
        </DashboardPanel>
    </Box>
  )
}
