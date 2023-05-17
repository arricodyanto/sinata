import TitlePage from '@/common/components/atoms/TitlePage'
import DashboardPanel from '@/common/components/organism/DashboardPanel'
import { Box, Paper, Stack } from '@mui/material'
import React from 'react'
import { listMenuAdmin } from './dashboard'
import HeaderBreadcrumbs from '@/common/components/molecules/HeaderBreadcrumbs'
import tb_account from '@/json/tb_account.json'
import AccountProfile from '@/common/components/organism/AccountProfile'

export default function Profile() {
    const data = tb_account.filter((item:any) => {
        return item.role != 'user'
    })
  return (
    <Box className='bg-grey'>
        <TitlePage title='Profil Akun - Sinata' />
        <DashboardPanel listMenu={listMenuAdmin}>
            <HeaderBreadcrumbs pageHeader='Profil Akun Admin' currentPage='Profil Akun' />
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                <Paper className='shadow-md px-6 py-4 md:max-w-[300px] lg:max-w-[350px] h-fit'>
                    <AccountProfile data={data} />
                </Paper>
                {/* <Paper className='shadow-md px-6 py-4 w-full'>
                    <UsersTab />
                </Paper> */}
            </Stack>
        </DashboardPanel>
    </Box>
  )
}
